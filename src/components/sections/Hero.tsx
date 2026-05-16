"use client";

import { ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { HeroMockupCard } from "@/components/mockups/HeroMockupCard";
import type { SiteContent } from "@/types/content";

interface HeroProps {
  content: SiteContent;
}

export function Hero({ content }: HeroProps) {
  const { hero, links } = content;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="pt-32 pb-24 bg-white"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column — 7/12 */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <p className="inline-flex items-center text-sm font-medium text-[#6b7280] bg-[#f5f5f5] rounded-full px-4 py-1.5 mb-6 tracking-wide">
              {hero.eyebrow}
            </p>

            {/* Headline — responsive: 32px mobile → 48px tablet → 64px desktop */}
            <h1
              id="hero-headline"
              className="text-[32px] sm:text-[44px] lg:text-[58px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#111111] mb-6 max-w-xl"
            >
              {hero.headline}
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed mb-10 max-w-lg">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                href="#projetos"
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
              >
                {hero.ctaPrimary}
                <ArrowRight size={16} />
              </Button>
              <Button
                href={links.linkedin}
                external
                variant="secondary"
                size="lg"
              >
                <LinkedInIcon size={16} />
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right column — 5/12 */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <HeroMockupCard />
          </div>
        </div>
      </div>
    </section>
  );
}
