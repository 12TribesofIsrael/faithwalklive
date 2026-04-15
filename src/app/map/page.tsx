import { checkpoints, getStats } from "@/lib/checkpoints";
import MapClient from "@/components/MapClient";

export default function MapPage() {
  const s = getStats();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold">Live Map</h1>
          <p className="text-neutral-400 mt-1">
            Day {s.currentDay} · {s.currentLocation} · {s.miles} of{" "}
            {s.totalMiles} mi ({s.percent}%)
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
      <div className="h-[70vh] rounded-2xl overflow-hidden border border-neutral-800">
        <MapClient checkpoints={checkpoints} />
      </div>
    </div>
  );
}
