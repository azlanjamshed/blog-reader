import React from "react";
import { BookOpen } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClearFilter?: () => void;
}

export function EmptyState({
  title = "No published stories found",
  description = "There are no articles available matching your current topic filter.",
  onClearFilter,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-stone-200 bg-stone-50/50 p-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-200/80 text-stone-600 mb-4">
        <BookOpen className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold font-serif text-stone-900">{title}</h3>
      <p className="mt-1 text-sm text-stone-500 max-w-sm">{description}</p>
      {onClearFilter && (
        <Button variant="secondary" size="sm" onClick={onClearFilter} className="mt-6">
          View all stories
        </Button>
      )}
    </div>
  );
}
