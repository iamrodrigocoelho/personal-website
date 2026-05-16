"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Areas } from "@/components/sections/Areas";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { Teaching } from "@/components/sections/Teaching";
import { Contact } from "@/components/sections/Contact";
import { pt } from "@/content/pt";
import { en } from "@/content/en";
import type { Lang } from "@/types/content";

export function PageClient() {
  const [lang, setLang] = useState<Lang>("pt");

  const content = lang === "pt" ? pt : en;

  return (
    <>
      {/* Skip to content for keyboard/screen reader users */}
      <a href="#main-content" className="skip-to-content">
        Ir para o conteúdo principal
      </a>

      <Header content={content} lang={lang} onLangChange={setLang} />

      <main id="main-content" tabIndex={-1}>
        {/* white */}
        <Hero content={content} />
        {/* #f8f9fa */}
        <About content={content} />
        {/* white */}
        <Areas content={content} />
        {/* #f8f9fa */}
        <Experience content={content} />
        {/* white */}
        <Projects content={content} />
        {/* #f8f9fa */}
        <Articles content={content} />
        {/* white */}
        <Teaching content={content} />
        {/* white */}
        <Contact content={content} />
      </main>

      <Footer content={content} />
    </>
  );
}
