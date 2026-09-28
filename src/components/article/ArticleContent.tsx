import React from "react";
import Link from "next/link";
import { Tag } from "../../lib/types";
import { Hash } from "lucide-react";

interface ArticleContentProps {
  content: string;
  tags?: Tag[];
}

export function ArticleContent({ content, tags }: ArticleContentProps) {
  // Split into paragraphs
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Story Text */}
      <div className="article-body font-serif text-lg sm:text-xl text-stone-800 leading-[1.8] space-y-6">
        {paragraphs.map((para, idx) => {
          // If first paragraph, add drop cap effect
          if (idx === 0) {
            const firstLetter = para.charAt(0);
            const remainingText = para.slice(1);
            return (
              <p key={idx} className="first-paragraph">
                <span className="float-left text-5xl sm:text-6xl font-bold font-serif leading-[0.8] pr-3 pt-1 text-stone-900">
                  {firstLetter}
                </span>
                {remainingText}
              </p>
            );
          }

          // If starts with '# ', render heading
          if (para.startsWith("# ")) {
            return (
              <h2
                key={idx}
                className="text-2xl sm:text-3xl font-bold font-serif text-stone-950 pt-6 pb-2"
              >
                {para.replace(/^#\s*/, "")}
              </h2>
            );
          }

          // If starts with '> ', render blockquote
          if (para.startsWith("> ")) {
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-emerald-700 pl-6 py-2 my-6 italic text-stone-700 font-serif text-xl sm:text-2xl bg-stone-100/50 rounded-r-2xl"
              >
                {para.replace(/^>\s*/, "")}
              </blockquote>
            );
          }

          // Standard paragraph
          return <p key={idx}>{para}</p>;
        })}
      </div>

      {/* Tags section */}
      {tags && tags.length > 0 && (
        <div className="pt-8 border-t border-stone-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-stone-400 mr-1">Filed under:</span>
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/?tag=${encodeURIComponent(tag.slug)}`}
                className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700 hover:border-emerald-700 hover:text-emerald-900 transition-colors shadow-2xs"
              >
                <Hash className="h-3 w-3 text-stone-400" />
                <span>{tag.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
