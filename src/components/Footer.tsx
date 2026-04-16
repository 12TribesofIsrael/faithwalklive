export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16 py-8 text-sm text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        <blockquote className="border-l-2 border-amber-400/60 pl-4 italic text-neutral-300">
          &ldquo;Whatever you do, work at it with all your heart, as working
          for the Lord, not for human masters.&rdquo;
          <span className="block not-italic text-xs text-neutral-500 mt-1">
            Colossians 3:23
          </span>
        </blockquote>
        <p className="font-medium text-neutral-300">
          Faith Walk Live has no affiliation with the HMBL brand.
        </p>
        <p>
          Just a man of God moving to build tools for the world to see the
          power, and a testament of what God can do through anybody through
          Christ.
        </p>
        <p className="text-neutral-500">
          Credit where it&apos;s due: the walk is Minister Zay&apos;s. Follow him on{" "}
          <a
            href="https://twitch.tv/hmblzayy"
            className="text-amber-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
