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
          Backend provider TBD — likely Buttondown or ConvertKit. Coming in
          Phase 1.5.
        </p>
      </form>
    </div>
  );
}
