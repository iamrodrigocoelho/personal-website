import { ExternalLink, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { SiteContent } from "@/types/content";

interface ArticlesProps {
  content: SiteContent;
}

const typeColorMap: Record<string, string> = {
  Revista: "emerald",
  Magazine: "emerald",
  Artigo: "violet",
  Article: "violet",
  LinkedIn: "blue",
  Ensaio: "orange",
  Essay: "orange",
  "Publicação acadêmica": "pink",
  "Academic publication": "pink",
};

type BadgeVariant = "default" | "orange" | "pink" | "violet" | "emerald" | "outline";

export function Articles({ content }: ArticlesProps) {
  const { articles, links } = content;

  const featured = articles.items.find((a) => a.featured);
  const rest = articles.items.filter((a) => !a.featured);

  return (
    <Section id="artigos" className="bg-[#f8f9fa]" aria-labelledby="articles-title">
      <SectionHeader
        id="articles-title"
        label={articles.sectionLabel}
        title={articles.title}
        subtitle={articles.subtitle}
      />

      <div className="space-y-5">
        {/* Featured article */}
        {featured && (
          <article className="bg-white rounded-xl border border-[#e5e7eb] p-8 relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge
                  variant={(typeColorMap[featured.type] as BadgeVariant) || "default"}
                >
                  {featured.type}
                </Badge>
                {featured.date && (
                  <span className="text-xs text-[#898989]">{featured.date}</span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#374151] bg-[#f5f5f5] px-2.5 py-1 rounded-full">
                  <Star size={11} fill="currentColor" />
                  Destaque
                </span>
              </div>
            </div>
            <h3 className="text-[19px] font-semibold text-[#111111] mb-3 leading-snug max-w-2xl">
              {featured.title}
            </h3>
            <p className="text-[#374151] text-sm leading-relaxed mb-5 max-w-2xl">
              {featured.description}
            </p>
            {featured.href && (
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              >
                Ler artigo completo
                <ExternalLink size={14} />
              </a>
            )}
          </article>
        )}

        {/* Rest of articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-xl border border-[#e5e7eb] p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge
                  variant={(typeColorMap[article.type] as BadgeVariant) || "default"}
                >
                  {article.type}
                </Badge>
                {article.date && (
                  <span className="text-xs text-[#898989]">{article.date}</span>
                )}
              </div>
              <h3 className="font-semibold text-[#111111] text-sm mb-2 leading-snug flex-1">
                {article.title}
              </h3>
              <p className="text-xs text-[#6b7280] leading-relaxed mb-4">
                {article.description}
              </p>
              {article.href && (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#111111] hover:opacity-70 transition-opacity mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
                >
                  Ler
                  <ExternalLink size={12} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={links.linkedin} external variant="secondary" size="md">
          {articles.ctaLabel}
        </Button>
        <Button href={links.googleScholar} external variant="secondary" size="md">
          {articles.ctaScholarLabel}
        </Button>
        <Button href={links.medium} external variant="secondary" size="md">
          {articles.ctaMediumLabel}
        </Button>
      </div>
    </Section>
  );
}
