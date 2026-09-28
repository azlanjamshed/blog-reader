"use client";

import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";

export function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-8 py-14 text-stone-100 sm:px-14 text-center relative"
    >
      <div className="max-w-xl mx-auto space-y-4 relative z-10">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-800 text-emerald-400">
          <Mail className="h-5 w-5" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-white">
          The Sunday Dispatch
        </h3>

        <p className="text-sm text-stone-300 leading-relaxed font-sans">
          A weekly collection of our most evocative essays on design, engineering, and mindful
          productivity. No noise, strictly substance.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-950/80 border border-emerald-800 px-5 py-3 text-xs font-semibold text-emerald-300">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>You&apos;re subscribed. Look for our note in your inbox this Sunday.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full bg-stone-800 border border-stone-700 px-5 py-3 text-xs sm:text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shrink-0 py-3"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>

      {/* Decorative ambient gradient */}
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-900/20 blur-3xl pointer-events-none" />
    </section>
  );
}
