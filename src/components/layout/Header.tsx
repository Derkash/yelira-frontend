'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
                  placeholder="Rechercher un produit..."
                  className="w-full text-lg lg:text-2xl py-2 border-b-2 border-[#1a1a1a] focus:outline-none focus:border-[#997a6e] transition-colors bg-transparent"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="p-2 hover:text-[#997a6e] transition"
                aria-label="Rechercher"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                  <path strokeWidth="1.5" d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="px-4 py-2 bg-[#f5f1eb] text-[13px] hover:bg-[#997a6e] hover:text-white transition"
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
                  className="aspect-square bg-[#f5f1eb] flex items-center justify-center text-[13px] font-medium uppercase tracking-wider hover:bg-[#997a6e] hover:text-white transition"
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

// Mega-menu structure like Neyssa
const menuData = [
  {
    name: 'Soldes',
    slug: 'soldes',
    highlight: true,
    submenu: [
      { name: 'Tous les soldes', slug: 'soldes' },
      { name: 'Abayas en solde', slug: 'soldes-abayas' },
      { name: 'Hijabs en solde', slug: 'soldes-hijabs' },
      { name: 'Jilbabs en solde', slug: 'soldes-jilbabs' },
    ],
  },
  {
    name: 'Nouveautés',
    slug: 'nouveautes',
    highlight: true,
    isNew: true,
  },
  {
    name: 'Abaya',
    slug: 'abayas',
    submenu: [
      {
        title: 'Par type',
        items: [
          { name: 'Abaya Robe', slug: 'abaya-robe' },
          { name: 'Abaya Papillon', slug: 'abaya-papillon' },
          { name: 'Abaya Kimono', slug: 'abaya-kimono' },
          { name: 'Abaya Ouverte', slug: 'abaya-ouverte' },
        ],
      },
      {
        title: 'Par style',
        items: [
          { name: 'Abaya Dubai', slug: 'abaya-dubai' },
          { name: 'Abaya Brodée', slug: 'abaya-brodee' },
          { name: 'Abaya Satin', slug: 'abaya-satin' },
          { name: 'Abaya Simple', slug: 'abaya-simple' },
        ],
      },
      {
        title: 'Par couleur',
        items: [
          { name: 'Abaya Noire', slug: 'abaya-noire' },
          { name: 'Abaya Beige', slug: 'abaya-beige' },
          { name: 'Abaya Blanche', slug: 'abaya-blanche' },
          { name: 'Abaya Colorée', slug: 'abaya-coloree' },
        ],
      },
    ],
  },
  {
    name: 'Hijab',
    slug: 'hijabs',
    submenu: [
      {
        title: 'Par matière',
        items: [
          { name: 'Hijab Jersey', slug: 'hijab-jersey' },
          { name: 'Hijab Soie de Médine', slug: 'hijab-soie-medine' },
          { name: 'Hijab Mousseline', slug: 'hijab-mousseline' },
          { name: 'Hijab Satin', slug: 'hijab-satin' },
        ],
      },
      {
        title: 'Par style',
        items: [
          { name: 'Hijab à enfiler', slug: 'hijab-enfiler' },
          { name: 'Hijab Carré', slug: 'hijab-carre' },
          { name: 'Sous-hijab', slug: 'sous-hijab' },
        ],
      },
    ],
  },
  {
    name: 'Jilbab',
    slug: 'jilbabs',
    submenu: [
      {
        title: 'Par type',
        items: [
          { name: 'Jilbab 1 pièce', slug: 'jilbab-1-piece' },
          { name: 'Jilbab 2 pièces', slug: 'jilbab-2-pieces' },
          { name: 'Jilbab Saoudien', slug: 'jilbab-saoudien' },
        ],
      },
    ],
  },
  {
    name: 'Khimar',
    slug: 'khimar',
  },
  {
    name: 'Robe',
    slug: 'robes',
    submenu: [
      {
        title: 'Par occasion',
        items: [
          { name: 'Robe de prière', slug: 'robe-priere' },
          { name: 'Robe de soirée', slug: 'robe-soiree' },
          { name: 'Robe casual', slug: 'robe-casual' },
        ],
      },
    ],
  },
  {
    name: 'Burkini',
    slug: 'burkini',
  },
  {
    name: 'Homme',
    slug: 'homme',
    submenu: [
      {
        title: 'Vêtements',
        items: [
          { name: 'Qamis', slug: 'qamis' },
          { name: 'Qamis Marocain', slug: 'qamis-marocain' },
          { name: 'Ensemble', slug: 'ensemble-homme' },
        ],
      },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Promo Banner - Neyssa style */}
      <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-[11px] tracking-[0.12em] uppercase">
                Frais de port offert dès 69€ en point relais France et Belgique !
              </span>
              <span className="mx-6 text-[#997a6e]">★</span>
              <span className="text-[11px] tracking-[0.12em] uppercase">
                Livraison 24/48H en point relais
              </span>
              <span className="mx-6 text-[#997a6e]">★</span>
              <span className="text-[11px] tracking-[0.12em] uppercase">
                Retours gratuits sous 14 jours
              </span>
              <span className="mx-6 text-[#997a6e]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
      >
        {/* Top bar with account/language */}
        <div className="hidden lg:block border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">Bienvenue chez Yelira</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/account" className="text-gray-600 hover:text-[#997a6e] transition">
                Mon compte
              </Link>
              <Link href="/wishlist" className="text-gray-600 hover:text-[#997a6e] transition">
                Ma wishlist
              </Link>
              <div className="flex items-center gap-2 text-gray-600">
                <span>FR</span>
                <span className="text-gray-300">|</span>
                <span>EUR €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Icons */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo - Centered on mobile, left on desktop */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase"
            >
              Yelira
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {menuData.map((item) => (
                <div
                  key={item.slug}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.slug)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.slug === 'nouveautes' ? '/shop?orderby=date' : item.slug === 'soldes' ? '/shop?on_sale=true' : `/category/${item.slug}`}
                    className={`px-4 py-6 text-[12px] font-medium tracking-[0.1em] uppercase transition-colors inline-flex items-center gap-1 ${
                      item.highlight
                        ? item.isNew
                          ? 'text-[#997a6e]'
                          : 'text-[#c41e3a]'
                        : 'text-[#1a1a1a] hover:text-[#997a6e]'
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.submenu && activeMenu === item.slug && (
                    <div className="absolute top-full left-0 bg-white shadow-xl border-t min-w-[280px] py-6 px-6 animate-fadeIn">
                      {/* Simple submenu (like Soldes) */}
                      {Array.isArray(item.submenu) && !item.submenu[0]?.title && (
                        <div className="space-y-2">
                          {(item.submenu as Array<{ name: string; slug: string }>).map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/category/${subItem.slug}`}
                              className="block py-2 text-[13px] text-gray-700 hover:text-[#997a6e] transition"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Grouped submenu (like Abaya) */}
                      {Array.isArray(item.submenu) && item.submenu[0]?.title && (
                        <div className="flex gap-10">
                          {(item.submenu as Array<{ title: string; items: Array<{ name: string; slug: string }> }>).map((group) => (
                            <div key={group.title}>
                              <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">
                                {group.title}
                              </h4>
                              <div className="space-y-2">
                                {group.items.map((subItem) => (
                                  <Link
                                    key={subItem.slug}
                                    href={`/category/${subItem.slug}`}
                                    className="block py-1 text-[13px] text-gray-700 hover:text-[#997a6e] transition"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 hover:bg-gray-50 rounded-full transition"
                aria-label="Rechercher"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                  <path d="m21 21-4.35-4.35" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Account - Desktop only */}
              <Link
                href="/account"
                className="hidden sm:flex p-2.5 hover:bg-gray-50 rounded-full transition"
                aria-label="Mon compte"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                </svg>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2.5 hover:bg-gray-50 rounded-full transition relative"
                aria-label="Panier"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" strokeWidth="1.5" />
                  <path strokeWidth="1.5" d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cart.itemCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-[#1a1a1a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cart.itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer - Neyssa style */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[320px] bg-white animate-slideInLeft overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
              <span className="font-serif text-xl tracking-wider">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-4">
              {menuData.map((item) => (
                <div key={item.slug} className="border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === item.slug ? null : item.slug)}
                        className={`w-full flex items-center justify-between py-4 text-[13px] font-medium uppercase tracking-wider ${
                          item.highlight
                            ? item.isNew
                              ? 'text-[#997a6e]'
                              : 'text-[#c41e3a]'
                            : ''
                        }`}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileSubmenu === item.slug ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {mobileSubmenu === item.slug && (
                        <div className="pb-4 pl-4 animate-fadeIn">
                          <Link
                            href={`/category/${item.slug}`}
                            className="block py-2 text-[13px] text-gray-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Voir tout {item.name}
                          </Link>
                          {Array.isArray(item.submenu) && !item.submenu[0]?.title &&
                            (item.submenu as Array<{ name: string; slug: string }>).map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/category/${sub.slug}`}
                                className="block py-2 text-[13px] text-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          {Array.isArray(item.submenu) && item.submenu[0]?.title &&
                            (item.submenu as Array<{ title: string; items: Array<{ name: string; slug: string }> }>).map((group) => (
                              <div key={group.title} className="mt-3">
                                <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">
                                  {group.title}
                                </span>
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.slug}
                                    href={`/category/${sub.slug}`}
                                    className="block py-2 text-[13px] text-gray-600"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={`/category/${item.slug}`}
                      className={`block py-4 text-[13px] font-medium uppercase tracking-wider ${
                        item.highlight
                          ? item.isNew
                            ? 'text-[#997a6e]'
                            : 'text-[#c41e3a]'
                          : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer links */}
            <div className="p-4 border-t mt-4 space-y-3">
              <Link href="/account" className="flex items-center gap-3 py-2 text-[13px] text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                </svg>
                Mon compte
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 py-2 text-[13px] text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Ma wishlist
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal - Full screen Neyssa style */}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </>
  );
}
