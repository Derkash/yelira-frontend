'use client';

import { useRouter } from 'next/navigation';

interface CategoryFiltersProps {
  currentSort: string;
  productCount: number;
  slug: string;
}

export default function CategoryFilters({ currentSort, productCount, slug }: CategoryFiltersProps) {
  const router = useRouter();

  const handleSortChange = (sort: string) => {
    router.push(`/category/${slug}?sort=${sort}`);
  };

  return (
    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
      <p className="text-[13px] text-gray-600">
        {productCount} produit{productCount > 1 ? 's' : ''}
      </p>

      <div className="flex items-center gap-3">
        <label className="text-[11px] text-gray-500 tracking-wider uppercase">
          Trier par
        </label>
        <select
          value={currentSort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="border border-gray-200 py-2 px-3 text-[13px] bg-white focus:outline-none focus:border-[#997a6e] min-w-[150px]"
        >
          <option value="date">Nouveautés</option>
          <option value="popularity">Popularité</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>
    </div>
  );
}
