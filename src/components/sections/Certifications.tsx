import Image from "next/image";
import { Section, SectionHeader } from "@/components/layout/Section";
import type { SiteContent } from "@/types/content";

interface CertificationsProps {
  content: SiteContent;
}

export function Certifications({ content }: CertificationsProps) {
  const { certifications } = content;

  return (
    <Section id="certificacoes" className="bg-[#f8f9fa]" aria-labelledby="certifications-title">
      <SectionHeader
        id="certifications-title"
        label={certifications.sectionLabel}
        title={certifications.title}
        subtitle={certifications.subtitle}
      />

      {/* Single row, scrolled sideways. -mx-6/px-6 lets it bleed to the
          viewport edges while keeping the first item aligned to the grid. */}
      <ul
        className="-mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-x-8 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] sm:gap-x-12"
        role="list"
        tabIndex={0}
        aria-label={certifications.title}
      >
        {certifications.items.map((cert) => (
          <li
            key={cert.name}
            className="flex w-36 flex-none snap-start flex-col items-center text-center sm:w-40"
          >
            <Image
              src={cert.logo}
              alt={cert.name}
              width={160}
              height={160}
              className="h-28 w-28 object-contain transition-transform duration-200 hover:scale-105 sm:h-32 sm:w-32"
            />
            <p className="mt-4 text-sm font-semibold leading-snug text-[#111111]">
              {cert.name}
            </p>
            <p className="mt-1 text-xs text-[#6b7280]">{cert.issuer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
