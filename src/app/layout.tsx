import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/ui/Analytics";
import { schemaOrg } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamrodrigocoelho.com"),
  title: "Rodrigo Coelho | Produto, Tecnologia e IA Generativa",
  description:
    "Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas e projetos.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "https://iamrodrigocoelho.com",
    title: "Rodrigo Coelho | Produto, Tecnologia e IA Generativa",
    description:
      "Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas e projetos.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rodrigo Coelho" }],
    siteName: "Rodrigo Coelho",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Coelho | Produto, Tecnologia e IA Generativa",
    description:
      "Executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital e inovação.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
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
