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
        <ul className="flex gap-4 text-sm">
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
        </ul>
      </nav>
    </header>
  );
}
