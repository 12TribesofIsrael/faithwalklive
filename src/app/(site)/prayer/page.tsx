export const metadata = {
  title: "Prayer Wall",
  description:
    "Lift up Minister Zay and the 3,000-mile Faith Walk in prayer. Submit a prayer, see the community praying together.",
};

export default function PrayerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-brand-cloud">Prayer Wall</h1>
        <p className="text-brand-amber mt-2">
          Lift up Zay and the walk. Prayers are moderated before they appear.
        </p>
      </div>

      <form className="space-y-3 rounded-2xl border border-brand-border bg-brand-black/50 p-6">
        <label className="block text-sm text-brand-softgold">
          Your name (or how you want to be seen)
          <input
            type="text"
            name="name"
            placeholder="Believer from Philly"
            className="mt-1 w-full rounded-lg bg-brand-navy border border-brand-border px-3 py-2 focus:border-brand-gold outline-none text-brand-cloud placeholder:text-brand-bronze"
          />
        </label>
        <label className="block text-sm text-brand-softgold">
          Your prayer
          <textarea
            name="prayer"
            rows={5}
            placeholder="Father, we cover Zay in protection and strength as he walks…"
            className="mt-1 w-full rounded-lg bg-brand-navy border border-brand-border px-3 py-2 focus:border-brand-gold outline-none text-brand-cloud placeholder:text-brand-bronze"
          />
        </label>
        <button
          type="submit"
          disabled
          className="px-5 py-2 rounded-full bg-brand-gold text-brand-black font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit (coming soon)
        </button>
        <p className="text-xs text-brand-bronze">
          Prayer wall backend ships with Phase 1.5. Bookmark this page.
        </p>
      </form>
    </div>
  );
}
