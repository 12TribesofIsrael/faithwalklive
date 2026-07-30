import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { getStats } from "@/lib/checkpoints";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stats = getStats();

const baseDescription = stats.isComplete
  ? `Faith Walk Philly: Minister Zay COMPLETED the 3,000-mile Philly-to-California Faith Walk on ${stats.completedDate}, day ${stats.totalDays}, walking into ${stats.finishLocation} on foot after being struck by a car in Indiana and returning to the road five days later. The full route map, every checkpoint, ${stats.clipCount} stream clips, scripture, and the HMBL University fundraiser. Sponsored by AI Bible Gospels.`
  : stats.isPaused
    ? "Faith Walk Philly: walk paused April 28, 2026 after Minister Zay was struck by a vehicle on U.S. 40 in Indiana (covered by Fox 29, Fox 59, TMZ, The Shade Room, and others). Live tracker, recovery updates, prayer hub, and daily clips for the 3,000-mile Philly-to-California Faith Walk, raising awareness for HMBL University. Sponsored by AI Bible Gospels."
    : "Faith Walk Philly: follow Minister Zay's 3,000-mile Philly-to-California Faith Walk. Live interactive map, daily clips, scripture, and prayer wall. Sponsored by AI Bible Gospels.";

const ogTwitterDescription = stats.isComplete
  ? `He made it. Minister Zay finished the 3,000-mile walk from Philadelphia to California on ${stats.completedDate} — ${stats.totalDays} days on foot. The full route, every checkpoint, every clip. Sponsored by AI Bible Gospels.`
  : stats.isPaused
    ? "Faith Walk Philly — walk paused April 28 after Minister Zay was hit by a car in Indiana. Recovery updates, live map, clips, and prayer hub. Sponsored by AI Bible Gospels."
    : "Faith Walk Philly: Minister Zay is walking 3,000 miles from Philly to California on faith. Live map, daily clips, scripture, prayer wall. Sponsored by AI Bible Gospels.";

export const metadata: Metadata = {
  metadataBase: new URL("https://faithwalklive.com"),
  title: {
    default: "Faith Walk Philly | Faith Walk Live — Philly to California 3,000-Mile Faith Walk",
    template: "%s · Faith Walk Live",
  },
  description: baseDescription,
  keywords: [
    // Brand
    "faith walk live",
    "faith walk",
    // Geo (Philly)
    "faith walk philly",
    "philly faith walk",
    "faith walk philadelphia",
    "philadelphia faith walk",
    // Journey (Philly → California)
    "philly to california",
    "philly to california faith walk",
    "philly to cali",
    "philly to cali faith walk",
    "philadelphia to california",
    "philadelphia to california walk",
    "philadelphia to california faith walk",
    // Person
    "minister zay",
    "minister zay accident",
    "minister zay update",
    "minister zay recovery",
    "minister zay hospital",
    "is minister zay okay",
    "isaiah thomas hmbl",
    "hmbl zayy hit by car",
    "hmblzayy accident",
    // Completion — the live search demand as of Jul 27, 2026
    "did minister zay finish the walk",
    "hmbl zay finished the walk",
    "hmbl zay completes 3000 mile walk",
    "minister zay made it to california",
    "faith walk complete",
    "faith walk finished",
    "how many days did the faith walk take",
    // Cause + adjacent
    "faith walk paused",
    "hmbl university",
    "walking across america",
    "christian twitch",
    "christian live streaming",
    "faith-based content",
    "AI Bible Gospels",
  ],
  authors: [{ name: "AI Bible Gospels", url: "https://www.youtube.com/@AIBIBLEGOSPELS" }],
  creator: "AI Bible Gospels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faithwalklive.com",
    siteName: "Faith Walk Live",
    title: "Faith Walk Philly | Faith Walk Live — Philly to California 3,000-Mile Faith Walk",
    description: ogTwitterDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Walk Philly | Faith Walk Live — Philly to California",
    description: ogTwitterDescription,
    creator: "@AIBIBLEGOSPELS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const eventAreaServed = [
  {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: { "@type": "State", name: "Pennsylvania" },
  },
  { "@type": "State", name: "California" },
  { "@type": "Country", name: "United States" },
];

