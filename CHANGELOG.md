# Changelog

## [0.2.0] — 2026-04-17

### Deployed
- Site live at [faithwalklive.com](https://faithwalklive.com) on Vercel
- GitHub repo pushed to `12TribesofIsrael/faithwalklive` (private until launch)
- GoDaddy DNS configured, HTTPS auto-provisioned

### Added
- Colossians 3:23 scripture anchor in site-wide footer
- Explicit no-affiliation disclaimer: "Faith Walk Live has no affiliation with the HMBL brand"
- Location data disclaimer clarifying all data is from public Twitch stream titles
- Checkpoints synced through Day 22 — Wilmot, OH (437 mi)

## [0.1.0] — 2026-04-15

### Added
- Next.js 16 + Tailwind v4 + TypeScript scaffold
- 7 routes: Home, Map, Clips, Why, Prayer, Subscribe, plus 404
- Leaflet map with checkpoint markers (client-only, lazy-loaded)
- Clip archive grid pulling from `checkpoints.json`
- Scripture of the day (deterministic rotation from walk start date)
- "Why this walk matters" testimony page
- Prayer wall + email subscribe form shells (frontend only, submit disabled)
- Nav + Footer site chrome
- CLAUDE.md + pivot strategy doc
