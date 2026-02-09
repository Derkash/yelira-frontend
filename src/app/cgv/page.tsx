import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description:
    'Conditions générales de vente de la boutique en ligne Yelira. Informations sur les commandes, paiements, livraisons et retours.',
  alternates: { canonical: 'https://www.yelira.fr/cgv' },
};

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="text-[11px] text-gray-500 tracking-[0.1em] uppercase">
            <Link href="/" className="hover:text-[#997a6e] transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">CGV</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Conditions Générales de Vente
          </h1>
          <p className="text-[14px] text-gray-600">
            En vigueur au 1er janvier 2026
          </p>
        </div>

        <div className="bg-white p-6 md:p-8">
          <div className="prose-custom space-y-8 text-[14px] text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 1 - Objet</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les ventes de produits
                effectuées sur le site internet www.yelira.fr (ci-après « le Site »), opéré par
                Yelira (ci-après « le Vendeur »).
              </p>
              <p className="mt-2">
                Toute commande passée sur le Site implique l&apos;acceptation sans réserve des
                présentes CGV par le client (ci-après « l&apos;Acheteur »).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 2 - Produits</h2>
              <p>
                Les produits proposés à la vente sont ceux décrits sur le Site. Chaque produit
                est accompagné d&apos;une description détaillée. Les photographies des produits sont
                les plus fidèles possibles mais ne peuvent assurer une similitude parfaite avec
                le produit réel, notamment en ce qui concerne les couleurs.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 3 - Prix</h2>
              <p>
                Les prix sont indiqués en euros, toutes taxes comprises (TTC). Le Vendeur se
                réserve le droit de modifier ses prix à tout moment, les produits étant facturés
                sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 4 - Commandes</h2>
              <p>
                L&apos;Acheteur passe commande sur le Site en ajoutant les produits souhaités à son
                panier puis en procédant au paiement. La commande est confirmée par l&apos;envoi
                d&apos;un email de confirmation. Le Vendeur se réserve le droit d&apos;annuler ou de
                refuser toute commande en cas de litige antérieur, de suspicion de fraude ou
                d&apos;indisponibilité du produit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 5 - Paiement</h2>
              <p>
                Le paiement est exigible immédiatement à la commande. L&apos;Acheteur peut effectuer
                le règlement par carte bancaire (Visa, Mastercard, CB) ou par PayPal.
                Les transactions sont sécurisées par notre prestataire de paiement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 6 - Livraison</h2>
              <p>
                Les produits sont livrés à l&apos;adresse indiquée par l&apos;Acheteur lors de la commande.
                Les délais de livraison sont indicatifs. La livraison est gratuite en France
                métropolitaine et en Belgique pour toute commande supérieure à 69€ en point relais.
                Pour plus de détails, consultez notre page{' '}
                <Link href="/livraison" className="text-[#997a6e] hover:underline">Livraison</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 7 - Droit de rétractation</h2>
              <p>
                Conformément à l&apos;article L221-18 du Code de la consommation, l&apos;Acheteur dispose
                d&apos;un délai de 14 jours à compter de la réception du produit pour exercer son
                droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="mt-2">
                Les articles retournés doivent être dans leur état d&apos;origine, non portés, non
                lavés, avec les étiquettes. Pour plus de détails, consultez notre page{' '}
                <Link href="/retours" className="text-[#997a6e] hover:underline">Retours & Échanges</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 8 - Garantie</h2>
              <p>
                Tous les produits vendus sur le Site bénéficient de la garantie légale de
                conformité (articles L217-4 et suivants du Code de la consommation) et de la
                garantie contre les vices cachés (articles 1641 et suivants du Code civil).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 9 - Protection des données</h2>
              <p>
                Les données personnelles collectées lors de la commande sont nécessaires au
                traitement de celle-ci. Elles sont traitées conformément à notre{' '}
                <Link href="/confidentialite" className="text-[#997a6e] hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 10 - Litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, une
                solution amiable sera recherchée avant toute action judiciaire.
                Conformément à l&apos;article L612-1 du Code de la consommation, le consommateur
                peut recourir gratuitement au service de médiation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">Article 11 - Contact</h2>
              <p>
                Pour toute question relative aux présentes CGV, vous pouvez nous contacter à
                l&apos;adresse email{' '}
                <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                  contact@yelira.fr
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
