import { getClips } from "@/lib/checkpoints";

export const metadata = {
  title: "Clip Archive",
  description:
    "Watch daily clips from Minister Zay's 3,000-mile Faith Walk. Faith, milestones, struggle, and support — all from the Twitch stream.",
};

export default function ClipsPage() {
  const clips = getClips().reverse();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-brand-cloud">Clip Archive</h1>
        <p className="text-brand-amber mt-1">
          {clips.length} moments from the walk so far.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clips.map((c) => (
          <a
            key={`${c.day}-${c.date}`}
            href={c.clip}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-brand-border bg-brand-black/50 p-5 hover:border-brand-gold/40 hover:bg-brand-black transition"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">
              Day {c.day}
              {c.restOnly ? " · Rest" : ""}
            </p>
            <p className="mt-1 font-semibold text-brand-cloud">{c.location}</p>
            <p className="text-sm text-brand-amber">
              {c.date} · {c.miles} mi
            </p>
            <p className="mt-3 text-sm text-brand-gold">Watch clip →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
