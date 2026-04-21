import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faithwalklive.com"),
  title: {
    default: "Faith Walk Live — Follow the 3,000-Mile Faith Walk",
    template: "%s · Faith Walk Live",
  },
  description:
    "Follow Minister Zay's 3,000-mile Faith Walk from Philadelphia to California. Live interactive map, daily clips, scripture, and prayer wall. Sponsored by AI Bible Gospels.",
  keywords: [
    "faith walk",
    "minister zay",
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
    description:
      "Minister Zay is walking 3,000 miles from Philadelphia to California on faith. Live map, daily clips, scripture, and prayer wall. Sponsored by AI Bible Gospels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Walk Live — Follow the 3,000-Mile Faith Walk",
    description:
      "Minister Zay is walking 3,000 miles from Philly to Cali on faith. Live map, clips, scripture, and prayers.",
    creator: "@AIBIBLEGOSPELS",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        "Minister walking 3,000 miles from Philadelphia, Pennsylvania to California to spread the gospel. Founder of Stay Humble Stay Hungry (HMBL) Clothing. Streams the walk daily on Twitch.",
      sameAs: ["https://www.twitch.tv/hmblzayy"],
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
    {
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
    },
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
