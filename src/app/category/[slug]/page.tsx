import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/product/ProductCard';
import { getProducts, getCategory, getCategories, getCategoryProductImages } from '@/lib/woocommerce';
import { getCategoryDescription } from '@/data/category-descriptions';
import { getSeoContent } from '@/data/seo-content';
import { BreadcrumbJsonLd, CollectionPageJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import CollapsibleIntro from '@/components/seo/CollapsibleIntro';
import SeoBottomSection from '@/components/seo/SeoBottomSection';
import CategoryFilters from './CategoryFilters';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string; sort?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const category = await getCategory(slug);
    const catDesc = getCategoryDescription(slug);

    const title = catDesc?.seoTitle || `${category.name} | Yelira`;
    const description = catDesc?.metaDescription ||
      `Découvrez notre collection ${category.name} sur Yelira. Mode modeste et élégante pour la femme musulmane. Livraison gratuite dès 69€.`;

    return {
      title: { absolute: title },
      description,
      keywords: `${category.name}, mode modeste, femme musulmane, yelira, ${category.name.toLowerCase()} pas cher`,
      openGraph: {
        title,
        description,
        url: `https://www.yelira.fr/category/${slug}`,
        siteName: 'Yelira',
        locale: 'fr_FR',
        type: 'website',
        ...(category.image && { images: [category.image.src] }),
      },
      twitter: {
        card: 'summary_large_image',
        title: category.name,
        description,
        ...(category.image && { images: [category.image.src] }),
      },
      alternates: {
        canonical: `https://www.yelira.fr/category/${slug}`,
      },
    };
  } catch {
    return { title: 'Catégorie | Yelira' };
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page = '1', sort = 'date' } = await searchParams;

  const currentPage = parseInt(page, 10) || 1;
  const perPage = 12;

  try {
    // Fetch category and all categories first
    const [category, allCategories] = await Promise.all([
      getCategory(slug),
      getCategories(),
    ]);

    // Get parent category if this is a subcategory
    const parentCategory = category.parent > 0
      ? allCategories.find((cat) => cat.id === category.parent)
      : null;

    // Fetch products for this category
    const categoryProducts = await getProducts({
      category: category.id,
      per_page: perPage,
      page: currentPage,
      orderby: sort === 'price-asc' || sort === 'price-desc' ? 'price' : sort as 'date' | 'price' | 'popularity' | 'rating',
      order: sort === 'price-asc' ? 'asc' : 'desc',
    });

    // Get subcategories (children of current category)
    const subcategories = allCategories.filter(
      (cat) => cat.parent === category.id && cat.count > 0
    );

    // Fetch product images for subcategories
    const subcatProductImages = subcategories.length > 0
      ? await getCategoryProductImages(subcategories.map((c) => c.id))
      : {};

    // Get category description and SEO content
    const catDesc = getCategoryDescription(slug);
    const seoContentData = getSeoContent(slug, category.name, 'category');
    const baseUrl = 'https://www.yelira.fr';

    // Build breadcrumb items
    const breadcrumbItems = [
      { name: 'Accueil', url: baseUrl },
      { name: 'Boutique', url: `${baseUrl}/shop` },
    ];
    if (parentCategory) {
      breadcrumbItems.push({
        name: parentCategory.name,
        url: `${baseUrl}/category/${parentCategory.slug}`,
      });
    }
    breadcrumbItems.push({
      name: category.name,
      url: `${baseUrl}/category/${slug}`,
    });

    return (
      <div className="min-h-screen bg-white">
        {/* JSON-LD Structured Data */}
        <BreadcrumbJsonLd items={breadcrumbItems} />
        <CollectionPageJsonLd
          name={category.name}
          description={catDesc?.metaDescription || `Collection ${category.name} - Yelira`}
          url={`${baseUrl}/category/${slug}`}
          numberOfItems={category.count}
        />
        {seoContentData.faq && seoContentData.faq.length > 0 && (
          <FAQJsonLd questions={seoContentData.faq} />
        )}

        {/* Category Title */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-2 md:pt-3">
          <h1 className="font-serif text-[28px] md:text-[42px] tracking-[0.05em] uppercase text-[#1a1a1a]">
            {category.name}
          </h1>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* SEO Intro Text - Collapsible */}
          {catDesc && (
            <CollapsibleIntro
              title={catDesc.introTitle}
              html={catDesc.introText}
            />
          )}

          {/* Subcategory Slider (Uniqlo-style) */}
          {subcategories.length > 0 && (
            <div className="py-2 md:py-3">
              <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:-mx-6 md:px-6">
                {/* "Toute la collection" - first item, always active on current page */}
                <Link
                  href={`/category/${slug}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden bg-[#f5f1eb] ring-2 ring-[#1a1a1a] ring-offset-2">
                    {category.image ? (
                      <Image
                        src={category.image.src}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#997a6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] md:text-[12px] text-center mt-2 font-semibold text-[#1a1a1a] max-w-[80px] md:max-w-[90px] leading-tight">
                    Tout voir
                  </p>
                </Link>

                {/* Subcategory items */}
                {subcategories.map((subcat) => {
                  const imgSrc = subcatProductImages[subcat.id] || subcat.image?.src;
                  return (
                    <Link
                      key={subcat.id}
                      href={`/category/${subcat.slug}`}
                      className="flex-shrink-0 group"
                    >
                      <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden bg-[#f5f1eb] ring-1 ring-gray-200 group-hover:ring-[#1a1a1a] group-hover:ring-2 transition-all ring-offset-1">
                        {imgSrc ? (
                          <Image
                            src={imgSrc}
                            alt={subcat.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1eb] to-[#e8e4dc]" />
                        )}
                      </div>
                      <p className="text-[11px] md:text-[12px] text-center mt-2 text-gray-700 group-hover:text-[#1a1a1a] transition-colors max-w-[80px] md:max-w-[90px] leading-tight">
                        {subcat.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className={subcategories.length > 0 ? '' : 'pt-2 md:pt-3'}>
            {/* Filters Bar */}
            <CategoryFilters
              currentSort={sort}
              productCount={categoryProducts.length}
              slug={slug}
            />

            {/* Products Grid */}
            {categoryProducts.length === 0 ? (
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
                <h3 className="font-serif text-xl mb-2">Aucun produit</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Cette catégorie ne contient pas encore de produits
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {categoryProducts.length >= perPage && (
                  <div className="flex items-center justify-center gap-2 mt-12 pb-8">
                    {currentPage > 1 && (
                      <Link
                        href={`/category/${slug}?page=${currentPage - 1}&sort=${sort}`}
                        className="px-5 py-2.5 border border-gray-200 text-[12px] tracking-wider uppercase hover:bg-gray-50 transition-colors"
                      >
                        Précédent
                      </Link>
                    )}

                    <span className="px-4 py-2 text-[13px] text-gray-600">
                      Page {currentPage}
                    </span>

                    <Link
                      href={`/category/${slug}?page=${currentPage + 1}&sort=${sort}`}
                      className="px-5 py-2.5 border border-gray-200 text-[12px] tracking-wider uppercase hover:bg-gray-50 transition-colors"
                    >
                      Suivant
                    </Link>
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
  } catch {
    notFound();
  }
}
