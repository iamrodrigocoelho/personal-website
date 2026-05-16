import type { Metadata } from "next";
import type { SeoContent } from "@/types/content";

export function buildMetadata(seo: SeoContent): Metadata {
  return {
    metadataBase: new URL(seo.url),
    title: seo.title,
    description: seo.description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "profile",
      url: seo.url,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      siteName: "Rodrigo Coelho",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    alternates: {
      canonical: seo.url,
    },
  };
}

export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rodrigo Coelho",
  url: "https://iamrodrigocoelho.com",
  jobTitle: "Head de Produto e Tecnologia",
  description:
    "Executivo de Produto e Tecnologia com atuação em Inteligência Artificial Generativa, transformação digital e inovação.",
  sameAs: [
    "https://www.linkedin.com/in/SEU-LINKEDIN",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Drogaria Venancio",
  },
  knowsAbout: [
    "Produto Digital",
    "Tecnologia",
    "Inteligência Artificial Generativa",
    "Transformação Digital",
    "E-commerce",
    "Varejo Digital",
    "Sustentabilidade",
    "ESG",
    "Educação Executiva",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Mestrado em Engenharia Ambiental",
    },
  ],
};
