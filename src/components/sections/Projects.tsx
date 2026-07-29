import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { SiteContent } from "@/types/content";

interface ProjectsProps {
  content: SiteContent;
}

export function Projects({ content }: ProjectsProps) {
  const { projects, links } = content;

  return (
    <Section id="projetos" aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        label={projects.sectionLabel}
        title={projects.title}
        subtitle={projects.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {projects.items.map((item) => (
          <Card key={item.title} variant="soft" padding="lg" className="flex flex-col">
            <div className="flex-1">
              {item.logo && (
                // Decorative: the heading below carries the name for
                // assistive tech, so don't announce it twice.
                <Image
                  src={item.logo}
                  alt=""
                  width={425}
                  height={272}
                  className="mb-3 h-16 w-auto object-contain object-left"
                />
              )}
              {/* The wordmark already shows the name, so hide the heading
                  visually but keep it in the outline and for screen readers. */}
              <h3
                className={
                  item.logo
                    ? "sr-only"
                    : "font-semibold text-[#111111] text-base mb-3 leading-snug"
                }
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tags">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" role="listitem">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {item.ctaHref && item.ctaLabel && (
              <div className="mt-5 pt-4 border-t border-[#e5e7eb]">
                <a
                  href={item.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
                >
                  {item.ctaLabel}
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="flex justify-start">
        <Button href={links.linkedin} external variant="secondary" size="md">
          {projects.ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
