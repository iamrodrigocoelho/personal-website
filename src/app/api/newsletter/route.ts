import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_EXPECTED_ACTION = "newsletter_form";
const RECAPTCHA_MIN_SCORE = 0.5;

const RESEND_API_URL = "https://api.resend.com/emails";

interface NewsletterPayload {
  email?: string;
  /** Locale the reader subscribed from — useful when sending the first email. */
  lang?: string;
  recaptchaToken?: string;
  _honeypot?: string;
}

interface RecaptchaVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyRecaptcha(token: string, remoteIp?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set("remoteip", remoteIp);

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) return false;

  const data = (await res.json()) as RecaptchaVerifyResponse;
  return (
    data.success &&
    data.action === RECAPTCHA_EXPECTED_ACTION &&
    (data.score ?? 0) >= RECAPTCHA_MIN_SCORE
  );
}

/**
 * Newsletter sign-up. Mirrors /api/contact: honeypot, validation, reCAPTCHA v3
 * and delivery through Resend — the subscriber lands in the same inbox, so no
 * extra service is needed to start collecting.
 */
export async function POST(request: Request) {
  let body: NewsletterPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot filled = bot. Answer success without sending anything.
  if (body._honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim() ?? "";
  const lang = body.lang === "en" ? "en" : "pt";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!body.recaptchaToken) {
      return NextResponse.json({ ok: false, error: "recaptcha" }, { status: 400 });
    }

    const remoteIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;

    let verified: boolean;
    try {
      verified = await verifyRecaptcha(body.recaptchaToken, remoteIp);
    } catch {
      return NextResponse.json({ ok: false, error: "recaptcha" }, { status: 502 });
    }

    if (!verified) {
      return NextResponse.json({ ok: false, error: "recaptcha" }, { status: 400 });
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NEWSLETTER_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Contato <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const text = [
    "Nova inscrição na newsletter",
    "",
    `E-mail: ${email}`,
    `Idioma: ${lang}`,
    `Data: ${new Date().toISOString()}`,
  ].join("\n");

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Newsletter] Nova inscrição: ${email}`,
        text,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
