import Link from "next/link";
import { getStats } from "@/lib/checkpoints";

const PAGE_URL = "https://faithwalklive.com/philly";

export const metadata = {
  title: "Faith Walk Philly — Philly to California 3,000-Mile Faith Walk",
  description:
    "Faith Walk Philly: Minister Zay's 3,000-mile faith walk from Philly (Philadelphia, PA) to California. Daily updates, live map, and the story of the Philadelphia start. Tracked on Faith Walk Live.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Faith Walk Philly — Philly to California 3,000-Mile Faith Walk",
    description:
      "Faith Walk Philly: the Philadelphia roots of Minister Zay's 3,000-mile faith walk to California. Live tracker at Faith Walk Live.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Walk Philly — Philly to California",
    description:
      "The Philadelphia roots of Minister Zay's 3,000-mile faith walk to California. Live tracker at Faith Walk Live.",
    creator: "@AIBIBLEGOSPELS",
  },
  robots: { index: true, follow: true },
};

const philadelphiaPlaceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": "https://faithwalklive.com/philly#place",
  name: "Philadelphia, Pennsylvania",
  alternateName: ["Philly", "City of Brotherly Love"],
  description:
    "Starting city of the Faith Walk Philly — Minister Zay's 3,000-mile faith walk from Philadelphia to California, which began March 25, 2026.",
  containedInPlace: {
    "@type": "State",
    name: "Pennsylvania",
    containedInPlace: { "@type": "Country", name: "United States" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  name: "Faith Walk Philly — Philly to California 3,000-Mile Faith Walk",
  description:
    "The Philadelphia roots of Faith Walk Live: Minister Zay's 3,000-mile Philly-to-California faith walk, daily updates, and the story of the start.",
  url: PAGE_URL,
  publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
  about: { "@id": "https://faithwalklive.com/#faithwalk" },
  mentions: [
    { "@id": "https://faithwalklive.com/#ministerzay" },
    { "@id": "https://faithwalklive.com/philly#place" },
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
      name: "Philly",
      item: PAGE_URL,
    },
  ],
};

export default function PhillyPage() {
  const s = getStats();
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philadelphiaPlaceJsonLd) }}
      />
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
          Faith Walk Philly
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-brand-cloud leading-tight">
          Faith Walk <span className="text-brand-gold">Philly</span>
        </h1>
        <h2 className="text-lg md:text-xl text-brand-gold/90 italic font-normal mt-3">
          From Philly to California — 3,000 miles on faith
        </h2>
        <p className="text-brand-amber mt-5 leading-relaxed">
          Faith Walk Philly is the Philadelphia chapter of Faith Walk Live —
          Minister Zay&apos;s 3,000-mile walk on foot from Philly to
          California, streaming daily on Twitch. This page is the story of the
          start: where the walk began, the neighborhoods it moved through, and
          why it had to start here.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-brand-cloud mb-3">
          The Philly start — Day 1
        </h2>
        <p className="text-brand-softgold leading-relaxed">
          The walk began on March 25, 2026 in Philadelphia, Pennsylvania.
          Minister Isaiah &quot;Humble Zay&quot; Thomas — a Philly minister and
          founder of Stay Humble Stay Hungry (HMBL) Clothing — stepped off on
          foot, headed west. The plan: 3,000 miles to California, on faith,
          streaming the whole way at{" "}
          <a
            href="https://www.twitch.tv/hmblzayy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline"
          >
            twitch.tv/hmblzayy
          </a>
          . No publicity stunt. No charity race. A walk of faith.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-brand-cloud mb-3">
          Out of the city
        </h2>
        <p className="text-brand-softgold leading-relaxed">
          The first miles of the Faith Walk Philly moved through the city
          before reaching open road — past neighborhoods Zay calls home and the
          ones that shaped him. The live map on Faith Walk Live shows every
          confirmed checkpoint west from Philadelphia, day by day.
        </p>
        <div className="mt-5">
          <Link
            href="/map"
            className="inline-flex items-center justify-center rounded-full bg-brand-gold text-brand-black px-5 py-2.5 text-sm font-semibold hover:bg-brand-amber transition-colors"
          >
            See the live map →
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-brand-cloud mb-3">
          Philly to California — the journey
        </h2>
        <p className="text-brand-softgold leading-relaxed">
          Roughly 3,000 miles from Philadelphia, Pennsylvania to California, on
          foot, one day at a time. Through Pennsylvania, Ohio, Indiana,
          Illinois, and west.{" "}
          {s.isComplete ? (
            <>
              He finished on {s.completedDate} — {s.totalDays} days, all{" "}
              {s.totalMiles.toLocaleString()} miles, ending at the California
              state line. The checkpoint map is the record of every mile of it.
            </>
          ) : (
            <>
              {s.miles.toLocaleString()} miles walked so far of{" "}
              {s.totalMiles.toLocaleString()} — {s.percent}% of the way. The
              checkpoint map is the source of truth for where Zay actually is.
            </>
          )}
        </p>
        {s.isPaused && (
          <p className="text-brand-amber mt-4 leading-relaxed">
            The walk was paused following an incident on the route on April 28,
            2026, and resumed May 3.{" "}
            <Link
              href="/updates/april-28-incident"
              className="text-brand-gold hover:underline"
            >
              Read the recovery timeline →
            </Link>
          </p>
        )}
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-brand-cloud mb-3">
          Why Philly
        </h2>
        <p className="text-brand-softgold leading-relaxed">
          Philadelphia isn&apos;t just where the walk started — it&apos;s where
          the calling started. Zay is a Philly minister, HMBL is a Philly
          brand, and HMBL University — the trade-school initiative the walk
          raises awareness for — is built for underprivileged youth in
          Philadelphia. The Faith Walk Philly is what the city looks like when
          it walks west on faith.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-gold/40 bg-brand-black/80 p-6 mb-6">
        <h2 className="text-xl font-semibold text-brand-cloud mb-3">
          Follow the Faith Walk Philly
        </h2>
        <p className="text-brand-softgold leading-relaxed text-sm mb-5">
          One short email a day with the checkpoint, a clip, and the verse.
          Or watch live on Twitch when the stream is on.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/subscribe"
            className="inline-flex items-center justify-center rounded-full bg-brand-gold text-brand-black px-5 py-2.5 text-sm font-semibold hover:bg-brand-amber transition-colors"
          >
            Subscribe to daily updates
          </Link>
          <a
            href="https://www.twitch.tv/hmblzayy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold px-5 py-2.5 text-sm font-semibold hover:bg-brand-gold/10 transition-colors"
          >
            Watch live on Twitch
          </a>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 text-brand-softgold px-5 py-2.5 text-sm font-semibold hover:text-brand-gold transition-colors"
          >
            Drop a prayer for Zay
          </Link>
        </div>
      </section>

      <p className="text-brand-bronze text-xs mt-10">
        Faith Walk Philly is the Philly-rooted name for{" "}
        <Link href="/" className="text-brand-gold hover:underline">
          Faith Walk Live
        </Link>{" "}
        — the supporter-built tracker at faithwalklive.com. Not affiliated with
        HMBL. Built by AI Bible Gospels.
      </p>
    </article>
  );
}
