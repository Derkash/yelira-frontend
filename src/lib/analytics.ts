import type { Product, CartItem, Variation } from '@/types/woocommerce';
import type { Order } from '@/types/checkout';

// Safely access gtag (only available client-side after GA loads)
function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...(args as Parameters<typeof window.gtag>));
  }
}

// Helper: build a GA4 item from a Product
function productToItem(product: Product, quantity = 1, variation?: Variation) {
  const price = variation
    ? parseFloat(variation.price)
    : parseFloat(product.price);
  const category = product.categories?.[0]?.name;

  return {
    item_id: String(product.id),
    item_name: product.name,
    item_category: category || undefined,
    price,
    quantity,
    ...(variation && { item_variant: String(variation.id) }),
    ...(product.on_sale && {
      discount: parseFloat(product.regular_price) - price,
    }),
  };
}

// Helper: build GA4 items from cart items
function cartItemsToItems(items: CartItem[]) {
  return items.map((item) =>
    productToItem(item.product, item.quantity, item.variation)
  );
}

// ─── E-Commerce Events ───────────────────────────

/** Fired when a user views a product detail page */
export function trackViewItem(product: Product, variation?: Variation) {
  const item = productToItem(product, 1, variation);
  gtag('event', 'view_item', {
    currency: 'EUR',
    value: item.price,
    items: [item],
  });
}

/** Fired when a user adds an item to cart */
export function trackAddToCart(
  product: Product,
  quantity: number,
  variation?: Variation
) {
  const item = productToItem(product, quantity, variation);
  gtag('event', 'add_to_cart', {
    currency: 'EUR',
    value: item.price * quantity,
    items: [item],
  });
}

/** Fired when a user removes an item from cart */
export function trackRemoveFromCart(
  product: Product,
  quantity: number,
  variation?: Variation
) {
  const item = productToItem(product, quantity, variation);
  gtag('event', 'remove_from_cart', {
    currency: 'EUR',
    value: item.price * quantity,
    items: [item],
  });
}

/** Fired when the user views their cart */
export function trackViewCart(items: CartItem[], total: number) {
  gtag('event', 'view_cart', {
    currency: 'EUR',
    value: total,
    items: cartItemsToItems(items),
  });
}

/** Fired when the user begins checkout */
export function trackBeginCheckout(items: CartItem[], total: number, coupon?: string) {
  gtag('event', 'begin_checkout', {
    currency: 'EUR',
    value: total,
    items: cartItemsToItems(items),
    ...(coupon && { coupon }),
  });
}

/** Fired on successful purchase (order confirmation page) */
export function trackPurchase(order: Order) {
  const items = order.line_items.map((item) => ({
    item_id: String(item.product_id),
    item_name: item.name,
    price: item.price,
    quantity: item.quantity,
    ...(item.variation_id && { item_variant: String(item.variation_id) }),
  }));

  const shipping = order.shipping_lines?.[0]
    ? parseFloat(order.shipping_lines[0].total)
    : 0;

  const coupon = order.coupon_lines?.[0]?.code;

  gtag('event', 'purchase', {
    transaction_id: order.number,
    value: parseFloat(order.total),
    currency: order.currency || 'EUR',
    shipping,
    items,
    ...(coupon && { coupon }),
  });
}

// ─── Search ──────────────────────────────────────

/** Fired when a user performs a site search */
export function trackSearch(searchTerm: string, resultsCount: number) {
  gtag('event', 'search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
}

// ─── Product List / Item List ────────────────────

/** Fired when a list of products is displayed (category page, search results, etc.) */
export function trackViewItemList(
  products: Product[],
  listName: string,
  listId?: string
) {
  const items = products.map((p, index) => ({
    ...productToItem(p),
    index,
  }));

  gtag('event', 'view_item_list', {
    item_list_id: listId || listName,
    item_list_name: listName,
    items,
  });
}
