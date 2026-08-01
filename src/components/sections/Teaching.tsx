import Image from "next/image";
import { Section, SectionHeader } from "@/components/layout/Section";
import type { SiteContent } from "@/types/content";

interface TeachingProps {
  content: SiteContent;
}

// Per-logo size overrides (default fills the box). These two are solid squares
// that reach every edge, so they read bigger than the transparent badges.
const LOGO_SIZE: Record<string, string> = {
  "/logos/certifications/somostera_logo.jpeg": "h-[90%] w-[90%]", // -10%
  "/logos/certifications/startse-logo.jpeg": "h-[90%] w-[90%]", // -10%
};

export function Teaching({ content }: TeachingProps) {
  const { teaching } = content;

  return (
    <Section id="educacao" aria-labelledby="teaching-title">
      <SectionHeader
        id="teaching-title"
        label={teaching.sectionLabel}
        title={teaching.title}
        subtitle={teaching.subtitle}
      />

      {/* Single row, scrolled sideways. -mx-6/px-6 lets it bleed to the
          viewport edges while keeping the first item aligned to the grid. */}
      <ul
        className="-mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-x-8 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] sm:gap-x-12"
        role="list"
        tabIndex={0}
        aria-label={teaching.title}
      >
        {teaching.items.map((item) => (
          <li
            key={item.name}
            className="flex w-36 flex-none snap-start flex-col items-center text-center sm:w-40"
          >
            {/* Fixed-size box so shrinking a logo doesn't shift its caption */}
            <span className="flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={160}
                className={`object-contain transition-transform duration-200 hover:scale-105 ${
                  LOGO_SIZE[item.logo] ?? "h-full w-full"
                }`}
              />
            </span>
            <p className="mt-4 text-sm font-semibold leading-snug text-[#111111]">
              {item.name}
            </p>
            <p className="mt-1 text-xs text-[#6b7280]">{item.issuer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
