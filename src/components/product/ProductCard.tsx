'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/types/woocommerce';
import { formatPrice, calculateDiscount, getProductImage } from '@/lib/woocommerce';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const mainImage = getProductImage(product, 0);
  const hoverImage = product.images.length > 1 ? getProductImage(product, 1) : mainImage;
  const discount = product.on_sale ? calculateDiscount(product.regular_price, product.sale_price) : 0;

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.type === 'variable') {
      window.location.href = `/product/${product.slug}`;
      return;
    }

    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Neyssa Style */}
      <div className="relative aspect-[3/4] bg-[#f5f1eb] overflow-hidden mb-4">
        {/* Main Image */}
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-700 ${
            isHovered && hoverImage !== mainImage ? 'opacity-0' : 'opacity-100'
          } group-hover:scale-105`}
          priority={priority}
        />

        {/* Hover Image */}
        {hoverImage !== mainImage && (
          <Image
            src={hoverImage}
            alt={`${product.name} - vue alternative`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-700 absolute inset-0 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges - Neyssa Style */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
          {product.on_sale && discount > 0 && (
            <span className="bg-[#c41e3a] text-white text-[10px] font-bold tracking-wide px-2 py-1">
              -{discount}%
            </span>
          )}
          {product.featured && (
            <span className="bg-[#997a6e] text-white text-[10px] font-bold tracking-wide px-2 py-1">
              NEW
            </span>
          )}
        </div>

        {/* Out of Stock Overlay */}
        {product.stock_status === 'outofstock' && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
            <span className="bg-[#1a1a1a] text-white text-[10px] font-bold tracking-wider uppercase px-4 py-2">
              Rupture de stock
            </span>
          </div>
        )}

        {/* Wishlist Button - Neyssa Style */}
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // TODO: Add wishlist functionality
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick Add Button - Neyssa Style */}
        {product.stock_status === 'instock' && (
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className={`absolute bottom-0 left-0 right-0 py-3 text-center text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
              isAdding
                ? 'bg-[#997a6e] text-white translate-y-0'
                : 'bg-white/95 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white translate-y-full group-hover:translate-y-0'
            }`}
          >
            {isAdding ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" />
                </svg>
                Ajouté
              </span>
            ) : product.type === 'variable' ? (
              'Choisir options'
            ) : (
              'Ajout rapide'
            )}
          </button>
        )}
      </div>

      {/* Product Info - Neyssa Style */}
      <div className="text-center">
        {/* Product Name */}
        <h3 className="text-[13px] md:text-[14px] font-normal text-[#1a1a1a] leading-snug mb-2 line-clamp-2 group-hover:text-[#997a6e] transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-center gap-2">
          {product.on_sale ? (
            <>
              <span className="text-[14px] font-medium text-[#c41e3a]">
                {formatPrice(product.sale_price)}
              </span>
              <span className="text-[13px] text-gray-400 line-through">
                {formatPrice(product.regular_price)}
              </span>
            </>
          ) : (
            <span className="text-[14px] font-medium text-[#1a1a1a]">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
