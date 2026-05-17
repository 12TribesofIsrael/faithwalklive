import EmailCapture from "@/components/EmailCapture";

export const metadata = {
  title: "Subscribe",
  description:
    "Get daily Faith Walk updates — the checkpoint, the clip, and the verse. One email a day. Sponsored by AI Bible Gospels.",
};

export default function SubscribePage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-brand-cloud">Daily walk updates</h1>
        <p className="text-brand-amber mt-2">
          One short email per day: the checkpoint, the clip, the verse. No
          sales. Unsubscribe anytime.
        </p>
      </div>

      <EmailCapture
        variant="hero"
        source="subscribe-page"
        heading="Subscribe"
        body="Type your email below. You'll get a welcome note right away, then one short email a day for the rest of the walk."
      />

      <div className="rounded-2xl border border-brand-border bg-brand-black/50 p-6 text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-bronze">
          Sponsored by
        </p>
        <a
          href="https://www.youtube.com/@AIBIBLEGOSPELS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold text-brand-cloud hover:text-red-400 transition"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-red-500"
            aria-label="YouTube"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          AI Bible Gospels
        </a>
        <p className="text-brand-amber text-sm">
          More faith-driven content on YouTube while you wait for the daily emails.
        </p>
        <a
          href="https://www.youtube.com/@AIBIBLEGOSPELS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-500 transition text-sm"
        >
          Subscribe on YouTube
        </a>
      </div>
    </div>
  );
}
