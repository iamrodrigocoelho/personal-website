import { notFound } from "next/navigation";
import { PageClient } from "@/components/layout/PageClient";
import { isLang } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return <PageClient lang={lang} />;
}
