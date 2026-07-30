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
    slug: "walk-complete",
    date: "2026-07-27",
    headline: "Minister Zay Completes the 3,000-Mile Walk to California",
    summary:
      "On Day 124, Minister Zay walked into Needles, California and finished the 3,000-mile Faith Walk from Philadelphia — 124 days after setting out, and three months after a vehicle strike in Indiana that put him in the hospital. He livestreamed nearly every mile on Twitch. The walk raised money to build HMBL University, a trade school for Philadelphia teens. Covered by Complex, NBC10 Philadelphia, CBS News Philadelphia, The Source, Hollywood Unlocked, and others.",
  },
  {
    slug: "rv-rolling-support",
    date: "2026-05-08",
    headline: "Faith Walk Adds RV for Rolling Support",
    summary:
      "Minister Zay announced an RV that will roll alongside the 3,000-mile Faith Walk as a mobile support and rest vehicle. The RV is staged in Indianapolis, IN as Zay continues toward Camby and the next stretch of the route to California. Announced in a Reel on his Instagram (@hmblzay) on May 8, 2026.",
  },
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
    body: "Minister Zay confirmed in HMBL University Discord that the walk resumes Sunday at 12 noon. He'll return to the spot of the accident, pray over it, and continue walking from there. Streaming equipment is in transit; he'll go live on TikTok @hmblzayy at 5 PM today while waiting for it to arrive.",
  },
  {
    date: "2026-05-02",
    body: "A bystander TikTok of the vehicle has circulated publicly; no further information posted by Zay or his team. Walk still set to resume Sunday at 12 noon ET — Zay returns to the spot of the accident to pray and continue from there.",
  },
];
