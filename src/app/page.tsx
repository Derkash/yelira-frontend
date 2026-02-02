import Link from 'next/link';
import Image from 'next/image';
import { getNewProducts, getOnSaleProducts, getMainCategories, getProducts } from '@/lib/woocommerce';
import ProductCard from '@/components/product/ProductCard';

// Static categories for display (backup if API doesn't return images)
const staticCategories = [
  { name: 'Abaya', slug: 'abayas', image: '/categories/abaya.jpg' },
  { name: 'Hijab', slug: 'hijabs', image: '/categories/hijab.jpg' },
  { name: 'Jilbab', slug: 'jilbabs', image: '/categories/jilbab.jpg' },
  { name: 'Khimar', slug: 'khimar', image: '/categories/khimar.jpg' },
  { name: 'Robe', slug: 'robes', image: '/categories/robe.jpg' },
  { name: 'Burkini', slug: 'burkini', image: '/categories/burkini.jpg' },
];

export default async function HomePage() {
  // Fetch data from WooCommerce API
  const [newProducts, saleProducts, categories, featuredProducts] = await Promise.all([
    getNewProducts(8),
    getOnSaleProducts(8),
    getMainCategories(),
    getProducts({ featured: true, per_page: 4 }),
  ]);

  // Get categories with images
  const displayCategories = categories.length > 0
    ? categories.filter((cat) => cat.count > 0).slice(0, 6)
    : staticCategories;

  return (
    <div className="bg-white">
      {/* Hero Section - Neyssa Style Full Width */}
      <section className="relative h-[70vh] min-h-[500px] md:h-[85vh] md:max-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://wp.yelira.fr/wp-content/uploads/2024/01/hero-banner.jpg)',
            backgroundColor: '#f5f1eb'
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-[11px] md:text-[13px] tracking-[0.3em] uppercase mb-4 md:mb-6">
            Collection Printemps 2026
          </p>

          <h1 className="font-serif text-white text-[32px] md:text-[53px] lg:text-[64px] font-normal tracking-[0.08em] uppercase leading-[1.1] mb-6 md:mb-8">
            Mode Modeste
            <br />
            Élégante
          </h1>

          <Link
            href="/shop"
            className="bg-white text-[#1a1a1a] px-8 md:px-12 py-3 md:py-4 text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            Découvrir
          </Link>
        </div>
      </section>

      {/* Categories Grid - Neyssa Style */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-[24px] md:text-[32px] tracking-[0.08em] uppercase">
              Nos Collections
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {displayCategories.map((category) => (
              <Link
                key={'id' in category ? category.id : category.slug}
                href={`/category/${category.slug}`}
                className="group relative aspect-[3/4] bg-[#f5f1eb] overflow-hidden"
              >
                {'image' in category && category.image && typeof category.image === 'object' && 'src' in category.image ? (
                  <Image
                    src={category.image.src}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1eb] to-[#e8e4dc]" />
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Category name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[#1a1a1a] group-hover:text-white text-[14px] md:text-[16px] tracking-[0.15em] uppercase transition-colors duration-300 bg-white/90 group-hover:bg-transparent px-4 py-2">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals - Neyssa Style */}
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
            {newProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner 1 - Neyssa Style */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://wp.yelira.fr/wp-content/uploads/2024/01/banner-abaya.jpg)',
            backgroundColor: '#d4cdc5'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
            <div className="max-w-[500px]">
              <p className="text-white/80 text-[11px] tracking-[0.3em] uppercase mb-3">
                Collection exclusive
              </p>
              <h2 className="font-serif text-white text-[28px] md:text-[42px] tracking-[0.05em] leading-[1.2] mb-4">
                Abayas Dubai
              </h2>
              <p className="text-white/80 text-[14px] md:text-[15px] mb-6 leading-relaxed">
                Découvrez notre sélection d&apos;abayas inspirées du style dubaïote, alliant élégance et raffinement.
              </p>
              <Link
                href="/category/abaya-dubai"
                className="inline-block bg-white text-[#1a1a1a] px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#997a6e] hover:text-white transition-all duration-300"
              >
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
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

      {/* Double Banner Section - Neyssa Style */}
      <section className="grid md:grid-cols-2">
        {/* Left Banner */}
        <Link href="/category/hijabs" className="group relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://wp.yelira.fr/wp-content/uploads/2024/01/banner-hijab.jpg)',
              backgroundColor: '#e8dfd5'
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-white/80 text-[11px] tracking-[0.3em] uppercase mb-2">Collection</p>
            <h3 className="font-serif text-white text-[28px] md:text-[36px] tracking-[0.08em] uppercase mb-4">
              Hijabs
            </h3>
            <span className="bg-white text-[#1a1a1a] px-6 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase group-hover:bg-[#997a6e] group-hover:text-white transition-all duration-300">
              Explorer
            </span>
          </div>
        </Link>

        {/* Right Banner */}
        <Link href="/category/jilbabs" className="group relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://wp.yelira.fr/wp-content/uploads/2024/01/banner-jilbab.jpg)',
              backgroundColor: '#d4cdc5'
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-white/80 text-[11px] tracking-[0.3em] uppercase mb-2">Collection</p>
            <h3 className="font-serif text-white text-[28px] md:text-[36px] tracking-[0.08em] uppercase mb-4">
              Jilbabs
            </h3>
            <span className="bg-white text-[#1a1a1a] px-6 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase group-hover:bg-[#997a6e] group-hover:text-white transition-all duration-300">
              Explorer
            </span>
          </div>
        </Link>
      </section>

      {/* Sale Section */}
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
              {saleProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges - Neyssa Style */}
      <section className="py-12 md:py-16 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: 'Livraison Offerte',
                desc: 'Dès 69€ d\'achat'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: 'Retours Gratuits',
                desc: '14 jours pour changer d\'avis'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Paiement Sécurisé',
                desc: 'Transactions cryptées'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Expédition 24/48H',
                desc: 'Livraison rapide'
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex justify-center mb-3 text-[#997a6e]">
                  {feature.icon}
                </div>
                <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-1">
                  {feature.title}
                </h4>
                <p className="text-[13px] text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Neyssa Style */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-[600px] mx-auto px-4 text-center">
          <h2 className="font-serif text-[24px] md:text-[32px] tracking-[0.08em] uppercase mb-4">
            Newsletter
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Inscrivez-vous pour recevoir nos nouveautés et offres exclusives
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-[14px] placeholder-white/50 focus:outline-none focus:border-[#997a6e] transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-[#1a1a1a] px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#997a6e] hover:text-white transition-all duration-300"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Section Placeholder */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#997a6e] mb-2">
              @yelira_boutique
            </p>
            <h2 className="font-serif text-[24px] md:text-[28px] tracking-[0.08em]">
              Suivez-nous sur Instagram
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a
                key={i}
                href="https://instagram.com/yelira_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#f5f1eb] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#997a6e]/0 group-hover:bg-[#997a6e]/40 transition-colors flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
