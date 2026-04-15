# Faith Walk Live

**Current Version: v0.1.0**
**Status:** Phase 1 scaffold shipped (Apr 15, 2026). Not deployed yet.

> **Before you do anything else:** read [docs/faith-tech-pivot-strategy.md](docs/faith-tech-pivot-strategy.md). That's the full thesis behind this project. Positioning rules in that doc are non-negotiable.

## What this is

Standalone companion platform for Minister Zay's 3,000-mile Faith Walk (Philadelphia → California, streaming daily on Twitch at [twitch.tv/hmblzayy](https://twitch.tv/hmblzayy)).

**Critical distinction:** This is **supporter-built, NOT official HMBL.** No logo, no claim of affiliation. Credit Zay's walk; never speak for the brand.

## Owner

- **Thomas** (Technology Gurus LLC) — AI automation engineer, believer, building this as flagship portfolio for a faith-tech consulting brand.
- Target market beyond this project: Christian Twitch streamers, ministers, missionary orgs, worship leaders, Christian podcasters.

## Relationship to sibling repo

This repo has a sibling at `../AIconsultantforHmblzayy` (the HMBL consulting project). That repo owns:

- **Source of truth for checkpoints** — `src/faith-walk-tracker/checkpoints.json` is updated daily via the `tracker:from-title` pipeline reading Zay's Twitch title.
- The existing live tracker at GitHub Pages — still running, do not break it mid-walk.
- Twitch clipper, chatbot, Discord scraper.

This repo (faithwalklive) pulls periodic snapshots of `checkpoints.json` until we move ownership over. **Do not edit checkpoints by hand here** — sync from the sibling repo.

```bash
cp ../AIconsultantforHmblzayy/src/faith-walk-tracker/checkpoints.json src/data/checkpoints.json
```

Eventually we'll add a `scripts/sync-checkpoints.js` that reads the remote tracker's live JSON. For now, manual copy is fine.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript** + **Tailwind v4**
- **Leaflet + react-leaflet** for the map (lazy-loaded client-only via `src/components/MapClient.tsx`)
- **Deploy target:** Vercel
- **Domain:** faithwalklive.com (owned by Thomas; not yet connected)

### Why this stack
- Next.js for SSR/static pages + built-in API routes (needed for Phase 1.5 prayer wall + email signup)
- Vercel for free tier + Next.js-native DX
- Leaflet (not Mapbox) for zero API key / free forever

## File map

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Home — hero, live stats, scripture of day, section cards |
| `src/app/map/page.tsx` | Live tracker map |
| `src/app/clips/page.tsx` | Clip archive grid |
| `src/app/why/page.tsx` | "Why this walk matters" testimony page |
| `src/app/prayer/page.tsx` | Prayer wall form (frontend only — Phase 1.5 backend) |
| `src/app/subscribe/page.tsx` | Email signup (frontend only — Phase 1.5 backend) |
| `src/components/Nav.tsx`, `Footer.tsx` | Chrome |
| `src/components/TrackerMap.tsx` | Leaflet map (client component; uses `window` at load) |
| `src/components/MapClient.tsx` | Client wrapper that does `dynamic(..., { ssr: false })` |
| `src/components/ScriptureCard.tsx` | Verse-of-the-day card |
| `src/lib/checkpoints.ts` | Checkpoint types + `getStats()` / `getClips()` helpers |
| `src/lib/scripture.ts` | Verse rotation (deterministic by day since walk start) |
| `src/data/checkpoints.json` | Snapshot from sibling repo — DO NOT hand-edit |
| `docs/faith-tech-pivot-strategy.md` | **The thesis.** Read first. |

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Must pass before deploy
npm start            # Production server
```

## Voice / writing rules

From the pivot doc's positioning rules — these apply to every piece of copy you write:

1. **Testimony voice, not tech voice.** Lead with faith and calling; features and stack live in the README, not on the site.
2. **Never go negative on HMBL publicly.** Ever. Not in copy, not in comments, not in commits.
3. **Credit Zay's walk.** The tracker exists because he's the one walking.
4. **Work speaks.** No begging, no over-explaining, no "as an AI" hedging.
5. **Supporter-built, not official.** Any copy implying affiliation needs to come out.
6. **AI-polished writing is a liability in HMBL-adjacent contexts.** Match plain, short, faith-first voice. Don't em-dash everything. Don't pile on adjectives.

## Phase 1 roadmap (30 days from Apr 15, 2026)

Done:
- [x] Next.js + Tailwind + Leaflet scaffold
- [x] 7 routes, static build passes
- [x] Homepage with live stats
- [x] Map (port of tracker)
- [x] Clip archive grid
- [x] Scripture of the day
- [x] Why testimony page
- [x] Prayer + Subscribe form shells

Up next (Phase 1.5):
- [ ] GitHub repo created + pushed (suggested: `12TribesofIsrael/faithwalklive`, private until launch)
- [ ] Vercel project + connect faithwalklive.com
- [ ] Prayer wall backend — Vercel Postgres or Supabase free tier, simple moderation flag
- [ ] Email signup backend — Buttondown or ConvertKit API route
- [ ] OG image + favicon
- [ ] Viewer map (opt-in supporter pins) — nice-to-have
- [ ] First social post announcing (don't post until above is done)

## Success metrics (from pivot doc, 30 days)

- Site live on faithwalklive.com
- 500+ visits in week 1 after launch
- 50+ email signups
- 3 inbound messages from faith-creators asking "can you build this for me?"

## Things not to do

- ❌ Don't post this in HMBL Discord general chat (violates Cierra's earlier warning)
- ❌ Don't position as "the official tracker"
- ❌ Don't trash HMBL's mods or politics anywhere public
- ❌ Don't ask Zay/ShuggC for permission to ship this — we don't need it
- ❌ Don't break the existing live tracker at the sibling repo's GitHub Pages URL — it's still what chat uses
