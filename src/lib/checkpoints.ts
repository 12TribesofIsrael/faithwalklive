import raw from "@/data/checkpoints.json";

export type Checkpoint = {
  day: number;
  location: string;
  lat: number;
  lng: number;
  miles: number;
  date: string;
  clip?: string;
  // Multi-clip "wall" support — when a day collects several stream clips
  // (e.g. milestones, multiple supporters showing up), the consulting
  // repo writes them here. `clip` is also set to the first entry as a
  // legacy fallback for any code path still reading the single field.
  clips?: string[];
  clipsTitle?: string;
  estimatedMiles?: boolean;
  restOnly?: boolean;
  // Annotations applied to the latest walking checkpoint by the
  // consulting repo's title-driven updater. Reflect the *current*
  // day even when no new arrival is logged yet.
  inProgressDay?: number;
  restDay?: boolean;
  restDayDate?: string;
  destination?: string;
  destinationLat?: number;
  destinationLng?: number;
  milesRemaining?: number;
  estimatedSegmentMiles?: number;
  inProgressStartedAt?: string;
};

export const checkpoints: Checkpoint[] = raw as Checkpoint[];

const TOTAL_MILES = 3000;

const STEPS_PER_MILE = 2200;

// Flatten any single/multi clip configuration into a single URL list.
// Always prefer the explicit `clips` array when present; fall back to
// the legacy `clip` field for older entries.
export function clipsFor(c: Checkpoint): string[] {
  if (c.clips && c.clips.length) return c.clips;
  if (c.clip) return [c.clip];
  return [];
}

export function getStats() {
  const walkingOnly = checkpoints.filter((c) => !c.restOnly);
  const last = walkingOnly[walkingOnly.length - 1];
  const miles = last?.miles ?? 0;
  // In-progress fields can live on the latest walking checkpoint OR on
  // a trailing rest-only entry archived after a rest-day rollover.
  // Walk tail-first so the rest-only entry's annotations win when present.
  const inProgress = [...checkpoints].reverse().find((c) => c.inProgressDay);
  const currentDay = inProgress?.inProgressDay ?? last?.day ?? 0;
  return {
    currentDay,
    currentLocation: last?.location ?? "Philadelphia, PA",
    miles,
    totalMiles: TOTAL_MILES,
    percent: Math.round((miles / TOTAL_MILES) * 1000) / 10,
    steps: miles * STEPS_PER_MILE,
    totalSteps: TOTAL_MILES * STEPS_PER_MILE,
    clipCount: checkpoints.reduce((n, c) => n + clipsFor(c).length, 0),
    isRestDay: last?.restDay === true,
    destination: inProgress?.destination ?? last?.destination ?? null,
    milesRemaining: inProgress?.milesRemaining ?? last?.milesRemaining ?? null,
  };
}

export function getClips(): Checkpoint[] {
  return checkpoints.filter((c) => clipsFor(c).length > 0);
}
