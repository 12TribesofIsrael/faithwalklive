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
  // Walk-complete state: set on the final checkpoint only. He crossed the
  // California line on Day 124 (Jul 27, 2026). completedNote is shown
  // verbatim on the public banner + map popup, same contract as pausedNote.
  completed?: boolean;
  completedNote?: string;
};

export const checkpoints: Checkpoint[] = raw as Checkpoint[];

const TOTAL_MILES = 3000;

// Canonical start of the walk. Single source of truth — every schema field
// and every piece of copy that states a start date reads this, so the date
// can never drift between the Event JSON-LD and the page a crawler reads.
//
// March 26, not 25. Two independent reasons: every outlet that covered the
// finish (NBC10, Complex, Unheard Voices) reports he left Philadelphia on
// March 26, AND it is the only date that makes our own day count work —
// March 26 through July 27 inclusive is exactly 124 days, the day number on
// the final checkpoint. March 25 yields 125 and contradicted our own data.
//
// NOTE: checkpoints.json still carries Day 1 (Philadelphia, 0 mi) at
// "Mar 25, 2026" and the early legs are shifted with it. That is a separate
// data-archaeology job on the map markers; it does not change the stated
// start of the walk, which is what schema and copy assert.
export const WALK_START_DATE = "2026-03-26"; // ISO, for schema
export const WALK_START_DATE_LABEL = "March 26, 2026"; // prose

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

  // Walk complete — set on the final checkpoint (Day 124, Jul 27 2026).
  const isComplete = last?.completed === true;

  // Reported mileage once the walk is finished.
  //
  // Our per-leg numbers are straight-line haversine x 1.3, which is an
  // ESTIMATE and a known-biased one: the v2.26.0 Strava reconciliation showed
  // it ran ~8.5% high across July, and the pre-July history was never
  // re-measured. The estimate chain lands at 2,957 mi, which would render a
  // finished walk as "98.6%" — wrong in the way that matters most.
  //
  // The walk IS finished. Zay, his GoFundMe, and every outlet that covered
  // the finish (Complex, The Source, NBC10 Philadelphia, the Philadelphia
  // Tribune) report 3,000 miles. So on completion we report the walk's stated
  // distance rather than our own estimate, and the underlying checkpoint keeps
  // its honest estimated figure for anyone reading the data.
  const reportedMiles = isComplete ? TOTAL_MILES : miles;
  const percent = isComplete
    ? 100
    : Math.round((miles / TOTAL_MILES) * 1000) / 10;

  return {
    currentDay,
    displayDay,
    recoveryDay,
    currentLocation: last?.location ?? "Philadelphia, PA",
    miles: reportedMiles,
    estimatedMiles: miles,
    totalMiles: TOTAL_MILES,
    percent,
    steps: reportedMiles * STEPS_PER_MILE,
    totalSteps: TOTAL_MILES * STEPS_PER_MILE,
    clipCount: checkpoints.reduce((n, c) => n + clipsFor(c).length, 0),
    isRestDay: last?.restDay === true,
    destination: inProgress?.destination ?? last?.destination ?? null,
    milesRemaining: inProgress?.milesRemaining ?? last?.milesRemaining ?? null,
    isPaused,
    pausedNote: last?.pausedNote ?? null,
    pausedSince,
    pausedDate,
    isComplete,
    completedNote: last?.completedNote ?? null,
    completedDate: isComplete ? last?.date ?? null : null,
    finishLocation: isComplete ? last?.location ?? null : null,
    // Canonical, NOT checkpoints[0].date — that is a rest-only entry dated
    // Mar 29 and reading it here silently published a wrong start date.
    startDate: WALK_START_DATE,
    startDateLabel: WALK_START_DATE_LABEL,
    totalDays: isComplete ? last?.day ?? currentDay : currentDay,
  };
}

export function getClips(): Checkpoint[] {
  return checkpoints.filter((c) => clipsFor(c).length > 0);
}
