export const metadata = {
  title: "Subscribe · Faith Walk Live",
};

export default function SubscribePage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Daily walk updates</h1>
        <p className="text-neutral-400 mt-2">
          One short email per day: the checkpoint, the clip, the verse. No
          sales. Unsubscribe anytime.
        </p>
      </div>

      <form className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <label className="block text-sm text-neutral-300">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            className="mt-1 w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 focus:border-amber-400 outline-none"
          />
        </label>
        <button
          type="submit"
          disabled
          className="px-5 py-2 rounded-full bg-amber-400 text-neutral-950 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subscribe (wiring up)
        </button>
        <p className="text-xs text-neutral-500">
          Email updates coming soon. In the meantime, follow the journey on
          YouTube.
        </p>
      </form>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Sponsored by
        </p>
        <a
          href="https://www.youtube.com/@AIBIBLEGOSPELS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold text-neutral-100 hover:text-red-400 transition"
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
        <p className="text-neutral-400 text-sm">
          Subscribe on YouTube for more faith-driven content while we finish
          wiring up email updates.
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
