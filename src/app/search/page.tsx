import Link from 'next/link';
import { searchProducts } from '@/lib/woocommerce';
import ProductCard from '@/components/product/ProductCard';
interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams;
  const query = q.trim();

  // Fetch search results if there's a query
  const products = query ? await searchProducts(query, 24) : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Results */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-4 pb-12 md:py-12">
        {query ? (
          <>
            <div className="mb-8">
              <p className="text-[14px] text-gray-600">
                {products.length > 0 ? (
                  <>
                    <span className="font-medium">{products.length}</span> résultat
                    {products.length > 1 ? 's' : ''} pour &quot;
                    <span className="font-medium">{query}</span>&quot;
                  </>
                ) : (
                  <>
                    Aucun résultat pour &quot;
                    <span className="font-medium">{query}</span>&quot;
                  </>
                )}
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="1" />
                  <path strokeWidth="1" d="m21 21-4.35-4.35" />
                </svg>
                <h3 className="font-serif text-xl mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-500 text-[14px] mb-6 max-w-md mx-auto">
                  Essayez avec d&apos;autres termes ou explorez nos catégories
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['Abaya', 'Hijab', 'Jilbab', 'Robe', 'Burkini'].map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="px-4 py-2 bg-[#f5f1eb] text-[13px] hover:bg-[#997a6e] hover:text-white transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/shop"
                  className="inline-block px-8 py-3 bg-[#1a1a1a] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-[#997a6e] transition-colors"
                >
                  Voir tous les produits
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-[14px] mb-8">
              Entrez un terme de recherche pour trouver des produits
            </p>

            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Recherches populaires
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                'Abaya Dubai',
                'Hijab Jersey',
                'Jilbab',
                'Khimar',
                'Robe de prière',
                'Burkini',
                'Abaya brodée',
                'Hijab soie de Médine',
              ].map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="px-4 py-2 bg-[#f5f1eb] text-[13px] hover:bg-[#997a6e] hover:text-white transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>

            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Parcourir par catégorie
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
              {[
                { name: 'Abayas', slug: 'abayas' },
                { name: 'Hijabs', slug: 'hijabs' },
                { name: 'Jilbabs', slug: 'jilbabs' },
                { name: 'Khimar', slug: 'khimar' },
                { name: 'Robes', slug: 'robes' },
                { name: 'Burkini', slug: 'burkini' },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="aspect-square bg-[#f5f1eb] flex items-center justify-center text-[13px] font-medium tracking-wider uppercase hover:bg-[#997a6e] hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
