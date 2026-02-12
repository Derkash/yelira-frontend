'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/woocommerce';

const FREE_SHIPPING_THRESHOLD = 69;
const SHIPPING_COST = 5.90;

interface OrderSummaryProps {
  couponDiscount?: { type: 'percent' | 'fixed_cart'; amount: number } | null;
}

export default function OrderSummary({ couponDiscount }: OrderSummaryProps) {
  const { cart } = useCart();

  const subtotal = cart.total;
  const discount = couponDiscount
    ? couponDiscount.type === 'percent'
      ? subtotal * (couponDiscount.amount / 100)
      : couponDiscount.amount
    : 0;
  const afterDiscount = subtotal - discount;
  const shipping = afterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = afterDiscount + shipping;

  return (
    <div className="bg-[#faf8f5] p-6">
      <h2 className="font-serif text-lg mb-6">Récapitulatif</h2>

      {/* Items */}
      <div className="space-y-4 mb-6">
        {cart.items.map((item) => {
          const imgSrc = item.product.images?.[0]?.src?.replace('http://', 'https://');
          const price = item.variation ? parseFloat(item.variation.price) : parseFloat(item.product.price);
          return (
            <div key={`${item.id}-${item.variation?.id || 0}`} className="flex gap-3">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white overflow-hidden">
                {imgSrc ? (
                  <Image src={imgSrc} alt={item.product.name} fill className="object-cover" sizes="56px" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
                <span className="absolute -top-1 -right-1 bg-[var(--yelira-black)] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium truncate">{item.product.name}</p>
                {item.selectedAttributes && Object.entries(item.selectedAttributes).map(([key, val]) => (
                  <p key={key} className="text-[11px] text-gray-500">{key}: {val}</p>
                ))}
              </div>
              <p className="text-[13px] font-medium flex-shrink-0">{formatPrice(price * item.quantity)}</p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-[13px]">
          <span className="text-gray-600">Sous-total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-[13px] text-green-600">
            <span>Réduction</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex justify-between text-[13px]">
          <span className="text-gray-600">Livraison</span>
          <span>{shipping === 0 ? 'Gratuite' : formatPrice(shipping)}</span>
        </div>

        {shipping > 0 && afterDiscount < FREE_SHIPPING_THRESHOLD && (
          <p className="text-[11px] text-gray-400">
            Plus que {formatPrice(FREE_SHIPPING_THRESHOLD - afterDiscount)} pour la livraison gratuite
          </p>
        )}
      </div>

      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between font-semibold text-[15px]">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
        {[
          { icon: '🔒', text: 'Paiement 100% sécurisé' },
          { icon: '🚚', text: 'Expédition sous 24-48h' },
          { icon: '↩️', text: 'Retours gratuits sous 14 jours' },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 text-[12px] text-gray-500">
            <span>{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
