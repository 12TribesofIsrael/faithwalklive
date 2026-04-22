# Faith Walk Live

**Live at [https://faithwalklive.com](https://faithwalklive.com)**

A believer's companion to Minister Zay's 3,000-mile Philly→Cali Faith Walk.

Standalone platform — **not** affiliated with HMBL. Built by [AI Bible Gospels](https://aibiblegospels.com), a supporter riding with the mission.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript + Tailwind v4
- Leaflet + react-leaflet (live tracker map)
- Deploy target: Vercel
- Domain: faithwalklive.com

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Routes

| Route        | Purpose                                                       |
|--------------|---------------------------------------------------------------|
| `/`          | Hero, live stats, scripture of the day, section cards         |
| `/map`       | Leaflet map with all checkpoints + polyline route             |
| `/clips`     | Grid of all daily Twitch clips with day/location/miles context|
| `/why`       | "Why this walk matters" — testimony page                      |
| `/prayer`    | Prayer wall form (frontend only — backend ships Phase 1.5)    |
| `/subscribe` | Email signup form (frontend only — backend ships Phase 1.5)   |

## Data

Checkpoints live at `src/data/checkpoints.json`, seeded from the consulting repo. The source of truth remains the `tracker:from-title` pipeline in the parent consulting project — this repo gets periodic snapshots until we move ownership here.

Sync a fresh snapshot:
```bash
cp ../AIconsultantforHmblzayy/src/faith-walk-tracker/checkpoints.json src/data/checkpoints.json
```

## Phase 1 roadmap (30 days)

- [x] Scaffold Next.js + Tailwind + Leaflet
- [x] Homepage with live stats
- [x] Map page (port Leaflet tracker)
- [x] Clip archive grid
- [x] Why page
- [x] Scripture of the day card
- [ ] Prayer wall backend (route handler + DB)
- [ ] Email signup backend (Buttondown or ConvertKit)
- [ ] Viewer map (opt-in pins)
- [ ] Custom domain on Vercel (faithwalklive.com)
- [ ] OG image + metadata polish
- [ ] First social post

## Positioning rules (non-negotiable)

1. Never go negative on HMBL publicly.
2. Work speaks. No begging, no explaining.
3. Credit Zay's walk — the tracker exists because he's the one walking.
4. Testimony voice, not tech voice.
5. This is supporter-built, not official.
