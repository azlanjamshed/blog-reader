import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "secondary",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-emerald-800 text-white",
    secondary: "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200/80",
    outline: "border border-stone-300 text-stone-600 bg-transparent",
    accent: "bg-amber-100 text-amber-900 border border-amber-200",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
    md: "px-3 py-1 text-xs font-semibold tracking-wide uppercase",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
