import Link from "next/link";
import { completionOutlets } from "@/data/outlets";
import { getStats } from "@/lib/checkpoints";

const PAGE_URL = "https://faithwalklive.com/updates/walk-complete";
const ARTICLE_ID = `${PAGE_URL}#article`;

// The walk's start date is canonical across the site (root Event JSON-LD,
// /press, /philly, /faq all say March 25, 2026). getStats().startDate reads
// checkpoints[0], which is a rest-only entry dated Mar 29 — do not use it here.
const START_DATE = "March 25, 2026";

export const metadata = {
  title: "Jul 27, 2026 — Minister Zay Completes the 3,000-Mile Walk",
  description:
    "Minister Zay finished the 3,000-mile Faith Walk from Philadelphia to California on July 27, 2026 — Day 124. He livestreamed nearly every mile and walked through a hospitalization in Indiana to get there. Full record, news coverage, and what happens next for HMBL University.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "He Made It — Minister Zay Completes the 3,000-Mile Faith Walk",
    description:
      "Day 124. Philadelphia to the California state line on foot, livestreamed nearly every mile. Full record + news coverage.",
    publishedTime: "2026-07-27T23:00:00Z",
    authors: ["AI Bible Gospels"],
  },
  twitter: {
    card: "summary_large_image",
    title: "He Made It — Minister Zay Completes the 3,000-Mile Faith Walk",
    description:
      "Day 124. Philadelphia to California on foot. Full record + news coverage.",
    creator: "@AIBIBLEGOSPELS",
  },
};

// Written against the queries people are actually typing now that the walk is
// over ("did minister zay finish the walk", "how long did it take", "how much
// did he raise"). Answers are self-contained — an answer engine that lifts one
// sentence out of context should still be correct.
const faqs = [
  {
    q: "Did Minister Zay finish the 3,000-mile walk?",
    a: "Yes. Minister Zay (Isaiah M. Thomas) completed the 3,000-mile Faith Walk from Philadelphia to California on July 27, 2026 — Day 124 of the journey. He crossed the California state line and ended the walk there, livestreaming the arrival on Twitch. The finish was covered by Complex, NBC10 Philadelphia, CBS News Philadelphia, The Source, Hollywood Unlocked, and other outlets.",
  },
  {
    q: "How long did the Faith Walk take?",
    a: "124 days. Minister Zay set out from Philadelphia, Pennsylvania on March 25, 2026 and reached California on July 27, 2026. That total includes rest days and a recovery pause after he was struck by a vehicle in Indiana on Day 34.",
  },
  {
    q: "How many miles did Minister Zay walk?",
    a: "About 3,000 miles, on foot, from Philadelphia, Pennsylvania to California. That is the distance Minister Zay set out to cover and the figure he, his fundraiser, and the outlets covering the finish all report.",
  },
  {
    q: "Where did the Faith Walk end?",
    a: "At the California state line, on July 27, 2026. Minister Zay crossed into California on Day 124 along the Arizona border after passing through Lake Havasu City, Arizona the day before. Some coverage names Needles, California as the arrival point in San Bernardino County.",
  },
  {
    q: "Was Minister Zay hit by a car during the walk?",
    a: "Yes. On April 28, 2026 — Day 34 — a vehicle struck the support car traveling behind him on U.S. 40 in Indiana, which then made contact with Zay. He was hospitalized with injuries reported as non-life-threatening, and he returned to the exact spot of the accident to resume walking on May 3, 2026. He finished the walk 85 days later.",
  },
  {
    q: "What was Minister Zay walking for?",
    a: "HMBL University — a trade school for Philadelphia teens who may not go the traditional college route, offering trade certifications, financial literacy, entrepreneurship, and life-skills training. The walk raised money and awareness toward a $200,000 goal to launch it. The fundraiser is still open; the school has not been built yet.",
  },
  {
    q: "How much money did the Faith Walk raise?",
    a: "Coverage at the finish reported that the walk had raised more than $150,000 toward a $200,000 goal for HMBL University. The fundraiser remains open and the running total is on the GoFundMe page, so the live figure is higher than any number printed in a July article.",
  },
  {
    q: "Who is Minister Zay?",
    a: "Minister Zay is Isaiah M. Thomas, a Philadelphia entrepreneur and community activist, and the founder of Stay Humble Stay Hungry (HMBL) Clothing. He streams as HMBL Zayy on Twitch, where he broadcast nearly every mile of the 3,000-mile walk.",
  },
  {
    q: "What happens now that the walk is finished?",
    a: "The walk is over; the school is not built. HMBL University is the reason the walk happened, and the fundraiser toward it is still open. Faith Walk Live keeps the full record of the journey — every checkpoint on the map and the daily clip archive — as a permanent archive rather than a live tracker.",
  },
];

const newsArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": ARTICLE_ID,
  headline:
    "Minister Zay Completes the 3,000-Mile Faith Walk From Philadelphia to California",
  description:
    "Minister Zay finished the 3,000-mile Faith Walk on July 27, 2026 — Day 124 — crossing the California state line on foot after setting out from Philadelphia on March 25 and walking through a hospitalization in Indiana.",
  datePublished: "2026-07-27T23:00:00Z",
  dateModified: new Date().toISOString(),
  author: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: { "@id": "https://faithwalklive.com/#faithwalk" },
  mentions: [
    { "@id": "https://faithwalklive.com/#ministerzay" },
    { "@id": "https://faithwalklive.com/#aibiblegospels" },
  ],
  citation: completionOutlets.map((o) => ({
    "@type": "CreativeWork",
    name: o.name,
    url: o.href,
  })),
  image: ["https://faithwalklive.com/updates/walk-complete/opengraph-image"],
  inLanguage: "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".update-faq-q", ".update-faq-a"],
  },
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://faithwalklive.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Updates",
      item: "https://faithwalklive.com/updates",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Walk Complete",
      item: PAGE_URL,
    },
  ],
};

