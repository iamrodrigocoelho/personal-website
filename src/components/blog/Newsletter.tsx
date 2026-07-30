"use client";

import { useCallback, useState } from "react";
import { CheckCircle, Mail, ShieldCheck } from "lucide-react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/Button";
import { getBlogUi } from "@/content/blog/ui";
import type { Lang } from "@/types/content";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const RECAPTCHA_ACTION = "newsletter_form";

interface NewsletterProps {
  lang: Lang;
  /**
   * mailto: link used when the backend has no Resend key configured — same
   * graceful degradation the contact form already does, so the reader is never
   * left at a dead end.
   */
  fallbackEmail?: string;
  className?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Status = "idle" | "submitting" | "success";

function NewsletterForm({
  lang,
  fallbackEmail,
  className = "",
}: NewsletterProps) {
  const { newsletter } = getBlogUi(lang);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const hasRecaptcha = !!RECAPTCHA_KEY;

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (honeypot) return;

      if (!isValidEmail(email.trim())) {
        setError(newsletter.invalidEmail);
        return;
      }

      setStatus("submitting");
      setError(null);

      // Same contract as the contact form: the token is verified server-side
      // before anything is delivered.
      let recaptchaToken: string | undefined;
      if (hasRecaptcha) {
        if (!executeRecaptcha) {
          setError(newsletter.recaptchaError);
          setStatus("idle");
          return;
        }
        try {
          recaptchaToken = await executeRecaptcha(RECAPTCHA_ACTION);
        } catch {
          setError(newsletter.recaptchaError);
          setStatus("idle");
          return;
        }
      }

      try {
        // Trailing slash required: trailingSlash in next.config redirects
        // /api/newsletter → /api/newsletter/ with a 308.
        const res = await fetch("/api/newsletter/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), lang, recaptchaToken }),
        });

        if (res.ok) {
          setStatus("success");
          setEmail("");
          return;
        }

        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;

        if (data?.error === "recaptcha") {
          setError(newsletter.recaptchaError);
        } else if (data?.error === "not_configured" && fallbackEmail) {
          // No delivery backend yet: hand the subscription over to the mail client.
          const to = fallbackEmail.replace("mailto:", "");
          window.location.href = `mailto:${to}?subject=${encodeURIComponent(
            newsletter.label,
          )}&body=${encodeURIComponent(email.trim())}`;
        } else {
          setError(newsletter.error);
        }
      } catch {
        setError(newsletter.error);
      }

      setStatus("idle");
    },
    [
      email,
      honeypot,
      executeRecaptcha,
      hasRecaptcha,
      lang,
      newsletter,
      fallbackEmail,
    ],
  );

  return (
    <section
      aria-labelledby="newsletter-title"
      className={`rounded-xl border border-[#e5e7eb] bg-[#f8f9fa] p-8 sm:p-10 ${className}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7280]">
        {newsletter.label}
      </p>
      <h2
        id="newsletter-title"
        className="mb-3 max-w-lg text-[22px] sm:text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111]"
      >
        {newsletter.title}
      </h2>
      <p className="mb-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#374151]">
        {newsletter.description}
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#111111]"
        >
          <CheckCircle size={18} className="text-[#10b981]" aria-hidden="true" />
          {newsletter.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="max-w-xl">
          {/* Honeypot — hidden from users, catches naive bots. */}
          <input
            type="text"
            name="_honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <label
            htmlFor="newsletter-email"
            className="mb-1.5 block text-sm font-medium text-[#374151]"
          >
            {newsletter.emailLabel}
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              placeholder={newsletter.emailPlaceholder}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : undefined}
              className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-[#111111] transition-colors placeholder:text-[#898989] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#111111] ${
                error ? "border-[#ef4444]" : "border-[#e5e7eb]"
              }`}
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "submitting"}
              className="sm:flex-shrink-0"
            >
              <Mail size={16} aria-hidden="true" />
              {status === "submitting"
                ? newsletter.submitting
                : newsletter.submit}
            </Button>
          </div>

          {error && (
            <p
              id="newsletter-error"
              role="alert"
              className="mt-2 text-xs text-[#ef4444]"
            >
              {error}
            </p>
          )}

          <p className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-[#898989]">
            {hasRecaptcha && <ShieldCheck size={12} aria-hidden="true" />}
            {newsletter.privacy}
          </p>
        </form>
      )}
    </section>
  );
}

/**
 * Mounts the reCAPTCHA provider only when a site key is configured, matching
 * how the landing page handles it — without a key the form still works.
 */
export function Newsletter(props: NewsletterProps) {
  if (!RECAPTCHA_KEY) {
    return <NewsletterForm {...props} />;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_KEY}
      scriptProps={{ async: true, defer: true }}
      container={{ parameters: { badge: "bottomright", theme: "light" } }}
    >
      <NewsletterForm {...props} />
    </GoogleReCaptchaProvider>
  );
}
