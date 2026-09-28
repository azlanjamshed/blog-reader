import React from "react";

export function PostCardSkeleton() {
  return (
    <div className="flex flex-col space-y-4 animate-pulse">
      <div className="aspect-16/10 w-full rounded-2xl bg-stone-200" />
      <div className="space-y-2">
        <div className="h-4 w-20 rounded bg-stone-200" />
        <div className="h-6 w-3/4 rounded bg-stone-200" />
        <div className="h-4 w-full rounded bg-stone-200" />
        <div className="h-3 w-1/3 rounded bg-stone-200" />
      </div>
    </div>
  );
}

export function FeaturedPostSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-pulse rounded-3xl bg-stone-100 p-6 sm:p-10">
      <div className="lg:col-span-7 aspect-16/10 w-full rounded-2xl bg-stone-200" />
      <div className="lg:col-span-5 space-y-4">
        <div className="h-4 w-24 rounded bg-stone-200" />
        <div className="h-8 w-4/5 rounded bg-stone-200" />
        <div className="h-4 w-full rounded bg-stone-200" />
        <div className="h-4 w-2/3 rounded bg-stone-200" />
        <div className="h-4 w-32 rounded bg-stone-200 pt-2" />
      </div>
    </div>
  );
}
