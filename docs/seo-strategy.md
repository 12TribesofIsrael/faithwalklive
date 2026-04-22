# SEO + Traffic Strategy — Faith Walk Live

**Created:** Apr 17, 2026
**Owner:** Thomas (AI Bible Gospels / Technology Gurus LLC)
**Goal:** 500+ visits week 1, 50+ email signups, 3 inbound faith-tech leads in 30 days

---

## Phase A: Technical SEO (Claude builds)

- [x] Sitemap (`/sitemap.xml` — auto-generated via `src/app/sitemap.ts`)
- [x] Robots.txt (`/robots.txt` — via `src/app/robots.ts`)
- [x] metadataBase set to `https://faithwalklive.com` (canonical URLs)
- [x] OpenGraph tags on root layout (title, description, type, siteName)
- [x] Twitter card meta tags (summary_large_image)
- [x] JSON-LD structured data (WebSite schema + Event schema for the walk)
- [x] Unique meta title + description on every page
- [x] Keywords meta tag with target terms
- [x] Vercel Web Analytics enabled
- [x] OG image (1200x630 branded) — `src/app/opengraph-image.tsx` via `next/og`, Twitter mirror at `twitter-image.tsx`
- [x] Favicon + Apple touch icon — `src/app/icon.tsx` (32×32) + `src/app/apple-icon.tsx` (180×180), both branded gold-beacon-on-navy
- [ ] Google Search Console setup (Thomas does this — see below)

---

## Phase B: Content + Distribution (Thomas executes)

### Week 1 (Apr 17-24)

#### Google Search Console (do this first)
- [ ] Go to search.google.com/search-console
- [ ] Add property: `faithwalklive.com`
- [ ] Verify via DNS (add TXT record in GoDaddy) or HTML tag
- [ ] Submit sitemap URL: `https://faithwalklive.com/sitemap.xml`
- [ ] Monitor what queries surface within the first week

#### YouTube (AI Bible Gospels)
- [ ] Add `faithwalklive.com` link to every video description
- [ ] Pin a comment with the link on your top 3 videos
- [ ] Add "Follow the Walk Live" end screen card linking to the site
- [ ] Create a short video about the site launch (screen recording walkthrough)

#### X / Twitter
- [ ] Post 2-3 times daily with walk updates + site link
- [ ] Use hashtags: #FaithWalk #ChristianTwitch #WalkByFaith #FaithWalkLive
- [ ] Quote-tweet Zay's clips with the map link
- [ ] Pin a tweet about the site to your profile

#### Reddit (ONE good post — don't spam)
- [ ] Write a genuine testimony post for r/Christianity about the walk
- [ ] DO NOT link-drop — tell the story, mention the site naturally at the end
- [ ] If it gets traction, reply to comments genuinely — no sales
- [ ] Consider r/Twitch or r/streamers if the walk angle fits

### Week 2 (Apr 24 - May 1)

#### TikTok / Instagram Reels
- [ ] Post 1 dramatic walk clip per day (weather, cities, prayer stops)
- [ ] Bio link set to faithwalklive.com (direct, not Linktree)
- [ ] Caption with faith-first testimony voice, not tech voice

#### Local News Outreach
- [ ] Identify 3-5 local TV stations or newspapers in cities Zay is walking through
- [ ] Email them: "Minister walking coast-to-coast passes through [city]"
- [ ] Include link to faithwalklive.com for their story
- [ ] Each article = a free backlink with real authority

#### Backlinks
- [ ] Submit to Christian web directories (ChristianWebsite.com, FaithBasedDirectory)
- [ ] Submit to Twitch streamer directories
- [ ] Make sure GitHub repo README links to faithwalklive.com
- [ ] Reach out to 1-2 Christian blogs about a guest post opportunity

---

## Phase C: Content Pages (Claude builds when ready)

These pages target specific long-tail keywords with low competition:

- [ ] "Best Christian Twitch Streamers in 2026" — listicle, include Zay
- [ ] Weekly walk update posts (geo-tagged per city — each ranks for "[city] + faith walk")
- [ ] "How to Build a Website for Your Ministry" — attracts consulting leads
- [ ] "Minister Walking Across America 2026" — evergreen SEO page

---

## Target Keywords

**Primary (low competition, high intent):**
- minister walking across america 2026
- faith walk philadelphia to california
- minister zay twitch
- faith walk live
- christian twitch streamers

**Secondary (broader, more competitive):**
- christian live streaming
- faith-based content creators
- faith walk tracker
- christian twitch channels

---

## What NOT to do

- Do NOT keyword-stuff pages — write naturally
- Do NOT buy backlinks or use link farms
- Do NOT spam Reddit or HMBL Discord
- Do NOT build thin pages just for SEO — 10 strong pages > 50 empty ones
- Do NOT wait for perfection — a live site starts indexing NOW
- Do NOT ignore mobile — 70%+ of faith community traffic is mobile

---

## Success Metrics (30 days)

- [ ] Google Search Console showing impressions for target keywords
- [ ] 500+ visits in week 1
- [ ] At least 1 Reddit post with 50+ upvotes
- [ ] Every AI Bible Gospels video linking to the site
- [ ] 50+ email signups (once backend is wired)
- [ ] 3 inbound "can you build this for me?" messages

---

## Future (Phase 2+)

- [ ] Facebook Pixel for retargeting
- [ ] Google Ads Pixel for ad campaigns
- [ ] Blog section with weekly walk update posts
- [ ] "Best Christian Twitch Streamers" listicle page
- [ ] Ministry website consulting landing page
