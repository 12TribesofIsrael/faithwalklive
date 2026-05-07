import Link from "next/link";
import { aprilTwentyEightRecovery } from "@/data/updates";
import { outlets } from "@/data/outlets";

const PAGE_URL =
  "https://faithwalklive.com/updates/april-28-incident";
const ARTICLE_ID = `${PAGE_URL}#article`;

export const metadata = {
  title: "Apr 28, 2026 — Walk Paused After Accident on the Route",
  description:
    "On Day 34 of the 3,000-mile Faith Walk, Minister Zay was struck by a vehicle on U.S. 40 in Indiana while livestreaming. Hospitalized; condition reported as stable. Walk paused while he recovers. Recovery updates, news coverage links, and prayer hub.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Walk Paused — Apr 28 Accident on the Faith Walk Route",
    description:
      "Minister Zay was struck by a vehicle on Day 34 of the 3,000-mile Faith Walk. Hospitalized; condition stable. Walk paused. Live updates + prayer hub.",
    publishedTime: "2026-04-28T19:00:00Z",
    authors: ["AI Bible Gospels"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk Paused — Apr 28 Accident on the Faith Walk Route",
    description:
      "Minister Zay was struck by a vehicle on Day 34 of the 3,000-mile Faith Walk. Recovery updates + prayer hub.",
    creator: "@AIBIBLEGOSPELS",
  },
};

const faqs = [
  {
    q: "Is Minister Zay okay?",
    a: "According to news coverage from Fox 29, Fox 59, TMZ, The Shade Room, and others, Minister Zay was hospitalized after the April 28, 2026 collision in Indiana. His condition was reported as stable and not life-threatening. He has indicated he intends to finish the walk after recovery. The walk and daily livestream are paused while he heals.",
  },
  {
    q: "What happened to HMBL Zayy on April 28, 2026?",
    a: "On Day 34 of the 3,000-mile Faith Walk, Minister Zay (Isaiah M. Thomas) was struck by a vehicle while livestreaming his walk on U.S. 40 in Indiana. According to news coverage, a passing vehicle struck the support vehicle behind him, which then made contact with Zay. He was taken to the hospital with non-life-threatening injuries.",
  },
  {
    q: "Where did the accident happen?",
    a: "On U.S. 40 in Indiana on Day 34 of the walk (April 28, 2026). The route was the Richmond, Indiana to Lewisville, Indiana corridor. Specifics on the exact location have been reported by Fox 59 Indianapolis and other regional outlets.",
  },
  {
    q: "Why is the Faith Walk paused?",
    a: "The walk and the daily Twitch livestream are paused while Minister Zay recovers from the April 28 accident. Updates will come from his team when they are ready. Faith Walk Live posts public-record updates here as they enter the news cycle.",
  },
  {
    q: "When will the Faith Walk resume?",
    a: "No resume date has been published. Minister Zay has indicated he intends to finish the walk once he recovers. This page will be updated when a return-to-walk date enters the public record.",
  },
  {
    q: "How can I support Minister Zay's recovery?",
    a: "Pray for him at faithwalklive.com/prayer, which routes to the prayer section of the HMBL University Discord — Zay's own community. Share the walk and the recovery updates with your church, family, and community. The walk is raising awareness for HMBL University, a trade school initiative for underprivileged youth.",
  },
];

const newsArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": ARTICLE_ID,
  headline: "Faith Walk Paused After Apr 28 Accident on the Route",
  description:
    "Minister Zay was struck by a vehicle on U.S. 40 in Indiana on Day 34 of the 3,000-mile Faith Walk. Hospitalized; condition stable per news reports. Walk paused while he recovers.",
  datePublished: "2026-04-28T19:00:00Z",
  dateModified: new Date().toISOString(),
  author: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: { "@id": "https://faithwalklive.com/#faithwalk" },
  mentions: [
    { "@id": "https://faithwalklive.com/#ministerzay" },
    { "@id": "https://faithwalklive.com/#aibiblegospels" },
  ],
  citation: outlets.map((o) => ({
    "@type": "CreativeWork",
    name: o.name,
    url: o.href,
  })),
  image: ["https://faithwalklive.com/updates/april-28-incident/opengraph-image"],
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
      name: "Apr 28 Incident",
      item: PAGE_URL,
    },
  ],
};

export default function April28IncidentPage() {
  const sortedRecovery = [...aprilTwentyEightRecovery].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

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
          Apr 28, 2026 · Update
        </div>
        <h1 className="update-headline text-3xl md:text-4xl font-semibold text-brand-cloud leading-tight">
          Faith Walk paused after Apr 28 accident on the route
        </h1>
        <p className="update-body text-brand-amber mt-3 leading-relaxed">
          On Day 34 of the 3,000-mile Faith Walk, Minister Zay was struck by a
          vehicle on U.S. 40 in Indiana while livestreaming his walk. He was
          hospitalized; according to news coverage his condition is stable and
          not life-threatening, and he intends to finish the walk after he
          recovers. The walk and the daily Twitch livestream are paused while he
          heals.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          What's known publicly
        </h2>
        <div className="space-y-4 text-brand-softgold leading-relaxed">
          <p>
            On April 28, 2026 — Day 34 of the 3,000-mile Faith Walk from
            Philadelphia to California — Minister Zay (Isaiah M. Thomas, founder
            of HMBL Clothing) was walking westbound on U.S. 40 in Indiana while
            livestreaming on Twitch. According to local news coverage, a
            passing vehicle struck the support vehicle traveling behind him,
            which then made contact with Zay.
          </p>
          <p>
            He was taken to the hospital. His condition was reported as stable
            and not life-threatening. He has indicated he intends to finish the
            walk once he recovers.
          </p>
          <p>
            The 3,000-mile walk is raising awareness for{" "}
            <span className="text-brand-cloud">HMBL University</span>, a trade
            school initiative aimed at giving underprivileged youth practical
            skills and career opportunities.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Recovery updates
        </h2>
        <ul className="space-y-5">
          {sortedRecovery.map((entry) => (
            <li
              key={entry.date}
              className="border-l-2 border-brand-gold/40 pl-4"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-1">
                {entry.date}
              </div>
              <p className="text-brand-softgold leading-relaxed text-sm">
                {entry.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-brand-bronze text-xs mt-4">
          New updates added as they enter the public record. No private medical
          details are published here — only what news outlets and Zay's team
          have already shared.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Press coverage
        </h2>
        <ul className="space-y-2">
          {outlets.map((o) => (
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
          🙏 Pray with the community
        </p>
        <p className="text-brand-cloud/90 max-w-xl mx-auto leading-relaxed mb-5">
          Zay's own prayer community lives in HMBL University Discord. Drop a
          prayer there.
        </p>
        <Link
          href="/prayer"
          className="inline-block rounded-full bg-brand-gold text-brand-black px-6 py-3 font-semibold hover:bg-brand-amber transition-colors"
        >
          Pray for Zay →
        </Link>
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
        <Link href="/faq" className="text-brand-gold hover:underline">
          FAQ
        </Link>{" "}
        for more answers, or the{" "}
        <Link href="/press" className="text-brand-gold hover:underline">
          press kit
        </Link>{" "}
        for assets and contact.
      </p>
    </article>
  );
}
