"use client";

import { useState, useCallback } from "react";
import { MessageCircle, Mail, FileDown, CheckCircle, ShieldCheck } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { SiteContent } from "@/types/content";

interface ContactProps {
  content: SiteContent;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  _honeypot: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  _honeypot: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Contact({ content }: ContactProps) {
  const { contact, links } = content;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const hasRecaptcha = !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Campo obrigatório";
    if (!form.email.trim()) {
      e.email = "Campo obrigatório";
    } else if (!isValidEmail(form.email)) {
      e.email = "E-mail inválido";
    }
    if (!form.message.trim()) e.message = "Campo obrigatório";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (recaptchaError) setRecaptchaError(false);
    if (submitError) setSubmitError(false);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (form._honeypot) return;

      const errs = validate();
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }

      setSubmitting(true);
      setRecaptchaError(false);
      setSubmitError(false);

      // Execute reCAPTCHA v3 if configured. The token is sent to Formspree
      // as "g-recaptcha-response" and verified server-side by Formspree
      // (requires the reCAPTCHA Secret Key in the form's Settings → reCAPTCHA).
      let recaptchaToken: string | undefined;
      if (hasRecaptcha) {
        if (!executeRecaptcha) {
          // Script do reCAPTCHA ainda não carregou
          setRecaptchaError(true);
          setSubmitting(false);
          return;
        }
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch {
          setRecaptchaError(true);
          setSubmitting(false);
          return;
        }
      }

      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

      if (formspreeId) {
        try {
          const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              company: form.company,
              subject: form.subject,
              message: form.message,
              ...(recaptchaToken && { "g-recaptcha-response": recaptchaToken }),
            }),
          });
          if (res.ok) {
            setSubmitted(true);
            setForm(initialForm);
          } else {
            const data = (await res.json().catch(() => null)) as {
              error?: string;
              errors?: { code?: string; message?: string }[];
            } | null;
            const isRecaptchaFailure = [
              data?.error ?? "",
              ...(data?.errors?.map((e) => `${e.code} ${e.message}`) ?? []),
            ]
              .join(" ")
              .toLowerCase()
              .includes("captcha");
            if (isRecaptchaFailure) {
              setRecaptchaError(true);
            } else {
              setSubmitError(true);
            }
          }
        } catch {
          window.location.href = `mailto:${links.email.replace("mailto:", "")}?subject=${encodeURIComponent(form.subject || "Contato via site")}&body=${encodeURIComponent(form.message)}`;
        }
      } else {
        window.location.href = `mailto:${links.email.replace("mailto:", "")}?subject=${encodeURIComponent(form.subject || "Contato via site")}&body=${encodeURIComponent(`Nome: ${form.name}\nEmpresa: ${form.company}\n\n${form.message}`)}`;
        setSubmitted(true);
        setForm(initialForm);
      }

      setSubmitting(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, executeRecaptcha, hasRecaptcha, links.email]
  );

  const quickLinks = [
    { icon: <LinkedInIcon size={18} />, label: contact.linkedinLabel, href: links.linkedin, external: true },
    { icon: <MessageCircle size={18} />, label: contact.whatsappLabel, href: links.whatsapp, external: true },
    { icon: <Mail size={18} />, label: contact.emailLabel, href: links.email, external: false },
    { icon: <FileDown size={18} />, label: contact.resumeLabel, href: links.resume, external: false, download: true },
  ];

  return (
    <Section id="contato" aria-labelledby="contact-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left */}
        <div className="lg:col-span-4">
          <SectionHeader
            id="contact-title"
            label={contact.sectionLabel}
            title={contact.title}
            subtitle={contact.subtitle}
          />
          <p className="text-sm text-[#6b7280] mb-4">{contact.orLabel}</p>
          <div className="flex flex-col gap-2">
            {quickLinks.map((ql) => (
              <a
                key={ql.label}
                href={ql.href}
                target={ql.external ? "_blank" : undefined}
                rel={ql.external ? "noopener noreferrer" : undefined}
                download={ql.download ? true : undefined}
                className="inline-flex items-center gap-3 text-sm font-medium text-[#374151] hover:text-[#111111] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded p-1 -ml-1"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#f5f5f5] group-hover:bg-[#e5e7eb] transition-colors text-[#374151]">
                  {ql.icon}
                </span>
                {ql.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-[#f5f5f5] rounded-xl">
              <CheckCircle size={40} className="text-[#10b981] mb-4" />
              <p className="text-[#111111] font-semibold text-lg mb-2">
                {contact.form.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulário de contato"
              className="space-y-4"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_honeypot"
                value={form._honeypot}
                onChange={handleChange}
                aria-hidden="true"
                tabIndex={-1}
                style={{ display: "none" }}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="name"
                  name="name"
                  label={contact.form.name}
                  required
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label={contact.form.email}
                  required
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="company"
                  name="company"
                  label={contact.form.company}
                  value={form.company}
                  onChange={handleChange}
                />
                <Field
                  id="subject"
                  name="subject"
                  label={contact.form.subject}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#374151] mb-1.5"
                >
                  {contact.form.message}
                  <span className="text-[#ef4444] ml-1" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#111111] bg-white resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-0 focus:border-transparent ${
                    errors.message ? "border-[#ef4444]" : "border-[#e5e7eb]"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1 text-xs text-[#ef4444]">
                    {errors.message}
                  </p>
                )}
              </div>

              {recaptchaError && (
                <p role="alert" className="text-xs text-[#ef4444]">
                  {contact.form.recaptchaErrorMessage}
                </p>
              )}

              {submitError && (
                <p role="alert" className="text-xs text-[#ef4444]">
                  {contact.form.errorMessage}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {/* reCAPTCHA badge notice */}
                {hasRecaptcha && (
                  <p className="text-[11px] text-[#898989] flex items-center gap-1.5">
                    <ShieldCheck size={12} className="flex-shrink-0" />
                    Protegido por reCAPTCHA —{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#6b7280] transition-colors"
                    >
                      Privacidade
                    </a>{" "}
                    e{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#6b7280] transition-colors"
                    >
                      Termos
                    </a>
                  </p>
                )}

                <div className={hasRecaptcha ? "" : "ml-auto"}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={submitting}
                  >
                    {submitting ? "Enviando…" : contact.form.submit}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function Field({ id, name, label, type = "text", required, value, onChange, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#374151] mb-1.5">
        {label}
        {required && <span className="text-[#ef4444] ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#111111] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-0 focus:border-transparent ${
          error ? "border-[#ef4444]" : "border-[#e5e7eb]"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-[#ef4444]">
          {error}
        </p>
      )}
    </div>
  );
}
