import Image from "next/image";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import type { SiteContent } from "@/types/content";

interface ExperienceProps {
  content: SiteContent;
}

export function Experience({ content }: ExperienceProps) {
  const { experience } = content;

  return (
    <Section id="experiencia" className="bg-[#f8f9fa]" aria-labelledby="experience-title">
      <SectionHeader
        id="experience-title"
        label={experience.sectionLabel}
        title={experience.title}
        subtitle={experience.subtitle}
      />

      <div className="flex flex-col gap-0 divide-y divide-[#e5e7eb]">
        {experience.items.map((item, i) => (
          <article key={i} className="py-8 first:pt-0 last:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
              {/* Left — role + meta */}
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#898989] mb-1">
                  {item.period}
                </p>
                <h3 className="font-semibold text-[#111111] text-[17px] leading-snug mb-0.5">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-[#6b7280]">{item.company}</p>
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={160}
                    height={28}
                    className="mt-2 h-5 w-auto object-contain"
                  />
                )}
              </div>
              {/* Right — description + tags */}
              <div className="lg:col-span-8">
                <p className="text-[#374151] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Competências">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="default" role="listitem">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
