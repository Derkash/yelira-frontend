'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getProducts, getCategories, formatPrice } from '@/lib/woocommerce';
import type { Product, Category } from '@/types/woocommerce';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || ''
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get('sort') || 'date'
  );
  const [onSale, setOnSale] = useState<boolean>(
    searchParams.get('sale') === 'true'
  );

  const perPage = 12;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [productsData, categoriesData] = await Promise.all([
        getProducts({
          per_page: perPage,
          page: currentPage,
          category: selectedCategory ? Number(selectedCategory) : undefined,
          orderby: sortBy === 'price-asc' || sortBy === 'price-desc' ? 'price' : sortBy as 'date' | 'price' | 'popularity' | 'rating',
          order: sortBy === 'price-asc' ? 'asc' : sortBy === 'price-desc' ? 'desc' : 'desc',
          on_sale: onSale || undefined,
        }),
        getCategories(),
      ]);

      setProducts(productsData);
      // Only keep parent categories (parent === 0) with products
      setCategories(categoriesData.filter(cat => cat.parent === 0 && cat.count > 0));
      setTotalProducts(productsData.length >= perPage ? (currentPage * perPage) + 1 : currentPage * perPage);
    } catch (error) {
      console.error('Error fetching shop data:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory, sortBy, onSale]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (sortBy !== 'date') params.set('sort', sortBy);
    if (onSale) params.set('sale', 'true');

    const newUrl = params.toString() ? `/shop?${params.toString()}` : '/shop';
    router.replace(newUrl, { scroll: false });
  }, [selectedCategory, sortBy, onSale, router]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSortBy('date');
    setOnSale(false);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalProducts / perPage);

  return (
    <div className="min-h-screen bg-[var(--yelira-cream)]">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[280px] bg-[var(--yelira-black)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://wp.yelira.fr/wp-content/uploads/2024/01/shop-banner.jpg)',
            filter: 'grayscale(20%)'
          }}
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <nav className="text-xs text-white/60 mb-4 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Boutique</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
            Notre Collection
          </h1>
          <p className="text-white/70 mt-2 text-sm md:text-base max-w-xl">
            Découvrez notre sélection de vêtements alliant pudeur, élégance et modernité
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filtres & Tri
            </span>
            <svg className={`w-5 h-5 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-lg">Filtres</h2>
                {(selectedCategory || sortBy !== 'date' || onSale) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[var(--yelira-taupe)] hover:underline"
                  >
                    Tout effacer
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
                  Catégories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`block w-full text-left py-2 px-3 text-sm transition-colors ${
                      !selectedCategory
                        ? 'bg-[var(--yelira-beige)] text-[var(--yelira-black)] font-medium'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    Toutes les catégories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(String(category.id))}
                      className={`block w-full text-left py-2 px-3 text-sm transition-colors ${
                        selectedCategory === String(category.id)
                          ? 'bg-[var(--yelira-beige)] text-[var(--yelira-black)] font-medium'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      {category.name}
                      <span className="text-gray-400 ml-1">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
                  Trier par
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full border border-gray-200 py-2 px-3 text-sm bg-white focus:outline-none focus:border-[var(--yelira-taupe)]"
                >
                  <option value="date">Nouveautés</option>
                  <option value="popularity">Popularité</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>

              {/* On Sale Toggle */}
              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onSale}
                    onChange={(e) => {
                      setOnSale(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 text-[var(--yelira-taupe)] border-gray-300 rounded focus:ring-[var(--yelira-taupe)]"
                  />
                  <span className="text-sm text-gray-700">En promotion uniquement</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600">
                {loading ? 'Chargement...' : `${products.length} produit${products.length > 1 ? 's' : ''}`}
              </p>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-gray-200 mb-4" />
                    <div className="h-4 bg-gray-200 w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 w-1/4" />
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="font-serif text-xl mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Essayez de modifier vos filtres ou explorez nos autres collections
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[var(--yelira-black)] text-white text-sm uppercase tracking-wider hover:bg-[var(--yelira-taupe)] transition-colors"
                >
                  Voir tous les produits
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Précédent
                    </button>

                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 text-sm ${
                            currentPage === page
                              ? 'bg-[var(--yelira-black)] text-white'
                              : 'border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => setCurrentPage(p => p + 1)}
                      disabled={products.length < perPage}
                      className="px-4 py-2 border border-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Suivant
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--yelira-taupe)] border-t-transparent rounded-full" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
