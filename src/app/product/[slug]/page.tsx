'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import {
  getProduct,
  getProductVariations,
  getRelatedProducts,
  formatPrice,
  calculateDiscount,
} from '@/lib/woocommerce';
import type { Product, Variation } from '@/types/woocommerce';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UI State
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'shipping'>('description');
  const [addedToCart, setAddedToCart] = useState(false);

  // Fetch product data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const productData = await getProduct(slug);
        setProduct(productData);

        // Fetch variations if variable product
        if (productData.type === 'variable' && productData.variations?.length > 0) {
          const variationsData = await getProductVariations(productData.id);
          setVariations(variationsData);
        }

        // Fetch related products
        if (productData.related_ids && productData.related_ids.length > 0) {
          const related = await getRelatedProducts(productData.id, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        setError('Produit non trouvé');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  // Find matching variation when attributes change
  useEffect(() => {
    if (!product || variations.length === 0) return;

    const matchingVariation = variations.find((variation) => {
      return variation.attributes.every((attr) => {
        const selectedValue = selectedAttributes[attr.name];
        return !selectedValue || attr.option === selectedValue;
      });
    });

    setSelectedVariation(matchingVariation || null);
  }, [selectedAttributes, variations, product]);

  const handleAttributeSelect = (attributeName: string, value: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(product, quantity, selectedVariation || undefined, selectedAttributes);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const currentPrice = selectedVariation ? selectedVariation.price : product?.price || '0';
  const regularPrice = selectedVariation
    ? selectedVariation.regular_price
    : product?.regular_price || '0';
  const isOnSale = selectedVariation
    ? selectedVariation.on_sale
    : product?.on_sale;

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--yelira-cream)]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-[3/4] bg-gray-200 animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 animate-pulse w-3/4" />
              <div className="h-6 bg-gray-200 animate-pulse w-1/4" />
              <div className="h-32 bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[var(--yelira-cream)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">{error || 'Produit non trouvé'}</h1>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-[var(--yelira-black)] text-white text-sm uppercase tracking-wider hover:bg-[var(--yelira-taupe)] transition-colors"
          >
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--yelira-cream)]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500 tracking-wider uppercase">
            <Link href="/" className="hover:text-[var(--yelira-taupe)] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-[var(--yelira-taupe)] transition-colors">
              Boutique
            </Link>
            {product.categories && product.categories[0] && (
              <>
                <span className="mx-2">/</span>
                <Link
                  href={`/category/${product.categories[0].slug}`}
                  className="hover:text-[var(--yelira-taupe)] transition-colors"
                >
                  {product.categories[0].name}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-[var(--yelira-black)]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-white overflow-hidden group">
              {product.images && product.images[selectedImage] && (
                <Image
                  src={product.images[selectedImage].src}
                  alt={product.images[selectedImage].alt || product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              )}

              {/* Sale Badge */}
              {isOnSale && (
                <div className="absolute top-4 left-4 bg-[var(--yelira-red)] text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                  -{calculateDiscount(regularPrice, currentPrice)}%
                </div>
              )}

              {/* Navigation Arrows */}
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 flex-shrink-0 bg-white overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-[var(--yelira-black)]'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Title & Price */}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[var(--yelira-black)] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              {isOnSale ? (
                <>
                  <span className="text-2xl font-medium text-[var(--yelira-red)]">
                    {formatPrice(currentPrice)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(regularPrice)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium">{formatPrice(currentPrice)}</span>
              )}
            </div>

            {/* Short Description */}
            {product.short_description && (
              <div
                className="text-gray-600 text-sm leading-relaxed mb-8 prose prose-sm"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            )}

            {/* Variations */}
            {product.type === 'variable' && product.attributes && (
              <div className="space-y-6 mb-8">
                {product.attributes
                  .filter((attr) => attr.variation)
                  .map((attribute) => (
                    <div key={attribute.name}>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                        {attribute.name}
                        {selectedAttributes[attribute.name] && (
                          <span className="ml-2 font-normal text-[var(--yelira-black)]">
                            : {selectedAttributes[attribute.name]}
                          </span>
                        )}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {attribute.options.map((option) => {
                          const isSelected = selectedAttributes[attribute.name] === option;
                          const isColor = attribute.name.toLowerCase().includes('couleur') ||
                                         attribute.name.toLowerCase().includes('color');

                          return (
                            <button
                              key={option}
                              onClick={() => handleAttributeSelect(attribute.name, option)}
                              className={`${
                                isColor
                                  ? `w-8 h-8 rounded-full border-2 ${
                                      isSelected ? 'border-[var(--yelira-black)]' : 'border-gray-200'
                                    }`
                                  : `px-4 py-2 border text-sm ${
                                      isSelected
                                        ? 'border-[var(--yelira-black)] bg-[var(--yelira-black)] text-white'
                                        : 'border-gray-200 hover:border-gray-400'
                                    }`
                              } transition-all`}
                              title={option}
                            >
                              {!isColor && option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Quantité
              </label>
              <div className="flex items-center border border-gray-200 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.type === 'variable' && !selectedVariation}
              className={`w-full py-4 text-sm font-semibold uppercase tracking-wider transition-all ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : product.type === 'variable' && !selectedVariation
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[var(--yelira-black)] text-white hover:bg-[var(--yelira-taupe)]'
              }`}
            >
              {addedToCart ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ajouté au panier
                </span>
              ) : product.type === 'variable' && !selectedVariation ? (
                'Sélectionnez une option'
              ) : (
                'Ajouter au panier'
              )}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="text-center">
                <svg className="w-6 h-6 mx-auto mb-2 text-[var(--yelira-taupe)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-xs text-gray-500">Livraison 48h</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 mx-auto mb-2 text-[var(--yelira-taupe)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-500">Paiement sécurisé</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 mx-auto mb-2 text-[var(--yelira-taupe)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                <span className="text-xs text-gray-500">Retours 14 jours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16 border-t pt-12">
          <div className="flex border-b mb-8 overflow-x-auto">
            {[
              { id: 'description', label: 'Description' },
              { id: 'details', label: 'Détails' },
              { id: 'shipping', label: 'Livraison' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-[var(--yelira-black)] border-b-2 border-[var(--yelira-black)]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            {activeTab === 'description' && product.description && (
              <div
                className="prose prose-sm max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            {activeTab === 'details' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  <strong>SKU :</strong> {product.sku || 'N/A'}
                </p>
                {product.attributes &&
                  product.attributes
                    .filter((attr) => !attr.variation)
                    .map((attr) => (
                      <p key={attr.name} className="text-sm text-gray-600">
                        <strong>{attr.name} :</strong> {attr.options.join(', ')}
                      </p>
                    ))}
                {product.categories && (
                  <p className="text-sm text-gray-600">
                    <strong>Catégorie :</strong>{' '}
                    {product.categories.map((cat) => cat.name).join(', ')}
                  </p>
                )}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Livraison standard :</strong> 3-5 jours ouvrés - Gratuite dès 69€
                </p>
                <p>
                  <strong>Livraison express :</strong> 24-48h - 9,90€
                </p>
                <p>
                  <strong>Point relais :</strong> 3-5 jours ouvrés - Gratuite dès 49€
                </p>
                <p className="mt-6">
                  Les retours sont gratuits sous 14 jours. Consultez notre{' '}
                  <Link href="/retours" className="text-[var(--yelira-taupe)] underline">
                    politique de retour
                  </Link>{' '}
                  pour plus d&apos;informations.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
