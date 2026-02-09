import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/product/ProductCard';
import { searchProducts } from '@/lib/woocommerce';
import { getSeoPage, seoPages } from '@/data/seo-pages';
import { getSeoContent } from '@/data/seo-content';
import { BreadcrumbJsonLd, CollectionPageJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import CollapsibleIntro from '@/components/seo/CollapsibleIntro';
import SeoBottomSection from '@/components/seo/SeoBottomSection';

interface SeoPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: SeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return { title: 'Page non trouvée | Yelira' };
  }

  return {
    title: { absolute: page.title },
    description: page.metaDescription,
    keywords: `${page.keyword}, abaya, mode modeste, femme musulmane, yelira`,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://www.yelira.fr/s/${page.slug}`,
      siteName: 'Yelira',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.h1,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `https://www.yelira.fr/s/${page.slug}`,
    },
  };
}

export default async function SeoPage({ params, searchParams }: SeoPageProps) {
  const { slug } = await params;
  const { page: pageParam = '1' } = await searchParams;
  const currentPage = parseInt(pageParam, 10) || 1;

  const seoPage = getSeoPage(slug);
  if (!seoPage) {
    notFound();
  }

  let products: Awaited<ReturnType<typeof searchProducts>> = [];
  try {
    products = await searchProducts(seoPage.searchQuery, 24);
  } catch {
    products = [];
  }

  const seoContentData = getSeoContent(slug, seoPage.keyword, 'seo');
  const baseUrl = 'https://www.yelira.fr';
  const productsPerPage = 12;
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: baseUrl },
          { name: 'Boutique', url: `${baseUrl}/shop` },
          { name: seoPage.h1, url: `${baseUrl}/s/${seoPage.slug}` },
        ]}
      />
      <CollectionPageJsonLd
        name={seoPage.h1}
        description={seoPage.metaDescription}
        url={`${baseUrl}/s/${seoPage.slug}`}
        numberOfItems={products.length}
      />
      {seoPage.faq.length > 0 && <FAQJsonLd questions={seoPage.faq} />}

      {/* Hero Banner */}
      <div className="relative h-[180px] md:h-[280px] bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#997a6e] to-[#1a1a1a]" />
        <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <nav className="text-[11px] text-white/60 mb-4 tracking-[0.1em] uppercase">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-white transition-colors">
              Boutique
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{seoPage.h1}</span>
          </nav>
          <h1 className="font-serif text-white text-[28px] md:text-[42px] tracking-[0.05em] uppercase">
            {seoPage.h1}
          </h1>
          <p className="text-white/50 mt-2 text-[13px]">
            {products.length} produit{products.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Intro Text - Collapsible like Neyssa Shop */}
        <CollapsibleIntro
          title={`${seoPage.keyword} — Notre sélection`}
          html={seoPage.introText}
        />

        {/* Related Categories */}
        {seoPage.relatedCategories.length > 0 && (
          <div className="py-6 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mr-2">
                Voir aussi :
              </span>
              {seoPage.relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="px-4 py-2 bg-[#f5f1eb] text-[12px] tracking-[0.05em] hover:bg-[#997a6e] hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="py-8 md:py-12">
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="font-serif text-xl mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-500 text-sm mb-6">
                Nous n&apos;avons pas encore de produits dans cette sélection
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-[#1a1a1a] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-[#997a6e] transition-colors"
              >
                Voir tous les produits
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-[13px] text-gray-500">
                  {products.length} résultat{products.length > 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {currentPage > 1 && (
                    <Link
                      href={`/s/${slug}?page=${currentPage - 1}`}
                      className="px-5 py-2.5 border border-gray-200 text-[12px] tracking-wider uppercase hover:bg-gray-50 transition-colors"
                    >
                      Précédent
                    </Link>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/s/${slug}?page=${p}`}
                      className={`w-10 h-10 flex items-center justify-center text-[13px] ${
                        p === currentPage
                          ? 'bg-[#1a1a1a] text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                      } transition-colors`}
                    >
                      {p}
                    </Link>
                  ))}

                  {currentPage < totalPages && (
                    <Link
                      href={`/s/${slug}?page=${currentPage + 1}`}
                      className="px-5 py-2.5 border border-gray-200 text-[12px] tracking-wider uppercase hover:bg-gray-50 transition-colors"
                    >
                      Suivant
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>

      </div>

      {/* SEO Bottom Section */}
      <SeoBottomSection content={seoContentData} />
    </div>
  );
}
