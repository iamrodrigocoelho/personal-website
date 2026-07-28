import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@/components/ui/Analytics";
import { schemaOrg } from "@/lib/seo";
import {
  HTML_LANG,
  LANGS,
  SITE_URL,
  alternateLanguages,
  getContent,
  isLang,
  langUrl,
} from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const { seo } = getContent(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: langUrl(lang),
      languages: alternateLanguages(),
    },
    openGraph: {
      type: "profile",
      url: langUrl(lang),
      title: seo.title,
      description: seo.description,
      siteName: "Rodrigo Coelho",
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={HTML_LANG[lang]}
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#374151]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
