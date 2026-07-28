"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import type { SiteContent, Lang } from "@/types/content";

interface HeaderProps {
  content: SiteContent;
  lang: Lang;
}

export function Header({ content, lang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-sm border-b border-[#e5e7eb]" : ""
        }`}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            aria-label="Rodrigo Coelho — voltar ao topo"
            className="flex-shrink-0 font-[family-name:var(--font-orbitron)] font-semibold uppercase text-[#111111] text-[17px] tracking-tight hover:opacity-75 transition-opacity"
          >
            {content.nav.logo}
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-6"
          >
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium text-[#6b7280] hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle lang={lang} />
            <Button
              href={content.links.linkedin}
              external
              variant="primary"
              size="md"
            >
              {content.nav.ctaLabel}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
          className="fixed inset-0 z-40 bg-white pt-16 px-6 pb-8 flex flex-col gap-2 lg:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1 pt-4">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[17px] font-medium text-[#374151] hover:text-[#111111] py-3 border-b border-[#f3f4f6] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <LanguageToggle lang={lang} />
            <Button
              href={content.links.linkedin}
              external
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              {content.nav.ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
