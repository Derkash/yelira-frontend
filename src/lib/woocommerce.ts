import { Product, Category, ProductsResponse, Variation } from '@/types/woocommerce';

// WooCommerce API Configuration
const WC_URL = 'https://wp.yelira.fr/wp-json/wc/v3';
const WC_KEY = 'ck_fda27c64ff65524550b3e0e6c59c1e3f0a7580a3';
const WC_SECRET = 'cs_cb25ef00fb0afb0826ce8ea0258b70f86ef12f6b';

// Base64 encode credentials
const credentials = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64');

async function wcFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${WC_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    throw new Error(`WooCommerce API error: ${response.status}`);
  }

  return response.json();
}

// ============================================
// PRODUCTS
// ============================================

export async function getProducts(params: {
  page?: number;
  per_page?: number;
  category?: number;
  on_sale?: boolean;
  featured?: boolean;
  orderby?: 'date' | 'price' | 'popularity' | 'rating';
  order?: 'asc' | 'desc';
  search?: string;
} = {}): Promise<Product[]> {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  // Default per_page if not set
  if (!params.per_page) {
    searchParams.append('per_page', '12');
  }

  return wcFetch<Product[]>(`/products?${searchParams.toString()}`);
}

export async function getProduct(idOrSlug: string | number): Promise<Product> {
  // If it's a number, fetch by ID
  if (typeof idOrSlug === 'number' || !isNaN(Number(idOrSlug))) {
    return wcFetch<Product>(`/products/${idOrSlug}`);
  }

  // Otherwise, fetch by slug
  const products = await wcFetch<Product[]>(`/products?slug=${idOrSlug}`);
  if (products.length === 0) {
    throw new Error('Product not found');
  }
  return products[0];
}

export async function getProductVariations(productId: number): Promise<Variation[]> {
  return wcFetch<Variation[]>(`/products/${productId}/variations?per_page=100`);
}

export async function getRelatedProducts(productId: number, limit: number = 4): Promise<Product[]> {
  const product = await getProduct(productId);
  if (!product.related_ids || product.related_ids.length === 0) {
    return [];
  }

  const relatedIds = product.related_ids.slice(0, limit);
  return wcFetch<Product[]>(`/products?include=${relatedIds.join(',')}`);
}

export async function getFeaturedProducts(limit: number = 8): Promise<Product[]> {
  return getProducts({ featured: true, per_page: limit });
}

export async function getOnSaleProducts(limit: number = 8): Promise<Product[]> {
  return getProducts({ on_sale: true, per_page: limit });
}

export async function getNewProducts(limit: number = 8): Promise<Product[]> {
  return getProducts({ orderby: 'date', order: 'desc', per_page: limit });
}

// ============================================
// CATEGORIES
// ============================================

export async function getCategories(params: {
  parent?: number;
  hide_empty?: boolean;
  per_page?: number;
} = {}): Promise<Category[]> {
  const searchParams = new URLSearchParams();

  searchParams.append('per_page', String(params.per_page || 100));
  if (params.parent !== undefined) {
    searchParams.append('parent', String(params.parent));
  }
  if (params.hide_empty !== undefined) {
    searchParams.append('hide_empty', String(params.hide_empty));
  }

  return wcFetch<Category[]>(`/products/categories?${searchParams.toString()}`);
}

export async function getCategory(idOrSlug: string | number): Promise<Category> {
  if (typeof idOrSlug === 'number' || !isNaN(Number(idOrSlug))) {
    return wcFetch<Category>(`/products/categories/${idOrSlug}`);
  }

  const categories = await wcFetch<Category[]>(`/products/categories?slug=${idOrSlug}`);
  if (categories.length === 0) {
    throw new Error('Category not found');
  }
  return categories[0];
}

export async function getMainCategories(): Promise<Category[]> {
  // Get parent categories (parent = 0)
  return getCategories({ parent: 0, hide_empty: true });
}

// ============================================
// SEARCH
// ============================================

export async function searchProducts(query: string, limit: number = 20): Promise<Product[]> {
  return getProducts({ search: query, per_page: limit });
}

// ============================================
// HELPER FUNCTIONS
// ============================================

export function formatPrice(price: string | number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(numPrice);
}

export function calculateDiscount(regularPrice: string, salePrice: string): number {
  const regular = parseFloat(regularPrice);
  const sale = parseFloat(salePrice);
  if (regular <= 0 || sale <= 0) return 0;
  return Math.round(((regular - sale) / regular) * 100);
}

export function getProductImage(product: Product, index: number = 0): string {
  if (product.images && product.images.length > index) {
    return product.images[index].src;
  }
  return '/placeholder-product.jpg';
}
