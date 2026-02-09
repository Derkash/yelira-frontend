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
│   ├── layout.tsx         # Layout global (metadata SEO + JSON-LD)
│   ├── robots.ts          # Génération robots.txt
│   ├── sitemap.ts         # Génération sitemap.xml dynamique
│   ├── shop/              # Page boutique
│   ├── product/[slug]/    # Page produit (JSON-LD + SeoBottomSection)
│   ├── category/[slug]/   # Pages catégories (CollapsibleIntro + SeoBottomSection)
│   ├── s/[slug]/          # Pages SEO dynamiques (CollapsibleIntro + SeoBottomSection)
│   ├── cart/              # Panier (images avec fallback)
│   ├── search/            # Recherche
│   └── account/           # Mon compte
├── components/
│   ├── layout/            # Header, Footer, MobileNav
│   ├── product/           # ProductCard, ProductDetails
│   └── seo/
│       ├── JsonLd.tsx            # Composants JSON-LD réutilisables
│       ├── CollapsibleIntro.tsx  # Texte d'intro dépliable (client component)
│       └── SeoBottomSection.tsx  # Section SEO bas de page riche
├── context/
│   └── CartContext.tsx    # État du panier (React Context)
├── data/
│   ├── seo-pages.ts       # Données des pages SEO (/s/[slug])
│   ├── seo-content.ts     # Contenu SEO enrichi pour bas de page
│   └── category-descriptions.ts  # Textes SEO des catégories
├── lib/
│   └── woocommerce.ts     # Client API WooCommerce
└── types/
    └── woocommerce.ts     # Types TypeScript
```

## SEO

### Architecture SEO

Le site a 3 niveaux de pages optimisées pour le SEO :

1. **Pages catégories** (`/category/[slug]`) — Catégories WooCommerce existantes
2. **Pages SEO** (`/s/[slug]`) — Mots-clés sans catégorie correspondante (pattern Lunicar)
3. **Pages produits** (`/product/[slug]`) — Fiches produits individuelles

### Pages SEO dynamiques (`/s/[slug]`)

Système inspiré du projet Lunicar (pages thématiques). Permet de créer des landing pages SEO pour n'importe quel mot-clé sans avoir besoin d'une catégorie WooCommerce.

**Fichier de données** : `src/data/seo-pages.ts`

Chaque page SEO contient :
- `slug` : URL de la page (ex: `abaya-saoudienne`)
- `keyword` : Mot-clé principal
- `title` : Balise `<title>` (utilise `{ absolute: title }` pour éviter le template du layout)
- `h1` : Titre H1 de la page
- `metaDescription` : Meta description
- `introText` : Texte descriptif HTML (comme Neyssa Shop)
- `searchQuery` : Requête utilisée pour chercher les produits via l'API WooCommerce
- `relatedCategories` : Liens vers catégories associées
- `faq` : Questions/réponses pour le FAQ et le JSON-LD FAQPage

**Pour ajouter une nouvelle page SEO** : ajouter un objet dans le tableau `seoPages` de `src/data/seo-pages.ts`. La page sera automatiquement :
- Accessible à `/s/{slug}`
- Incluse dans le sitemap.xml
- Pré-rendue avec `generateStaticParams`

**Pages existantes** : abaya-saoudienne, abaya-manches-bouffantes, abaya-evasee, abaya-marocaine, gandoura-homme, abaya-homme, abaya-fillette, abaya-khimar, abaya-voile-integre, abaya-grande-taille, abaya-mariage, sous-abaya, abaya-soiree, makhawer, abaya-pas-cher, abaya-femme, abaya-moderne

### Descriptions de catégories (intro haut de page)

**Fichier** : `src/data/category-descriptions.ts`

Ajoute un texte descriptif dépliable en haut des pages catégories (style Neyssa Shop). Chaque description contient :
- `seoTitle` : Title SEO personnalisé
- `metaDescription` : Description SEO personnalisée
- `introTitle` : Titre H2 du bloc descriptif
- `introText` : Texte HTML descriptif

Le texte est affiché via le composant `CollapsibleIntro` (voir ci-dessous).

**Pour ajouter une description** : ajouter une entrée dans l'objet `categoryDescriptions` avec le slug de la catégorie comme clé.

**Catégories avec descriptions** : abayas, abaya-dubai, abaya-robe, abaya-papillon, abaya-kimono, abaya-brodee, abaya-satin, abaya-simple, abaya-noire, abaya-beige, abaya-blanche, hijabs, jilbabs, khimar, robes, burkini, homme

### Système d'enrichissement SEO (contenu bas de page)

**Fichier** : `src/data/seo-content.ts`

Contenu riche pour la section SEO en bas de TOUTES les pages (catégories, pages SEO, produits). Chaque entrée contient :
- `guideTitle` : Titre H2 de la section guide
- `sections[]` : Sous-sections avec titre + contenu HTML (affichées en grille 2 colonnes)
- `faq[]` : Questions/réponses (optionnel, aussi utilisé pour JSON-LD FAQPage)
- `relatedLinks[]` : Liens internes vers catégories et pages SEO

**Pour ajouter du contenu SEO** : ajouter une entrée dans l'objet `seoContent` avec le slug comme clé. Les pages sans contenu spécifique utilisent automatiquement `getDefaultSeoContent()`.

**Contenu enrichi existant** : abayas (guide complet avec histoire depuis Wikipedia, types, matières, conseils), abaya-dubai, hijabs, jilbabs, abaya-saoudienne, abaya-pas-cher, abaya-mariage, abaya-grande-taille

**API** : `getSeoContent(slug, fallbackName?, type?)` — retourne le contenu ou un fallback automatique.

### Composants SEO réutilisables

#### CollapsibleIntro (`src/components/seo/CollapsibleIntro.tsx`)

Composant client pour le texte d'intro dépliable en haut des pages catégories et SEO.
- Affiche un aperçu du texte (maxHeight configurable, défaut 120px)
- Bouton "Voir plus" / "Voir moins" pour déplier/replier
- Lien "En savoir plus" qui scroll vers la section `#seo-guide` en bas de page
- Détecte automatiquement si le texte est assez long pour nécessiter le collapse

