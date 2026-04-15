import Link from "next/link";
import ScriptureCard from "@/components/ScriptureCard";
import { getStats } from "@/lib/checkpoints";

export default function Home() {
  const s = getStats();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
          A believer&apos;s companion to the Philly → Cali Faith Walk
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Faith Walk <span className="text-amber-400">Live</span>
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-300 text-lg">
          Minister Zay is walking 3,000 miles from Philadelphia to California.
          Every day. On faith. This is where we follow along — the map, the
          clips, the scripture, the prayers.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Stat label="Current day" value={`Day ${s.currentDay}`} />
        <Stat label="Location" value={s.currentLocation} />
        <Stat label="Miles walked" value={`${s.miles} / ${s.totalMiles}`} />
        <Stat label="Progress" value={`${s.percent}%`} />
      </section>

      <ScriptureCard />

      <section className="grid sm:grid-cols-2 gap-4">
        <Card
          href="/map"
          title="Live Map"
          body="Every confirmed checkpoint from Philadelphia to now, plus where the walk is headed today."
        />
        <Card
          href="/clips"
          title="Clip Archive"
          body={`${s.clipCount} moments from stream — faith, milestones, the struggle, the support.`}
        />
        <Card
          href="/why"
          title="Why this walk matters"
          body="A testimony, not a pitch. Why this platform exists, and who it's for."
        />
        <Card
          href="/prayer"
          title="Prayer Wall"
          body="Drop a prayer for Zay and the walk. Moderated, public, lifted up daily."
        />
      </section>

      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center space-y-3">
        <h2 className="text-2xl font-semibold">Get daily walk updates</h2>
        <p className="text-neutral-400">
          One short email a day with the checkpoint, a clip, and the verse.
        </p>
        <Link
          href="/subscribe"
          className="inline-block px-5 py-2 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition"
        >
          Subscribe
        </Link>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="mt-1 font-semibold text-lg">{value}</p>
    </div>
  );
}

function Card({
  href,
  title,
  body,
}: {
  href: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-amber-400/40 hover:bg-neutral-900 transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{body}</p>
    </Link>
  );
}
