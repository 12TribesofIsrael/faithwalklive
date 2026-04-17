import { getVerseOfDay } from "@/lib/scripture";

export default function ScriptureCard() {
  const v = getVerseOfDay();
  return (
    <div className="rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-brown/30 to-brand-black p-6">
      <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">
        Verse for the walk today
      </p>
      <blockquote className="text-lg leading-relaxed text-brand-cloud">
        &ldquo;{v.text}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm text-brand-amber">— {v.ref}</p>
    </div>
  );
}
