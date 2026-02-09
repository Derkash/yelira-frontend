import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description:
    'Mentions légales du site Yelira.fr - Informations légales, éditeur du site, hébergement et propriété intellectuelle.',
  alternates: { canonical: 'https://www.yelira.fr/mentions-legales' },
};

export default function MentionsLegalesPage() {
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
            <span className="text-[#1a1a1a]">Mentions légales</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Mentions Légales
          </h1>
        </div>

        <div className="bg-white p-6 md:p-8">
          <div className="space-y-8 text-[14px] text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Éditeur du site</h2>
              <p>
                Le site www.yelira.fr est édité par Yelira.
              </p>
              <ul className="mt-3 space-y-1">
                <li>Raison sociale : Yelira</li>
                <li>Adresse : France</li>
                <li>Email : <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">contact@yelira.fr</a></li>
                <li>Directeur de la publication : Yelira</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Hébergement</h2>
              <p>
                Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu du site (textes, images, vidéos, graphismes, logo,
                icônes, sons, logiciels, etc.) est la propriété exclusive de Yelira ou de ses
                partenaires et est protégé par les lois françaises et internationales relatives
                à la propriété intellectuelle.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite sans autorisation écrite préalable de Yelira.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression et d&apos;opposition sur vos données personnelles.
                Pour plus d&apos;informations, consultez notre{' '}
                <Link href="/confidentialite" className="text-[#997a6e] hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Cookies</h2>
              <p>
                Le site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour
                en savoir plus, consultez notre{' '}
                <Link href="/cookies" className="text-[#997a6e] hover:underline">
                  Politique de cookies
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Limitation de responsabilité</h2>
              <p>
                Yelira s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des
                informations diffusées sur le site. Toutefois, Yelira ne peut garantir
                l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
                à disposition sur le site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de
                litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
