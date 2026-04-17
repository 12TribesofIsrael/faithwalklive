"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { Checkpoint } from "@/lib/checkpoints";

const TrackerMap = dynamic(() => import("./TrackerMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full grid place-items-center text-brand-bronze text-sm bg-brand-black">
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
      <div className="rounded-xl border border-brand-border bg-brand-black/80 p-4 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <span className="text-brand-amber">Miles walked</span>
            <span className="font-semibold text-brand-gold">
              {miles.toLocaleString()} / {totalMiles.toLocaleString()} mi
            </span>
          </div>
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <span className="text-brand-amber">Steps walked</span>
            <span className="font-semibold text-brand-gold">
              {steps.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-brand-border overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-amber to-brand-gold transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-brand-bronze">
          <span>Philadelphia, PA</span>
          <span>{percent}%</span>
          <span>California</span>
        </div>
      </div>

      {/* Map */}
      <div className="h-[65vh] rounded-2xl overflow-hidden border border-brand-border">
        <TrackerMap checkpoints={checkpoints} activeDay={activeDay} />
      </div>

      {/* Checkpoint list */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-cloud">
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
                      ? "border-brand-gold/60 bg-brand-gold/10"
                      : isActive
                        ? "border-brand-gold/40 bg-brand-black"
                        : "border-brand-border bg-brand-black/50 hover:border-brand-amber/30 hover:bg-brand-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-brand-bronze">
                      Day {c.day}
                      {isCurrent && (
                        <span className="ml-2 text-brand-gold">NOW</span>
                      )}
                    </span>
                    <span className="text-xs text-brand-brown">{c.date}</span>
                  </div>
                  <p className="mt-1 font-semibold text-brand-cloud">
                    {c.location}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm text-brand-amber">
                      {c.miles} mi{c.estimatedMiles ? " (est)" : ""}
                    </span>
                    {c.clip && (
                      <a
                        href={c.clip}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-brand-gold hover:underline"
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
