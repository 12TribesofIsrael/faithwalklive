export type Outlet = { name: string; href: string };

// Press coverage of the Apr 28, 2026 incident on the Faith Walk route.
// Single source of truth — read by both /updates/april-28-incident and /press.
// When a new outlet covers the walk, add a row here.
export const outlets: Outlet[] = [
  {
    name: "Fox 29 Philadelphia",
    href: "https://www.fox29.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "Fox 59 Indianapolis",
    href: "https://fox59.com/news/indynews/streamer-hit-by-car-in-indiana-while-walking-across-country-to-raise-money-for-children/",
  },
  {
    name: "Fox 5 New York",
    href: "https://www.fox5ny.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "Fox 5 Atlanta",
    href: "https://www.fox5atlanta.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "KTVU FOX 2 (Bay Area)",
    href: "https://www.ktvu.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "FOX 32 Chicago",
    href: "https://www.fox32chicago.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "FOX 35 Orlando",
    href: "https://www.fox35orlando.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
  },
  {
    name: "TMZ (TikTok)",
    href: "https://www.tiktok.com/@tmz/video/7633948800264047885",
  },
  {
    name: "The Shade Room (Instagram)",
    href: "https://www.instagram.com/p/DXsREFagUhr/",
  },
  {
    name: "Daily Voice (Pennsylvania)",
    href: "https://dailyvoice.com/pa/stewartstown-fawn-grove/twitch-streamer-hit-by-car-in-ohio-during-livestream-of-cross-country-walk-from-philly-to-cali/",
  },
  {
    name: "The Express Tribune",
    href: "https://tribune.com.pk/story/2605410/what-happened-to-hmblzayy-twitch-streamer-hit-during-3000-mile-faith-walk-in-indiana-crash",
  },
  {
    name: "Bystander video (TikTok)",
    href: "https://www.tiktok.com/@kokie_luv43/video/7635070760310082830",
  },
];

// Press coverage of the FINISH — Minister Zay crossed into California on
// Jul 27, 2026 (Day 124). Read by /updates/walk-complete and /press.
//
// Every entry here was opened and confirmed to report the walk as COMPLETED.
// Two near-misses were deliberately excluded: the Philadelphia Tribune piece
// (Jul 7, "expects to arrive in California on July 30") and both R&B Philly
// pieces ("closes in on California") are pre-finish coverage. Citing an
// in-progress article as proof of the finish is the kind of thing an answer
// engine will happily repeat back wrong — check the body, not the headline,
// before adding a row.
export const completionOutlets: Outlet[] = [
  {
    name: "Complex",
    href: "https://www.complex.com/pop-culture/a/alex-ocho/hmblzayy-walk-philadelphia-california-twitch",
  },
  {
    name: "NBC10 Philadelphia",
    href: "https://www.nbcphiladelphia.com/news/local/philadelphia-activist-isaiah-thomas-hmbl-zayy-completes-walk-across-america-raise-money/4439454/",
  },
  {
    name: "CBS News Philadelphia",
    href: "https://www.cbsnews.com/philadelphia/news/hmblzayy-completes-walk-philadelphia-california/",
  },
  {
    name: "The Source",
    href: "https://thesource.com/2026/07/27/streamer-hmblzayy-completes-3000-mile-walk-from-philly-to-ca-after-124-days-for-charity/",
  },
  {
    name: "Hollywood Unlocked",
    href: "https://hollywoodunlocked.com/streamer-hmbl-zay-completes-3000-mile-walk-from-philadelphia-to-california-in-124-days-raises-nearly-200000-to-build-school-walked-through-sundown-towns-got-hit-by-2-cars/",
  },
  {
    name: "Northeast Times (Philadelphia)",
    href: "https://northeasttimes.com/2026/07/28/philly-twitch-streamer-finishes-3-000-mile-charity-walk-to-california/",
  },
  {
    name: "Unheard Voices Magazine",
    href: "https://unheardvoicesmag.com/2026/07/27/twitch-streamer-hmbl-zayy-completes-3000-mile-walk-to-support-philadelphia-youth/",
  },
  {
    name: "Vaulted Mag",
    href: "https://www.vaultedmag.com/hmbl-zay-finishes-his-3000-mile-walk-from-philadelphia-to-california-after-124-days-on-the-road/",
  },
];
