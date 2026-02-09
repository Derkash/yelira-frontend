import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description:
    'Politique de confidentialité Yelira : découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  alternates: { canonical: 'https://www.yelira.fr/confidentialite' },
};

export default function ConfidentialitePage() {
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
            <span className="text-[#1a1a1a]">Politique de confidentialité</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Politique de Confidentialité
          </h1>
          <p className="text-[14px] text-gray-600">
            Dernière mise à jour : 1er janvier 2026
          </p>
        </div>

        <div className="bg-white p-6 md:p-8">
          <div className="space-y-8 text-[14px] text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">1. Responsable du traitement</h2>
              <p>
                Yelira est responsable du traitement des données personnelles collectées
                sur le site www.yelira.fr. Pour toute question relative à la protection
                de vos données, contactez-nous à{' '}
                <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                  contact@yelira.fr
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">2. Données collectées</h2>
              <p className="mb-3">Nous collectons les données suivantes :</p>
              <ul className="space-y-2 pl-5 list-disc">
                <li><strong className="text-[#1a1a1a] font-medium">Données d&apos;identification :</strong> nom, prénom, adresse email</li>
                <li><strong className="text-[#1a1a1a] font-medium">Données de livraison :</strong> adresse postale, numéro de téléphone</li>
                <li><strong className="text-[#1a1a1a] font-medium">Données de paiement :</strong> traitées de manière sécurisée par nos prestataires (nous ne stockons aucune donnée bancaire)</li>
                <li><strong className="text-[#1a1a1a] font-medium">Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">3. Finalités du traitement</h2>
              <p className="mb-3">Vos données sont utilisées pour :</p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Traiter et expédier vos commandes</li>
                <li>Gérer votre compte client</li>
                <li>Vous envoyer des communications commerciales (avec votre consentement)</li>
                <li>Améliorer notre site et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur : l&apos;exécution du contrat de vente
                (commandes), votre consentement (newsletter, cookies), notre intérêt légitime
                (amélioration du site) et nos obligations légales (facturation, comptabilité).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">5. Durée de conservation</h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Données clients : 3 ans après la dernière commande</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
                <li>Données de navigation : 13 mois maximum</li>
                <li>Newsletter : jusqu&apos;au désabonnement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">6. Partage des données</h2>
              <p>
                Vos données peuvent être partagées avec nos prestataires de services
                (livraison, paiement, hébergement) dans la stricte mesure nécessaire à
                l&apos;exécution de leurs prestations. Nous ne vendons jamais vos données
                personnelles à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">7. Vos droits</h2>
              <p className="mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li><strong className="text-[#1a1a1a] font-medium">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
                <li><strong className="text-[#1a1a1a] font-medium">Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong className="text-[#1a1a1a] font-medium">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                <li><strong className="text-[#1a1a1a] font-medium">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong className="text-[#1a1a1a] font-medium">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong className="text-[#1a1a1a] font-medium">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                  contact@yelira.fr
                </a>. Vous pouvez également introduire une réclamation auprès de la CNIL
                (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">8. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre tout accès non autorisé,
                modification, divulgation ou destruction. Les transactions de paiement sont
                chiffrées via le protocole SSL/TLS.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[18px] text-[#1a1a1a] mb-3">9. Cookies</h2>
              <p>
                Notre site utilise des cookies. Pour en savoir plus sur l&apos;utilisation des
                cookies et comment les gérer, consultez notre{' '}
                <Link href="/cookies" className="text-[#997a6e] hover:underline">
                  Politique de cookies
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
