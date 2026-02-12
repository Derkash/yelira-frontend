export interface Address {
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

export interface CheckoutLineItem {
  product_id: number;
  variation_id?: number;
  quantity: number;
}

export interface CheckoutRequest {
  billing: Address;
  shipping: Address;
  line_items: CheckoutLineItem[];
  coupon_code?: string;
  shipping_method: 'flat_rate' | 'free_shipping';
  customer_note?: string;
}

export interface CheckoutResponse {
  client_secret: string;
  order_id: number;
  order_total: string;
}

export interface ConfirmRequest {
  payment_intent_id: string;
  order_id: number;
}

export interface Order {
  id: number;
  number: string;
  status: string;
  total: string;
  currency: string;
  date_created: string;
  billing: Address;
  shipping: Address;
  line_items: OrderLineItem[];
  shipping_lines: ShippingLine[];
  coupon_lines: CouponLine[];
}

export interface OrderLineItem {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  subtotal: string;
  total: string;
  price: number;
  image: { src: string };
}

export interface ShippingLine {
  method_id: string;
  method_title: string;
  total: string;
}

export interface CouponLine {
  code: string;
  discount: string;
}
