import type { MetadataRoute } from "next";
import { checkpoints } from "@/lib/checkpoints";
import { aprilTwentyEightRecovery, updates } from "@/data/updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faithwalklive.com";
  const now = new Date();

  // Use the freshest signal we have for tracker pages: the latest checkpoint
  // date. This way every tracker update (mirror from the consulting repo)
  // bumps freshness on /, /map, /clips for crawlers.
  const trackerLastModified = checkpoints
    .map((c) => c.date)
    .filter(Boolean)
    .sort()
    .pop();
  const trackerDate = trackerLastModified
    ? new Date(trackerLastModified)
    : now;

  // /updates index: max of all update entry dates + the latest recovery
  // entry on the active incident (so a daily-recovery append bumps the
  // index page too).
  const updatesDates = [
    ...updates.map((u) => u.date),
    ...aprilTwentyEightRecovery.map((r) => r.date),
  ];
  const updatesLastModified = updatesDates.sort().pop();
  const updatesIndexDate = updatesLastModified
    ? new Date(updatesLastModified)
    : now;

  // /updates/april-28-incident: latest recovery entry date (this is the
  // page that will be appended to daily during the recovery window).
  const incidentLatest = aprilTwentyEightRecovery
    .map((r) => r.date)
    .sort()
    .pop();
  const incidentDate = incidentLatest ? new Date(incidentLatest) : now;

  return [
    { url: base, lastModified: trackerDate, changeFrequency: "daily", priority: 1 },
    { url: `${base}/map`, lastModified: trackerDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/updates`, lastModified: updatesIndexDate, changeFrequency: "daily", priority: 0.95 },
    { url: `${base}/updates/april-28-incident`, lastModified: incidentDate, changeFrequency: "daily", priority: 0.95 },
    { url: `${base}/clips`, lastModified: trackerDate, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/press`, lastModified: incidentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/why`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/prayer`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/subscribe`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
