// WooCommerce Product Types
export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  type: 'simple' | 'variable' | 'grouped' | 'external';
  status: 'publish' | 'draft' | 'pending';
  featured: boolean;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  categories: Category[];
  tags: Tag[];
  images: Image[];
  attributes: Attribute[];
  variations: number[];
  related_ids: number[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: Image | null;
  count: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Image {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface Attribute {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}

export interface Variation {
  id: number;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: string;
  stock_quantity: number | null;
  image: Image;
  attributes: VariationAttribute[];
}

export interface VariationAttribute {
  id: number;
  name: string;
  option: string;
}

// Cart Types
export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  variation?: Variation;
  selectedAttributes?: Record<string, string>;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// API Response Types
export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
