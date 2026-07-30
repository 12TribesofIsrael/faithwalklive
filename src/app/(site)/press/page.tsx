import Link from "next/link";
import { checkpoints, getStats } from "@/lib/checkpoints";
import { outlets } from "@/data/outlets";

const PAGE_URL = "https://faithwalklive.com/press";

export const metadata = {
  title: "Press Kit — Faith Walk Philly | Faith Walk Live",
  description:
    "Press assets, fast facts, and contact for Faith Walk Philly (a.k.a. Faith Walk Live) — the live-tracker app following Minister Humble Zay's 3,000-mile Philly-to-California faith walk.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Press Kit — Faith Walk Philly | Faith Walk Live",
    description:
      "Press assets, fast facts, and contact for Faith Walk Philly (a.k.a. Faith Walk Live) — the live-tracker app following Minister Humble Zay's 3,000-mile Philly-to-California faith walk.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit — Faith Walk Philly | Faith Walk Live",
    description:
      "Press assets, fast facts, and contact for Faith Walk Philly / Faith Walk Live — Minister Humble Zay's 3,000-mile Philly-to-Cali faith walk.",
    creator: "@AIBIBLEGOSPELS",
  },
  robots: { index: true, follow: true },
};

const PRESS_EMAIL = "aibiblegospels444@gmail.com";
const PRESS_MAILTO = `mailto:${PRESS_EMAIL}?subject=Press%20inquiry%20%E2%80%94%20Faith%20Walk%20Live`;
const ASSETS_MAILTO = `mailto:${PRESS_EMAIL}?subject=Asset%20request%20%E2%80%94%20Faith%20Walk%20Live`;

const boilerplates = [
  {
    label: "Short (40 words)",
    text:
      "Faith Walk Philly (a.k.a. Faith Walk Live) is the live-tracker app for Minister Humble Zay's 3,000-mile Philly-to-California faith walk on foot, raising awareness for HMBL University, a trade school initiative for underprivileged youth. Built by AI Bible Gospels.",
  },
  {
    label: "Medium (80 words)",
    text:
      "Faith Walk Philly (a.k.a. Faith Walk Live) is the public live-tracker app following Minister Isaiah \"Humble Zay\" Thomas's 3,000-mile Philly-to-California walk on foot. The walk, which began March 25, 2026 in Philadelphia, raises awareness for HMBL University — a trade school initiative for underprivileged youth in Philly. Faith Walk Live shows real-time mileage, current location, and the daily Twitch broadcast in one place. Built by AI Bible Gospels, a faith-tech project by Tommy Lee, as a supporter-side tool — not affiliated with HMBL.",
  },
  {
    label: "Long (160 words)",
    text:
      "Faith Walk Philly (a.k.a. Faith Walk Live) is the public live-tracker app following Minister Isaiah \"Humble Zay\" Thomas's 3,000-mile Philly-to-California walk on foot from Philadelphia, Pennsylvania to California. The walk, which began March 25, 2026 in Philly, raises awareness for HMBL University — a trade school initiative aimed at giving underprivileged youth practical skills and career opportunities. Zay broadcasts every step live on Twitch (twitch.tv/hmblzayy). On April 28, 2026 — Day 34 of the Philly-to-California faith walk — Zay was struck by a vehicle on U.S. 40 in Indiana while livestreaming. He was hospitalized with non-life-threatening injuries and resumed walking on May 3, reaching Indianapolis the following day. Faith Walk Live (faithwalklive.com) was built by AI Bible Gospels — a faith-tech project by Tommy Lee — to make the walk supportable in real time without scrolling Twitch. Faith Walk Live / Faith Walk Philly is supporter-built and is not affiliated with HMBL.",
  },
];

