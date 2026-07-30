import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogChrome } from "@/components/blog/BlogChrome";
import { Newsletter } from "@/components/blog/Newsletter";
import { FeaturedPostCard, PostCard } from "@/components/blog/PostCard";
import { getBlogUi } from "@/content/blog/ui";
import {
  BLOG_SEGMENT,
  blogHref,
  blogListJsonLd,
  getFeaturedPost,
  getSortedPosts,
} from "@/lib/blog";
import {
  LANGS,
  alternateLanguages,
  getContent,
  isLang,
  langUrl,
} from "@/lib/i18n";
import type { Lang } from "@/types/content";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const ui = getBlogUi(lang);

  return {
    title: ui.seoTitle,
    description: ui.seoDescription,
    alternates: {
      canonical: langUrl(lang, BLOG_SEGMENT),
      languages: alternateLanguages(BLOG_SEGMENT),
    },
    openGraph: {
      type: "website",
      url: langUrl(lang, BLOG_SEGMENT),
      title: ui.seoTitle,
      description: ui.seoDescription,
      siteName: "Rodrigo Coelho",
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ui.seoTitle,
      description: ui.seoDescription,
    },
  };
}

export default async function BlogIndexPage({
  params,
}: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const ui = getBlogUi(lang);
  const posts = getSortedPosts();
  const featured = getFeaturedPost();
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  const languagePaths = Object.fromEntries(
    LANGS.map((l) => [l, blogHref(l)]),
  ) as Record<Lang, string>;

  return (
    <BlogChrome lang={lang} languagePaths={languagePaths}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListJsonLd(lang)),
        }}
      />

      {/* Intro */}
      <section className="pt-32 pb-12" aria-labelledby="blog-title">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7280]">
            {ui.sectionLabel}
          </p>
          <h1
            id="blog-title"
            className="mb-5 max-w-3xl text-[30px] sm:text-[40px] font-semibold leading-[1.1] tracking-[-0.015em] text-[#111111]"
          >
            {ui.title}
          </h1>
          {/* max-w-4xl espelha o SectionHeader; text-pretty evita órfã na última linha. */}
          <p className="max-w-4xl text-pretty text-base sm:text-lg leading-relaxed text-[#374151]">
            {ui.intro}
          </p>
        </div>
      </section>

      {/* Highlight */}
      {featured ? (
        <section className="pb-16" aria-label={ui.latestLabel}>
          <div className="mx-auto max-w-6xl px-6">
            <FeaturedPostCard post={featured} lang={lang} />
          </div>
        </section>
      ) : (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-base text-[#6b7280]">{ui.emptyState}</p>
          </div>
        </section>
      )}

      {/* Remaining posts */}
      {rest.length > 0 && (
        <section
          className="bg-[#f8f9fa] py-20"
          aria-labelledby="all-posts-title"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="all-posts-title"
              className="mb-8 text-[22px] sm:text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111]"
            >
              {ui.allPostsLabel}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Newsletter lang={lang} fallbackEmail={getContent(lang).links.email} />
        </div>
      </section>
    </BlogChrome>
  );
}
