import Link from "next/link";
import { updates } from "@/data/updates";

export const metadata = {
  title: "Updates",
  description:
    "Recovery updates and news log for Minister Zay's 3,000-mile Faith Walk. Latest status, links to news coverage, and pointers to the prayer hub.",
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
  ],
};

export default function UpdatesIndex() {
  const sorted = [...updates].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-brand-cloud">Updates</h1>
        <p className="text-brand-amber mt-2 text-sm">
          Recovery updates and news log for the Faith Walk. Plain language, dated
          entries, links to original coverage. Updated as new public information
          enters the record.
        </p>
      </header>

      <ul className="space-y-6">
        {sorted.map((u) => (
          <li
            key={u.slug}
            className="border border-brand-border rounded-2xl p-5 hover:border-brand-gold/60 transition-colors"
          >
            <Link href={`/updates/${u.slug}`} className="block group">
              <div className="text-xs uppercase tracking-[0.25em] text-brand-bronze mb-2">
                {u.date}
              </div>
              <h2 className="text-xl font-semibold text-brand-cloud group-hover:text-brand-gold transition-colors">
                {u.headline}
              </h2>
              <p className="text-brand-softgold mt-2 leading-relaxed text-sm">
                {u.summary}
              </p>
              <div className="mt-3 text-brand-gold text-sm font-medium">
                Read full update →
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-brand-bronze text-xs mt-10">
        For real-time progress when the walk is active, see the{" "}
        <Link href="/map" className="text-brand-gold hover:underline">
          live map
        </Link>
        . For prayer, see the{" "}
        <Link href="/prayer" className="text-brand-gold hover:underline">
          prayer hub
        </Link>
        .
      </p>
    </article>
  );
}
