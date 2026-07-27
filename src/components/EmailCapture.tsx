"use client";

import { FormEvent, useState } from "react";

type Variant = "hero" | "compact";

interface EmailCaptureProps {
  variant?: Variant;
  source?: string;
  heading?: string;
  body?: string;
}

export default function EmailCapture({
  variant = "hero",
  source = "home-hero",
  heading = "Daily walk updates by email",
  body = "One short email a day — the checkpoint, the clip, the verse. No sales. Unsubscribe any time.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    setState("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, phone }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setState("ok");
        setMessage("You're in. Check your inbox for the welcome note.");
        setEmail("");
        setPhone("");
      } else {
        setState("error");
        setMessage(data?.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setState("error");
      setMessage("Network hiccup. Try again.");
    }
  }

  const padding = variant === "hero" ? "p-6 sm:p-8" : "p-5";
  const headingSize =
    variant === "hero" ? "text-2xl sm:text-3xl" : "text-xl";

  return (
    <section
      className={`rounded-2xl border border-brand-gold/40 bg-brand-black/70 ${padding} text-center space-y-4`}
      aria-labelledby={`email-capture-${source}-heading`}
    >
      <div>
        <h2
          id={`email-capture-${source}-heading`}
          className={`${headingSize} font-semibold text-brand-cloud`}
        >
          {heading}
        </h2>
        <p className="text-brand-amber text-sm sm:text-base mt-2 max-w-md mx-auto">
          {body}
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor={`email-${source}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${source}`}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "loading" || state === "ok"}
            className="flex-1 rounded-full bg-brand-navy border border-brand-border px-4 py-2.5 text-brand-cloud placeholder:text-brand-bronze focus:border-brand-gold outline-none disabled:opacity-60"
          />
          {/* Optional. `type="tel"` does no native validation in any browser, so
              this can never block a valid email signup. */}
          <label htmlFor={`phone-${source}`} className="sr-only">
            Phone number (optional)
          </label>
          <input
            id={`phone-${source}`}
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={state === "loading" || state === "ok"}
            className="flex-1 rounded-full bg-brand-navy border border-brand-border px-4 py-2.5 text-brand-cloud placeholder:text-brand-bronze focus:border-brand-gold outline-none disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={state === "loading" || state === "ok"}
          className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-black font-medium hover:bg-brand-amber transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "loading"
            ? "Subscribing…"
            : state === "ok"
              ? "Subscribed ✓"
              : "Subscribe"}
        </button>
        <p className="text-brand-bronze text-xs">
          Phone is optional — text updates only. Msg &amp; data rates may apply.
          Reply STOP to opt out.
        </p>
      </form>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${state === "ok" ? "text-brand-gold" : "text-red-400"}`}
        >
          {message}
        </p>
      )}
    </section>
  );
}
