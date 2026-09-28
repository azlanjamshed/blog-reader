"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PenTool, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            Paper<span className="text-emerald-700 group-hover:text-emerald-600 transition-colors">.</span>
          </span>
          <span className="hidden text-xs font-mono tracking-widest text-stone-400 uppercase sm:inline-block border-l border-stone-300 pl-3 ml-1">
            Journal
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-950 transition-colors">
            Home
          </Link>
          <a href="#latest" className="hover:text-stone-950 transition-colors">
            Stories
          </a>
          <a href="#topics" className="hover:text-stone-950 transition-colors">
            Topics
          </a>
          <a href="#newsletter" className="hover:text-stone-950 transition-colors">
            Dispatch
          </a>
        </nav>

        {/* Author Portal Shortcut */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-emerald-800 transition-colors py-2 px-3.5 rounded-full border border-stone-200 bg-white shadow-2xs"
          >
            <PenTool className="h-3.5 w-3.5 text-emerald-700" />
            <span>Author Studio</span>
            <ArrowUpRight className="h-3 w-3 text-stone-400" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-950"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-200 bg-stone-50 px-6 py-6 md:hidden space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-base font-medium text-stone-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-stone-950"
            >
              Home
            </Link>
            <a
              href="#latest"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-stone-950"
            >
              Stories
            </a>
            <a
              href="#topics"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-stone-950"
            >
              Topics
            </a>
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-stone-950"
            >
              Dispatch
            </a>
          </nav>

          <div className="pt-4 border-t border-stone-200">
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold"
            >
              <PenTool className="h-3.5 w-3.5 text-emerald-400" />
              <span>Go to Author Studio</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
