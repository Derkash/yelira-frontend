import { NextRequest, NextResponse } from 'next/server';
import { wcServerFetch } from '@/lib/wc-server';

interface WCCoupon {
  id: number;
  code: string;
  amount: string;
  discount_type: 'percent' | 'fixed_cart' | 'fixed_product';
  description: string;
  date_expires: string | null;
  usage_count: number;
  usage_limit: number | null;
  minimum_amount: string;
  maximum_amount: string;
}

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { valid: false, error: 'Code promo manquant' },
        { status: 400 }
      );
    }

    const coupons = await wcServerFetch<WCCoupon[]>(
      `/coupons?code=${encodeURIComponent(code.trim())}`
    );

    if (coupons.length === 0) {
      return NextResponse.json({ valid: false, error: 'Code promo invalide' });
    }

    const coupon = coupons[0];

    // Check expiry
    if (coupon.date_expires) {
      const expiryDate = new Date(coupon.date_expires);
      if (expiryDate < new Date()) {
        return NextResponse.json({ valid: false, error: 'Code promo expiré' });
      }
    }

    // Check usage limit
    if (coupon.usage_limit && coupon.usage_count >= coupon.usage_limit) {
      return NextResponse.json({ valid: false, error: 'Code promo épuisé' });
    }

    return NextResponse.json({
      valid: true,
      code: coupon.code,
      discount_type: coupon.discount_type,
      amount: coupon.amount,
      description: coupon.description,
      minimum_amount: coupon.minimum_amount,
    });
  } catch (error) {
    console.error('Coupon validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Erreur lors de la vérification du code promo' },
      { status: 500 }
    );
  }
}