export default function PressPage() {
  const stats = getStats();
  const lastDataDate =
    [...checkpoints]
      .map((c) => c.date)
      .filter((d): d is string => Boolean(d))
      .sort((a, b) => (new Date(a) < new Date(b) ? -1 : 1))
      .pop() ?? null;

  const milesRounded = Math.round(stats.miles);
  const statusLine = stats.isComplete
    ? `Complete — finished ${stats.completedDate}, day ${stats.totalDays}, crossing the California state line (~${milesRounded} mi). Walk paused Apr 28 after he was struck by a vehicle in Indiana; he resumed May 3.`
    : stats.isPaused
      ? `Paused — Day ${stats.currentDay} (~${milesRounded} mi). Resumed walking May 3 after the Apr 28 incident.`
      : `In progress — Day ${stats.currentDay} (~${milesRounded} mi).`;
  const asOfLine = lastDataDate ? `As of ${lastDataDate}` : null;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "Press Kit — Faith Walk Philly | Faith Walk Live",
    description:
      "Press assets, fast facts, and contact for Faith Walk Philly (a.k.a. Faith Walk Live) — the live-tracker app following Minister Humble Zay's 3,000-mile Philly-to-California faith walk.",
    url: PAGE_URL,
    publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
    about: { "@id": "https://faithwalklive.com/#faithwalk" },
    mentions: [
      { "@id": "https://faithwalklive.com/#ministerzay" },
      { "@id": "https://faithwalklive.com/#aibiblegospels" },
    ],
    inLanguage: "en-US",
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
        name: "Press Kit",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="mb-10 border-b border-brand-border pb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
          Press Kit
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-cloud leading-tight">
          Press Kit — Faith Walk Philly | Faith Walk Live
        </h1>
        <p className="text-brand-amber mt-4 leading-relaxed">
          Faith Walk Philly (a.k.a. Faith Walk Live) is the live-tracker app
          following Minister Humble Zay&apos;s 3,000-mile Philly-to-California
          faith walk — live mileage, current location, and stream embed in one
          place.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
          <a
            href={ASSETS_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-brand-gold text-brand-black px-5 py-2.5 font-semibold hover:bg-brand-amber transition-colors"
          >
            📥 Request assets
          </a>
          <a
            href={PRESS_MAILTO}
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold px-5 py-2.5 font-semibold hover:bg-brand-gold/10 transition-colors"
          >
            📧 Press contact
          </a>
          <Link
            href="/updates/rv-rolling-support"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 text-brand-softgold px-5 py-2.5 font-semibold hover:text-brand-gold transition-colors"
          >
            📰 Latest update
          </Link>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Fast facts
        </h2>
        <dl className="border border-brand-border rounded-lg divide-y divide-brand-border overflow-hidden">
          <FactRow term="Walk" def="Philadelphia, PA → California (3,000 miles, on foot)" />
          <FactRow term="Started" def="March 25, 2026" />
          <FactRow term="Current status" def={statusLine} />
          <FactRow
            term="Apr 28 incident"
            def={
              <>
                Struck by a vehicle on U.S. 40 in Indiana on Day 34. Resumed
                walking May 3.{" "}
                <Link
                  href="/updates/april-28-incident"
                  className="text-brand-gold hover:underline"
                >
                  Recovery timeline →
                </Link>
              </>
            }
          />
          <FactRow term="Walker" def='Isaiah "Humble Zay" Thomas, minister from Philadelphia' />
          <FactRow
            term="Cause"
            def="Raising awareness for HMBL University, a trade school initiative for underprivileged youth in Philadelphia"
          />
          <FactRow
            term="Live tracker"
            def={
              <>
                <Link href="/" className="text-brand-gold hover:underline">
                  faithwalklive.com
                </Link>{" "}
                — built by AI Bible Gospels, supporter-built
              </>
            }
          />
          <FactRow
            term="Live stream"
            def={
              <>
                <a
                  href="https://www.twitch.tv/hmblzayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  twitch.tv/hmblzayy
                </a>{" "}
                (broadcasting daily)
              </>
            }
          />
        </dl>
        {asOfLine && (
          <p className="text-brand-bronze text-xs mt-3">
            <em>{asOfLine}.</em> Day count and mileage update with each
            tracker push (typically daily).
          </p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Boilerplate
        </h2>
        <p className="text-brand-bronze text-sm mb-5">
          Three lengths. Pick whichever fits your word budget.
        </p>
        <div className="space-y-5">
          {boilerplates.map((b) => (
            <div
              key={b.label}
              className="border border-brand-border rounded-lg p-5 bg-brand-black/40"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-3">
                {b.label}
              </div>
              <p className="text-brand-softgold leading-relaxed text-sm whitespace-pre-line">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Bio: Minister Humble Zay
        </h2>
        <div className="space-y-4 text-brand-softgold leading-relaxed text-sm">
          <p>
            Isaiah "Humble Zay" Thomas is a minister from Philadelphia,
            Pennsylvania. On March 25, 2026, he set out on foot to walk
            approximately 3,000 miles from Philadelphia to California —
            broadcasting every step live on Twitch (
            <a
              href="https://www.twitch.tv/hmblzayy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              twitch.tv/hmblzayy
            </a>
            ) — to raise awareness for HMBL University, a trade school
            initiative for underprivileged youth in Philadelphia.
          </p>
          <p>
            On April 28, 2026, Zay was struck by a vehicle on U.S. 40 in
            Indiana on Day 34 of the walk. He was hospitalized with
            non-life-threatening injuries and resumed walking May 3.
          </p>
          <p>
            Zay's own platforms: Twitch{" "}
            <a
              href="https://www.twitch.tv/hmblzayy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              hmblzayy
            </a>
            , Instagram{" "}
            <a
              href="https://www.instagram.com/hmblzay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              hmblzay
            </a>
            , TikTok{" "}
            <a
              href="https://www.tiktok.com/@hmblzayy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              hmblzayy
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Bio: AI Bible Gospels
        </h2>
        <p className="text-brand-softgold leading-relaxed text-sm">
          AI Bible Gospels is a faith-tech project founded by Tommy Lee,
          building software in service of ministers, missionaries, and
          faith-driven creators — including live trackers, stream automation,
          ministry websites, and prayer hubs. Faith Walk Live (
          <Link href="/" className="text-brand-gold hover:underline">
            faithwalklive.com
          </Link>
          ) is its flagship app: a real-time tracker for Minister Humble Zay's
          3,000-mile walk. AI Bible Gospels also operates the YouTube channel{" "}
          <a
            href="https://www.youtube.com/@AIBIBLEGOSPELS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline"
          >
            @AIBIBLEGOSPELS
          </a>
          , using AI to narrate Scripture from a culturally underrepresented
          perspective. AI Bible Gospels built and maintains Faith Walk Live as
          a supporter-side tool. AI Bible Gospels is not affiliated with HMBL.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Assets
        </h2>
        <div className="rounded-lg border border-brand-gold/40 bg-brand-black/60 p-6">
          <p className="text-brand-cloud font-semibold mb-2">
            Logos, photos, b-roll, and a packaged ZIP available on request.
          </p>
          <p className="text-brand-softgold text-sm leading-relaxed mb-4">
            Email{" "}
            <a
              href={ASSETS_MAILTO}
              className="text-brand-gold hover:underline"
            >
              {PRESS_EMAIL}
            </a>{" "}
            with the subject "Asset request — Faith Walk Live" and a one-line
            note about your outlet and intended use. Typical turnaround within
            24 hours, weekdays.
          </p>
          <p className="text-brand-bronze text-xs leading-relaxed">
            Available on request: Faith Walk Live logo (gold/black variants,
            transparent PNG), AI Bible Gospels brand mark, hero photos, route
            map, and a 60–90 sec b-roll reel. All assets cleared for editorial
            use; please credit{" "}
            <span className="text-brand-softgold">
              "AI Bible Gospels / faithwalklive.com"
            </span>{" "}
            or{" "}
            <span className="text-brand-softgold">
              "Photo: faithwalklive.com"
            </span>
            .
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Recent coverage
        </h2>
        <p className="text-brand-bronze text-xs mb-4">
          {outlets.length} outlets have covered the walk to date. Reverse
          chronological priority where dates are public.
        </p>
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

      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-4">
          Press contact
        </h2>
        <div className="border border-brand-border rounded-lg p-6 bg-brand-black/40 space-y-2 text-sm">
          <p>
            <span className="text-brand-bronze">Name:</span>{" "}
            <span className="text-brand-cloud">Tommy Lee</span>
          </p>
          <p>
            <span className="text-brand-bronze">Role:</span>{" "}
            <span className="text-brand-softgold">
              Founder, AI Bible Gospels / Builder, Faith Walk Live
            </span>
          </p>
          <p>
            <span className="text-brand-bronze">Email:</span>{" "}
            <a
              href={PRESS_MAILTO}
              className="text-brand-gold hover:underline"
            >
              {PRESS_EMAIL}
            </a>
          </p>
          <p>
            <span className="text-brand-bronze">Response time:</span>{" "}
            <span className="text-brand-softgold">
              Within 24 hours, weekdays
            </span>
          </p>
          <p>
            <span className="text-brand-bronze">Time zone:</span>{" "}
            <span className="text-brand-softgold">Eastern (US)</span>
          </p>
          <p className="pt-3 border-t border-brand-border text-brand-bronze text-xs">
            For interviews with Minister Zay directly: route through this same
            inbox; we'll coordinate.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-brand-gold/40 bg-brand-black/80 p-6 mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
          What we're not
        </p>
        <p className="text-brand-cloud/90 leading-relaxed text-sm">
          <strong className="text-brand-cloud">
            Faith Walk Live is supporter-built.
          </strong>{" "}
          It is not owned, operated, or sponsored by Minister Humble Zay or
          HMBL. We built the tracker because the walk deserved one. All photos
          and copy on this page are cleared for editorial use; please credit
          "AI Bible Gospels / faithwalklive.com" or "Photo: faithwalklive.com."
          For Zay's own statements, route through his Twitch channel (
          <a
            href="https://www.twitch.tv/hmblzayy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline"
          >
            twitch.tv/hmblzayy
          </a>
          ) or this press contact.
        </p>
      </section>
    </article>
  );
}

function FactRow({
  term,
  def,
}: {
  term: string;
  def: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr]">
      <dt className="px-4 py-3 bg-brand-black/40 text-brand-bronze text-xs uppercase tracking-[0.18em] sm:border-r sm:border-brand-border">
        {term}
      </dt>
      <dd className="px-4 py-3 text-brand-softgold text-sm leading-relaxed">
        {def}
      </dd>
    </div>
  );
}
