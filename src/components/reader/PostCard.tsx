import React from "react";
import Link from "next/link";
import { Post } from "../../lib/types";
import { Badge } from "../ui/Badge";
import { formatShortDate } from "../../lib/utils";
import { Clock } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-stone-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:shadow-lg hover:border-stone-300 hover:-translate-y-1">
      <div>
        {/* Cover Art */}
        <Link href={`/posts/${post.slug}`} className="block overflow-hidden rounded-2xl bg-stone-100 mb-5 aspect-16/10">
          {post.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-stone-100 p-6 text-stone-300 font-serif italic text-lg">
              Paper Journal
            </div>
          )}
        </Link>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2.5">
          <Badge variant="secondary" size="sm">
            {post.category?.name || "General"}
          </Badge>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}m
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-stone-900 font-serif leading-snug group-hover:text-emerald-800 transition-colors">
          <Link href={`/posts/${post.slug}`} className="line-clamp-2">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-sans">
          {post.excerpt || post.content.slice(0, 140).trim() + "..."}
        </p>
      </div>

      {/* Author & Date Footer */}
      <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span className="font-semibold text-stone-800">{post.author?.name || "Author"}</span>
        <span>{formatShortDate(post.publishedAt)}</span>
      </div>
    </article>
  );
}
