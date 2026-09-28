import React from "react";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center max-w-3xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-stone-600 shadow-2xs mb-6">
        <Sparkles className="h-3 w-3 text-emerald-700" />
        <span>The Unhurried Reading Edition</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-[1.12]">
        Thoughtful essays for curious minds.
      </h1>

      <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-2xl mx-auto">
        Explorations in software design, digital culture, independent engineering, and crafting
        ideas built to outlast trends.
      </p>
    </section>
  );
}
