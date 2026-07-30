import { ImageResponse } from "next/og";
import { formatPostDate, readingTimeLabel } from "@/lib/blog";
import { isLang } from "@/lib/i18n";
import type { BlogPostMetadata } from "@/types/blog";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** Long headlines get a smaller size so the card never overflows. */
function titleSize(title: string) {
  if (title.length > 95) return 44;
  if (title.length > 65) return 52;
  return 60;
}

/**
 * Shared OpenGraph card for post pages, in the same visual language as the
 * home page card in `src/app/[lang]/opengraph-image.tsx`. Each post folder
 * re-exports a thin wrapper around this.
 */
export function renderPostOgImage(post: BlogPostMetadata, rawLang: string) {
  const lang = isLang(rawLang) ? rawLang : "pt";
  const title = post.title[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#6b7280",
              marginBottom: 40,
            }}
          >
            RODRIGOCOELHO.ME · BLOG
          </div>
          <div
            style={{
              fontSize: titleSize(title),
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 28,
            }}
          >
            {post.tags[lang].slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  border: "1px solid #e5e7eb",
                  borderRadius: 999,
                  padding: "8px 20px",
                  fontSize: 22,
                  color: "#6b7280",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #e5e7eb",
              paddingTop: 28,
              fontSize: 24,
              color: "#374151",
            }}
          >
            <span style={{ fontWeight: 600, color: "#111111" }}>
              {post.author}
            </span>
            <span style={{ color: "#898989", padding: "0 12px" }}>·</span>
            <span>{formatPostDate(post.publishedAt, lang)}</span>
            <span style={{ color: "#898989", padding: "0 12px" }}>·</span>
            <span>{readingTimeLabel(post.readingMinutes, lang)}</span>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
