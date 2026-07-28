import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LANGS, isLang } from "@/lib/i18n";
import type { Lang } from "@/types/content";

export const alt = "Rodrigo Coelho — Head de Produto e Tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const COPY: Record<Lang, { role: string; topics: string }> = {
  pt: {
    role: "Head de Produto e Tecnologia",
    topics: "E-commerce · Produtos digitais · IA Generativa no varejo",
  },
  en: {
    role: "Head of Product and Technology",
    topics: "E-commerce · Digital products · Generative AI in retail",
  },
};

// Inlined as a data URI: Satori has no server to fetch from at build time.
const portrait = readFileSync(
  join(process.cwd(), "src/app/[lang]/og-portrait.jpg"),
).toString("base64");

export default async function Image({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const copy = COPY[isLang(lang) ? lang : "pt"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#6b7280",
              marginBottom: 24,
            }}
          >
            RODRIGOCOELHO.ME
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Rodrigo Coelho
          </div>
          <div style={{ fontSize: 32, color: "#374151", lineHeight: 1.3 }}>
            {copy.role}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 24,
              color: "#6b7280",
              lineHeight: 1.4,
            }}
          >
            {copy.topics}
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${portrait}`}
          width={460}
          height={630}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    ),
    size,
  );
}
