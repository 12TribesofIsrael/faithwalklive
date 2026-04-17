"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand-border bg-brand-navy/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-brand-cloud whitespace-nowrap"
        >
          Faith Walk <span className="text-brand-gold">Live</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-4 text-sm">
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-brand-softgold hover:text-brand-gold transition"
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
              className="text-brand-amber hover:text-red-500 transition"
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

        {/* Mobile: YouTube icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.youtube.com/@AIBIBLEGOSPELS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-amber hover:text-red-500 transition"
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
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-softgold hover:text-brand-gold transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-navy/95 backdrop-blur">
          <ul className="max-w-5xl mx-auto px-4 py-3 space-y-1">
            {links.slice(1).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-brand-softgold hover:text-brand-gold transition text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
