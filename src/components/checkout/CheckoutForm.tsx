'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/woocommerce';
import { trackBeginCheckout } from '@/lib/analytics';
import OrderSummary from './OrderSummary';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  { stripeAccount: process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID! }
);

const FREE_SHIPPING_THRESHOLD = 69;
const SHIPPING_COST = 5.9;

interface AddressFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2: string;
  city: string;
  postcode: string;
  country: string;
}

const emptyAddress: AddressFields = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address_1: '',
  address_2: '',
  city: '',
  postcode: '',
  country: 'FR',
};

function InputField({
  label,
  value,
  onChange,
  type = 'text',
  required = true,
  placeholder = '',
  autoComplete = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-medium uppercase tracking-wider text-gray-500 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-[var(--yelira-taupe)] transition-colors"
      />
    </div>
  );
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '14px',
      color: '#1a1a1a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      '::placeholder': { color: '#9ca3af' },
    },
    invalid: { color: '#ef4444' },
  },
  hidePostalCode: true,
};

// ─────────────────────────────────────────────────
// Wrapper: loads Stripe Elements then renders the form
// ─────────────────────────────────────────────────
export default function CheckoutForm() {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        locale: 'fr',
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#997a6e',
            colorBackground: '#ffffff',
            colorText: '#1a1a1a',
            borderRadius: '0px',
          },
        },
      }}
    >
      <CheckoutFormInner />
    </Elements>
  );
}

