'use client';

import { useState, useRef, useEffect } from 'react';

interface CollapsibleIntroProps {
  title: string;
  html: string;
  maxHeight?: number;
  seoSectionId?: string;
}

export default function CollapsibleIntro({
  title,
  html,
  maxHeight = 48,
  seoSectionId = 'seo-guide',
}: CollapsibleIntroProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsCollapse(contentRef.current.scrollHeight > maxHeight + 20);
    }
  }, [html, maxHeight]);

  return (
    <div className="py-3 md:py-10 border-b border-gray-100">
      <div className="max-w-[900px]">
        <h2 className="font-serif text-[18px] md:text-[22px] tracking-[0.03em] mb-4 text-[#1a1a1a]">
          {title}
        </h2>
        <div className="relative">
          <div
            ref={contentRef}
            className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed [&>p]:mb-3 [&_strong]:text-[#1a1a1a] [&_strong]:font-medium overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{ maxHeight: isExpanded || !needsCollapse ? '2000px' : `${maxHeight}px` }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {needsCollapse && !isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        {needsCollapse && (
          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[13px] font-medium text-[#997a6e] hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
            >
              {isExpanded ? 'Voir moins' : 'Voir plus'}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a
              href={`#${seoSectionId}`}
              className="text-[13px] text-gray-400 hover:text-[#997a6e] transition-colors flex items-center gap-1"
            >
              En savoir plus
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
