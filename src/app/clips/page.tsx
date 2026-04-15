import { getClips } from "@/lib/checkpoints";

export const metadata = {
  title: "Clip Archive · Faith Walk Live",
};

export default function ClipsPage() {
  const clips = getClips().reverse();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Clip Archive</h1>
        <p className="text-neutral-400 mt-1">
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
            className="block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-amber-400/40 hover:bg-neutral-900 transition"
          >
            <p className="text-xs uppercase tracking-widest text-amber-400">
              Day {c.day}
              {c.restOnly ? " · Rest" : ""}
            </p>
            <p className="mt-1 font-semibold">{c.location}</p>
            <p className="text-sm text-neutral-400">
              {c.date} · {c.miles} mi
            </p>
            <p className="mt-3 text-sm text-amber-400">Watch clip →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
