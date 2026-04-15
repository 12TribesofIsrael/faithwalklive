import { getVerseOfDay } from "@/lib/scripture";

export default function ScriptureCard() {
  const v = getVerseOfDay();
  return (
    <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-950/30 to-neutral-900 p-6">
      <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">
        Verse for the walk today
      </p>
      <blockquote className="text-lg leading-relaxed text-neutral-100">
        &ldquo;{v.text}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm text-neutral-400">— {v.ref}</p>
    </div>
  );
}
