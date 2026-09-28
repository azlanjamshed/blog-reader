import React from "react";

interface CoverImageProps {
  url?: string | null;
  caption?: string;
}

export function CoverImage({ url, caption }: CoverImageProps) {
  if (!url) return null;

  return (
    <figure className="my-10 max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-md aspect-16/9 bg-stone-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={caption || "Cover art"}
          className="h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-stone-400 font-serif italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
