import { MetadataRoute } from 'next';
import { getProducts, getCategories } from '@/lib/woocommerce';
import { seoPages } from '@/data/seo-pages';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.yelira.fr';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nouveautes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soldes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Informational & legal pages
  const infoPages: MetadataRoute.Sitemap = [
    'livraison',
    'retours',
    'guide-tailles',
    'faq',
    'cgv',
    'mentions-legales',
    'confidentialite',
    'cookies',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  // Category pages
  let categoryPages: MetadataRoute.Sitemap = [];
  try {
    const categories = await getCategories({ hide_empty: true });
    categoryPages = categories
      .filter((cat) => cat.count > 0)
      .map((category) => ({
        url: `${baseUrl}/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
  } catch {
    // Continue without category pages if API fails
  }

  // SEO pages
  const seoPageEntries: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/s/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Product pages
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const products = await getProducts({ per_page: 100 });
    productPages = products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(product.date_created),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch {
    // Continue without product pages if API fails
  }

  return [...staticPages, ...infoPages, ...categoryPages, ...seoPageEntries, ...productPages];
}
