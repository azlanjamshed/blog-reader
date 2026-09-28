import React from "react";
import { Author } from "../../lib/types";
import { PenTool } from "lucide-react";

interface AuthorBioProps {
  author?: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  const name = author?.name || "Author";

  return (
    <div className="max-w-3xl mx-auto my-12 rounded-3xl border border-stone-200 bg-stone-100/70 p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-xl font-bold text-white shadow-md">
        {name.slice(0, 2).toUpperCase()}
      </div>

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h4 className="text-lg font-bold font-serif text-stone-900">{name}</h4>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            <PenTool className="h-3 w-3" />
            Contributing Essayist
          </span>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed font-sans">
          Writing on technology, deliberate work, and timeless craftsmanship. Sharing essays
          regularly on the Paper Journal.
        </p>
      </div>
    </div>
  );
}
