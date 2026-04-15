export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16 py-8 text-sm text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 space-y-2">
        <p>
          Built by a believer riding with the mission. Not an official HMBL
          property.
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
