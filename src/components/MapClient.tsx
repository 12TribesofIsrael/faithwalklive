"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { Checkpoint } from "@/lib/checkpoints";

const TrackerMap = dynamic(() => import("./TrackerMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full grid place-items-center text-neutral-500 text-sm bg-neutral-900">
      Loading map…
    </div>
  ),
});

export default function MapClient({
  checkpoints,
  totalMiles,
}: {
  checkpoints: Checkpoint[];
  totalMiles: number;
}) {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const walking = checkpoints.filter((c) => !c.restOnly);
  const last = walking[walking.length - 1];
  const miles = last?.miles ?? 0;
  const steps = miles * 2000;
  const percent = Math.round((miles / totalMiles) * 1000) / 10;

  const handleSelect = useCallback((day: number) => {
    setActiveDay((prev) => (prev === day ? null : day));
  }, []);

  return (
    <div className="space-y-6">
      {/* Progress overlay bar */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <span className="text-neutral-400">Miles walked</span>
            <span className="font-semibold text-amber-400">
              {miles.toLocaleString()} / {totalMiles.toLocaleString()} mi
            </span>
          </div>
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <span className="text-neutral-400">Steps walked</span>
            <span className="font-semibold text-amber-400">
              {steps.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>Philadelphia, PA</span>
          <span>{percent}%</span>
          <span>California</span>
        </div>
      </div>

      {/* Map */}
      <div className="h-[65vh] rounded-2xl overflow-hidden border border-neutral-800">
        <TrackerMap checkpoints={checkpoints} activeDay={activeDay} />
      </div>

      {/* Checkpoint list */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-200">
          Checkpoints ({walking.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {walking
            .slice()
            .reverse()
            .map((c) => {
              const isCurrent = c.day === last?.day;
              const isActive = activeDay === c.day;
              return (
                <button
                  key={c.day}
                  onClick={() => handleSelect(c.day)}
                  className={`text-left rounded-xl border p-4 transition-all ${
                    isCurrent
                      ? "border-amber-400/60 bg-amber-400/10"
                      : isActive
                        ? "border-amber-400/40 bg-neutral-800"
                        : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                      Day {c.day}
                      {isCurrent && (
                        <span className="ml-2 text-amber-400">NOW</span>
                      )}
                    </span>
                    <span className="text-xs text-neutral-600">{c.date}</span>
                  </div>
                  <p className="mt-1 font-semibold text-neutral-200">
                    {c.location}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      {c.miles} mi{c.estimatedMiles ? " (est)" : ""}
                    </span>
                    {c.clip && (
                      <a
                        href={c.clip}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-amber-400 hover:underline"
                      >
                        Watch clip →
                      </a>
                    )}
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
