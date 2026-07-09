export type Verse = { ref: string; text: string };

// Faith Walk verse pool — every entry is quoted verbatim from
// docs/1611KjvW_apocrypha.pdf (the 1611 KJV) in the consulting repo and
// verified against it via pdftotext (first-60-char check, matching
// scripts/x-daily-post.js). Themed to the walk: strength, endurance,
// journey, God's guidance. To add a verse, verify it against the PDF first.
export const verses: Verse[] = [
  {
    ref: "Philippians 4:13",
    text: "I can do all things through Christ which strengtheneth me.",
  },
  {
    ref: "Jeremiah 29:11",
    text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
  },
  {
    ref: "Hebrews 12:1",
    text: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us.",
  },
  {
    ref: "Proverbs 3:5",
    text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
  },
  {
    ref: "Proverbs 3:6",
    text: "In all thy ways acknowledge him, and he shall direct thy paths.",
  },
  {
    ref: "Psalm 23:4",
    text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
  },
  {
    ref: "Galatians 6:9",
    text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
  },
  {
    ref: "Deuteronomy 31:6",
    text: "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.",
  },
  {
    ref: "Joshua 1:9",
    text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
  },
  {
    ref: "Psalm 121:1",
    text: "I will lift up mine eyes unto the hills, from whence cometh my help.",
  },
  {
    ref: "Psalm 121:8",
    text: "The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.",
  },
  {
    ref: "Romans 8:28",
    text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  },
  {
    ref: "1 Corinthians 9:24",
    text: "Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain.",
  },
  {
    ref: "Psalm 91:11",
    text: "For he shall give his angels charge over thee, to keep thee in all thy ways.",
  },
];

// Deterministic "random" pick — one verse per calendar day (UTC). Stable
// within a day (SSR/CSR and rebuilds agree), well-shuffled across days so
// it doesn't march through the list in order. Seeded by the YYYY-MM-DD
// string so today's verse is a hash of the date, not a sequential index.
function hashDate(ymd: string): number {
  let h = 2166136261; // FNV-1a
  for (let i = 0; i < ymd.length; i++) {
    h ^= ymd.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getVerseOfDay(date: Date = new Date()): Verse {
  const ymd = date.toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  return verses[hashDate(ymd) % verses.length];
}