export default function WalkCompletePage() {
  const s = getStats();

  const facts = [
    { term: "Finished", def: s.completedDate ?? "Jul 27, 2026" },
    { term: "Days on the road", def: `${s.totalDays}` },
    { term: "Distance", def: `${s.totalMiles.toLocaleString()} miles on foot` },
    { term: "Started", def: `${START_DATE} · Philadelphia, PA` },
    { term: "Ended", def: s.finishLocation ?? "California state line" },
    { term: "Streamed on", def: "Twitch — twitch.tv/hmblzayy" },
  ];

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="mb-8 border-b border-brand-border pb-6">
        <div className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
          Jul 27, 2026 · Day {s.totalDays} · Walk complete
        </div>
        <h1 className="update-headline text-3xl md:text-4xl font-semibold text-brand-cloud leading-tight">
          He made it. 3,000 miles, Philadelphia to California.
        </h1>
        <p className="update-body text-brand-amber mt-3 leading-relaxed">
          On July 27, 2026 — Day {s.totalDays} — Minister Zay crossed the
          California state line and finished the walk he started in
          Philadelphia on {START_DATE}. He walked every mile of it on foot and
          streamed nearly all of it live. Three months earlier a car had put
          him in a hospital in Indiana. He was back on the road five days after
          that, and he did not stop again until the state sign.
        </p>
      </header>

      <section className="mb-10">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {facts.map(({ term, def }) => (
            <div
              key={term}
              className="border-b border-brand-border pb-3 last:border-b-0"
            >
              <dt className="text-xs uppercase tracking-[0.2em] text-brand-bronze">
                {term}
              </dt>
              <dd className="text-brand-cloud mt-1 text-sm">{def}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          What happened
        </h2>
        <div className="space-y-4 text-brand-softgold leading-relaxed">
          <p>
            Minister Zay — Isaiah M. Thomas, founder of Stay Humble Stay Hungry
            (HMBL) Clothing — left Philadelphia on {START_DATE} to walk roughly
            3,000 miles to California. He was not raising money for himself. He
            was raising it to build{" "}
            <span className="text-brand-cloud">HMBL University</span>, a trade
            school for Philadelphia teens who may never see the inside of a
            four-year college: trade certifications, financial literacy,
            entrepreneurship, life skills.
          </p>
          <p>
            He walked it in public. Nearly every mile went out live on Twitch,
            through Pennsylvania, Ohio, Indiana, Illinois, Missouri, Kansas,
            Colorado, New Mexico, Arizona, and into California. Strangers
            drove out to hand him water. Mayors met him. Chat prayed with him
            at sunrise most mornings.
          </p>
          <p>
            On April 28 — Day 34, on U.S. 40 in Indiana — a vehicle struck the
            support car traveling behind him, which then made contact with Zay.
            He was hospitalized. National coverage picked the story up that
            week. Five days later he went back to the exact spot on the road
            where it happened, prayed over it, and started walking west again
            from there.
          </p>
          <p>
            He reached Lake Havasu City, Arizona on July 26. The next morning
            he was seventeen miles from the state line, and by mid-afternoon he
            was standing at it.
          </p>
        </div>
      </section>

      {s.completedNote && (
        <section className="mb-10 rounded-2xl border border-brand-gold/40 bg-brand-black/60 p-6">
          <h2 className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-3">
            🏁 The finish
          </h2>
          <p className="text-brand-cloud/90 leading-relaxed text-sm">
            {s.completedNote}
          </p>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Press coverage of the finish
        </h2>
        <ul className="space-y-2">
          {completionOutlets.map((o) => (
            <li key={o.href}>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline text-sm"
              >
                {o.name} →
              </a>
            </li>
          ))}
        </ul>
        <p className="text-brand-bronze text-xs mt-4">
          Coverage of the April 28 incident earlier in the walk is collected on
          the{" "}
          <Link
            href="/updates/april-28-incident"
            className="text-brand-gold hover:underline"
          >
            incident update
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Common questions
        </h2>
        <dl className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="border-b border-brand-border pb-5 last:border-b-0"
            >
              <dt className="update-faq-q text-base font-semibold text-brand-cloud">
                {q}
              </dt>
              <dd className="update-faq-a text-brand-softgold mt-2 leading-relaxed text-sm">
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-brand-gold/40 bg-brand-black/80 p-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
          The walk is done. The school isn&apos;t built yet.
        </p>
        <p className="text-brand-cloud/90 max-w-xl mx-auto leading-relaxed mb-5">
          HMBL University is the whole reason he walked. The fundraiser toward
          it is still open.
        </p>
        <a
          href="https://www.gofundme.com/f/help-launch-hmbl-summer-camp-for-teens"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-brand-gold text-brand-black px-6 py-3 font-semibold hover:bg-brand-amber transition-colors"
        >
          Help finish HMBL University →
        </a>
      </section>

      <p className="text-brand-bronze text-xs mt-10">
        Walk the whole route on the{" "}
        <Link href="/map" className="text-brand-gold hover:underline">
          map
        </Link>
        , watch it back in the{" "}
        <Link href="/clips" className="text-brand-gold hover:underline">
          clip archive
        </Link>
        , read the{" "}
        <Link href="/why" className="text-brand-gold hover:underline">
          why
        </Link>
        , or get assets and contact from the{" "}
        <Link href="/press" className="text-brand-gold hover:underline">
          press kit
        </Link>
        .
      </p>
    </article>
  );
}
