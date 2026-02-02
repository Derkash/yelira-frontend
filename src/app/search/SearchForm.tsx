'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchFormProps {
  initialQuery: string;
}

export default function SearchForm({ initialQuery }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un produit..."
        className="w-full text-[16px] md:text-[18px] py-4 px-5 pr-14 border-2 border-[#1a1a1a] focus:outline-none focus:border-[#997a6e] transition-colors bg-white"
        autoFocus
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:text-[#997a6e] transition-colors"
        aria-label="Rechercher"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
          <path strokeWidth="1.5" d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </form>
  );
}
