"use client";

import dynamic from "next/dynamic";
import type { Checkpoint } from "@/lib/checkpoints";

const TrackerMap = dynamic(() => import("./TrackerMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full grid place-items-center text-neutral-500 text-sm">
      Loading map…
    </div>
  ),
});

export default function MapClient({ checkpoints }: { checkpoints: Checkpoint[] }) {
  return <TrackerMap checkpoints={checkpoints} />;
}
