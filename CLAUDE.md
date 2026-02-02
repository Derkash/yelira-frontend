# Yelira Frontend - Headless WooCommerce

Frontend Next.js pour la boutique Yelira (mode modeste pour femmes musulmanes).
Architecture **Headless** : WordPress/WooCommerce en backend API uniquement.

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Langage** : TypeScript
- **Backend** : WooCommerce REST API v3

## Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── shop/              # Page boutique
│   ├── product/[slug]/    # Page produit
│   ├── category/[slug]/   # Pages catégories
│   ├── cart/              # Panier
│   ├── search/            # Recherche
│   └── account/           # Mon compte
├── components/
│   ├── layout/            # Header, Footer, MobileNav
│   └── product/           # ProductCard
├── context/
│   └── CartContext.tsx    # État du panier (React Context)
├── lib/
│   └── woocommerce.ts     # Client API WooCommerce
└── types/
    └── woocommerce.ts     # Types TypeScript
```

## API WooCommerce

Les credentials sont dans `src/lib/woocommerce.ts` :
- URL : `https://www.yelira.fr/wp-json/wc/v3`
- Cache : 60 secondes (configurable dans `next: { revalidate }`)

### Fonctions disponibles

```typescript
// Produits
getProducts(params)         // Liste avec filtres
getProduct(idOrSlug)        // Produit par ID ou slug
getProductVariations(id)    // Variations d'un produit variable
getRelatedProducts(id)      // Produits similaires
getFeaturedProducts(limit)  // Produits mis en avant
getOnSaleProducts(limit)    // Produits en promo
getNewProducts(limit)       // Nouveautés
searchProducts(query)       // Recherche

// Catégories
getCategories(params)       // Liste des catégories
getCategory(idOrSlug)       // Catégorie par ID ou slug
getMainCategories()         // Catégories parentes

// Helpers
formatPrice(price)          // Formater en EUR
calculateDiscount(regular, sale)  // Calculer % réduction
```

## Design System

### Couleurs (CSS variables)

```css
--yelira-black: #1a1a1a;
--yelira-white: #ffffff;
--yelira-taupe: #997a6e;      /* Accent principal */
--yelira-beige: #f5f1eb;
--yelira-cream: #faf8f5;
--yelira-gold: #c9a962;
--yelira-red: #c41e3a;        /* Soldes */
```

### Typography

- **Titres** : Cormorant Garamond (serif)
- **Corps** : Inter (sans-serif)

### Conventions de style

- Tailles de texte en pixels : `text-[13px]`, `text-[14px]`
- Tracking : `tracking-[0.1em]`, `tracking-[0.15em]`
- Uppercase pour labels : `uppercase tracking-wider`
- Transitions : `transition-colors`, `duration-300`

## Panier

Le panier utilise React Context avec localStorage :

```typescript
const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
```

Le panier persiste entre les sessions. Le checkout redirige vers WooCommerce.

## Images

Les images sont chargées depuis `www.yelira.fr`. Configuration dans `next.config.ts` :

```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'www.yelira.fr', pathname: '/wp-content/**' }
  ]
}
```

## Commandes

```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # ESLint
```

## Déploiement

Prévu pour Vercel. Variables d'environnement à configurer si nécessaire.

## Notes

- L'authentification redirige vers WooCommerce (`/mon-compte/`)
- Pour une vraie auth headless, installer JWT Authentication sur WordPress
- Les pages catégories sont des Server Components (SSR + cache)
- Les pages produits sont des Client Components (pour le panier interactif)
