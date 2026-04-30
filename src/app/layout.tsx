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

const baseDescription = stats.isPaused
  ? "Walk paused April 28, 2026 after Minister Zay was struck by a vehicle on U.S. 40 in Indiana (covered by Fox 29, Fox 59, TMZ, The Shade Room, and others). Live tracker, recovery updates, prayer hub, and daily clips for the 3,000-mile Faith Walk from Philadelphia to California, raising awareness for HMBL University. Sponsored by AI Bible Gospels."
  : "Follow Minister Zay's 3,000-mile Faith Walk from Philadelphia to California. Live interactive map, daily clips, scripture, and prayer wall. Sponsored by AI Bible Gospels.";

const ogTwitterDescription = stats.isPaused
  ? "Walk paused April 28 after Minister Zay was hit by a car in Indiana. Recovery updates, live map, clips, and prayer hub. Sponsored by AI Bible Gospels."
  : "Minister Zay is walking 3,000 miles from Philadelphia to California on faith. Live map, daily clips, scripture, and prayer wall. Sponsored by AI Bible Gospels.";

export const metadata: Metadata = {
  metadataBase: new URL("https://faithwalklive.com"),
  title: {
    default: "Faith Walk Live — Follow the 3,000-Mile Faith Walk",
    template: "%s · Faith Walk Live",
  },
  description: baseDescription,
  keywords: [
    "faith walk",
    "minister zay",
    "minister zay accident",
    "minister zay update",
    "minister zay recovery",
    "minister zay hospital",
    "is minister zay okay",
    "faith walk paused",
    "isaiah thomas hmbl",
    "hmbl zayy hit by car",
    "hmblzayy accident",
    "hmbl university",
    "walking across america",
    "christian twitch",
    "faith walk live",
    "philadelphia to california walk",
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
    title: "Faith Walk Live — Follow the 3,000-Mile Faith Walk",
    description: ogTwitterDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Walk Live — Follow the 3,000-Mile Faith Walk",
    description: ogTwitterDescription,
    creator: "@AIBIBLEGOSPELS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const eventNode = stats.isPaused
  ? {
      "@type": "Event",
      "@id": "https://faithwalklive.com/#faithwalk",
      name: "Minister Zay's 3,000-Mile Faith Walk",
      description:
        "Minister Zay is walking 3,000 miles from Philadelphia, Pennsylvania to California, streaming daily on Twitch. Walk paused April 28, 2026 after he was struck by a vehicle on U.S. 40 in Indiana; he is recovering and intends to resume.",
      startDate: "2026-03-25",
      previousStartDate: stats.pausedSince ?? "2026-03-25",
      eventStatus: "https://schema.org/EventPostponed",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.twitch.tv/hmblzayy",
      },
      organizer: { "@id": "https://faithwalklive.com/#ministerzay" },
      performer: { "@id": "https://faithwalklive.com/#ministerzay" },
      sponsor: { "@id": "https://faithwalklive.com/#aibiblegospels" },
      subjectOf: { "@id": "https://faithwalklive.com/updates/april-28-incident#article" },
    }
  : {
      "@type": "Event",
      "@id": "https://faithwalklive.com/#faithwalk",
      name: "Minister Zay's 3,000-Mile Faith Walk",
      description:
        "Minister Zay is walking 3,000 miles from Philadelphia, Pennsylvania to California, streaming daily on Twitch. A walk of faith, not a publicity stunt or charity race.",
      startDate: "2026-03-25",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.twitch.tv/hmblzayy",
      },
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
        "Faith-driven technology channel and ministry using software and AI in service of the gospel. Publisher and sponsor of Faith Walk Live.",
      sameAs: [
        "https://www.youtube.com/@AIBIBLEGOSPELS",
        "https://faithwalklive.com",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://faithwalklive.com/#ministerzay",
      name: "Minister Zay",
      alternateName: "Isaiah M. Thomas",
      description:
        "Minister walking 3,000 miles from Philadelphia, Pennsylvania to California to spread the gospel and raise awareness for HMBL University. Founder of Stay Humble Stay Hungry (HMBL) Clothing. Streams the walk daily on Twitch.",
      sameAs: [
        "https://www.twitch.tv/hmblzayy",
        "https://www.instagram.com/ministerzay/",
        "https://www.tiktok.com/@hmblzayy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://faithwalklive.com/#website",
      name: "Faith Walk Live",
      url: "https://faithwalklive.com",
      description:
        "A believer's companion to Minister Zay's 3,000-mile Faith Walk from Philadelphia to California. Supporter-built, not affiliated with HMBL.",
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
