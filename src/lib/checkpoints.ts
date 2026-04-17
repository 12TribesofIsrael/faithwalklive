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
};

export const checkpoints: Checkpoint[] = raw as Checkpoint[];

const TOTAL_MILES = 3000;

const STEPS_PER_MILE = 2000;

export function getStats() {
  const walkingOnly = checkpoints.filter((c) => !c.restOnly);
  const last = walkingOnly[walkingOnly.length - 1];
  const miles = last?.miles ?? 0;
  return {
    currentDay: last?.day ?? 0,
    currentLocation: last?.location ?? "Philadelphia, PA",
    miles,
    totalMiles: TOTAL_MILES,
    percent: Math.round((miles / TOTAL_MILES) * 1000) / 10,
    steps: miles * STEPS_PER_MILE,
    totalSteps: TOTAL_MILES * STEPS_PER_MILE,
    clipCount: checkpoints.filter((c) => c.clip).length,
  };
}

export function getClips(): Checkpoint[] {
  return checkpoints.filter((c) => c.clip);
}
