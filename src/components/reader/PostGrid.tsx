import React from "react";
import { Post, Pagination as PaginationType } from "../../lib/types";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "../ui/Skeleton";
import { EmptyState } from "../ui/EmptyState";
import { Pagination } from "../ui/Pagination";

interface PostGridProps {
  posts: Post[];
  loading: boolean;
  pagination: PaginationType;
  onPageChange: (page: number) => void;
  onClearFilter: () => void;
}

export function PostGrid({
  posts,
  loading,
  pagination,
  onPageChange,
  onClearFilter,
}: PostGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return <EmptyState onClearFilter={onClearFilter} />;
  }

  return (
    <section id="latest" className="space-y-12">
      <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-stone-900 tracking-tight">
            Latest Stories
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Showing {posts.length} {posts.length === 1 ? "article" : "articles"} of {pagination.total} published
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
