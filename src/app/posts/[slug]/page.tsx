"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { SiteFooter } from "../../../components/layout/SiteFooter";
import { ArticleHeader } from "../../../components/article/ArticleHeader";
import { CoverImage } from "../../../components/article/CoverImage";
import { ArticleContent } from "../../../components/article/ArticleContent";
import { ShareBar } from "../../../components/article/ShareBar";
import { AuthorBio } from "../../../components/article/AuthorBio";
import { ReadingProgressBar } from "../../../components/article/ReadingProgressBar";
import { Post } from "../../../lib/types";
import { readerApi } from "../../../lib/api";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError("");

    readerApi.posts
      .getBySlug(slug)
      .then((data) => {
        if (data) {
          setPost(data);
        } else {
          setError("Story not found");
        }
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "Unable to load story";
        setError(msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      <ReadingProgressBar />
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
          {loading ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-700" />
              <p className="text-xs font-mono uppercase tracking-wider text-stone-500">
                Opening journal story...
              </p>
            </div>
          ) : error || !post ? (
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-stone-900">
                {error || "Story not found"}
              </h2>
              <p className="text-sm text-stone-500 max-w-sm">
                This article may have been unpublished, moved, or deleted by the author.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Journal Home</span>
              </Link>
            </div>
          ) : (
            <article className="pb-16">
              <ArticleHeader post={post} />

              <CoverImage
                url={post.coverImageUrl}
                caption={post.title}
              />

              <ArticleContent content={post.content} tags={post.tags} />

              <ShareBar title={post.title} />

              <AuthorBio author={post.author} />

              {/* Bottom return link */}
              <div className="text-center pt-8 border-t border-stone-200">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to all stories</span>
                </Link>
              </div>
            </article>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
