import { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getOnSaleProducts } from '@/lib/woocommerce';
import { BreadcrumbJsonLd, CollectionPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Soldes Mode Modeste Femme | Promotions Abaya, Hijab - Yelira' },
  description:
    'Profitez des soldes Yelira sur notre collection de mode modeste : abayas, hijabs, jilbabs à prix réduits. Jusqu\'à -50% sur une sélection de produits. Livraison gratuite dès 69€.',
  alternates: {
    canonical: 'https://www.yelira.fr/soldes',
  },
  openGraph: {
    title: 'Soldes Mode Modeste Femme | Yelira',
    description:
      'Profitez des soldes Yelira : abayas, hijabs, jilbabs à prix réduits. Jusqu\'à -50% sur une sélection de produits.',
    url: 'https://www.yelira.fr/soldes',
    siteName: 'Yelira',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default async function SoldesPage() {
  const products = await getOnSaleProducts(24);
  const baseUrl = 'https://www.yelira.fr';

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: baseUrl },
          { name: 'Soldes', url: `${baseUrl}/soldes` },
        ]}
      />
      <CollectionPageJsonLd
        name="Soldes"
        description="Promotions et soldes mode modeste - Yelira"
        url={`${baseUrl}/soldes`}
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
              Soldes
            </li>
          </ol>
        </nav>

        <h1 className="font-serif text-[28px] md:text-[42px] tracking-[0.05em] uppercase text-[var(--yelira-black)]">
          Soldes
        </h1>
        <p className="text-[14px] text-gray-600 mt-2 mb-6 max-w-2xl">
          Profitez de nos meilleures offres sur une sélection d&apos;abayas, hijabs, jilbabs et
          accessoires de mode modeste à prix réduits.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-12">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-serif text-xl mb-2">Aucune promotion en cours</h2>
            <p className="text-gray-500 text-sm mb-6">Revenez bientôt pour découvrir nos prochaines offres</p>
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
