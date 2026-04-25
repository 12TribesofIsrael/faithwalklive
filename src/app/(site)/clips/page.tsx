import { getClips, clipsFor } from "@/lib/checkpoints";

export const metadata = {
  title: "Clip Archive",
  description:
    "Watch daily clips from Minister Zay's 3,000-mile Faith Walk. Faith, milestones, struggle, and support — all from the Twitch stream.",
};

export default function ClipsPage() {
  // Flatten multi-clip days (e.g. milestone "Love Wall" days) so each
  // individual clip gets its own card in the archive grid.
  const cards = getClips()
    .reverse()
    .flatMap((c) => {
      const arr = clipsFor(c);
      return arr.map((url, i) => ({
        c,
        url,
        idx: i,
        total: arr.length,
      }));
    });
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-brand-cloud">Clip Archive</h1>
        <p className="text-brand-amber mt-1">
          {cards.length} moments from the walk so far.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ c, url, idx, total }) => (
          <a
            key={`${c.day}-${c.date}-${idx}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-brand-border bg-brand-black/50 p-5 hover:border-brand-gold/40 hover:bg-brand-black transition"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">
              Day {c.day}
              {c.restOnly ? " · Rest" : ""}
              {total > 1 ? ` · Clip ${idx + 1} of ${total}` : ""}
            </p>
            <p className="mt-1 font-semibold text-brand-cloud">{c.location}</p>
            <p className="text-sm text-brand-amber">
              {c.date} · {c.miles} mi
            </p>
            {total > 1 && c.clipsTitle && idx === 0 && (
              <p className="text-[11px] mt-1 uppercase tracking-wider text-brand-gold/80">
                {c.clipsTitle}
              </p>
            )}
            <p className="mt-3 text-sm text-brand-gold">Watch clip →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
