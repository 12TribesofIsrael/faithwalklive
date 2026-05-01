// Index entries for the /updates news log surface.
// Each entry corresponds to a /updates/<slug> detail page.
export type UpdateEntry = {
  slug: string;
  date: string; // YYYY-MM-DD
  headline: string;
  summary: string;
};

// Per-incident recovery timeline entries. Daily-append surface — bumps the
// NewsArticle dateModified without touching the page component. Public-safe
// paraphrases only; do not introduce new specifics beyond what major news
// outlets have already published.
export type RecoveryEntry = {
  date: string; // YYYY-MM-DD
  body: string;
};

export const updates: UpdateEntry[] = [
  {
    slug: "april-28-incident",
    date: "2026-04-28",
    headline: "Walk Paused After Accident on the Route",
    summary:
      "On Day 34 of the 3,000-mile Faith Walk, Minister Zay was struck by a vehicle on U.S. 40 in Indiana while livestreaming. He was hospitalized; condition reported as stable and not life-threatening. The walk and daily livestream are paused while he recovers. Coverage by Fox 29, Fox 59, TMZ, The Shade Room, and others.",
  },
];

export const aprilTwentyEightRecovery: RecoveryEntry[] = [
  {
    date: "2026-04-28",
    body: "Initial reports: Minister Zay was struck by a vehicle on U.S. 40 in Indiana around 3 p.m. ET while livestreaming Day 34 of the Faith Walk. Hospitalized; condition stable per reports. Walk and stream paused.",
  },
  {
    date: "2026-04-29",
    body: "National coverage expanded — Fox 29 Philadelphia, Fox 59 Indianapolis, Fox 5 New York, Fox 5 Atlanta, KTVU, Fox 32 Chicago, Fox 35 Orlando carrying the story alongside TMZ and The Shade Room. Daily livestream remains offline. faithwalklive.com prayer hub now routes to the HMBL University Discord prayer section.",
  },
  {
    date: "2026-04-30",
    body: "No new specifics released by Zay or his team beyond the initial news cycle. Walk remains paused. Recovery updates will be posted here as they enter the public record. To pray with the community in the meantime, visit faithwalklive.com/prayer.",
  },
  {
    date: "2026-05-01",
    body: "Recovery Day 3. No new statements from Zay or his team have entered the public record today. Walk and daily livestream remain paused. To pray with the community in the meantime, visit faithwalklive.com/prayer.",
  },
];
