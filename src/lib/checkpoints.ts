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
  // Walk-paused state: walk halted by an off-route event (e.g. accident).
  // pausedNote is shown verbatim on the public banner + map popup.
  paused?: boolean;
  pausedNote?: string;
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
  // pausedSince: date of the last walking checkpoint *before* the paused day.
  // Drives Event JSON-LD `previousStartDate` when the walk is paused.
  const pausedSinceCp = [...walkingOnly].reverse().find((c) => !c.paused);
  const pausedSince = last?.paused === true ? pausedSinceCp?.date ?? null : null;

  // recoveryDay: calendar days elapsed since the paused day. 0 on the paused
  // day itself, 1 on the next day, etc. Advances daily from build time —
  // the daily `recovery:append` push in the consulting repo triggers a
  // Vercel rebuild, which refreshes this number along with the new entry.
  // displayDay: what the public stat bar shows. During pause, advances with
  // calendar time (Day 34 + recoveryDay) so the tracker stays visibly alive
  // even though no walking miles are being added. Outside pause, equals the
  // current walking day. The underlying `currentDay` stays as the actual
  // walking-day index; only `displayDay` carries the recovery offset.
  const isPaused = last?.paused === true;
  const pausedDate = isPaused ? last?.date ?? null : null;
  const today = new Date();
  const pausedDateObj = pausedDate ? new Date(pausedDate) : null;
  const daysSincePaused = pausedDateObj
    ? Math.floor(
        (today.getTime() - pausedDateObj.getTime()) / (1000 * 60 * 60 * 24)
      )
    : 0;
  const recoveryDay = isPaused && daysSincePaused > 0 ? daysSincePaused : 0;
  const displayDay = isPaused ? currentDay + recoveryDay : currentDay;

  return {
    currentDay,
    displayDay,
    recoveryDay,
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
    isPaused,
    pausedNote: last?.pausedNote ?? null,
    pausedSince,
    pausedDate,
  };
}

export function getClips(): Checkpoint[] {
  return checkpoints.filter((c) => clipsFor(c).length > 0);
}
