"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { HeroSection } from "../components/reader/HeroSection";
import { TopicFilterBar } from "../components/reader/TopicFilterBar";
import { FeaturedPost } from "../components/reader/FeaturedPost";
import { PostGrid } from "../components/reader/PostGrid";
import { NewsletterBlock } from "../components/reader/NewsletterBlock";
import { FeaturedPostSkeleton } from "../components/ui/Skeleton";
import { Post, Tag, Pagination } from "../lib/types";
import { readerApi } from "../lib/api";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 9,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  // Load tags once on mount
  useEffect(() => {
    readerApi.tags.getAll().then(setTags).catch(() => setTags([]));
  }, []);

  // Fetch published posts when page or tag changes
  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await readerApi.posts.getPublished({
        page: currentPage,
        limit: 9,
        tag: selectedTag || undefined,
      });

      if (res.success) {
        setPosts(res.data || []);
        setPagination(
          res.pagination || {
            page: currentPage,
            limit: 9,
            total: res.data?.length || 0,
            totalPages: 1,
          }
        );
      }
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedTag]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleSelectTag = (tagSlug: string) => {
    setSelectedTag(tagSlug);
    setCurrentPage(1);
  };

  // Determine featured post: show on page 1 only if there's at least one post and no specific tag filter
  const isDefaultView = currentPage === 1 && !selectedTag;
  const featuredPost = useMemo(() => {
    if (isDefaultView && posts.length > 0) {
      return posts[0];
    }
    return null;
  }, [isDefaultView, posts]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return posts.slice(1);
    }
    return posts;
  }, [featuredPost, posts]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <HeroSection />

          <TopicFilterBar
            tags={tags}
            selectedTag={selectedTag}
            onSelectTag={handleSelectTag}
          />

          {loading && !posts.length ? (
            <div className="space-y-12 mb-16">
              <FeaturedPostSkeleton />
            </div>
          ) : (
            <>
              {featuredPost && <FeaturedPost post={featuredPost} />}

              <PostGrid
                posts={gridPosts}
                loading={loading}
                pagination={pagination}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                onClearFilter={() => handleSelectTag("")}
              />
            </>
          )}

          <NewsletterBlock />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
