export const metadata = {
  title: "Prayer Wall · Faith Walk Live",
};

export default function PrayerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Prayer Wall</h1>
        <p className="text-neutral-400 mt-2">
          Lift up Zay and the walk. Prayers are moderated before they appear.
        </p>
      </div>

      <form className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
        <label className="block text-sm text-neutral-300">
          Your name (or how you want to be seen)
          <input
            type="text"
            name="name"
            placeholder="Believer from Philly"
            className="mt-1 w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 focus:border-amber-400 outline-none"
          />
        </label>
        <label className="block text-sm text-neutral-300">
          Your prayer
          <textarea
            name="prayer"
            rows={5}
            placeholder="Father, we cover Zay in protection and strength as he walks…"
            className="mt-1 w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 focus:border-amber-400 outline-none"
          />
        </label>
        <button
          type="submit"
          disabled
          className="px-5 py-2 rounded-full bg-amber-400 text-neutral-950 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit (coming soon)
        </button>
        <p className="text-xs text-neutral-500">
          Prayer wall backend ships with Phase 1.5. Bookmark this page.
        </p>
      </form>
    </div>
  );
}
