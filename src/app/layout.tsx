import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { ActiveTabProvider } from '@/context/ActiveTabContext';
import HeaderWithData from '@/components/layout/HeaderWithData';
import Footer from '@/components/layout/Footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yelira.fr'),
  title: {
    default: 'Yelira - Mode Modeste pour Femmes Musulmanes | Abaya, Hijab, Jilbab',
    template: '%s | Yelira',
  },
  description: 'Boutique en ligne de mode modeste pour femmes musulmanes. Abayas, Hijabs, Jilbabs, Robes et plus. Livraison gratuite dès 69€. Paiement sécurisé.',
  keywords: 'mode modeste, abaya, hijab, jilbab, khimar, burkini, femme musulmane, vêtements islamiques, abaya dubai, abaya pas cher, hijab jersey',
  openGraph: {
    title: 'Yelira - Mode Modeste Élégante',
    description: 'Découvrez notre collection de vêtements alliant pudeur, modernité et raffinement. Abayas, Hijabs, Jilbabs et plus.',
    url: 'https://www.yelira.fr',
    siteName: 'Yelira',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yelira - Mode Modeste Élégante',
    description: 'Découvrez notre collection de vêtements alliant pudeur, modernité et raffinement.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.yelira.fr',
  },
  verification: {
    google: 'Dy0nBS-UoqhSJL97RIyxJnPNUGoG-dIlAvt1c-2XLYY',
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
        <OrganizationJsonLd
          name="Yelira"
          url="https://www.yelira.fr"
          description="Boutique en ligne de mode modeste pour femmes musulmanes. Abayas, Hijabs, Jilbabs, Robes et plus."
          sameAs={[
            'https://instagram.com/yelira_boutique',
            'https://facebook.com/yelira',
            'https://tiktok.com/@yelira_boutique',
          ]}
        />
        <WebSiteJsonLd
          name="Yelira"
          url="https://www.yelira.fr"
          description="Boutique en ligne de mode modeste pour femmes musulmanes"
          searchUrl="https://www.yelira.fr/search?q={search_term_string}"
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <ActiveTabProvider>
            <HeaderWithData />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ActiveTabProvider>
        </CartProvider>
      </body>
    </html>
  );
}
