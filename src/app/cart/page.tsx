'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/woocommerce';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const shippingThreshold = 69;
  const freeShipping = cart.total >= shippingThreshold;
  const shippingCost = freeShipping ? 0 : 5.90;
  const amountForFreeShipping = shippingThreshold - cart.total;

  const handlePromoCode = () => {
    // Placeholder for promo code logic
    if (promoCode.toUpperCase() === 'BIENVENUE10') {
      setPromoApplied(true);
    }
  };

  const discount = promoApplied ? cart.total * 0.1 : 0;
  const finalTotal = cart.total - discount + shippingCost;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--yelira-cream)]">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h1 className="font-serif text-3xl mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8">
            Découvrez nos collections et trouvez la pièce parfaite
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-[var(--yelira-black)] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[var(--yelira-taupe)] transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--yelira-cream)]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500 tracking-wider uppercase">
            <Link href="/" className="hover:text-[var(--yelira-taupe)] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--yelira-black)]">Panier</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Votre Panier
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {cart.itemCount} article{cart.itemCount > 1 ? 's' : ''}
        </p>

        {/* Free Shipping Progress */}
        {!freeShipping && (
          <div className="bg-white p-4 mb-8 text-center">
            <p className="text-sm mb-2">
              Plus que{' '}
              <span className="font-semibold text-[var(--yelira-taupe)]">
                {formatPrice(amountForFreeShipping)}
              </span>{' '}
              pour bénéficier de la livraison gratuite !
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[var(--yelira-taupe)] h-full transition-all duration-500"
                style={{ width: `${Math.min((cart.total / shippingThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-xs font-semibold uppercase tracking-wider text-gray-500">
                <div className="col-span-6">Produit</div>
                <div className="col-span-2 text-center">Prix</div>
                <div className="col-span-2 text-center">Quantité</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Items */}
              {cart.items.map((item) => {
                const price = item.variation
                  ? parseFloat(item.variation.price)
                  : parseFloat(item.product.price);
                const itemTotal = price * item.quantity;
                const rawImage = item.variation?.image || item.product.images?.[0];
                const imageSrc = rawImage?.src?.replace(/^http:\/\//, 'https://') || null;

                return (
                  <div
                    key={`${item.id}-${item.variation?.id || 'simple'}`}
                    className="grid grid-cols-12 gap-4 p-4 border-b items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-12 md:col-span-6 flex gap-4">
                      <Link
                        href={`/product/${item.product.slug}`}
                        style={{ position: 'relative', width: '80px', height: '96px', flexShrink: 0, backgroundColor: '#f3f4f6', overflow: 'hidden', display: 'block' }}
                      >
                        {imageSrc ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={imageSrc}
                            alt={rawImage?.alt || item.product.name}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d1d5db' }}>
                            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </span>
                        )}
                      </Link>
                      <div className="flex flex-col justify-center">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-medium hover:text-[var(--yelira-taupe)] transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        {item.variation && item.variation.attributes && (
                          <p className="text-sm text-gray-500 mt-1">
                            {item.variation.attributes
                              .map((attr) => `${attr.name}: ${attr.option}`)
                              .join(' / ')}
                          </p>
                        )}
                        <button
                          onClick={() => removeFromCart(item.id, item.variation?.id)}
                          className="text-xs text-gray-400 hover:text-[var(--yelira-red)] mt-2 text-left transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-center">
                      <span className="md:hidden text-xs text-gray-500 block mb-1">Prix</span>
                      {formatPrice(price)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex justify-center">
                      <span className="md:hidden text-xs text-gray-500 block mb-1 w-full text-center">
                        Quantité
                      </span>
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1, item.variation?.id)
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1, item.variation?.id)
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-4 md:col-span-2 text-right font-medium">
                      <span className="md:hidden text-xs text-gray-500 block mb-1">Total</span>
                      {formatPrice(itemTotal)}
                    </div>
                  </div>
                );
              })}

              {/* Clear Cart */}
              <div className="p-4 flex justify-between items-center">
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 hover:text-[var(--yelira-taupe)] flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Continuer mes achats
                </Link>
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-400 hover:text-[var(--yelira-red)] transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-24">
              <h2 className="font-serif text-xl mb-6">Récapitulatif</h2>

              {/* Promo Code */}
              <div className="mb-6 pb-6 border-b">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Code promo
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Entrez votre code"
                    className="flex-1 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[var(--yelira-taupe)]"
                    disabled={promoApplied}
                  />
                  <button
                    onClick={handlePromoCode}
                    disabled={promoApplied || !promoCode}
                    className="px-4 py-2 bg-gray-100 text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {promoApplied ? '✓' : 'Appliquer'}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-green-600 mt-2">
                    Code BIENVENUE10 appliqué (-10%)
                  </p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Réduction (-10%)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className={freeShipping ? 'text-green-600' : ''}>
                    {freeShipping ? 'Gratuite' : formatPrice(shippingCost)}
                  </span>
                </div>
              </div>

              {/* Final Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-serif text-2xl">{formatPrice(finalTotal)}</span>
              </div>

              {/* Checkout Button */}
              <a
                href="https://wp.yelira.fr/checkout/"
                className="block w-full py-4 bg-[var(--yelira-black)] text-white text-center text-sm font-semibold uppercase tracking-wider hover:bg-[var(--yelira-taupe)] transition-colors"
              >
                Passer la commande
              </a>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    className="w-5 h-5 text-[var(--yelira-taupe)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-xs text-gray-600">Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    className="w-5 h-5 text-[var(--yelira-taupe)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                  <span className="text-xs text-gray-600">Retours gratuits sous 14 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--yelira-taupe)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <span className="text-xs text-gray-600">Livraison express 24-48h</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-gray-500 text-center mb-3">Moyens de paiement acceptés</p>
                <div className="flex justify-center gap-2">
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-400">
                    VISA
                  </div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-400">
                    MC
                  </div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-400">
                    PP
                  </div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-400">
                    CB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
