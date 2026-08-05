import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_EXPECTED_ACTION = "contact_form";
const RECAPTCHA_MIN_SCORE = 0.5;

const RESEND_API_URL = "https://api.resend.com/emails";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
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

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot preenchido = bot. Responde sucesso sem enviar nada.
  if (body._honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  // Caps generous enough for any legitimate submission; anything bigger is
  // abuse of the mailbox and of the Resend quota.
  if (
    name.length > 200 ||
    email.length > 254 ||
    company.length > 200 ||
    subject.length > 300 ||
    message.length > 5000
  ) {
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
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Contato <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const lines = [`Nome: ${name}`, `E-mail: ${email}`];
  if (company) lines.push(`Empresa: ${company}`);
  if (subject) lines.push(`Assunto: ${subject}`);
  lines.push("", message);
  const text = lines.join("\n");

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
        // Newlines stripped as defense in depth against email header
        // injection, even though Resend receives this as JSON.
        subject: `[Site] ${subject.replace(/[\r\n]+/g, " ") || "Contato via site"}`,
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
