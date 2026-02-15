import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boutique Mode Modeste Femme | Abaya, Hijab, Jilbab - Yelira',
  description:
    'Explorez toute la collection Yelira : abayas, hijabs, jilbabs, burkinis et accessoires. Mode modeste élégante avec livraison gratuite dès 69€.',
  alternates: {
    canonical: 'https://www.yelira.fr/shop',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
