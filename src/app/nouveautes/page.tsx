import { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getNewProducts } from '@/lib/woocommerce';
import { BreadcrumbJsonLd, CollectionPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Nouveautés Mode Modeste Femme | Dernières Collections - Yelira' },
  description:
    'Découvrez les dernières nouveautés Yelira : abayas, hijabs, jilbabs et accessoires de mode modeste. Nouvelles collections chaque semaine. Livraison gratuite dès 69€.',
  alternates: {
    canonical: 'https://www.yelira.fr/nouveautes',
  },
  openGraph: {
    title: 'Nouveautés Mode Modeste Femme | Yelira',
    description:
      'Découvrez les dernières nouveautés Yelira : abayas, hijabs, jilbabs et accessoires de mode modeste.',
    url: 'https://www.yelira.fr/nouveautes',
    siteName: 'Yelira',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default async function NouveautesPage() {
  const products = await getNewProducts(24);
  const baseUrl = 'https://www.yelira.fr';

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: baseUrl },
          { name: 'Nouveautés', url: `${baseUrl}/nouveautes` },
        ]}
      />
      <CollectionPageJsonLd
        name="Nouveautés"
        description="Dernières nouveautés mode modeste - Yelira"
        url={`${baseUrl}/nouveautes`}
        numberOfItems={products.length}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-2 md:pt-3">
        <nav aria-label="Fil d'Ariane" className="mb-4">
          <ol className="flex items-center gap-1.5 text-[12px] text-gray-500">
            <li>
              <Link href="/" className="hover:text-[var(--yelira-taupe)] transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" className="text-[var(--yelira-black)] font-medium">
              Nouveautés
            </li>
          </ol>
        </nav>

        <h1 className="font-serif text-[28px] md:text-[42px] tracking-[0.05em] uppercase text-[var(--yelira-black)]">
          Nouveautés
        </h1>
        <p className="text-[14px] text-gray-600 mt-2 mb-6 max-w-2xl">
          Découvrez nos derniers arrivages de mode modeste. Abayas, hijabs, jilbabs et accessoires
          sélectionnés pour allier élégance et pudeur.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-12">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-serif text-xl mb-2">Aucune nouveauté pour le moment</h2>
            <p className="text-gray-500 text-sm mb-6">Revenez bientôt pour découvrir nos nouvelles collections</p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-[var(--yelira-black)] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-[var(--yelira-taupe)] transition-colors"
            >
              Voir tous les produits
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