// ─────────────────────────────────────────────────
// Inner form: has access to Stripe hooks
// ─────────────────────────────────────────────────
function CheckoutFormInner() {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  const router = useRouter();

  const [billing, setBilling] = useState<AddressFields>({ ...emptyAddress });
  const [shipping, setShipping] = useState<AddressFields>({ ...emptyAddress });
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState<{
    type: 'percent' | 'fixed_cart';
    amount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);
  const [note, setNote] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const checkoutTracked = useRef(false);

  // Track begin_checkout once when checkout page loads with items
  useEffect(() => {
    if (cart.items.length > 0 && !checkoutTracked.current) {
      trackBeginCheckout(cart.items, cart.total);
      checkoutTracked.current = true;
    }
  }, [cart.items, cart.total]);

  // Redirect to cart if empty
  if (cart.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="font-serif text-xl mb-4">Votre panier est vide</h2>
        <Link
          href="/shop"
          className="inline-block px-8 py-3 bg-[var(--yelira-black)] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-[var(--yelira-taupe)] transition-colors"
        >
          Continuer mes achats
        </Link>
      </div>
    );
  }

  const subtotal = cart.total;
  const discount = couponDiscount
    ? couponDiscount.type === 'percent'
      ? subtotal * (couponDiscount.amount / 100)
      : couponDiscount.amount
    : 0;
  const afterDiscount = subtotal - discount;
  const shippingCost =
    afterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = afterDiscount + shippingCost;

  const handleCouponValidate = async () => {
    if (!couponCode.trim()) return;
    setCouponLoading(true);
    setCouponError('');
    try {
      const resp = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: couponCode.trim() }),
      });
      const data = await resp.json();
      if (data.valid) {
        setCouponDiscount({
          type: data.discount_type as 'percent' | 'fixed_cart',
          amount: parseFloat(data.amount),
        });
        setCouponError('');
      } else {
        setCouponDiscount(null);
        setCouponError(data.error || 'Code invalide');
      }
    } catch {
      setCouponError('Erreur de vérification');
    } finally {
      setCouponLoading(false);
    }
  };

  const validateAddressFields = (): string | null => {
    const s = shipping;
    if (!s.first_name.trim()) return 'Le prénom est requis';
    if (!s.last_name.trim()) return 'Le nom est requis';
    if (!billing.email.trim() || !/\S+@\S+\.\S+/.test(billing.email))
      return 'Email invalide';
    if (!billing.phone.trim()) return 'Le téléphone est requis';
    if (!s.address_1.trim()) return "L'adresse est requise";
    if (!s.city.trim()) return 'La ville est requise';
    if (!s.postcode.trim()) return 'Le code postal est requis';
    if (s.country === 'FR' && !/^\d{5}$/.test(s.postcode.trim()))
      return 'Code postal invalide (5 chiffres)';
    if (!sameAsShipping) {
      const b = billing;
      if (
        !b.first_name.trim() ||
        !b.last_name.trim() ||
        !b.address_1.trim() ||
        !b.city.trim() ||
        !b.postcode.trim()
      ) {
        return 'Adresse de facturation incomplète';
      }
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!stripe || !elements) {
      setError('Stripe non initialisé. Veuillez recharger la page.');
      return;
    }

    const validationError = validateAddressFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Create a real Stripe PaymentMethod from the card input
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Élément de carte non trouvé');
      }

      const actualBilling = sameAsShipping
        ? { ...shipping, email: billing.email, phone: billing.phone }
        : { ...billing };

      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: {
            name: `${actualBilling.first_name} ${actualBilling.last_name}`,
            email: actualBilling.email,
            phone: actualBilling.phone,
            address: {
              line1: actualBilling.address_1,
              line2: actualBilling.address_2 || undefined,
              city: actualBilling.city,
              postal_code: actualBilling.postcode,
              country: actualBilling.country,
            },
          },
        });

      if (stripeError || !paymentMethod) {
        throw new Error(
          stripeError?.message || 'Impossible de créer le moyen de paiement'
        );
      }

      // 2. Send the real pm_xxx to our checkout API
      const resp = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.items.map((item) => ({
            product_id: item.product.id,
            variation_id: item.variation?.id,
            quantity: item.quantity,
          })),
          billing: actualBilling,
          shipping: {
            first_name: shipping.first_name,
            last_name: shipping.last_name,
            address_1: shipping.address_1,
            address_2: shipping.address_2,
            city: shipping.city,
            postcode: shipping.postcode,
            country: shipping.country,
          },
          payment_method_id: paymentMethod.id,
          coupon_code: couponDiscount ? couponCode : undefined,
          customer_note: note || undefined,
        }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data.error || 'Erreur lors du paiement');
      }

      // 3. Handle the response
      const paymentStatus = data.payment_status;
      const redirectUrl = data.redirect_url;

      if (paymentStatus === 'success' || data.status === 'processing') {
        // Payment succeeded — go to confirmation
        router.push(`/checkout/confirmation?order_id=${data.order_id}`);
      } else if (redirectUrl) {
        // 3D Secure or other redirect needed
        // The redirect URL from WooPayments will handle Stripe confirmation
        window.location.href = redirectUrl;
      } else {
        // Fallback — go to confirmation and check there
        router.push(`/checkout/confirmation?order_id=${data.order_id}`);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left: Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
        {/* Contact info */}
        <section>
          <h2 className="font-serif text-lg mb-4">Coordonnées</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <InputField
                label="Email"
                value={billing.email}
                onChange={(v) => setBilling({ ...billing, email: v })}
                type="email"
                autoComplete="email"
                placeholder="votre@email.com"
              />
            </div>
            <InputField
              label="Téléphone"
              value={billing.phone}
              onChange={(v) => setBilling({ ...billing, phone: v })}
              type="tel"
              autoComplete="tel"
              placeholder="06 00 00 00 00"
            />
          </div>
        </section>

        {/* Shipping address */}
        <section>
          <h2 className="font-serif text-lg mb-4">Adresse de livraison</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Prénom"
              value={shipping.first_name}
              onChange={(v) => setShipping({ ...shipping, first_name: v })}
              autoComplete="given-name"
            />
            <InputField
              label="Nom"
              value={shipping.last_name}
              onChange={(v) => setShipping({ ...shipping, last_name: v })}
              autoComplete="family-name"
            />
            <div className="sm:col-span-2">
              <InputField
                label="Adresse"
                value={shipping.address_1}
                onChange={(v) => setShipping({ ...shipping, address_1: v })}
                autoComplete="address-line1"
              />
            </div>
            <div className="sm:col-span-2">
              <InputField
                label="Complément"
                value={shipping.address_2}
                onChange={(v) => setShipping({ ...shipping, address_2: v })}
                required={false}
                autoComplete="address-line2"
                placeholder="Appartement, étage, etc."
              />
            </div>
            <InputField
              label="Code postal"
              value={shipping.postcode}
              onChange={(v) => setShipping({ ...shipping, postcode: v })}
              autoComplete="postal-code"
            />
            <InputField
              label="Ville"
              value={shipping.city}
              onChange={(v) => setShipping({ ...shipping, city: v })}
              autoComplete="address-level2"
            />
            <div>
              <label className="block text-[12px] font-medium uppercase tracking-wider text-gray-500 mb-1.5">
                Pays <span className="text-red-400">*</span>
              </label>
              <select
                value={shipping.country}
                onChange={(e) =>
                  setShipping({ ...shipping, country: e.target.value })
                }
                className="w-full border border-gray-200 px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[var(--yelira-taupe)]"
              >
                <option value="FR">France</option>
                <option value="BE">Belgique</option>
                <option value="CH">Suisse</option>
                <option value="LU">Luxembourg</option>
                <option value="DE">Allemagne</option>
                <option value="ES">Espagne</option>
                <option value="IT">Italie</option>
                <option value="NL">Pays-Bas</option>
                <option value="PT">Portugal</option>
                <option value="GB">Royaume-Uni</option>
              </select>
            </div>
          </div>
        </section>

        {/* Billing address */}
        <section>
          <h2 className="font-serif text-lg mb-4">Adresse de facturation</h2>
          <label className="flex items-center gap-3 cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
              className="w-4 h-4 text-[var(--yelira-taupe)] border-gray-300 rounded"
            />
            <span className="text-[14px] text-gray-700">
              Identique à l&apos;adresse de livraison
            </span>
          </label>

          {!sameAsShipping && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Prénom"
                value={billing.first_name}
                onChange={(v) => setBilling({ ...billing, first_name: v })}
              />
              <InputField
                label="Nom"
                value={billing.last_name}
                onChange={(v) => setBilling({ ...billing, last_name: v })}
              />
              <div className="sm:col-span-2">
                <InputField
                  label="Adresse"
                  value={billing.address_1}
                  onChange={(v) => setBilling({ ...billing, address_1: v })}
                />
              </div>
              <InputField
                label="Code postal"
                value={billing.postcode}
                onChange={(v) => setBilling({ ...billing, postcode: v })}
              />
              <InputField
                label="Ville"
                value={billing.city}
                onChange={(v) => setBilling({ ...billing, city: v })}
              />
              <div>
                <label className="block text-[12px] font-medium uppercase tracking-wider text-gray-500 mb-1.5">
                  Pays <span className="text-red-400">*</span>
                </label>
                <select
                  value={billing.country}
                  onChange={(e) =>
                    setBilling({ ...billing, country: e.target.value })
                  }
                  className="w-full border border-gray-200 px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[var(--yelira-taupe)]"
                >
                  <option value="FR">France</option>
                  <option value="BE">Belgique</option>
                  <option value="CH">Suisse</option>
                  <option value="LU">Luxembourg</option>
                </select>
              </div>
            </div>
          )}
        </section>

        {/* Payment — Stripe Card Element */}
        <section>
          <h2 className="font-serif text-lg mb-4">Paiement</h2>
          <div className="border border-gray-200 px-3 py-3.5 bg-white">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </div>
          <p className="text-[11px] text-gray-400 mt-2 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Paiement sécurisé par Stripe
          </p>
        </section>

        {/* Coupon code */}
        <section>
          <h2 className="font-serif text-lg mb-4">Code promo</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Entrez votre code"
              className="flex-1 border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-[var(--yelira-taupe)]"
            />
            <button
              type="button"
              onClick={handleCouponValidate}
              disabled={couponLoading || !couponCode.trim()}
              className="px-6 py-2.5 bg-[var(--yelira-black)] text-white text-[12px] uppercase tracking-wider hover:bg-[var(--yelira-taupe)] transition-colors disabled:opacity-50"
            >
              {couponLoading ? '...' : 'Appliquer'}
            </button>
          </div>
          {couponError && (
            <p className="text-[12px] text-red-500 mt-2">{couponError}</p>
          )}
          {couponDiscount && (
            <p className="text-[12px] text-green-600 mt-2">
              Code appliqué : -
              {couponDiscount.type === 'percent'
                ? `${couponDiscount.amount}%`
                : formatPrice(couponDiscount.amount)}
            </p>
          )}
        </section>

        {/* Note */}
        <section>
          <h2 className="font-serif text-lg mb-4">Note de commande</h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Instructions spéciales pour la livraison (optionnel)"
            className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-[var(--yelira-taupe)] resize-none"
          />
        </section>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 px-4 py-3 text-[13px] text-red-700">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isProcessing || !stripe}
          className="w-full py-4 bg-[var(--yelira-black)] text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[var(--yelira-taupe)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              Traitement en cours...
            </span>
          ) : (
            `Payer ${formatPrice(total)}`
          )}
        </button>
      </form>

      {/* Right: Summary */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24">
          <OrderSummary couponDiscount={couponDiscount} />
        </div>
      </div>
    </div>
  );
}
