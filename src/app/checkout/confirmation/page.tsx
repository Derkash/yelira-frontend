'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/woocommerce';
import { trackPurchase } from '@/lib/analytics';
import type { Order } from '@/types/checkout';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const { clearCart } = useCart();

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartCleared, setCartCleared] = useState(false);

  useEffect(() => {
    if (!orderId) {
      setError('Commande introuvable');
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const resp = await fetch('/api/checkout/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ order_id: parseInt(orderId, 10) }),
        });

        if (!resp.ok) throw new Error('Impossible de récupérer la commande');

        const data = await resp.json();
        setOrder(data);

        // Clear cart and track purchase once
        if (!cartCleared) {
          clearCart();
          trackPurchase(data);
          setCartCleared(true);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--yelira-taupe)] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-2xl mb-4">Oups !</h1>
        <p className="text-gray-600 mb-6">{error || 'Commande introuvable'}</p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-[var(--yelira-black)] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-[var(--yelira-taupe)] transition-colors"
        >
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Success icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.03em] mb-2">
            Commande confirmée
          </h1>
          <p className="text-gray-600 text-[15px]">
            Merci pour votre commande ! Un email de confirmation a été envoyé à{' '}
            <strong>{order.billing.email}</strong>
          </p>
        </div>

        {/* Order info */}
        <div className="bg-[#faf8f5] p-6 md:p-8 mb-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-1">N° commande</p>
              <p className="font-semibold">#{order.number}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-1">Total</p>
              <p className="font-semibold">{formatPrice(order.total)}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-1">Statut</p>
              <p className="text-green-600 font-medium text-[14px]">
                {order.status === 'processing' ? 'En préparation' : order.status === 'completed' ? 'Terminée' : order.status}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-1">Date</p>
              <p className="text-[14px]">{new Date(order.date_created).toLocaleDateString('fr-FR')}</p>
            </div>
          </div>

          {/* Items */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 mb-4">Articles</h3>
            <div className="space-y-3">
              {order.line_items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  {item.image?.src && (
                    <div className="relative w-12 h-12 flex-shrink-0 bg-white overflow-hidden">
                      <Image
                        src={item.image.src.replace('http://', 'https://')}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium truncate">{item.name}</p>
                    <p className="text-[12px] text-gray-500">Quantité : {item.quantity}</p>
                  </div>
                  <p className="text-[13px] font-medium">{formatPrice(item.total)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping address */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 mb-2">Adresse de livraison</h3>
            <p className="text-[14px] text-gray-700">
              {order.shipping.first_name} {order.shipping.last_name}<br />
              {order.shipping.address_1}<br />
              {order.shipping.postcode} {order.shipping.city}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-block px-10 py-3.5 bg-[var(--yelira-black)] text-white text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-[var(--yelira-taupe)] transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--yelira-taupe)] border-t-transparent rounded-full" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
