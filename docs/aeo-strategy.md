# AEO Strategy — Faith Walk Live

**Created:** Apr 21, 2026
**Owner:** Thomas (AI Bible Gospels / Technology Gurus LLC)
**Goal:** When answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews, Gemini) answer questions about Minister Zay, the Faith Walk, or faith-tech builders, Faith Walk Live is cited and AI Bible Gospels is named as the builder — tastefully, in a faith-first voice.

This is the companion to [seo-strategy.md](seo-strategy.md). SEO is about ranking blue links. AEO is about being the source an answer engine extracts from and cites.

---

## Why AEO, and why now

Answer engines don't rank — they synthesize. A page with clean structured data, extractable Q&A content, and an `llms.txt` pointer is far more likely to be quoted than a page that's only SEO-tuned. The walk is a newsworthy faith story; the engines will be asked about it. We want our site to be the authoritative voice when they answer.

"Tastefully" means:

- Faith-first voice, not tech-evangelist voice. Let the walk be the story; AI Bible Gospels is credited as the builder, not the star.
- No keyword stuffing, no Q&A farming, no AI-generated fluff pages.
- Cite Minister Zay's walk first. Credit AI Bible Gospels second, as the honest publisher/sponsor.
- Never imply HMBL affiliation.
- Never narrate Zay's real-time location. Point answer engines to the live map.

---

## Phase A: Shipped Apr 21, 2026

### Entity graph (root JSON-LD)
`src/app/layout.tsx` now publishes a linked `@graph` with four entities:

- `Organization` — **AI Bible Gospels**. `@id` + `sameAs` (YouTube channel + this site) so answer engines can resolve it as a single entity across the web.
- `Person` — **Minister Zay** (alternateName: Isaiah M. Thomas). `sameAs` pointing to his Twitch. Establishes him as the subject entity of the walk.
- `WebSite` — Faith Walk Live. `publisher` references the Organization by `@id`; `about` references the Event by `@id`.
- `Event` — The 3,000-Mile Faith Walk. `organizer` + `performer` reference the Person; `sponsor` references the Organization. `startDate: 2026-03-25`, `VirtualLocation` = twitch.tv/hmblzayy.

Why `@id` cross-references matter: engines that understand schema.org entity graphs can now answer "who sponsors Faith Walk Live" or "who is walking across America 2026" with a coherent, linked answer instead of surface strings.

