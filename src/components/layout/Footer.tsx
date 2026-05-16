import type { SiteContent } from "@/types/content";
import { MessageCircle, Mail, FileText } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";

interface FooterProps {
  content: SiteContent;
}

const contactIcons: Record<string, React.ReactNode> = {
  LinkedIn: <LinkedInIcon size={14} />,
  WhatsApp: <MessageCircle size={14} />,
  Email: <Mail size={14} />,
  "E-mail": <Mail size={14} />,
  Currículo: <FileText size={14} />,
  Resume: <FileText size={14} />,
};

export function Footer({ content }: FooterProps) {
  const { footer } = content;

  return (
    <footer className="bg-[#101010] text-[#a1a1aa]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="text-white font-semibold text-[15px] tracking-tight mb-3">
              {content.nav.logo}
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-[#a1a1aa]">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              {footer.navLabel}
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              {footer.contactLabel}
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footer.contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {contactIcons[link.label]}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#898989]">{footer.copyright}</p>
          <p className="text-xs text-[#898989]">iamrodrigocoelho.com</p>
        </div>
      </div>
    </footer>
  );
}
