import React from "react";
import { Tag } from "../../lib/types";

interface TopicFilterBarProps {
  tags: Tag[];
  selectedTag: string;
  onSelectTag: (tagSlug: string) => void;
}

export function TopicFilterBar({
  tags,
  selectedTag,
  onSelectTag,
}: TopicFilterBarProps) {
  return (
    <section id="topics" className="py-6 border-y border-stone-200/80 my-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-400 shrink-0 pr-2">
          Topics:
        </span>

        {/* All Stories Pill */}
        <button
          onClick={() => onSelectTag("")}
          className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
            !selectedTag
              ? "bg-stone-900 text-stone-50 shadow-xs"
              : "bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900"
          }`}
        >
          All Stories
        </button>

        {/* Tag Pills */}
        {tags.map((tag) => {
          const isSelected = selectedTag === tag.slug;
          return (
            <button
              key={tag.id}
              onClick={() => onSelectTag(tag.slug)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                isSelected
                  ? "bg-stone-900 text-stone-50 shadow-xs"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900"
              }`}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
