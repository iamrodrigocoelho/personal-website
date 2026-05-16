import { BookOpen, Mic2, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { SiteContent } from "@/types/content";

interface TeachingProps {
  content: SiteContent;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Aulas e MBAs": <BookOpen size={16} />,
  "Classes & MBAs": <BookOpen size={16} />,
  "Palestras e eventos": <Mic2 size={16} />,
  "Speaking & Events": <Mic2 size={16} />,
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Teaching categories */}
        {teaching.teaching.map((cat) => (
          <Card key={cat.category} variant="soft" padding="lg">
            <div className="flex items-center gap-2 mb-4 text-[#374151]">
              {categoryIcons[cat.category] || <BookOpen size={16} />}
              <h3 className="font-semibold text-[#111111] text-sm">{cat.category}</h3>
            </div>
            <ul className="space-y-2" role="list">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#374151]"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d1d5db] flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}

        {/* Education */}
        <Card variant="soft" padding="lg">
          <div className="flex items-center gap-2 mb-4 text-[#374151]">
            <GraduationCap size={16} />
            <h3 className="font-semibold text-[#111111] text-sm">Formação Acadêmica</h3>
          </div>
          <div className="space-y-4">
            {teaching.education.map((edu) => (
              <div key={edu.degree} className="border-l-2 border-[#e5e7eb] pl-3">
                <p className="font-medium text-[#111111] text-sm leading-snug mb-0.5">
                  {edu.degree}
                </p>
                <p className="text-xs text-[#6b7280]">{edu.institution}</p>
                {edu.year && (
                  <p className="text-xs text-[#898989] mt-0.5">{edu.year}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