Props : `title`, `html`, `maxHeight?`, `seoSectionId?`

#### SeoBottomSection (`src/components/seo/SeoBottomSection.tsx`)

Composant serveur pour la section SEO riche en bas de page (id="seo-guide").
- Guide avec titre H2 + sections en grille 2 colonnes
- Section FAQ intégrée
- Liens internes de maillage (catégories + pages SEO)
- Fallback vers les seoPages si pas de liens spécifiques
- Background `bg-[#faf8f5]`

Props : `content: SeoContent`, `showRelatedLinks?`

### JSON-LD Structured Data

**Fichier** : `src/components/seo/JsonLd.tsx`

Composants réutilisables :
- `OrganizationJsonLd` — Infos organisation (layout global)
- `WebSiteJsonLd` — Infos site + SearchAction (layout global)
- `BreadcrumbJsonLd` — Fil d'Ariane (catégories, produits, pages SEO)
- `ProductJsonLd` — Schema Product (pages produits)
- `FAQJsonLd` — Schema FAQPage (pages SEO avec FAQ)
- `CollectionPageJsonLd` — Schema CollectionPage (catégories, pages SEO)

### robots.txt et sitemap.xml

- `src/app/robots.ts` — Autorise tout sauf `/api/`, `/cart`, `/account`, `/checkout`
- `src/app/sitemap.ts` — Génère dynamiquement le sitemap avec :
  - Pages statiques (accueil, boutique)
  - Toutes les catégories WooCommerce non vides
  - Toutes les pages SEO de `seo-pages.ts`
  - Les 100 premiers produits

### Metadata globales

Le layout utilise un `title.template` : `%s | Yelira`. Les pages qui définissent leur propre titre complet doivent utiliser `{ absolute: title }` pour éviter la duplication.

## API WooCommerce

Les credentials sont dans `src/lib/woocommerce.ts` :
- URL : `https://wp.yelira.fr/wp-json/wc/v3`
- Cache : 300 secondes (5 min) via `next: { revalidate }`

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
- Textes SEO : `[&>p]:mb-3 [&_strong]:text-[#1a1a1a] [&_strong]:font-medium`

## Panier

Le panier utilise React Context avec localStorage :

```typescript
const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
```

Le panier persiste entre les sessions. Le checkout redirige vers WooCommerce.

Les images du panier utilisent `unoptimized` pour éviter les problèmes de domaine/protocole avec les images WooCommerce. Un placeholder SVG s'affiche si aucune image n'est disponible. Les URLs sont automatiquement converties de `http://` vers `https://`.

## Images

Les images sont chargées depuis `wp.yelira.fr` et `www.yelira.fr`. Configuration dans `next.config.ts` :

```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'wp.yelira.fr', pathname: '/wp-content/**' },
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
- Les pages produits utilisent un Server Component wrapper + Client Component pour l'interactivité
- Le pattern SEO pages (`/s/[slug]`) est inspiré du projet Lunicar (pages thématiques/villes)
- Les pages SEO utilisent `searchProducts()` pour trouver des produits pertinents
- `metadataBase` est configuré sur `https://www.yelira.fr` dans le layout
- Toutes les pages (catégories, SEO, produits) ont une section SEO en bas de page avec contenu enrichi
- Le contenu SEO de la catégorie "abayas" inclut des infos de Wikipedia (histoire, types, matières)
- Les pages produits héritent du contenu SEO de leur catégorie principale
- Benchmark SEO réalisé sur Neyssa Shop, Bretiny Paris et Wikipedia
