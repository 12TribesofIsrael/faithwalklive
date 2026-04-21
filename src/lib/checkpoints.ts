import raw from "@/data/checkpoints.json";

export type Checkpoint = {
  day: number;
  location: string;
  lat: number;
  lng: number;
  miles: number;
  date: string;
  clip?: string;
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

export function getStats() {
  const walkingOnly = checkpoints.filter((c) => !c.restOnly);
  const last = walkingOnly[walkingOnly.length - 1];
  const miles = last?.miles ?? 0;
  const currentDay = last?.inProgressDay ?? last?.day ?? 0;
  return {
    currentDay,
    currentLocation: last?.location ?? "Philadelphia, PA",
    miles,
    totalMiles: TOTAL_MILES,
    percent: Math.round((miles / TOTAL_MILES) * 1000) / 10,
    steps: miles * STEPS_PER_MILE,
    totalSteps: TOTAL_MILES * STEPS_PER_MILE,
    clipCount: checkpoints.filter((c) => c.clip).length,
    isRestDay: last?.restDay === true,
    destination: last?.destination ?? null,
    milesRemaining: last?.milesRemaining ?? null,
  };
}

export function getClips(): Checkpoint[] {
  return checkpoints.filter((c) => c.clip);
}
