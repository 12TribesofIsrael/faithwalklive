export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-16 py-8 text-sm text-brand-amber">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        <blockquote className="border-l-2 border-brand-gold/60 pl-4 italic text-brand-softgold">
          &ldquo;Whatever you do, work at it with all your heart, as working
          for the Lord, not for human masters.&rdquo;
          <span className="block not-italic text-xs text-brand-bronze mt-1">
            Colossians 3:23
          </span>
        </blockquote>
        <p className="font-medium text-brand-cloud">
          Faith Walk Live has no affiliation with the HMBL brand.
        </p>
        <p>
          Just a man of God moving to build tools for the world to see the
          power, and a testament of what God can do through anybody through
          Christ.
        </p>
        <p className="text-brand-bronze text-xs">
          Disclaimer: All location data shown is publicly available information
          sourced from the{" "}
          <a
            href="https://twitch.tv/hmblzayy"
            className="text-brand-gold/50 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            hmblzayy
          </a>{" "}
          Twitch stream title. No private location data is collected or
          displayed.
        </p>
        <p className="text-brand-bronze">
          Credit where it&apos;s due: the walk is Minister Zay&apos;s. Follow him on{" "}
          <a
            href="https://twitch.tv/hmblzayy"
            className="text-brand-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
          .
        </p>
        <div className="border-t border-brand-border pt-4 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-brand-bronze">
            Sponsored by{" "}
            <a
              href="https://www.youtube.com/@AIBIBLEGOSPELS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-medium hover:underline"
            >
              AI Bible Gospels
            </a>
          </p>
          <a
            href="https://www.youtube.com/@AIBIBLEGOSPELS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-brand-amber hover:text-red-400 transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-label="YouTube"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
