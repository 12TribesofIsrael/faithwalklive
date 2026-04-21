export const metadata = {
  title: "Common Questions",
  description:
    "Common questions about Minister Zay, the 3,000-mile Faith Walk from Philadelphia to California, and Faith Walk Live. Plain answers, faith-first voice.",
};

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What is the Faith Walk?",
    a: "A 3,000-mile walk of faith from Philadelphia, Pennsylvania to California. Minister Zay is walking the distance on foot and streaming the journey daily on Twitch at twitch.tv/hmblzayy. It is not a publicity stunt and not a charity race — it is a walk of faith.",
  },
  {
    q: "Who is Minister Zay?",
    a: "Minister Zay is Isaiah M. Thomas, founder of Stay Humble Stay Hungry (HMBL) Clothing, based in Philadelphia. He is walking across America to spread the gospel.",
  },
  {
    q: "When did the Faith Walk begin?",
    a: "The walk began on March 25, 2026 in Philadelphia, Pennsylvania.",
  },
  {
    q: "How long is the Faith Walk?",
    a: "Around 3,000 miles, from Philadelphia, Pennsylvania to California.",
  },
  {
    q: "Where can I watch the Faith Walk live?",
    a: "Live on Twitch at twitch.tv/hmblzayy. A daily clip archive is kept at faithwalklive.com/clips so you can catch up on what you missed.",
  },
  {
    q: "Where is Minister Zay on the walk right now?",
    a: "The live map at faithwalklive.com/map shows every confirmed checkpoint and the latest one Zay has reached. Location is updated once per day, typically at the end of the night or the following morning, so the map is the most current source.",
  },
  {
    q: "What is Faith Walk Live?",
    a: "Faith Walk Live is a companion platform for the walk. It includes a live checkpoint map, a daily clip archive, scripture for the road, and a prayer wall. The site is supporter-built, not an official HMBL property.",
  },
  {
    q: "Is Faith Walk Live affiliated with HMBL?",
    a: "No. Faith Walk Live is supporter-built and is not an official HMBL site. There is no HMBL logo on the site and no claim of official status. For HMBL clothing and official brand channels, follow Minister Zay and HMBL directly.",
  },
  {
    q: "Who built Faith Walk Live?",
    a: "Thomas, the creator of AI Bible Gospels, built Faith Walk Live. AI Bible Gospels is a faith-driven technology channel and ministry using software and AI in service of the gospel. The platform was built to honor the walk, not to monetize it.",
  },
  {
    q: "What is AI Bible Gospels?",
    a: "AI Bible Gospels is a YouTube channel and faith-tech ministry that creates gospel-focused content using technology. It sponsors Faith Walk Live as a companion resource for believers following the walk. You can find the channel at youtube.com/@AIBIBLEGOSPELS.",
  },
  {
    q: "How can I support the walk?",
    a: "Pray for it. Watch the live stream on Twitch. Submit a prayer at faithwalklive.com/prayer. Share the walk with your church, your family, or your community.",
  },
  {
    q: "How can I pray for Minister Zay?",
    a: "Submit a prayer at faithwalklive.com/prayer. Prayers are moderated and lifted up with the walk. Pray for protection on the road, endurance of body and spirit, and a clear gospel witness everywhere Zay goes.",
  },
  {
    q: "Does Faith Walk Live sell merch?",
    a: "No. Faith Walk Live does not sell anything. HMBL clothing is sold by Minister Zay's brand directly.",
  },
  {
    q: "How often is the tracker updated?",
    a: "Once per day. The checkpoint map is updated at the end of the night or the next morning after the stream, sourced from publicly available information in the Twitch stream title. No private location data is collected or displayed.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-brand-cloud">
          Common questions
        </h1>
        <p className="text-brand-amber mt-2 text-sm">
          Plain answers about the walk, the platform, and the people behind it.
        </p>
      </header>

      <dl className="space-y-8">
        {faqs.map(({ q, a }) => (
          <div
            key={q}
            className="border-b border-brand-border pb-6 last:border-b-0"
          >
            <dt className="text-lg font-semibold text-brand-cloud">{q}</dt>
            <dd className="text-brand-softgold mt-2 leading-relaxed">{a}</dd>
          </div>
        ))}
      </dl>

      <p className="text-brand-bronze text-xs mt-10">
        Don&apos;t see your question? The{" "}
        <a href="/why" className="text-brand-gold hover:underline">
          Why
        </a>{" "}
        page goes deeper into the testimony behind the walk, and the{" "}
        <a href="/map" className="text-brand-gold hover:underline">
          live map
        </a>{" "}
        is the source of truth for progress.
      </p>
    </article>
  );
}
