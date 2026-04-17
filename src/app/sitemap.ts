import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faithwalklive.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/map`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/clips`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/why`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/prayer`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/subscribe`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
