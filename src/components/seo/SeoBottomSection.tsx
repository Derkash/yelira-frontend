import Link from 'next/link';
import { SeoContent } from '@/data/seo-content';
import { seoPages } from '@/data/seo-pages';

interface SeoBottomSectionProps {
  content: SeoContent;
  showRelatedLinks?: boolean;
}

export default function SeoBottomSection({ content, showRelatedLinks = true }: SeoBottomSectionProps) {
  return (
    <div id="seo-guide" className="border-t border-gray-100 bg-[#faf8f5]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Guide Title */}
        <h2 className="font-serif text-[22px] md:text-[28px] tracking-[0.03em] mb-8 text-[#1a1a1a]">
          {content.guideTitle}
        </h2>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-[16px] md:text-[17px] font-medium mb-3 text-[#1a1a1a]">
                {section.title}
              </h3>
              <div
                className="text-[14px] text-gray-600 leading-relaxed [&>p]:mb-2.5 [&_strong]:text-[#1a1a1a] [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-2.5 [&_li]:mb-1 [&_li]:text-[14px]"
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        {content.faq && content.faq.length > 0 && (
          <div className="mb-10 pt-8 border-t border-gray-200">
            <h3 className="font-serif text-[18px] md:text-[20px] tracking-[0.03em] mb-6 text-[#1a1a1a]">
              Questions fréquentes
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {content.faq.map((item, index) => (
                <div key={index}>
                  <h4 className="text-[14px] font-medium mb-1.5 text-[#1a1a1a]">
                    {item.question}
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Internal Links */}
        {showRelatedLinks && (
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-4">
              Découvrez aussi
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.relatedLinks?.map((link) => (
                <Link
                  key={link.slug}
                  href={link.href}
                  className="px-3 py-2 bg-white text-[12px] text-gray-600 hover:bg-[#997a6e] hover:text-white transition-colors border border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              {(!content.relatedLinks || content.relatedLinks.length === 0) && (
                <>
                  {seoPages.slice(0, 10).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/s/${p.slug}`}
                      className="px-3 py-2 bg-white text-[12px] text-gray-600 hover:bg-[#997a6e] hover:text-white transition-colors border border-gray-100"
                    >
                      {p.keyword}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
