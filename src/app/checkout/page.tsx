import { Metadata } from 'next';
import Link from 'next/link';
import CheckoutForm from '@/components/checkout/CheckoutForm';

export const metadata: Metadata = {
  title: 'Paiement | Yelira',
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4">
          <nav className="text-[12px] text-gray-500 tracking-wider uppercase">
            <Link href="/" className="hover:text-[var(--yelira-black)] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cart" className="hover:text-[var(--yelira-black)] transition-colors">
              Panier
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--yelira-black)]">Paiement</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.03em] mb-8 md:mb-12">
          Paiement
        </h1>
        <CheckoutForm />
      </div>
    </div>
  );
}
