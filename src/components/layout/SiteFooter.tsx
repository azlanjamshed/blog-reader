import React from "react";
import Link from "next/link";
import { ArrowUp, PenTool } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/90 bg-stone-100/60 pt-16 pb-12 text-stone-600">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-md space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-stone-900 font-serif">
                Paper<span className="text-emerald-700">.</span>
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed">
              An independent journal devoted to deep, unhurried thought across design,
              engineering, craft, and building an intentional life.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-xs">
            <div className="space-y-3">
              <h4 className="font-semibold uppercase tracking-wider text-stone-900 font-mono">
                Publication
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-stone-950 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#latest" className="hover:text-stone-950 transition-colors">
                    All Stories
                  </a>
                </li>
                <li>
                  <a href="#topics" className="hover:text-stone-950 transition-colors">
                    Topics Index
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold uppercase tracking-wider text-stone-900 font-mono">
                Authors
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="http://localhost:3001/admin/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-emerald-800 transition-colors"
                  >
                    <PenTool className="h-3 w-3" />
                    Author Login
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-950 transition-colors"
                  >
                    Content Studio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200 pt-8 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Paper Journal. Words crafted for curious minds.</p>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-stone-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
