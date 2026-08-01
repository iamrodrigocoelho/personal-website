import Image from "next/image";
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

  const featured = articles.items.filter((a) => a.featured);
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
        {/* Featured articles */}
        {featured.map((item) => (
          <article
            key={item.title}
            className="bg-white rounded-xl border border-[#e5e7eb] p-8 relative overflow-hidden"
          >
            {item.logo && (
              // Decorativo: o título logo abaixo já nomeia o artigo.
              <Image
                src={item.logo}
                alt=""
                width={425}
                height={272}
                className="mb-3 h-16 w-auto object-contain object-left"
              />
            )}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                {item.type && (
                  <Badge
                    variant={(typeColorMap[item.type] as BadgeVariant) || "default"}
                  >
                    {item.type}
                  </Badge>
                )}
                {item.date && (
                  <span className="text-xs text-[#898989]">{item.date}</span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#374151] bg-[#f5f5f5] px-2.5 py-1 rounded-full">
                  <Star size={11} fill="currentColor" />
                  Destaque
                </span>
              </div>
            </div>
            <h3
              className={`text-[19px] text-[#111111] mb-3 leading-snug max-w-2xl ${
                item.logo ? "font-normal" : "font-semibold"
              }`}
            >
              {item.title}
            </h3>
            {item.description && (
              <p className="text-[#374151] text-sm leading-relaxed mb-5 max-w-2xl">
                {item.description}
              </p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Tags">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" role="listitem">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              >
                Ler artigo completo
                <ExternalLink size={14} />
              </a>
            )}
          </article>
        ))}

        {/* Rest of articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-xl border border-[#e5e7eb] p-6 flex flex-col"
            >
              {article.logo && (
                <Image
                  src={article.logo}
                  alt=""
                  width={425}
                  height={272}
                  className="mb-3 h-16 w-auto object-contain object-left"
                />
              )}
              {(article.type || article.date) && (
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {article.type && (
                    <Badge
                      variant={(typeColorMap[article.type] as BadgeVariant) || "default"}
                    >
                      {article.type}
                    </Badge>
                  )}
                  {article.date && (
                    <span className="text-xs text-[#898989]">{article.date}</span>
                  )}
                </div>
              )}
              <h3
                className={`text-[#111111] text-sm mb-2 leading-snug flex-1 ${
                  article.logo ? "font-normal" : "font-semibold"
                }`}
              >
                {article.title}
              </h3>
              {article.description && (
                <p className="text-xs text-[#6b7280] leading-relaxed mb-4">
                  {article.description}
                </p>
              )}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Tags">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" role="listitem">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
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
