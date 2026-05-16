"use client";

import { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function PageClient() {
  const [lang, setLang] = useState<Lang>("pt");
  const content = lang === "pt" ? pt : en;

  const page = (
    <>
      <a href="#main-content" className="skip-to-content">
        Ir para o conteúdo principal
      </a>

      <Header content={content} lang={lang} onLangChange={setLang} />

      <main id="main-content" tabIndex={-1}>
        <Hero content={content} />
        <About content={content} />
        <Areas content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Articles content={content} />
        <Teaching content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
    </>
  );

  // Only mount the reCAPTCHA provider when a site key is configured.
  // This avoids loading the Google script on sites that haven't set up reCAPTCHA yet.
  if (RECAPTCHA_KEY) {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={RECAPTCHA_KEY}
        scriptProps={{ async: true, defer: true }}
        // Hide the floating badge — legal notice is shown inline on the form
        container={{ parameters: { badge: "bottomright", theme: "light" } }}
      >
        {page}
      </GoogleReCaptchaProvider>
    );
  }

  return <>{page}</>;
}
