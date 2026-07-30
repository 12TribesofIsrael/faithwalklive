export const metadata = {
  title: "Common Questions",
  description:
    "Common questions about Minister Zay and the 3,000-mile Faith Walk Philly (a.k.a. Faith Walk Live) — the Philly-to-California walk on faith, completed July 27, 2026 in 124 days. Plain answers, faith-first voice.",
};

type QA = {
  q: string;
  a: string;
  // Optional outbound links rendered under the answer. The answer text
  // itself stays clean strings so FAQPage JSON-LD remains canonical.
  links?: { label: string; href: string }[];
};

const faqs: QA[] = [
  {
    q: "Did Minister Zay finish the walk?",
    a: "Yes. Minister Zay completed the 3,000-mile Faith Walk on July 27, 2026 — Day 124 — crossing into California at Needles on foot after starting in Philadelphia on March 26, 2026. He livestreamed nearly every mile on Twitch, including a hospitalization in Indiana on Day 34 that he came back from five days later. The finish was covered by Complex, NBC10 Philadelphia, CBS News Philadelphia, The Source, and others.",
    links: [
      {
        label: "Read the full record of the finish",
        href: "/updates/walk-complete",
      },
    ],
  },
  {
    q: "What was the Faith Walk?",
    a: "A 3,000-mile walk of faith from Philadelphia, Pennsylvania to California — also called the Faith Walk Philly or the Philly-to-California Faith Walk. Minister Zay walked the distance on foot and streamed the journey daily on Twitch at twitch.tv/hmblzayy, finishing on July 27, 2026. It was not a publicity stunt and not a charity race — it was a walk of faith, undertaken to build a trade school for Philadelphia teens.",
  },
  {
    q: "Who is Minister Zay?",
    a: "Minister Zay is Isaiah M. Thomas, founder of Stay Humble Stay Hungry (HMBL) Clothing, based in Philadelphia. He walked across America to spread the gospel and to raise money for HMBL University, a trade school for Philadelphia youth.",
  },
  {
    q: "When did the Faith Walk begin and end?",
    a: "The walk began on March 26, 2026 in Philadelphia, Pennsylvania and finished on July 27, 2026 at Needles, California — 124 days on the road.",
  },
  {
    q: "How long was the Faith Walk?",
    a: "Around 3,000 miles on foot, from Philadelphia, Pennsylvania to California, walked over 124 days.",
  },
  {
    q: "Can I still watch the Faith Walk?",
    a: "Yes. The daily clip archive at faithwalklive.com/clips holds moments from across all 124 days, and the map at faithwalklive.com/map shows every confirmed checkpoint of the route he walked. Minister Zay's Twitch channel is twitch.tv/hmblzayy.",
  },
  {
    q: "Where did the Faith Walk end?",
    a: "In Needles, California, on July 27, 2026 — Day 124. Minister Zay crossed the Arizona-California line into Needles, in San Bernardino County, after passing through Lake Havasu City, Arizona the day before. The map at faithwalklive.com/map holds the full route with every confirmed checkpoint.",
  },
  {
    q: "What happened on Day 34 of the walk?",
    a: "On April 28, 2026 (Day 34), Minister Zay was struck by a vehicle on U.S. 40 in Indiana while livestreaming the walk. He was hospitalized; news coverage reported his condition as stable and not life-threatening. The walk and the daily livestream were paused for the recovery period. Minister Zay returned to the spot of the accident on Sunday, May 3, 2026 at 12 noon and resumed the walk westward — and finished it 85 days later, on July 27, 2026. The full record — recovery timeline and every news outlet that covered the story — is at faithwalklive.com/updates/april-28-incident.",
    links: [
      {
        label: "Read the full update + recovery timeline",
        href: "/updates/april-28-incident",
      },
      {
        label: "Fox 29 Philadelphia — incident coverage",
        href: "https://www.fox29.com/news/twitch-streamer-minister-zay-hit-car-during-faith-walk-from-philadelphia-california",
      },
      {
        label: "Fox 59 Indianapolis — incident coverage",
        href: "https://fox59.com/news/indynews/streamer-hit-by-car-in-indiana-while-walking-across-country-to-raise-money-for-children/",
      },
      {
        label: "TMZ — incident coverage (TikTok)",
        href: "https://www.tiktok.com/@tmz/video/7633948800264047885",
      },
      {
        label: "The Shade Room — incident coverage (Instagram)",
        href: "https://www.instagram.com/p/DXsREFagUhr/",
      },
      {
        label: "Pray with the HMBL community",
        href: "/prayer",
      },
    ],
  },
  {
    q: "Did Minister Zay walk every mile, or did he ride in the RV?",
    a: "He walked every mile on foot. On May 8, 2026, Minister Zay announced an RV that traveled alongside the walk as a mobile support base for rest, gear, and the support team. The RV followed him along the route; it was never a replacement for the walk itself. He livestreamed the walking on Twitch (@hmblzayy) nearly every day he was on the road.",
    links: [
      {
        label: "Read the RV rolling-support announcement",
        href: "/updates/rv-rolling-support",
      },
    ],
  },
  {
    q: "Why did Minister Zay get an RV for the walk?",
    a: "After the April 28, 2026 vehicle strike on U.S. 40 in Indiana, the team upgraded its logistics for the long road ahead. The RV provided safer rest stops, mobile shelter, and a base for support staff across the remaining ~2,300 miles to California. Zay announced the RV in a Reel on Instagram on May 8, 2026, with a tour from Indianapolis, IN.",
    links: [
      {
        label: "Read the RV rolling-support announcement",
        href: "/updates/rv-rolling-support",
      },
      {
        label: "Apr 28 incident — recovery timeline",
        href: "/updates/april-28-incident",
      },
    ],
  },
  {
    q: "What is Faith Walk Live?",
    a: "Faith Walk Live (also known as Faith Walk Philly) is a companion platform and permanent record of the walk. It includes the full checkpoint map of the route he walked, a daily clip archive covering all 124 days, scripture for the road, and a prayer hub that points to HMBL University Discord. The site is supporter-built, not an official HMBL property.",
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
    q: "How can I support the walk now that it's finished?",
    a: "Support the reason he walked. HMBL University is not built yet, and the fundraiser toward it is still open. Pray with the HMBL community at faithwalklive.com/prayer, watch the walk back in the clip archive, and share the story with your church, your family, or your community.",
    links: [
      {
        label: "Help finish HMBL University (GoFundMe)",
        href: "https://www.gofundme.com/f/help-launch-hmbl-summer-camp-for-teens",
      },
      {
        label: "Read the full record of the finish",
        href: "/updates/walk-complete",
      },
    ],
  },
  {
    q: "How can I pray for Minister Zay?",
    a: "Pray with the HMBL community at faithwalklive.com/prayer, which points to the prayer section inside HMBL University Discord — Zay's own community, where believers lift him up daily. Pray for protection, healing, endurance of body and spirit, and a clear gospel witness everywhere Zay goes.",
  },
  {
    q: "Does Faith Walk Live sell merch?",
    a: "No. Faith Walk Live does not sell anything. HMBL clothing is sold by Minister Zay's brand directly.",
  },
  {
    q: "How often is the tracker updated?",
    a: "It is no longer updated — the walk finished on July 27, 2026, so the map is now a complete record rather than a live tracker. While the walk was underway it was updated once per day, at the end of the night or the next morning, sourced from publicly available information in the Twitch stream title. No private location data was ever collected or displayed.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".faq-q", ".faq-a"],
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
      name: "FAQ",
      item: "https://faithwalklive.com/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
        {faqs.map(({ q, a, links }) => (
          <div
            key={q}
            className="border-b border-brand-border pb-6 last:border-b-0"
          >
            <dt className="faq-q text-lg font-semibold text-brand-cloud">{q}</dt>
            <dd className="faq-a text-brand-softgold mt-2 leading-relaxed">{a}</dd>
            {links && links.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      className="text-brand-gold hover:underline"
                    >
                      {label} →
                    </a>
                  </li>
                ))}
              </ul>
            )}
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
