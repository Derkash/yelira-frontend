import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/product/ProductDetails';
import ProductCard from '@/components/product/ProductCard';
import {
  getProduct,
  getProductVariations,
  getRelatedProducts,
  getProducts,
} from '@/lib/woocommerce';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for popular products (pre-render at build time)
export async function generateStaticParams() {
  try {
    const products = await getProducts({ per_page: 50 });
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch {
    return [];
  }
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await getProduct(slug);

    const description = product.short_description
      ? product.short_description.replace(/<[^>]*>/g, '').slice(0, 160)
      : `Découvrez ${product.name} sur Yelira - Mode modeste et élégante`;

    return {
      title: `${product.name} | Yelira`,
      description,
      openGraph: {
        title: product.name,
        description,
        images: product.images?.[0]?.src ? [product.images[0].src] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description,
        images: product.images?.[0]?.src ? [product.images[0].src] : [],
      },
    };
  } catch {
    return {
      title: 'Produit | Yelira',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let product;
  try {
    product = await getProduct(slug);
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  // Fetch variations and related products in parallel
  const [variations, relatedProducts] = await Promise.all([
    product.type === 'variable' && product.variations?.length > 0
      ? getProductVariations(product.id)
      : Promise.resolve([]),
    product.related_ids && product.related_ids.length > 0
      ? getRelatedProducts(product.id, 4)
      : Promise.resolve([]),
  ]);

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
        {/* Product Details (Client Component for interactivity) */}
        <ProductDetails product={product} variations={variations} />

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
