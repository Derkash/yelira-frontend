import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes',
  description:
    'Retrouvez les réponses à toutes vos questions sur Yelira : commandes, livraison, retours, tailles, paiement et bien plus.',
  alternates: { canonical: 'https://www.yelira.fr/faq' },
};

const faqItems = [
  {
    category: 'Commandes',
    questions: [
      {
        q: 'Comment passer une commande ?',
        a: 'Parcourez notre boutique, ajoutez les articles souhaités à votre panier, puis procédez au paiement. Vous recevrez un email de confirmation dès la validation de votre commande.',
      },
      {
        q: 'Puis-je modifier ou annuler ma commande ?',
        a: 'Vous pouvez modifier ou annuler votre commande tant qu\'elle n\'a pas été expédiée. Contactez-nous rapidement par email à contact@yelira.fr avec votre numéro de commande.',
      },
      {
        q: 'Quels moyens de paiement acceptez-vous ?',
        a: 'Nous acceptons les cartes bancaires (Visa, Mastercard, CB), ainsi que PayPal. Tous les paiements sont sécurisés.',
      },
    ],
  },
  {
    category: 'Livraison',
    questions: [
      {
        q: 'Quels sont les délais de livraison ?',
        a: 'Les commandes sont expédiées sous 24 à 48h. La livraison en point relais prend 3 à 5 jours ouvrés, la livraison à domicile 2 à 4 jours ouvrés.',
      },
      {
        q: 'La livraison est-elle gratuite ?',
        a: 'Oui, la livraison est gratuite en point relais dès 69€ d\'achat en France métropolitaine et en Belgique. En dessous, les frais de livraison sont de 5,90€.',
      },
      {
        q: 'Livrez-vous en dehors de la France ?',
        a: 'Nous livrons actuellement en France métropolitaine et en Belgique. D\'autres destinations seront bientôt disponibles.',
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Un email contenant votre numéro de suivi vous est envoyé dès l\'expédition. Vous pouvez également suivre votre commande depuis votre espace client.',
      },
    ],
  },
  {
    category: 'Retours & Échanges',
    questions: [
      {
        q: 'Quel est le délai de retour ?',
        a: 'Vous disposez de 14 jours après réception pour retourner un article. Les articles doivent être dans leur état d\'origine, non portés, non lavés, avec les étiquettes.',
      },
      {
        q: 'Comment effectuer un retour ?',
        a: 'Contactez-nous par email à contact@yelira.fr. Nous vous enverrons un bon de retour et une étiquette prépayée. Le remboursement est effectué sous 7 à 14 jours ouvrés.',
      },
      {
        q: 'Puis-je échanger un article ?',
        a: 'Oui, les échanges de taille ou de couleur sont possibles. Contactez-nous et nous organiserons l\'échange. Les frais de retour pour échange sont pris en charge.',
      },
    ],
  },
  {
    category: 'Tailles & Produits',
    questions: [
      {
        q: 'Comment choisir ma taille ?',
        a: 'Consultez notre guide des tailles pour trouver la taille idéale. En cas de doute, n\'hésitez pas à nous contacter, notre équipe vous conseillera.',
      },
      {
        q: 'Les couleurs sont-elles fidèles aux photos ?',
        a: 'Nous faisons notre maximum pour que les photos reflètent fidèlement les couleurs. Cependant, de légères variations peuvent exister selon les écrans.',
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqForJsonLd = faqItems.flatMap((cat) =>
    cat.questions.map((q) => ({ question: q.q, answer: q.a }))
  );

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <FAQJsonLd questions={allFaqForJsonLd} />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-[11px] text-gray-500 tracking-[0.1em] uppercase">
            <Link href="/" className="hover:text-[#997a6e] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">FAQ</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Questions Fréquentes
          </h1>
          <p className="text-[14px] text-gray-600">
            Retrouvez les réponses à vos questions les plus courantes
          </p>
        </div>

        <div className="space-y-8">
          {faqItems.map((category) => (
            <section key={category.category} className="bg-white p-6 md:p-8">
              <h2 className="font-serif text-[20px] mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.questions.map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-[14px] font-semibold mb-2">{item.q}</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Contact CTA */}
          <section className="bg-white p-6 md:p-8 text-center">
            <h2 className="font-serif text-[20px] mb-3">Vous n&apos;avez pas trouvé votre réponse ?</h2>
            <p className="text-[14px] text-gray-600 mb-6">
              Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
            </p>
            <a
              href="mailto:contact@yelira.fr"
              className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-[#997a6e] transition-colors"
            >
              Nous contacter
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
