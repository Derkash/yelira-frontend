'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { getCategories, getCategoryProductImages } from '@/lib/woocommerce';
import type { Category } from '@/types/woocommerce';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

// Search Modal Component
function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  const handleQuickSearch = (term: string) => {
    router.push(`/search?q=${encodeURIComponent(term)}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white animate-fadeIn">
      <div className="h-full flex flex-col">
        {/* Search Header */}
        <div className="border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Recherchez un produit..."
                  className="w-full text-lg lg:text-2xl py-2 border-b-2 border-[var(--yelira-black)] focus:outline-none focus:border-[var(--yelira-taupe)] transition-colors bg-transparent"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="p-2 hover:text-[var(--yelira-taupe)] transition"
                aria-label="Rechercher"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                  <path strokeWidth="1.5" d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Fermer la recherche"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Recherches populaires
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Abaya Dubai', 'Hijab Jersey', 'Jilbab', 'Khimar', 'Robe de prière', 'Burkini'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleQuickSearch(term)}
                  className="px-4 py-2 bg-[var(--yelira-beige)] text-[13px] hover:bg-[var(--yelira-taupe)] hover:text-white transition"
                >
                  {term}
                </button>
              ))}
            </div>

            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Catégories populaires
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Abayas', slug: 'abayas' },
                { name: 'Hijabs', slug: 'hijabs' },
                { name: 'Jilbabs', slug: 'jilbabs' },
                { name: 'Robes', slug: 'robes' },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={onClose}
                  className="aspect-square bg-[var(--yelira-beige)] flex items-center justify-center text-[13px] font-medium uppercase tracking-wider hover:bg-[var(--yelira-taupe)] hover:text-white transition"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const announcementMessages = [
  'Frais de port offert dès 69€ en point relais France et Belgique !',
  'Livraison 24/48H en point relais',
  'Retours gratuits sous 14 jours',
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wpCategories, setWpCategories] = useState<Category[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [productImages, setProductImages] = useState<Record<number, string>>({});
  const { cart } = useCart();

  // Slugs des catégories parentes qui servent d'onglets dans le menu
  const menuTabSlugs = ['femme', 'homme', 'enfant'];

  // Fetch all categories + first product images from WooCommerce
  const fetchCategories = useCallback(async () => {
    try {
      const cats = await getCategories({ per_page: 100 });
      setWpCategories(cats);
      // Set first tab as active
      const firstTab = cats.find((c) => menuTabSlugs.includes(c.slug) && c.parent === 0);
      if (firstTab) setActiveTabId(firstTab.id);
      // Fetch first product image for each non-parent category
      const childCats = cats.filter((c) => c.parent !== 0);
      const images = await getCategoryProductImages(childCats.map((c) => c.id));
      setProductImages(images);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMenuOpen && wpCategories.length === 0) {
      fetchCategories();
    }
  }, [isMenuOpen, wpCategories.length, fetchCategories]);

  // Derive tabs and subcategories from WP data
  const menuTabs = wpCategories
    .filter((c) => menuTabSlugs.includes(c.slug) && c.parent === 0)
    .sort((a, b) => menuTabSlugs.indexOf(a.slug) - menuTabSlugs.indexOf(b.slug));

  const activeSubcategories = wpCategories.filter(
    (c) => c.parent === activeTabId
  );

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure header height for spacer
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu or search is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <>
      {/* Fixed Header - 3 lines always visible */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
        role="banner"
      >
        {/* Line 1 - Delivery Banner with continuous marquee */}
        <div
          className="bg-[var(--yelira-black)] text-white py-2 overflow-hidden"
          aria-label="Informations livraison"
        >
          <div className="flex w-max animate-marquee">
            {[0, 1, 2].flatMap((copy) =>
              announcementMessages.map((message, idx) => (
                <span key={`${copy}-${idx}`} className="shrink-0 flex items-center">
                  <span className="whitespace-nowrap text-[11px] tracking-[0.12em] uppercase">
                    {message}
                  </span>
                  <span className="shrink-0 mx-4 lg:mx-6 text-[var(--yelira-taupe)]">★</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Line 2 - Logo (left) + Icons (right) */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[var(--container-max)] mx-auto px-4 lg:px-6 flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" aria-label="Yelira - Accueil">
              <Image
                src="/images/brand/logo.svg"
                alt="Yelira"
                width={120}
                height={56}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Icons: Wishlist, Account, Cart, Burger */}
            <nav aria-label="Actions rapides" className="flex items-center gap-0.5 lg:gap-1">
              {/* Wishlist (heart) */}
              <Link
                href="/wishlist"
                className="p-2 lg:p-2.5 hover:bg-gray-50 rounded-full transition"
                aria-label="Ma liste d'envies"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="1.5" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 lg:p-2.5 hover:bg-gray-50 rounded-full transition"
                aria-label="Mon compte"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                </svg>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2 lg:p-2.5 hover:bg-gray-50 rounded-full transition relative"
                aria-label={`Panier${cart.itemCount > 0 ? ` (${cart.itemCount} article${cart.itemCount > 1 ? 's' : ''})` : ''}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="1.5" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" strokeWidth="1.5" />
                  <path strokeWidth="1.5" d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cart.itemCount > 0 && (
                  <span
                    className="absolute top-0 right-0 w-5 h-5 bg-[var(--yelira-black)] text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {cart.itemCount > 9 ? '9+' : cart.itemCount}
                  </span>
                )}
              </Link>

              {/* Burger Menu */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 lg:p-2.5 hover:bg-gray-50 rounded-full transition"
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
                aria-controls="main-menu-drawer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </div>
        </div>

        {/* Line 3 - Search Bar (full width, always visible) */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[var(--container-max)] mx-auto px-4 lg:px-6 py-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center gap-3 px-4 py-2.5 bg-[var(--yelira-beige)] text-left transition-colors hover:bg-[#ede8e1] cursor-text"
              aria-label="Ouvrir la recherche"
            >
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                <path d="m21 21-4.35-4.35" strokeWidth="1.5" />
              </svg>
              <span className="text-[13px] text-gray-400 select-none">
                Recherchez un produit
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div style={{ height: headerHeight }} aria-hidden="true" />

      {/* Menu Drawer - Full screen, slide from right */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100]"
          id="main-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <nav className="absolute inset-0 bg-white animate-slideInRight flex flex-col">
            {/* Header sticky : close + tabs */}
            <div className="sticky top-0 bg-white z-10 border-b">
              {/* Close button */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-serif text-xl tracking-wider">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-full transition"
                  aria-label="Fermer le menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs dynamiques depuis WooCommerce */}
              {menuTabs.length > 0 && (
                <div className="flex border-t border-gray-100">
                  {menuTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex-1 py-3 text-[13px] font-bold tracking-[0.12em] uppercase transition-colors ${
                        activeTabId === tab.id
                          ? 'text-[var(--yelira-black)] border-b-2 border-[var(--yelira-black)]'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Subcategories grid — dynamique */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {activeSubcategories.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {activeSubcategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 bg-[var(--yelira-beige)] overflow-hidden rounded">
                        {(productImages[cat.id] || cat.image?.src) ? (
                          <Image
                            src={productImages[cat.id] || cat.image!.src}
                            alt={cat.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full bg-[var(--yelira-beige)]" />
                        )}
                      </div>
                      <span className="text-[13px] font-medium text-[var(--yelira-black)]">
                        {cat.name}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 text-sm py-12">
                  Bientôt disponible
                </p>
              )}
            </div>

            {/* Footer links */}
            <div className="border-t px-4 py-4 space-y-3">
              <Link
                href="/account"
                className="flex items-center gap-3 py-2 text-[13px] text-gray-600 hover:text-[var(--yelira-taupe)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                </svg>
                Mon compte
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center gap-3 py-2 text-[13px] text-gray-600 hover:text-[var(--yelira-taupe)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeWidth="1.5" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Ma wishlist
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal - Full screen */}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}

    </>
  );
}
