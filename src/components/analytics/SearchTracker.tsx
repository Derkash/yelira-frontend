'use client';

import { useEffect } from 'react';
import { trackSearch } from '@/lib/analytics';

export default function SearchTracker({
  query,
  resultsCount,
}: {
  query: string;
  resultsCount: number;
}) {
  useEffect(() => {
    if (query) {
      trackSearch(query, resultsCount);
    }
  }, [query, resultsCount]);

  return null;
}
