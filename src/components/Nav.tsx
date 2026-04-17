import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Live Map" },
  { href: "/clips", label: "Clips" },
  { href: "/why", label: "Why" },
  { href: "/prayer", label: "Prayer Wall" },
  { href: "/subscribe", label: "Subscribe" },
];

export default function Nav() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Faith Walk <span className="text-amber-400">Live</span>
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-neutral-300 hover:text-amber-400 transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.youtube.com/@AIBIBLEGOSPELS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-red-500 transition"
              title="AI Bible Gospels on YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-label="YouTube"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
