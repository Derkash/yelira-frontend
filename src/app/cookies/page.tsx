import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Cookies',
  description:
    'Politique de cookies du site Yelira.fr : informations sur les cookies utilisés, leur finalité et comment les gérer.',
  alternates: { canonical: 'https://www.yelira.fr/cookies' },
};

export default function CookiesPage() {
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
            <span className="text-[#1a1a1a]">Cookies</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Politique de Cookies
          </h1>
          <p className="text-[14px] text-gray-600">
            Dernière mise à jour : 1er janvier 2026
          </p>
        </div>

        <div className="bg-white p-6 md:p-8">
          <div className="space-y-8 text-[14px] text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                tablette, smartphone) lors de la visite d&apos;un site web. Il permet au site de
                mémoriser des informations sur votre visite, comme votre langue préférée ou
                le contenu de votre panier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Cookies utilisés</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-3 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Cookie</th>
                      <th className="py-3 px-3 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Type</th>
                      <th className="py-3 px-3 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Finalité</th>
                      <th className="py-3 px-3 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {[
                      { name: 'yelira_cart', type: 'Nécessaire', purpose: 'Mémoriser le contenu du panier', duration: 'Session' },
                      { name: 'yelira_session', type: 'Nécessaire', purpose: 'Maintenir la session utilisateur', duration: '24h' },
                      { name: '_ga / _gid', type: 'Analytique', purpose: 'Google Analytics - Mesure d\'audience', duration: '13 mois' },
                      { name: '_fbp', type: 'Marketing', purpose: 'Facebook Pixel - Suivi publicitaire', duration: '3 mois' },
                    ].map((cookie) => (
                      <tr key={cookie.name} className="border-b border-gray-100">
                        <td className="py-3 px-3 font-medium text-[#1a1a1a]">{cookie.name}</td>
                        <td className="py-3 px-3">{cookie.type}</td>
                        <td className="py-3 px-3">{cookie.purpose}</td>
                        <td className="py-3 px-3 text-center">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Cookies nécessaires</h2>
              <p>
                Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent
                d&apos;utiliser les fonctionnalités essentielles comme le panier d&apos;achat et
                l&apos;authentification. Ils ne peuvent pas être désactivés.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Cookies analytiques</h2>
              <p>
                Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site
                en collectant des informations anonymes. Ils nous permettent d&apos;améliorer
                nos services et l&apos;expérience utilisateur.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Cookies marketing</h2>
              <p>
                Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                Ils permettent de mesurer l&apos;efficacité de nos campagnes publicitaires.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Gérer vos cookies</h2>
              <p className="mb-3">
                Vous pouvez à tout moment gérer vos préférences en matière de cookies :
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-[#1a1a1a] font-medium">Via votre navigateur :</strong> vous pouvez
                  configurer votre navigateur pour bloquer ou supprimer les cookies. Consultez
                  l&apos;aide de votre navigateur pour connaître la marche à suivre.
                </li>
                <li>
                  <strong className="text-[#1a1a1a] font-medium">Google Analytics :</strong> vous pouvez
                  désactiver le suivi Google Analytics en installant le module complémentaire
                  de navigateur proposé par Google.
                </li>
              </ul>
              <p className="mt-3">
                La désactivation de certains cookies peut affecter le fonctionnement du site
                et limiter l&apos;accès à certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">En savoir plus</h2>
              <p>
                Pour en savoir plus sur la protection de vos données personnelles, consultez
                notre{' '}
                <Link href="/confidentialite" className="text-[#997a6e] hover:underline">
                  Politique de confidentialité
                </Link>. Pour toute question, contactez-nous à{' '}
                <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                  contact@yelira.fr
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
