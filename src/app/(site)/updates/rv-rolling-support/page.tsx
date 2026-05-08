import Link from "next/link";

const PAGE_URL = "https://faithwalklive.com/updates/rv-rolling-support";
const ARTICLE_ID = `${PAGE_URL}#article`;
const REEL_URL = "https://www.instagram.com/p/DYFFGDBSsOI/";

export const metadata = {
  title: "May 8, 2026 — Faith Walk Adds RV for Rolling Support",
  description:
    "Minister Zay announced an RV that will roll alongside the 3,000-mile Faith Walk as mobile support. Staged in Indianapolis, IN. Announced in a Reel on Instagram (@ministerzay) on May 8, 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Faith Walk Adds RV for Rolling Support",
    description:
      "Minister Zay's 3,000-mile Faith Walk now has an RV rolling alongside as mobile support. Announced May 8, 2026 from Indianapolis, IN.",
    publishedTime: "2026-05-08T15:00:00Z",
    authors: ["AI Bible Gospels"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Walk Adds RV for Rolling Support",
    description:
      "Minister Zay's Philly-to-Cali walk gains an RV rolling alongside as mobile support. Announced May 8, 2026.",
    creator: "@AIBIBLEGOSPELS",
  },
};

const faqs = [
  {
    q: "What is the new RV for on Minister Zay's Faith Walk?",
    a: "The RV is a rolling support vehicle that will follow Minister Zay on his 3,000-mile Faith Walk from Philadelphia to California. It serves as a mobile base for rest, gear, and support — improving safety and logistics on the long stretches of road ahead. Zay announced and gave a tour of the RV in a Reel on Instagram on May 8, 2026.",
  },
  {
    q: "When did the RV join the Faith Walk?",
    a: "Minister Zay publicly announced the RV on May 8, 2026 in a Reel posted to his Instagram (@ministerzay) titled \"Hmblzayy gives New RV tour that will be following him.\" The RV is staged in Indianapolis, IN as the walk continues toward Camby and the western leg of the route to California.",
  },
  {
    q: "Why did Minister Zay get an RV for the walk?",
    a: "After the Apr 28, 2026 accident on Day 34 of the walk in Indiana, the team has prioritized stronger logistical support. An RV rolling alongside provides safer rest stops, mobile shelter, and a base for support staff — letting Zay continue the 3,000-mile walk with better infrastructure for the months of road ahead.",
  },
  {
    q: "Is Minister Zay still walking, or riding in the RV?",
    a: "Minister Zay is still walking — every mile on foot. The RV is a support vehicle that travels with him along the route, not a replacement for the walk. Zay continues to livestream daily on Twitch (@hmblzayy) when on the road, with the RV providing mobile support along the way.",
  },
  {
    q: "Where can I see the RV tour Minister Zay posted?",
    a: "The RV tour Reel is on Minister Zay's Instagram at instagram.com/p/DYFFGDBSsOI. He posts walk updates on Instagram (@ministerzay), TikTok and Twitch (@hmblzayy). Daily progress and the live route are tracked at faithwalklive.com.",
  },
];

const newsArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": ARTICLE_ID,
  headline: "Faith Walk Adds RV for Rolling Support",
  description:
    "Minister Zay announced an RV that will roll alongside his 3,000-mile Faith Walk as mobile support. Staged in Indianapolis, IN. Announced in a Reel on Instagram on May 8, 2026.",
  datePublished: "2026-05-08T15:00:00Z",
  dateModified: new Date().toISOString(),
  author: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: { "@id": "https://faithwalklive.com/#faithwalk" },
  mentions: [
    { "@id": "https://faithwalklive.com/#ministerzay" },
    { "@id": "https://faithwalklive.com/#aibiblegospels" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Hmblzayy gives New RV tour — Instagram Reel by @ministerzay",
      url: REEL_URL,
    },
  ],
  image: ["https://faithwalklive.com/updates/rv-rolling-support/opengraph-image"],
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
      name: "RV Rolling Support",
      item: PAGE_URL,
    },
  ],
};

export default function RvRollingSupportPage() {
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
          May 8, 2026 · Update
        </div>
        <h1 className="update-headline text-3xl md:text-4xl font-semibold text-brand-cloud leading-tight">
          Faith Walk adds an RV for rolling support
        </h1>
        <p className="update-body text-brand-amber mt-3 leading-relaxed">
          Minister Zay announced an RV that will roll alongside his 3,000-mile
          Faith Walk from Philadelphia to California — a mobile base for rest,
          gear, and support staff as the walk continues westward. The RV is
          staged in Indianapolis, IN as Zay heads toward Camby on the next leg
          of the route.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          What was announced
        </h2>
        <div className="space-y-4 text-brand-softgold leading-relaxed">
          <p>
            On May 8, 2026, Minister Zay (Isaiah M. Thomas, founder of HMBL
            Clothing) posted a Reel on his Instagram introducing the RV that
            will travel with him on the remainder of the Faith Walk. The post
            is captioned{" "}
            <span className="text-brand-cloud">
              &ldquo;Hmblzayy gives New RV tour that will be following him&rdquo;
            </span>{" "}
            and features a walkthrough of the vehicle from Indianapolis, IN.
          </p>
          <p>
            The RV is a support vehicle, not a replacement for the walk. Zay
            continues to walk every mile on foot — the RV provides mobile
            shelter, rest, and a base for the support team along the route.
          </p>
          <p>
            The Faith Walk is raising awareness for{" "}
            <span className="text-brand-cloud">HMBL University</span>, a trade
            school initiative aimed at giving underprivileged youth practical
            skills and career opportunities.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Context: stronger logistics after Apr 28
        </h2>
        <div className="space-y-4 text-brand-softgold leading-relaxed">
          <p>
            On April 28, 2026 — Day 34 of the walk — Zay was struck by a
            vehicle on U.S. 40 in Indiana while livestreaming. He was
            hospitalized and reported in stable condition; the walk and daily
            stream paused for recovery. The walk resumed on May 3 (Day 39) at
            Greenfield, IN.
          </p>
          <p>
            The RV is part of the team&rsquo;s upgraded support setup for the
            road ahead — safer rest stops, a mobile base, and improved
            logistics for the long stretches between cities. Full context on
            the recovery and resumption is on the{" "}
            <Link
              href="/updates/april-28-incident"
              className="text-brand-gold hover:underline"
            >
              Apr 28 incident page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Source
        </h2>
        <ul className="space-y-2">
          <li>
            <a
              href={REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline text-sm"
            >
              Instagram Reel — @ministerzay (May 8, 2026): &ldquo;Hmblzayy gives
              New RV tour that will be following him&rdquo; →
            </a>
          </li>
        </ul>
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

      <p className="text-brand-bronze text-xs mt-10">
        See the{" "}
        <Link href="/map" className="text-brand-gold hover:underline">
          live map
        </Link>{" "}
        for the route and last confirmed checkpoint, the{" "}
        <Link href="/clips" className="text-brand-gold hover:underline">
          clip archive
        </Link>{" "}
        for daily moments from the walk, the{" "}
        <Link href="/updates" className="text-brand-gold hover:underline">
          updates index
        </Link>{" "}
        for all news entries, or the{" "}
        <Link href="/press" className="text-brand-gold hover:underline">
          press kit
        </Link>{" "}
        for assets and contact.
      </p>
    </article>
  );
}
