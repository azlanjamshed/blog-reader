import React from "react";
import Link from "next/link";
import { Post } from "../../lib/types";
import { Badge } from "../ui/Badge";
import { formatDate } from "../../lib/utils";
import { Clock, ArrowRight, Eye } from "lucide-react";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-stone-300 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Cover Art (7 cols on lg) */}
        <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-stone-100">
          {post.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-tr from-stone-200 via-stone-100 to-stone-50 p-12">
              <span className="font-serif italic text-4xl text-stone-300 font-bold">
                Paper Journal
              </span>
            </div>
          )}
          <div className="absolute top-5 left-5">
            <Badge variant="primary">Featured Story</Badge>
          </div>
        </div>

        {/* Story details (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-emerald-800">
              <span>{post.category?.name || "General"}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-500">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 font-serif leading-tight group-hover:text-emerald-900 transition-colors">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans line-clamp-4">
              {post.excerpt ||
                post.content.slice(0, 180).trim() + "..."}
            </p>
          </div>

          <div className="pt-8 mt-6 border-t border-stone-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-stone-900">{post.author?.name || "Author"}</p>
              <p className="text-[11px] text-stone-400 mt-0.5">{formatDate(post.publishedAt)}</p>
            </div>

            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-stone-900 hover:text-emerald-700 transition-colors uppercase tracking-wider"
            >
              <span>Read article</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
