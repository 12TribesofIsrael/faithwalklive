export type Verse = { ref: string; text: string };

export const verses: Verse[] = [
  {
    ref: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    ref: "Isaiah 40:31",
    text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    ref: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
  },
  {
    ref: "Hebrews 12:1",
    text: "Let us run with perseverance the race marked out for us.",
  },
  {
    ref: "Proverbs 3:5-6",
    text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
  },
  {
    ref: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
  },
  {
    ref: "2 Corinthians 5:7",
    text: "For we walk by faith, not by sight.",
  },
  {
    ref: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
  },
];

export function getVerseOfDay(): Verse {
  const start = new Date("2026-03-25").getTime();
  const now = Date.now();
  const days = Math.floor((now - start) / 86_400_000);
  return verses[((days % verses.length) + verses.length) % verses.length];
}
