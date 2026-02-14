'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { useActiveTab, TabSlug } from '@/context/ActiveTabContext';
import { getCategoryProductImages } from '@/lib/woocommerce';
import type { Category, Product } from '@/types/woocommerce';
import ProductCard from '@/components/product/ProductCard';

const TAB_SLUGS: TabSlug[] = ['femme', 'homme', 'enfant'];

interface HomeContentProps {
  initialCategories: Category[];
  initialNewProducts: Product[];
  initialFeaturedProducts: Product[];
  initialSaleProducts: Product[];
  initialProductImages: Record<number, string>;
}

/**
 * Get all descendant category IDs of a parent (recursive).
 * Used to filter products that might be in sub-subcategories.
 */
function getAllDescendantIds(parentId: number, categories: Category[]): number[] {
  const directChildren = categories.filter((c) => c.parent === parentId);
  return directChildren.flatMap((c) => [c.id, ...getAllDescendantIds(c.id, categories)]);
}

export default function HomeContent({
  initialCategories,
  initialNewProducts,
  initialFeaturedProducts,
  initialSaleProducts,
  initialProductImages,
}: HomeContentProps) {
  const { activeTab, setActiveTab } = useActiveTab();
  const [productImages, setProductImages] = useState<Record<number, string>>(initialProductImages);

  // Derive tabs from categories (synchronous — works on server render too)
  const tabs = useMemo(() => {
    return TAB_SLUGS.map((slug) => {
      const cat = initialCategories.find((c) => c.slug === slug && c.parent === 0);
      return cat ? { slug, name: cat.name, id: cat.id } : null;
    }).filter((t): t is { slug: TabSlug; name: string; id: number } => t !== null);
  }, [initialCategories]);

  const activeTabInfo = useMemo(() => tabs.find((t) => t.slug === activeTab), [tabs, activeTab]);

  // Direct subcategories for the grid (max 6)
  const subcategories = useMemo(() => {
    if (!activeTabInfo) return [];
    return initialCategories
      .filter((c) => c.parent === activeTabInfo.id && c.count > 0)
      .slice(0, 6);
  }, [initialCategories, activeTabInfo]);

  // All descendant IDs for product filtering (includes nested subcategories)
  const allCategoryIds = useMemo(() => {
    if (!activeTabInfo) return new Set<number>();
    const ids = new Set([activeTabInfo.id, ...getAllDescendantIds(activeTabInfo.id, initialCategories)]);
    return ids;
  }, [initialCategories, activeTabInfo]);

  // Filter products by active tab
  const newProducts = useMemo(
    () => initialNewProducts.filter((p) => p.categories.some((c) => allCategoryIds.has(c.id))).slice(0, 8),
    [initialNewProducts, allCategoryIds]
  );

  const featuredProducts = useMemo(
    () => initialFeaturedProducts.filter((p) => p.categories.some((c) => allCategoryIds.has(c.id))).slice(0, 4),
    [initialFeaturedProducts, allCategoryIds]
  );

  const saleProducts = useMemo(
    () => initialSaleProducts.filter((p) => p.categories.some((c) => allCategoryIds.has(c.id))).slice(0, 4),
    [initialSaleProducts, allCategoryIds]
  );

  // Fetch product images for subcategories when tab changes
  useEffect(() => {
    const subcatIds = subcategories.map((c) => c.id);
    const missingIds = subcatIds.filter((id) => !productImages[id]);
    if (missingIds.length > 0) {
      getCategoryProductImages(missingIds).then((newImages) => {
        setProductImages((prev) => ({ ...prev, ...newImages }));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subcategories]);

  return (
    <>
      {/* Mobile Tabs — visible only on mobile/tablet */}
      {tabs.length > 0 && (
        <nav className="lg:hidden bg-white border-b border-gray-100" aria-label="Catégories principales">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={`flex-1 py-3 text-[13px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  activeTab === tab.slug
                    ? 'text-[var(--yelira-black)] border-b-2 border-[var(--yelira-black)]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Categories Grid — subcategories of active tab */}
      {subcategories.length > 0 && (
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {subcategories.map((category) => {
              const imgSrc = productImages[category.id] || category.image?.src;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group relative aspect-[3/4] bg-[#f5f1eb] overflow-hidden"
                >
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1eb] to-[#e8e4dc]" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="font-serif text-[#1a1a1a] text-[14px] md:text-[16px] tracking-[0.15em] uppercase text-center">
                      {category.name.replace(/&amp;/gi, '&')}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Nouveautés */}
      {newProducts.length > 0 && (
        <section className="py-12 md:py-20 bg-[#faf8f5]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-10 md:mb-14">
              <h2 className="font-serif text-[24px] md:text-[32px] tracking-[0.08em] uppercase">
                Nouveautés
              </h2>
              <Link
                href="/shop?orderby=date"
                className="text-[12px] tracking-[0.1em] uppercase text-[#997a6e] hover:text-[#1a1a1a] transition-colors border-b border-[#997a6e] hover:border-[#1a1a1a] pb-0.5"
              >
                Voir tout
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 4} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meilleures Ventes */}
      {featuredProducts.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-10 md:mb-14">
              <h2 className="font-serif text-[24px] md:text-[32px] tracking-[0.08em] uppercase">
                Meilleures Ventes
              </h2>
              <Link
                href="/shop?featured=true"
                className="text-[12px] tracking-[0.1em] uppercase text-[#997a6e] hover:text-[#1a1a1a] transition-colors border-b border-[#997a6e] hover:border-[#1a1a1a] pb-0.5"
              >
                Voir tout
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Soldes */}
      {saleProducts.length > 0 && (
        <section className="py-12 md:py-20 bg-[#faf8f5]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-10 md:mb-14">
              <div>
                <span className="text-[#c41e3a] text-[11px] tracking-[0.2em] uppercase font-semibold">
                  Promotions
                </span>
                <h2 className="font-serif text-[24px] md:text-[32px] tracking-[0.08em] uppercase mt-1">
                  Soldes
                </h2>
              </div>
              <Link
                href="/shop?on_sale=true"
                className="text-[12px] tracking-[0.1em] uppercase text-[#c41e3a] hover:text-[#1a1a1a] transition-colors border-b border-[#c41e3a] hover:border-[#1a1a1a] pb-0.5"
              >
                Voir tout
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
