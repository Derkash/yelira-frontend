import { NextRequest, NextResponse } from 'next/server';
import {
  createSession,
  addItemToCart,
  applyCoupon,
  processCheckout,
} from '@/lib/store-api';
import type { StoreCheckoutAddress } from '@/lib/store-api';

interface CheckoutBody {
  items: Array<{
    product_id: number;
    variation_id?: number;
    quantity: number;
  }>;
  billing: StoreCheckoutAddress;
  shipping: StoreCheckoutAddress;
  payment_method_id: string;
  coupon_code?: string;
  customer_note?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutBody = await request.json();

    // Validate required fields
    if (!body.items?.length) {
      return NextResponse.json(
        { error: 'Le panier est vide' },
        { status: 400 }
      );
    }
    if (!body.payment_method_id) {
      return NextResponse.json(
        { error: 'Méthode de paiement manquante' },
        { status: 400 }
      );
    }
    if (!body.billing?.email || !body.billing?.first_name || !body.billing?.last_name) {
      return NextResponse.json(
        { error: 'Informations de facturation incomplètes' },
        { status: 400 }
      );
    }

    // Step 1: Create a fresh Store API session
    let session = await createSession();

    // Step 2: Add all items to the Store API cart
    for (const item of body.items) {
      session = await addItemToCart(
        session,
        item.product_id,
        item.quantity,
        item.variation_id
      );
    }

    // Step 3: Apply coupon if provided
    if (body.coupon_code) {
      try {
        session = await applyCoupon(session, body.coupon_code);
      } catch (err) {
        return NextResponse.json(
          { error: (err as Error).message },
          { status: 400 }
        );
      }
    }

    // Step 4: Process checkout (creates order + processes payment)
    const result = await processCheckout(
      session,
      body.billing,
      body.shipping,
      body.payment_method_id,
      body.customer_note
    );

    return NextResponse.json({
      order_id: result.order_id,
      order_number: result.order_number,
      status: result.status,
      redirect_url: result.payment_result?.redirect_url,
      payment_status: result.payment_result?.payment_status,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Une erreur est survenue lors du paiement' },
      { status: 500 }
    );
  }
}
