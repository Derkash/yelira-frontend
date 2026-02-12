import { NextRequest, NextResponse } from 'next/server';
import { wcServerFetch } from '@/lib/wc-server';
import type { Order } from '@/types/checkout';

export async function POST(request: NextRequest) {
  try {
    const { order_id } = await request.json();

    if (!order_id) {
      return NextResponse.json(
        { error: 'order_id manquant' },
        { status: 400 }
      );
    }

    // Fetch the order from WooCommerce
    const order = await wcServerFetch<Order>(`/orders/${order_id}`);

    return NextResponse.json({
      id: order.id,
      number: order.number,
      status: order.status,
      total: order.total,
      currency: order.currency,
      date_created: order.date_created,
      billing: order.billing,
      shipping: order.shipping,
      line_items: order.line_items,
      shipping_lines: order.shipping_lines,
      coupon_lines: order.coupon_lines,
    });
  } catch (error) {
    console.error('Order confirm error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Impossible de récupérer la commande' },
      { status: 500 }
    );
  }
}
