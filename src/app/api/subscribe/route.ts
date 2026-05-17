import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const RESEND_API = "https://api.resend.com";
const FROM_ADDRESS = "Faith Walk Live <info@anointed.app>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: "Subscriptions are temporarily offline." },
      { status: 503 }
    );
  }

  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const source = (body.source ?? "subscribe-form").slice(0, 64);

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const addContact = await fetch(
    `${RESEND_API}/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    }
  );

  if (!addContact.ok && addContact.status !== 409) {
    const errText = await addContact.text().catch(() => "");
    console.error("Resend audience error", addContact.status, errText);
    return NextResponse.json(
      { error: "Something went wrong. Try again in a moment." },
      { status: 502 }
    );
  }

  const welcome = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: email,
      subject: "You're in — Faith Walk Live updates",
      html: welcomeHtml(),
      text: welcomeText(),
      tags: [
        { name: "list", value: "faith-walk-live" },
        { name: "type", value: "welcome" },
        { name: "source", value: source.replace(/[^a-zA-Z0-9_-]/g, "-") },
      ],
    }),
  });

  if (!welcome.ok) {
    console.error("Resend welcome error", welcome.status, await welcome.text().catch(() => ""));
  }

  return NextResponse.json({ ok: true });
}

function welcomeHtml(): string {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#0a0a0a;color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <h1 style="color:#FFD700;font-size:28px;font-weight:900;margin:0 0 16px;">🙏🏾 You're in.</h1>
    <p style="font-size:17px;line-height:1.6;color:#e5e5e5;margin:0 0 16px;">
      You'll get one short email a day with the checkpoint, the clip, and the verse — for as long as Minister Zay is walking.
    </p>
    <p style="font-size:17px;line-height:1.6;color:#e5e5e5;margin:0 0 24px;">
      No sales. Unsubscribe any time.
    </p>
    <p style="font-size:16px;line-height:1.6;color:#bbb;margin:0 0 24px;">
      In the meantime — the live map is at <a href="https://faithwalklive.com/map" style="color:#FFD700;text-decoration:none;">faithwalklive.com/map</a>, and prayer support runs in the HMBL University Discord: <a href="https://faithwalklive.com/prayer" style="color:#FFD700;text-decoration:none;">faithwalklive.com/prayer</a>.
    </p>
    <hr style="border:0;border-top:1px solid #333;margin:32px 0;" />
    <p style="font-size:13px;line-height:1.5;color:#888;margin:0;">
      Faith Walk Live is built and funded by <a href="https://www.youtube.com/@AIBIBLEGOSPELS" style="color:#FFD700;text-decoration:none;">AI Bible Gospels</a>.
    </p>
  </div>
</body></html>`;
}

function welcomeText(): string {
  return [
    "You're in.",
    "",
    "You'll get one short email a day with the checkpoint, the clip, and the verse — for as long as Minister Zay is walking. No sales. Unsubscribe any time.",
    "",
    "Live map: https://faithwalklive.com/map",
    "Prayer (Discord): https://faithwalklive.com/prayer",
    "",
    "Faith Walk Live is built and funded by AI Bible Gospels — https://www.youtube.com/@AIBIBLEGOSPELS",
  ].join("\n");
}