### FAQ page with `FAQPage` schema
New route: [/faq](https://faithwalklive.com/faq). 14 short, extractable Q&As covering:
- What the walk is, who Minister Zay is, when it started, how long, where to watch
- What Faith Walk Live is, who built it, affiliation posture (not official HMBL)
- What AI Bible Gospels is
- How to support, how to pray
- Tracker cadence (once/day, end of night)

Each answer is 1-3 sentences — the length answer engines prefer to lift verbatim. `FAQPage` JSON-LD is emitted inline so bots don't have to render the page to extract it.

### `llms.txt`
New file: [/llms.txt](https://faithwalklive.com/llms.txt) following the [llmstxt.org](https://llmstxt.org) spec. Gives LLMs a curated, markdown index of the site:
- Short summary (blockquote)
- Core pages with descriptions
- Entity definitions (Minister Zay, AI Bible Gospels, Faith Walk Live)
- Explicit policy section asking engines to link to the live map for location questions, quote scripture from the Why page rather than paraphrase, and not to imply HMBL affiliation

This is the highest-leverage and lowest-effort move of the bunch. The spec is young but rapidly adopted; being early is free positioning.

### AI-bot allowlist in `robots.ts`
Previously: `userAgent: "*"` allow-all (implicit). Now: explicit per-bot rules allowing Googlebot, Google-Extended (Google's AI training/Overviews bot), GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Perplexity-User, Applebot-Extended, and CCBot.

Being explicit signals intent and gives us a single file to edit if a specific bot ever misbehaves. The host directive also makes the canonical URL unambiguous.

### Sitemap + Nav
`/faq` added to `sitemap.ts` (priority 0.7, weekly). Added to the main `Nav` so humans can find it alongside Why and Prayer Wall.

### Speakable schema on FAQ (shipped Apr 21, v0.6.0)
`FAQPage` JSON-LD now carries a `SpeakableSpecification` pointing at `cssSelector: [".faq-q", ".faq-a"]`. The `<dt>`/`<dd>` elements carry matching classes. Voice assistants (Google Assistant; Alexa via Bing) are now eligible to lift FAQ answers verbatim for spoken responses — relevant as AI Overviews move into voice surfaces.

### Branded share cards + icons (shipped Apr 21, v0.6.0)
`src/app/opengraph-image.tsx` generates a 1200×630 share card via `next/og` (auto-wired as `og:image` across every page). `twitter-image.tsx` mirrors it for the Twitter card. `icon.tsx` + `apple-icon.tsx` replace the stock Next.js favicon with a branded gold-beacon-on-navy mark — makes AI Bible Gospels' visual identity consistent across browser tabs, iOS home screens, iMessage/Discord/Slack/X previews, and answer-engine "source card" thumbnails.

---

## Phase B: Content + distribution (next 30 days)

### Google Search Console (Thomas)
Already in the SEO plan — doubly important for AEO. Google AI Overviews pull heavily from sitemap-indexed, GSC-verified domains.

- [x] Verify `faithwalklive.com` in search.google.com/search-console (HTML file method, auto-verified Apr 22 2026)
- [x] Submit `https://faithwalklive.com/sitemap.xml` (submitted Apr 17 2026, last read Apr 20, Status: Success, 6 pages discovered)
- [ ] Monitor "Search appearance" for AI Overview impressions once available

> ⚠️ **Do not delete `public/google5a916fab341fe7e9.html`.** GSC re-checks this file periodically and will un-verify the property if it 404s. If we ever want to stop serving it, add a Domain (DNS TXT) verification method first via Settings → Ownership verification.

### Bing Webmaster (Thomas)
Bing powers ChatGPT's web browsing and Copilot. Worth 10 minutes.
- [x] Add property at bing.com/webmasters (verified Apr 22 2026, ~48hr data-processing window)
- [x] Submit sitemap at bing.com/webmasters → Sitemaps → `https://faithwalklive.com/sitemap.xml` (submitted Apr 22 2026, initial status: Processing)

### Entity consistency across the web
Answer engines resolve entities by matching names + URLs across sources. We win by making sure the same signals appear in multiple authoritative places:

- [ ] YouTube channel "About" on @AIBIBLEGOSPELS — add `https://faithwalklive.com` as an external link
- [ ] Every YouTube video description — link faithwalklive.com
- [ ] LinkedIn company page for AI Bible Gospels / Technology Gurus LLC — list faithwalklive.com as the site
- [ ] GitHub repo README (both this repo and the consulting repo) — link faithwalklive.com in the header
- [ ] Any future guest posts or press interviews — request a natural link with the anchor "Faith Walk Live" or "AI Bible Gospels"

The goal: when Perplexity or ChatGPT asks "who is AI Bible Gospels," multiple independent sources agree, and our own JSON-LD confirms it.

### Wikipedia-adjacent corroboration (optional, careful)
Wikipedia is the single biggest citation source for answer engines. Don't create a self-promoting page. But:
- [ ] If local press covers the walk (see SEO strategy's local-news outreach), link the article on the press-coverage folder in the consulting repo and reference it in future llms.txt updates
- [ ] If a volunteer editor ever adds Minister Zay or HMBL to Wikipedia, make sure any citations of the walk's progress point to the live map as a primary source

### Reddit testimony post (already in SEO plan)
Reddit is heavily cited by Perplexity and Google AI Overviews. The single r/Christianity testimony post in the SEO plan is also the single best AEO move on the content side. Do NOT spam.

---

## Phase C: Content additions (build when ready)

- [ ] `/about` page (or merge into `/why`) with a concise bio for AI Bible Gospels + Minister Zay, each wrapped in its own `Person` / `Organization` JSON-LD block scoped to that page
- [ ] Per-checkpoint pages once the walk completes a state (e.g., `/pennsylvania`, `/ohio`) — each answers "what happened in [state] on the Faith Walk" with a curated clip list. Adds `Article` schema.
- [ ] Weekly walk-update posts (already in SEO plan) — each also gets `NewsArticle` schema for Google News / AI Overviews freshness signals
- [x] Speakable schema (`SpeakableSpecification`) on the FAQ — shipped v0.6.0, cssSelector targets `.faq-q` / `.faq-a`
- [ ] `llms-full.txt` — expanded version of llms.txt with full extracted page content, for engines that prefer deeper context (build once the prayer + subscribe backends ship so the site is stable)

---

## What we will NOT do

- ❌ Create thin Q&A pages just to farm FAQPage schema. 14 real questions > 50 invented ones.
- ❌ Stuff "AI Bible Gospels" into every paragraph. It appears once per page in the natural place (footer, sponsor credit, or one sentence on the page's subject).
- ❌ Use AI-generated content on the site. Every word on the public pages is written and reviewed by a human in the faith-first voice.
- ❌ Add fake reviews, fake testimonials, or generate bogus "[city] residents react to Minister Zay" content. The walk is real. The engines will notice, and so will believers.
- ❌ Claim affiliation with HMBL in any schema, copy, or metadata.
- ❌ Bake real-time location into FAQ answers. Location goes on the map, not in static content that gets cached by crawlers.
- ❌ Include em-dash-heavy, adjective-piled copy. Plain testimony voice, per the project's positioning rules.

---

## Success metrics (30 / 60 / 90 days)

**30 days:**
- [ ] FAQPage schema validated in Google Rich Results Test
- [ ] `llms.txt` live and reachable at https://faithwalklive.com/llms.txt
- [ ] Google Search Console showing indexation of /faq
- [ ] At least one answer engine (ChatGPT / Perplexity / Claude) cites faithwalklive.com when asked "who is walking across America in 2026" or "what is Faith Walk Live"

**60 days:**
- [ ] Perplexity "sources" panel lists faithwalklive.com for relevant queries
- [ ] Google AI Overviews surface a Faith Walk Live snippet for "minister zay" or "faith walk live"
- [ ] `llms.txt` referenced by at least one third-party aggregator

**90 days:**
- [ ] Entity "AI Bible Gospels" resolves consistently across answer engines as the builder/sponsor
- [ ] At least 1 inbound faith-tech consulting lead that cites an answer engine as the discovery source

---

## How to test AEO yourself

Run these prompts monthly against ChatGPT, Claude, Perplexity, and Gemini:

1. "Who is walking 3,000 miles across America in 2026?"
2. "What is Faith Walk Live?"
3. "Who is AI Bible Gospels?"
4. "When did Minister Zay's Faith Walk start?"
5. "Where can I watch Minister Zay's walk?"

Log what each engine says, whether faithwalklive.com is cited, and whether the answer matches the FAQ copy. If an engine says something wrong or stale, update the FAQ/llms.txt — don't argue with the engine, fix the source.

---

## Maintenance

- When the walk reaches new milestones (halfway, state crossings, final day), update `llms.txt` so engines pull fresh context on re-crawl.
- Keep FAQ answers accurate. If Zay's route changes or a question becomes outdated, edit the QA and the JSON-LD regenerates automatically.
- The entity graph in `layout.tsx` is load-bearing. If you change URLs, update `@id`, `sameAs`, and `url` together.
