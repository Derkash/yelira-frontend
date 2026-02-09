import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retours & Échanges',
  description:
    'Politique de retours Yelira : retours gratuits sous 14 jours. Échanges et remboursements simples et rapides.',
  alternates: { canonical: 'https://www.yelira.fr/retours' },
};

export default function RetoursPage() {
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
            <span className="text-[#1a1a1a]">Retours & Échanges</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Retours & Échanges
          </h1>
          <p className="text-[14px] text-gray-600">
            Votre satisfaction est notre priorité
          </p>
        </div>

        <div className="space-y-8">
          {/* Politique de retour */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Politique de retour</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Vous disposez d&apos;un délai de <strong className="text-[#1a1a1a] font-medium">14 jours</strong> à
              compter de la réception de votre commande pour nous retourner un article
              qui ne vous conviendrait pas, conformément à la législation en vigueur.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Les articles doivent être retournés dans leur état d&apos;origine : non portés,
              non lavés, avec toutes les étiquettes attachées et dans leur emballage
              d&apos;origine.
            </p>
          </section>

          {/* Procédure de retour */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-6">Comment effectuer un retour ?</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Contactez-nous',
                  desc: 'Envoyez un email à contact@yelira.fr en précisant votre numéro de commande et le(s) article(s) que vous souhaitez retourner.',
                },
                {
                  step: '2',
                  title: 'Préparez votre colis',
                  desc: 'Emballez soigneusement le(s) article(s) dans leur emballage d\'origine. Joignez le bon de retour que nous vous enverrons par email.',
                },
                {
                  step: '3',
                  title: 'Expédiez votre retour',
                  desc: 'Déposez votre colis dans le point relais de votre choix avec l\'étiquette de retour prépayée fournie.',
                },
                {
                  step: '4',
                  title: 'Remboursement',
                  desc: 'Votre remboursement sera effectué sous 7 à 14 jours ouvrés après réception et vérification de votre retour, sur le moyen de paiement utilisé lors de la commande.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center text-[13px] font-semibold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold mb-1">{item.title}</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Échanges */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Échanges</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Vous souhaitez échanger un article contre une autre taille ou un autre coloris ?
              Contactez-nous par email à{' '}
              <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                contact@yelira.fr
              </a>{' '}
              et nous organiserons l&apos;échange pour vous.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Les frais de retour pour un échange sont pris en charge par Yelira.
            </p>
          </section>

          {/* Articles non retournables */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Articles non retournables</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
              Pour des raisons d&apos;hygiène, les articles suivants ne peuvent être ni
              retournés ni échangés :
            </p>
            <ul className="text-[14px] text-gray-600 space-y-2 pl-5 list-disc">
              <li>Sous-vêtements et sous-hijabs</li>
              <li>Articles en promotion ou soldés</li>
              <li>Articles personnalisés</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
