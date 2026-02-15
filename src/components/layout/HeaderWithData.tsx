import { getCategories, getCategoryProductImages } from '@/lib/woocommerce';
import type { Category } from '@/types/woocommerce';
import Header from './Header';

export default async function HeaderWithData() {
  let categories: Category[] = [];
  let images: Record<number, string> = {};
  try {
    categories = await getCategories({ per_page: 100 });
    // Pre-fetch product images for all subcategories (children of top-level tabs)
    const menuTabSlugs = ['femme', 'homme', 'enfant'];
    const tabIds = categories
      .filter((c) => menuTabSlugs.includes(c.slug) && c.parent === 0)
      .map((c) => c.id);
    const subcatIds = categories
      .filter((c) => tabIds.includes(c.parent) && !c.image?.src)
      .map((c) => c.id);
    if (subcatIds.length > 0) {
      images = await getCategoryProductImages(subcatIds);
    }
  } catch {
    // fallback: categories and images stay empty
  }
  return <Header initialCategories={categories} initialImages={images} />;
}
