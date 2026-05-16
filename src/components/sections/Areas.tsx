import {
  Layers,
  Cpu,
  Sparkles,
  ShoppingBag,
  Leaf,
  GraduationCap,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { SiteContent } from "@/types/content";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={20} />,
  cpu: <Cpu size={20} />,
  sparkles: <Sparkles size={20} />,
  "shopping-bag": <ShoppingBag size={20} />,
  leaf: <Leaf size={20} />,
  "graduation-cap": <GraduationCap size={20} />,
};

interface AreasProps {
  content: SiteContent;
}

export function Areas({ content }: AreasProps) {
  const { areas } = content;

  return (
    <Section id="atuacao" aria-labelledby="areas-title">
      <SectionHeader
        id="areas-title"
        label={areas.sectionLabel}
        title={areas.title}
        subtitle={areas.subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {areas.cards.map((card) => (
          <Card key={card.title} variant="soft" padding="lg">
            <div className="mb-4 text-[#374151]" aria-hidden="true">
              {iconMap[card.icon]}
            </div>
            <h3 className="font-semibold text-[#111111] text-base mb-2 leading-snug">
              {card.title}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              {card.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
