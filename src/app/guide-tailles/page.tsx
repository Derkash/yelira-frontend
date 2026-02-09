import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guide des Tailles',
  description:
    'Guide des tailles Yelira : trouvez la taille idéale pour vos abayas, hijabs, jilbabs et burkinis. Tableaux de correspondance et conseils.',
  alternates: { canonical: 'https://www.yelira.fr/guide-tailles' },
};

export default function GuideTaillesPage() {
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
            <span className="text-[#1a1a1a]">Guide des tailles</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.05em] mb-3">
            Guide des Tailles
          </h1>
          <p className="text-[14px] text-gray-600">
            Trouvez la taille idéale pour chaque vêtement
          </p>
        </div>

        <div className="space-y-8">
          {/* Comment prendre ses mesures */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Comment prendre vos mesures</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Pour choisir la bonne taille, munissez-vous d&apos;un mètre ruban et prenez
              vos mesures directement sur le corps, en portant un sous-vêtement léger.
            </p>
            <div className="space-y-3 text-[14px] text-gray-600">
              <p><strong className="text-[#1a1a1a] font-medium">Tour de poitrine :</strong> Mesurez horizontalement à l&apos;endroit le plus fort de la poitrine.</p>
              <p><strong className="text-[#1a1a1a] font-medium">Tour de taille :</strong> Mesurez à l&apos;endroit le plus creux, au niveau du nombril.</p>
              <p><strong className="text-[#1a1a1a] font-medium">Tour de hanches :</strong> Mesurez à l&apos;endroit le plus large du bassin.</p>
              <p><strong className="text-[#1a1a1a] font-medium">Longueur :</strong> Mesurez de l&apos;épaule jusqu&apos;à la cheville souhaitée.</p>
            </div>
          </section>

          {/* Abayas & Robes */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-6">Abayas & Robes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Taille</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Poitrine</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Taille</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Longueur</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { size: 'S (36-38)', chest: '84-90', waist: '66-72', length: '138' },
                    { size: 'M (38-40)', chest: '90-96', waist: '72-78', length: '140' },
                    { size: 'L (40-42)', chest: '96-102', waist: '78-84', length: '142' },
                    { size: 'XL (42-44)', chest: '102-108', waist: '84-90', length: '144' },
                    { size: 'XXL (44-46)', chest: '108-114', waist: '90-96', length: '146' },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#1a1a1a]">{row.size}</td>
                      <td className="py-3 px-4 text-center">{row.chest} cm</td>
                      <td className="py-3 px-4 text-center">{row.waist} cm</td>
                      <td className="py-3 px-4 text-center">{row.length} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Hijabs */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-6">Hijabs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Type</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Dimensions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { type: 'Hijab carré', dim: '110 x 110 cm' },
                    { type: 'Hijab rectangulaire', dim: '70 x 180 cm' },
                    { type: 'Hijab jersey', dim: '70 x 180 cm' },
                    { type: 'Hijab soie de Médine', dim: '70 x 200 cm' },
                    { type: 'Hijab mousseline', dim: '70 x 180 cm' },
                    { type: 'Châle / Pashmina', dim: '70 x 200 cm' },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#1a1a1a]">{row.type}</td>
                      <td className="py-3 px-4 text-center">{row.dim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Jilbabs */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-6">Jilbabs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Taille</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Stature</th>
                    <th className="py-3 px-4 text-center font-semibold tracking-[0.1em] uppercase text-[11px] text-gray-500">Longueur haut</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { size: 'S', height: '1m55 - 1m60', length: '100 cm' },
                    { size: 'M', height: '1m60 - 1m65', length: '105 cm' },
                    { size: 'L', height: '1m65 - 1m70', length: '110 cm' },
                    { size: 'XL', height: '1m70 - 1m75', length: '115 cm' },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#1a1a1a]">{row.size}</td>
                      <td className="py-3 px-4 text-center">{row.height}</td>
                      <td className="py-3 px-4 text-center">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Conseil */}
          <section className="bg-white p-6 md:p-8">
            <h2 className="font-serif text-[20px] mb-4">Besoin d&apos;aide ?</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Si vous hésitez entre deux tailles, n&apos;hésitez pas à nous contacter par email à{' '}
              <a href="mailto:contact@yelira.fr" className="text-[#997a6e] hover:underline">
                contact@yelira.fr
              </a>. Notre équipe se fera un plaisir de vous conseiller.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
