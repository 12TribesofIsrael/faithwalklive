export const metadata = {
  title: "Pray for Zay",
  description:
    "Lift up Minister Zay in prayer with the HMBL community. The prayer section lives inside HMBL University Discord — join us there.",
};

const HMBL_DISCORD = "https://discord.gg/MzWAdRbDqu";

export default function PrayerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold text-brand-cloud">Pray for Zay</h1>
        <p className="text-brand-amber mt-3 leading-relaxed">
          Zay is recovering after an accident on the route on April 28, 2026.
          The walk is paused while he heals. Believers are praying together in
          HMBL University Discord — Zay&apos;s own community. Join us there to
          lift him up.
        </p>
      </header>

      <a
        href={HMBL_DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-4 rounded-2xl bg-brand-gold text-brand-black font-semibold text-lg hover:opacity-90 transition"
      >
        🙏 Pray with us in HMBL Discord
      </a>

      <p className="text-brand-bronze text-xs">
        New to Discord? It&apos;s a free chat platform — sign-up takes a
        minute. The link above is a permanent invite into HMBL University.
      </p>
    </div>
  );
}
