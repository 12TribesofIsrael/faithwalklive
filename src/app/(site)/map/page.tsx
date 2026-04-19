import { checkpoints, getStats } from "@/lib/checkpoints";
import MapClient from "@/components/MapClient";

export const metadata = {
  title: "Live Map",
  description:
    "Interactive map tracking Minister Zay's 3,000-mile Faith Walk from Philadelphia to California. Every checkpoint, updated daily.",
};

export default function MapPage() {
  const s = getStats();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-brand-cloud">Live Map</h1>
          <p className="text-brand-amber mt-1">
            Day {s.currentDay}
            {s.isRestDay ? " · REST" : s.destination ? ` → ${s.destination}` : ""}
            {" · "}
            {s.currentLocation} · {s.miles} of {s.totalMiles} mi
          </p>
        </div>
        <a
          href="https://twitch.tv/hmblzayy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition w-fit"
        >
          Watch live on Twitch
        </a>
      </div>
      <MapClient checkpoints={checkpoints} totalMiles={s.totalMiles} />
    </div>
  );
}
