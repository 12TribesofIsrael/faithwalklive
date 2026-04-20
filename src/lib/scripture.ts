export type Verse = { ref: string; text: string };

export const verses: Verse[] = [
  {
    ref: "Jeremiah 29:11",
    text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
  },
  {
    ref: "Isaiah 40:31",
    text: "But they that wait upon the LORD shall renew [their] strength; they shall mount up with wings as eagles; they shall run, and not be weary; [and] they shall walk, and not faint.",
  },
  {
    ref: "Philippians 4:13",
    text: "I can do all things through Christ which strengtheneth me.",
  },
  {
    ref: "Hebrews 12:1",
    text: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us.",
  },
  {
    ref: "Proverbs 3:5-6",
    text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
  },
  {
    ref: "Psalm 23:4",
    text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou [art] with me; thy rod and thy staff they comfort me.",
  },
  {
    ref: "2 Corinthians 5:7",
    text: "For we walk by faith, not by sight.",
  },
  {
    ref: "Galatians 6:9",
    text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
  },
];

export function getVerseOfDay(): Verse {
  const start = new Date("2026-03-25").getTime();
  const now = Date.now();
  const days = Math.floor((now - start) / 86_400_000);
  return verses[((days % verses.length) + verses.length) % verses.length];
}
