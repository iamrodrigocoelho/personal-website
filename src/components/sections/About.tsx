import { Section, SectionHeader } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { SiteContent } from "@/types/content";

interface AboutProps {
  content: SiteContent;
}

export function About({ content }: AboutProps) {
  const { about } = content;

  return (
    <Section id="sobre" className="bg-[#f8f9fa]" aria-labelledby="about-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: text block */}
        <div className="lg:col-span-5">
          <SectionHeader
            id="about-title"
            label={about.sectionLabel}
            title={about.title}
          />
          <p className="text-[#374151] leading-relaxed text-base">{about.body}</p>
        </div>

        {/* Right: 3 cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {about.cards.map((card) => (
            <Card key={card.title} variant="outline" padding="md">
              <h3 className="font-semibold text-[#111111] text-sm mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
