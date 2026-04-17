# Changelog

## [0.3.1] — 2026-04-17

### Added
- Vercel Web Analytics (`@vercel/analytics`) — tracks visitors, page views, referrers, bounce rate
- Why page reordered for seamless reading flow (platform intro first, then testimony + scripture)

## [0.3.0] — 2026-04-17

### Theme
- AI Bible Gospels brand palette applied sitewide
- Deep Navy (#0A0A2A) backgrounds, Soft Gold (#F5DEB3) body text
- Divine Gold (#E8C46B) accents, Cloud White (#F0E6D2) headlines
- Warm Amber (#D4A04A) secondary text, Bronze (#8B5E3C) muted text
- Dramatically improved readability on mobile and desktop

### Map Upgrade
- Dark CartoDB tiles matching site theme
- Scroll wheel zoom (desktop) + pinch zoom (mobile) enabled
- Pulsing amber beacon on current location
- Green start marker at Philadelphia
- Auto-fit bounds to show full route on load
- Clickable checkpoint list below map — click to fly to location
- Progress bar with miles walked + steps walked

### Navigation
- Mobile hamburger menu with dropdown (replaces wrapping links)
- YouTube icon visible on mobile next to hamburger
- Logo text set to nowrap

### Content
- Why page rewritten with full testimony: Christ's mission scriptures (Luke 19:10, Matthew 1:21, Mark 1:15, John 3:17, Matthew 22:37-39)
- AI Bible Gospels sponsorship added across site: Nav (YouTube icon), Footer (sponsor line), Homepage (sponsor card), Why page, Subscribe page
- Steps calculation added sitewide (2,000 steps per mile)

### Infrastructure
- GitHub repo flipped to public (resolves Vercel Hobby plan deploy blocks)
- Co-Authored-By trailers removed from commits (Vercel Hobby limitation)

## [0.2.0] — 2026-04-17

### Deployed
- Site live at [faithwalklive.com](https://faithwalklive.com) on Vercel
- GitHub repo pushed to `12TribesofIsrael/faithwalklive`
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
