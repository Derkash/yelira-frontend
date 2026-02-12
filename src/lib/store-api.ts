/**
 * WooCommerce Store API helper for headless checkout.
 * Manages cart sessions and checkout via the Store API.
 * Server-only — must only be imported from API routes.
 */

const WP_BASE = process.env.WC_URL?.replace('/wp-json/wc/v3', '') || 'https://wp.yelira.fr';
const STORE_API = `${WP_BASE}/wp-json/wc/store/v1`;

interface StoreSession {
  cartToken: string;
  nonce: string;
}

/** Start a fresh Store API session (guest cart). */
export async function createSession(): Promise<StoreSession> {
  const resp = await fetch(`${STORE_API}/cart`, {
    headers: { 'Nonce': '0' },
  });

  const cartToken = resp.headers.get('cart-token') || '';
  const nonce = resp.headers.get('nonce') || '';

  if (!cartToken) throw new Error('Failed to create Store API session');

  return { cartToken, nonce };
}

/** Add an item to the Store API cart. */
export async function addItemToCart(
  session: StoreSession,
  productId: number,
  quantity: number,
  variationId?: number
): Promise<StoreSession> {
  const body: Record<string, unknown> = { id: productId, quantity };
  if (variationId) {
    body.id = variationId;
  }

  const resp = await fetch(`${STORE_API}/cart/add-item`, {
    method: 'POST',
    headers: {
      'Nonce': session.nonce,
      'Cart-Token': session.cartToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  // Update nonce from response if changed
  const newNonce = resp.headers.get('nonce') || session.nonce;
  const newToken = resp.headers.get('cart-token') || session.cartToken;

  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}));
    throw new Error(`Failed to add item: ${error.message || resp.statusText}`);
  }

  return { cartToken: newToken, nonce: newNonce };
}

/** Apply a coupon code to the Store API cart. */
export async function applyCoupon(
  session: StoreSession,
  code: string
): Promise<StoreSession> {
  const resp = await fetch(`${STORE_API}/cart/apply-coupon`, {
    method: 'POST',
    headers: {
      'Nonce': session.nonce,
      'Cart-Token': session.cartToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  const newNonce = resp.headers.get('nonce') || session.nonce;
  const newToken = resp.headers.get('cart-token') || session.cartToken;

  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}));
    throw new Error(`Coupon invalide: ${error.message || 'Code promo non reconnu'}`);
  }

  return { cartToken: newToken, nonce: newNonce };
}

export interface StoreCheckoutAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  state?: string;
  postcode: string;
  country: string;
  email?: string;
  phone?: string;
}

export interface StoreCheckoutResult {
  order_id: number;
  status: string;
  order_number: string;
  redirect_url?: string;
  payment_result?: {
    payment_status: string;
    redirect_url: string;
    payment_details: Array<{ key: string; value: string }>;
  };
}

/**
 * Process checkout via the Store API.
 * The Store API handles order creation + payment processing in one call.
 */
export async function processCheckout(
  session: StoreSession,
  billing: StoreCheckoutAddress,
  shipping: StoreCheckoutAddress,
  paymentMethodId: string,
  customerNote?: string
): Promise<StoreCheckoutResult> {
  const resp = await fetch(`${STORE_API}/checkout`, {
    method: 'POST',
    headers: {
      'Nonce': session.nonce,
      'Cart-Token': session.cartToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      billing_address: { ...billing, company: '' },
      shipping_address: { ...shipping, company: '' },
      payment_method: 'woocommerce_payments',
      payment_data: [
        { key: 'payment_method', value: 'woocommerce_payments' },
        { key: 'wcpay-payment-method', value: paymentMethodId },
        { key: 'wcpay-payment-type', value: 'card' },
        { key: 'wc-woocommerce_payments-new-payment-method', value: 'false' },
      ],
      ...(customerNote ? { customer_note: customerNote } : {}),
    }),
  });

  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}));
    throw new Error(error.message || 'Le paiement a échoué');
  }

  return resp.json();
}
