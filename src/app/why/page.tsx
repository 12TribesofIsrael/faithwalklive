export const metadata = {
  title: "Why this walk matters · Faith Walk Live",
};

export default function WhyPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12 prose prose-invert prose-amber">
      <h1 className="text-3xl font-semibold mb-2">Why this walk matters</h1>
      <p className="text-neutral-400 text-sm">A testimony, not a pitch.</p>

      <h2 className="mt-10">The walk</h2>
      <p>
        Minister Zay is walking from Philadelphia, Pennsylvania to California —
        three thousand miles, one step at a time, streaming daily on Twitch.
        Not a publicity stunt. Not a charity race. A walk of faith.
      </p>

      <h2>Why we built this</h2>
      <p>
        I&apos;m a believer who also happens to build software. When I saw what
        Zay was doing, I wanted to honor it — not monetize it, not own it, just
        serve it. The tracker started as a little map. This site is what it
        grew into: a companion for anyone riding along.
      </p>
      <p>
        This platform is not affiliated with HMBL. There&apos;s no logo, no
        claim of official status. Just the record of where Zay has been and
        where he&apos;s going, told with the reverence it deserves.
      </p>

      <h2>What you&apos;ll find here</h2>
      <ul>
        <li>The live map — every checkpoint, updated daily</li>
        <li>A clip archive — faith, milestones, struggle, support</li>
        <li>A daily scripture for the road</li>
        <li>A prayer wall where you can lift the walk up with us</li>
      </ul>

      <h2>What you won&apos;t find here</h2>
      <ul>
        <li>Merch sales (go to HMBL for that)</li>
        <li>Drama, politics, or gossip about anyone on the route team</li>
        <li>Anything that gets in the way of the mission</li>
      </ul>

      <blockquote>
        &ldquo;For we walk by faith, not by sight.&rdquo; — 2 Corinthians 5:7
      </blockquote>
    </article>
  );
}
