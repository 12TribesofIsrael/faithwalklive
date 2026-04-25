"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { Checkpoint } from "@/lib/checkpoints";
import { clipsFor } from "@/lib/checkpoints";

const TrackerMap = dynamic(() => import("./TrackerMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full grid place-items-center text-brand-bronze text-sm bg-brand-black">
      Loading map…
    </div>
  ),
});

// Footer slot for a checkpoint card. For single-clip days renders the
// classic inline "Watch clip →" link; for multi-clip days (the Love Wall
// pattern) renders the title + a row of numbered pills.
function CardClipsFooter({ c }: { c: Checkpoint }) {
  const arr = clipsFor(c);
  if (arr.length === 0) return null;
  if (arr.length === 1) {
    return (
      <a
        href={arr[0]}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-xs text-brand-gold hover:underline"
      >
        Watch clip →
      </a>
    );
  }
  return (
    <span className="text-xs text-brand-gold font-medium">
      {arr.length} clips ▶
    </span>
  );
}

// Full-width pill row for multi-clip days, rendered below the metric row.
// Returns null for 0 or 1 clips so single-clip cards keep their inline link.
function ClipWallRow({ c }: { c: Checkpoint }) {
  const arr = clipsFor(c);
  if (arr.length < 2) return null;
  return (
    <div className="mt-3 pt-3 border-t border-dashed border-brand-gold/20">
      {c.clipsTitle && (
        <p className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold mb-2">
          {c.clipsTitle}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {arr.map((url, i) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-brand-gold border border-brand-gold/30 bg-brand-gold/10 hover:bg-brand-gold/20 hover:border-brand-gold/60 rounded-md px-2 py-1 transition"
          >
            ▶ Clip {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

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
  const steps = miles * 2200;
  const percent = Math.round((miles / totalMiles) * 1000) / 10;
  const hasRestDayCard = !!last?.restDay;
  const restDayNumber = last?.inProgressDay ?? last?.day ?? 0;

  // Surface the most recent archived rest day as a NOW card when it sits
  // ahead of the latest walking checkpoint (e.g. Day 25 rest archived after
  // Day 24 arrival, Day 26 walk in progress). Closes the visual gap between
  // header day and NOW badge by 1 without narrating the in-progress
  // destination on a card.
  const lastEntry = checkpoints[checkpoints.length - 1];
  const restOnlyAsNow =
    lastEntry?.restOnly && last && lastEntry.day > last.day
      ? lastEntry
      : null;

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
          Checkpoints (
          {checkpoints.length + (hasRestDayCard ? 1 : 0)})
        </h2>
        <p className="text-brand-cloud/60 text-sm max-w-2xl">
          <span className="text-brand-gold font-medium">NOW</span> marks the
          latest checkpoint card. The day in the header is the current day on
          the walk.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {restOnlyAsNow && (
            <button
              key={`restonly-${restOnlyAsNow.day}`}
              onClick={() => handleSelect(restOnlyAsNow.day)}
              className="text-left rounded-xl border p-4 transition-all border-brand-gold/60 bg-brand-gold/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-brand-bronze">
                  Day {restOnlyAsNow.day}
                  <span className="ml-2 text-brand-gold">NOW</span>
                </span>
                <span className="text-xs text-brand-brown">
                  {restOnlyAsNow.date}
                </span>
              </div>
              <p className="mt-1 font-semibold text-brand-cloud">
                {restOnlyAsNow.location}
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-brand-amber">REST DAY 💤</span>
                <CardClipsFooter c={restOnlyAsNow} />
              </div>
              <ClipWallRow c={restOnlyAsNow} />
            </button>
          )}
          {hasRestDayCard && last && (
            <button
              key={`rest-${restDayNumber}`}
              onClick={() => handleSelect(last.day)}
              className="text-left rounded-xl border p-4 transition-all border-brand-gold/60 bg-brand-gold/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-brand-bronze">
                  Day {restDayNumber}
                  <span className="ml-2 text-brand-gold">NOW</span>
                </span>
                <span className="text-xs text-brand-brown">
                  {last.restDayDate ?? ""}
                </span>
              </div>
              <p className="mt-1 font-semibold text-brand-cloud">
                {last.location}
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-brand-amber">REST DAY 💤</span>
              </div>
            </button>
          )}
          {checkpoints
            .slice()
            .reverse()
            .map((c) => {
              // restOnlyAsNow is already rendered as the NOW card above;
              // don't double-render it here.
              if (restOnlyAsNow && c === restOnlyAsNow) return null;

              // Historical restOnly entries (e.g. Day 25 rest archived
              // between walking arrivals) get a compact secondary card so
              // the calendar stays continuous. Mirrors the GitHub Pages
              // tracker's rest-only card variant.
              if (c.restOnly) {
                return (
                  <button
                    key={`restonly-${c.day}-${c.date}`}
                    onClick={() => handleSelect(c.day)}
                    className="text-left rounded-xl border p-4 transition-all border-brand-border/60 bg-brand-black/30 hover:border-brand-amber/30 hover:bg-brand-black/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wider text-brand-bronze/70">
                        Day {c.day} · REST
                      </span>
                      <span className="text-xs text-brand-brown">{c.date}</span>
                    </div>
                    <p className="mt-1 font-semibold text-brand-cloud/70">
                      {c.location}
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm text-brand-amber/80">💤</span>
                      <CardClipsFooter c={c} />
                    </div>
                    <ClipWallRow c={c} />
                  </button>
                );
              }

              const isCurrent =
                c.day === last?.day && !hasRestDayCard && !restOnlyAsNow;
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
                    <CardClipsFooter c={c} />
                  </div>
                  <ClipWallRow c={c} />
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
