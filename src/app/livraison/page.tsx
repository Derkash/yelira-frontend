import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Livraison - Délais et Tarifs',
  description:
    'Informations sur la livraison Yelira : livraison gratuite dès 69€, expédition en 24-48h en point relais. France métropolitaine et Belgique.',
  alternates: { canonical: 'https://www.yelira.fr/livraison' },
};

export default function LivraisonPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-[11px] text-gray-500 tracking-[0.1em] uppercase">
            <Link href="/" className="hover:text-[#997a6e] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Livraison</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Livraison
          </h1>
          <p className="text-[14px] text-gray-600">
            Toutes les informations sur nos modes et délais de livraison
          </p>
        </div>

        <div className="space-y-8">
          {/* Livraison gratuite */}
          <section className="bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f5f1eb] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#997a6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-[20px] mb-3">Livraison gratuite dès 69€</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Profitez de la livraison gratuite pour toute commande d&apos;un montant
                  supérieur ou égal à 69€ en France métropolitaine et en Belgique.
                  En dessous de ce montant, les frais de livraison s&apos;élèvent à 5,90€.
                </p>
              </div>
            </div>
          </section>

          {/* Modes de livraison */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-6">Modes de livraison</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-[14px] font-semibold mb-2">Point Relais (Mondial Relay)</h3>
                <div className="text-[14px] text-gray-600 space-y-1">
                  <p>Délai : 3 à 5 jours ouvrés</p>
                  <p>Tarif : 5,90€ (gratuit dès 69€)</p>
                  <p>Retrait dans le point relais de votre choix, proche de chez vous.</p>
                </div>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-[14px] font-semibold mb-2">Livraison à domicile (Colissimo)</h3>
                <div className="text-[14px] text-gray-600 space-y-1">
                  <p>Délai : 2 à 4 jours ouvrés</p>
                  <p>Tarif : 7,90€ (gratuit dès 99€)</p>
                  <p>Livraison directement chez vous avec suivi.</p>
                </div>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold mb-2">Livraison Belgique</h3>
                <div className="text-[14px] text-gray-600 space-y-1">
                  <p>Délai : 4 à 7 jours ouvrés</p>
                  <p>Tarif : 8,90€ (gratuit dès 99€)</p>
                  <p>Livraison en point relais ou à domicile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Suivi */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Suivi de commande</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Un email de confirmation vous est envoyé dès la validation de votre commande.
              Un second email contenant votre numéro de suivi vous sera envoyé dès
              l&apos;expédition de votre colis.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Vous pouvez suivre votre colis à tout moment en cliquant sur le lien de suivi
              dans votre email ou depuis votre{' '}
              <Link href="/account" className="text-[#997a6e] hover:underline">
                espace client
              </Link>.
            </p>
          </section>

          {/* Délais de préparation */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Délais de préparation</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Votre commande est préparée et expédiée sous 24 à 48 heures ouvrées
              après validation du paiement. Les commandes passées le week-end ou les
              jours fériés sont traitées le jour ouvré suivant.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
