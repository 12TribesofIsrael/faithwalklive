# Changelog

## [0.6.0] — 2026-04-21

### AEO / SEO polish
- **OG image** — `src/app/opengraph-image.tsx` generates a 1200×630 branded share card via `next/og` (ImageResponse). Auto-wires `og:image` across every page. Dark navy gradient + gold beacon mark + `"3,000 miles on faith."` headline + `faithwalklive.com` / `Built by AI Bible Gospels` footer. Twitter card mirrors via `src/app/twitter-image.tsx`.
- **Branded icons** — replaced stock Next.js `favicon.ico` with dynamic `src/app/icon.tsx` (32×32 gold beacon on navy, tab-bar-readable) and `src/app/apple-icon.tsx` (180×180 iOS home-screen icon with glow + `FAITH WALK` label).
- **Speakable schema on FAQ** — `FAQPage` JSON-LD now includes `SpeakableSpecification` with `cssSelector: [".faq-q", ".faq-a"]`; the `<dt>` / `<dd>` elements carry matching classes. Makes every Q&A eligible for voice-assistant readout (Google Assistant, Bing/Alexa).

### Strategy docs updated
- `docs/seo-strategy.md` — OG image + favicon checked off in Phase A.
- `docs/aeo-strategy.md` — Speakable moved from Phase C ("future") to Phase A ("shipped").

## [0.5.0] — 2026-04-18

### OBS Stream Overlay (shipped to production)
- `/obs` route live at [faithwalklive.com/obs](https://faithwalklive.com/obs?bare=1) — full-bleed dark map for Zay's Twitch browser source
- Gold polyline route + pulsing amber beacon on latest checkpoint
- `?bare=1` hides stats panel; `?brand=0` hides AI Bible Gospels watermark
- `robots: noindex` — not for search, for stream only
- Merged from `feat/obs-overlay` branch after ShuggC confirmation
- Delivered to ShuggC Apr 18 for OBS Remote / IRL Toolkit use

### Added
- `/live` route — UTM redirect (`?utm_source=twitch&utm_medium=stream_overlay&utm_campaign=faith_walk`) for trackable attribution of stream-overlay traffic
- Brand watermark component (AI Bible Gospels) on `/obs` — first overlay-level exposure on Zay's stream

### Infrastructure
- Route group refactor: site pages moved under `(site)` group for layout isolation from overlay routes

## [0.4.0] — 2026-04-17

### SEO
- Auto-generated sitemap at `/sitemap.xml` (via `src/app/sitemap.ts`)
- Robots.txt at `/robots.txt` (via `src/app/robots.ts`)
- metadataBase set to `https://faithwalklive.com` for canonical URLs
- OpenGraph + Twitter Card meta tags on root layout
- JSON-LD structured data: WebSite schema + Event schema for the walk
- Unique meta title + description on every page (map, clips, why, prayer, subscribe)
- Target keywords added: faith walk, minister zay, christian twitch, etc.
- SEO strategy doc created at `docs/seo-strategy.md` with full action checklist

### Added
- Vercel Web Analytics (`@vercel/analytics`) — tracks visitors, page views, referrers, bounce rate

### Improved
- Why page reordered for seamless reading flow (platform intro first, then testimony + scripture)
- Why page section headers upgraded to bold Cloud White for visual hierarchy

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
