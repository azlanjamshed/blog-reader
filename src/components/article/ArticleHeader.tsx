import React from "react";
import Link from "next/link";
import { Post } from "../../lib/types";
import { Badge } from "../ui/Badge";
import { formatDate } from "../../lib/utils";
import { Clock, Eye, ArrowLeft } from "lucide-react";

interface ArticleHeaderProps {
  post: Post;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="space-y-6 max-w-3xl mx-auto pt-6 pb-8">
      {/* Back button & Category */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>All stories</span>
        </Link>

        <Badge variant="accent">
          {post.category?.name || "Essay"}
        </Badge>
      </div>

      {/* Article Title */}
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 font-serif leading-[1.18]">
        {post.title}
      </h1>

      {/* Excerpt Lead */}
      {post.excerpt && (
        <p className="text-lg sm:text-xl text-stone-600 font-serif italic leading-relaxed">
          {post.excerpt}
        </p>
      )}

      {/* Author Byline & Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-stone-200/80 py-4 text-xs text-stone-500 font-mono">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 font-bold text-white text-xs">
            {post.author?.name ? post.author.name.slice(0, 2).toUpperCase() : "AU"}
          </div>
          <div>
            <p className="font-bold text-stone-900 font-sans text-sm">
              {post.author?.name || "Author"}
            </p>
            <p className="text-[11px] text-stone-400 font-sans">
              Published on {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-stone-600">
            <Clock className="h-3.5 w-3.5 text-stone-400" />
            {post.readingTime} min read
          </span>
          <span className="flex items-center gap-1 text-stone-600">
            <Eye className="h-3.5 w-3.5 text-stone-400" />
            {post.views} {post.views === 1 ? "read" : "reads"}
          </span>
        </div>
      </div>
    </header>
  );
}
