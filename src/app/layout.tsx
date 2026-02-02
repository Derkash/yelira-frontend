import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: 'Yelira - Mode Modeste pour Femmes Musulmanes',
  description: 'Boutique en ligne de mode modeste pour femmes musulmanes. Abayas, Hijabs, Jilbabs, Robes et plus. Livraison gratuite dès 69€.',
  keywords: 'mode modeste, abaya, hijab, jilbab, khimar, burkini, femme musulmane, vêtements islamiques',
  openGraph: {
    title: 'Yelira - Mode Modeste Élégante',
    description: 'Découvrez notre collection de vêtements alliant pudeur, modernité et raffinement.',
    url: 'https://www.yelira.fr',
    siteName: 'Yelira',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