// Completed walk. schema.org has no "EventCompleted" status — the correct
// signal for a finished event is EventScheduled plus an endDate in the past,
// which is what answer engines read to say "yes, he finished, on this date."
const eventNode = stats.isComplete
  ? {
      "@type": "Event",
      "@id": "https://faithwalklive.com/#faithwalk",
      name: "Faith Walk Philly — Minister Zay's 3,000-Mile Philly-to-California Faith Walk",
      alternateName: [
        "Faith Walk Live",
        "Faith Walk Philly",
        "Philly to California Faith Walk",
        "Philadelphia to California Faith Walk",
      ],
      description:
        "Faith Walk Philly: Minister Zay (Isaiah Thomas) walked 3,000 miles from Philly (Philadelphia, Pennsylvania) to California on foot, streaming daily on Twitch, to fund HMBL University — a trade school for Philadelphia teens. He set out on March 26, 2026 and completed the walk on July 27, 2026, his 124th day, crossing into California at Needles. He was struck by a vehicle in Indiana on April 28, 2026 and returned to the road five days later. A walk of faith, not a publicity stunt or charity race.",
      startDate: stats.startDate,
      endDate: "2026-07-27",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.twitch.tv/hmblzayy",
      },
      areaServed: eventAreaServed,
      organizer: { "@id": "https://faithwalklive.com/#ministerzay" },
      performer: { "@id": "https://faithwalklive.com/#ministerzay" },
      sponsor: { "@id": "https://faithwalklive.com/#aibiblegospels" },
      subjectOf: { "@id": "https://faithwalklive.com/updates/april-28-incident#article" },
    }
  : stats.isPaused
  ? {
      "@type": "Event",
      "@id": "https://faithwalklive.com/#faithwalk",
      name: "Faith Walk Philly — Minister Zay's 3,000-Mile Philly-to-California Faith Walk",
      alternateName: [
        "Faith Walk Live",
        "Faith Walk Philly",
        "Philly to California Faith Walk",
        "Philadelphia to California Faith Walk",
      ],
      description:
        "Faith Walk Philly: Minister Zay is walking 3,000 miles from Philly (Philadelphia, Pennsylvania) to California, streaming daily on Twitch. Walk paused April 28, 2026 after he was struck by a vehicle on U.S. 40 in Indiana; he is recovering and intends to resume.",
      startDate: stats.startDate,
      previousStartDate: stats.pausedSince ?? stats.startDate,
      eventStatus: "https://schema.org/EventPostponed",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.twitch.tv/hmblzayy",
      },
      areaServed: eventAreaServed,
      organizer: { "@id": "https://faithwalklive.com/#ministerzay" },
      performer: { "@id": "https://faithwalklive.com/#ministerzay" },
      sponsor: { "@id": "https://faithwalklive.com/#aibiblegospels" },
      subjectOf: { "@id": "https://faithwalklive.com/updates/april-28-incident#article" },
    }
  : {
      "@type": "Event",
      "@id": "https://faithwalklive.com/#faithwalk",
      name: "Faith Walk Philly — Minister Zay's 3,000-Mile Philly-to-California Faith Walk",
      alternateName: [
        "Faith Walk Live",
        "Faith Walk Philly",
        "Philly to California Faith Walk",
        "Philadelphia to California Faith Walk",
      ],
      description:
        "Faith Walk Philly: Minister Zay is walking 3,000 miles from Philly (Philadelphia, Pennsylvania) to California, streaming daily on Twitch. A walk of faith, not a publicity stunt or charity race.",
      startDate: stats.startDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.twitch.tv/hmblzayy",
      },
      areaServed: eventAreaServed,
      organizer: { "@id": "https://faithwalklive.com/#ministerzay" },
      performer: { "@id": "https://faithwalklive.com/#ministerzay" },
      sponsor: { "@id": "https://faithwalklive.com/#aibiblegospels" },
    };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://faithwalklive.com/#aibiblegospels",
      name: "AI Bible Gospels",
      url: "https://www.youtube.com/@AIBIBLEGOSPELS",
      description:
        "Faith-driven technology channel and ministry using software and AI in service of the gospel. Publisher and sponsor of Faith Walk Live / Faith Walk Philly.",
      areaServed: ["Philadelphia, PA", "California", "United States"],
      sameAs: [
        "https://www.youtube.com/@AIBIBLEGOSPELS",
        "https://faithwalklive.com",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://faithwalklive.com/#ministerzay",
      name: "Minister Zay",
      alternateName: ["Isaiah M. Thomas", "Humble Zay", "hmblzayy", "HMBL Zay"],
      description:
        "Philly-born minister who walked 3,000 miles from Philadelphia, Pennsylvania to California to spread the gospel and raise money for HMBL University, finishing on July 27, 2026 after 124 days. Founder of Stay Humble Stay Hungry (HMBL) Clothing. Streamed the walk daily on Twitch.",
      homeLocation: {
        "@type": "City",
        name: "Philadelphia",
        containedInPlace: { "@type": "State", name: "Pennsylvania" },
      },
      // sameAs is an entity-resolution signal — a dead URL here is worse than
      // no URL. His Instagram is @hmblzay with ONE y; instagram.com/ministerzay
      // and instagram.com/hmblzayy both return "page isn't available".
      // @ministerzay is his TikTok *backup* account, not his Instagram.
      sameAs: [
        "https://www.twitch.tv/hmblzayy",
        "https://www.instagram.com/hmblzay/",
        "https://www.tiktok.com/@hmblzayy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://faithwalklive.com/#website",
      name: "Faith Walk Live",
      alternateName: ["Faith Walk Philly", "Faith Walk Live / Philly"],
      url: "https://faithwalklive.com",
      description:
        "A believer's companion to Minister Zay's 3,000-mile Faith Walk from Philly (Philadelphia) to California — a.k.a. Faith Walk Philly. Live tracker, daily clips, scripture, prayer hub. Supporter-built, not affiliated with HMBL.",
      inLanguage: "en-US",
      publisher: { "@id": "https://faithwalklive.com/#aibiblegospels" },
      about: { "@id": "https://faithwalklive.com/#faithwalk" },
    },
    eventNode,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-navy text-brand-softgold">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
