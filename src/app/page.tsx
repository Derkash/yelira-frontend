import { getNewProducts, getOnSaleProducts, getProducts, getCategories, getCategoryProductImages } from '@/lib/woocommerce';
import HomeContent from '@/components/home/HomeContent';

export default async function HomePage() {
  // Fetch all categories + products broadly (enough to cover all tabs)
  const [allCategories, newProducts, saleProducts, featuredProducts] = await Promise.all([
    getCategories({ per_page: 100 }),
    getNewProducts(50),
    getOnSaleProducts(30),
    getProducts({ featured: true, per_page: 20 }),
  ]);

  // Pre-compute product images for Femme's subcategories (default tab, for SSR)
  const femmeTab = allCategories.find((c) => c.slug === 'femme' && c.parent === 0);
  const femmeSubcats = femmeTab
    ? allCategories.filter((c) => c.parent === femmeTab.id && c.count > 0).slice(0, 6)
    : [];
  const initialProductImages = await getCategoryProductImages(femmeSubcats.map((c) => c.id));

  return (
    <div className="bg-white">
      {/* Dynamic content controlled by Femme/Homme/Enfant tabs */}
      <HomeContent
        initialCategories={allCategories}
        initialNewProducts={newProducts}
        initialFeaturedProducts={featuredProducts}
        initialSaleProducts={saleProducts}
        initialProductImages={initialProductImages}
      />

      {/* Trust Badges */}
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

      {/* Newsletter */}
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

      {/* Instagram */}
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
