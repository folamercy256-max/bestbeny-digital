"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Brief = {
  category: string;
  title: string;
  summary: string;
  accent: "navy" | "gold" | "ink";
};

const BRIEFS: Brief[] = [
  {
    category: "Consulting",
    title: "Consulting firm website",
    summary:
      "A clearer website for a growing consulting firm that needs to communicate its value without making visitors work for it. AI-assisted structure, hand-polished copy, fast load.",
    accent: "navy",
  },
  {
    category: "Beauty & retail",
    title: "Beauty brand identity",
    summary:
      "A refined visual identity and online presence designed to make a growing beauty brand feel as established as the business behind it. Logo, palette, type and site, one system.",
    accent: "gold",
  },
  {
    category: "Real estate",
    title: "Property website",
    summary:
      "A modern property website designed to make browsing easier and enquiries more natural. Listings, search and contact flow built around real visitor behaviour.",
    accent: "ink",
  },
];

const accentMap = {
  navy: { bg: "bg-navy", soft: "bg-navy-tint", text: "text-navy" },
  gold: { bg: "bg-gold", soft: "bg-gold-tint", text: "text-amber-700" },
  ink: { bg: "bg-ink", soft: "bg-slate-100", text: "text-ink" },
} as const;

/**
 * Portfolio
 * ---------
 * Section background: NAVY TINT (very pale navy). Three sample briefs
 * (illustrative, not real named clients). The "12 open portfolio slots"
 * message frames the kinds of businesses BestBeny wants to work with next.
 */
export function Portfolio() {
  return (
    <section id="work" className="relative bg-navy-tint py-20 sm:py-28 border-y border-navy/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">
              Our work
            </p>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Three sample briefs. Twelve open slots.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              The briefs below show the kind of projects we take on and how
              they typically unfold. They are illustrative — not real, named
              clients. The open slots show the kinds of businesses we want to
              work with next.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View the portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {BRIEFS.map((b) => (
            <BriefCard key={b.title} brief={b} />
          ))}
        </div>

        {/* Open slots banner */}
        <div className="mt-10 rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-display font-bold text-ink text-xl">
              <span className="brand-number">12</span> open portfolio slots
            </p>
            <p className="mt-1.5 text-sm text-ink/65 leading-relaxed max-w-xl">
              Open slots show the kinds of businesses we want to work with
              next. If your business fits one of them, the next move is a
              short message on WhatsApp.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5"
          >
            Claim a slot
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BriefCard({ brief: b }: { brief: Brief }) {
  const a = accentMap[b.accent];
  return (
    <article className="group lift-on-hover relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
      {/* decorative chip */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full ${a.soft} px-3 py-1 text-xs font-semibold ${a.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} />
          {b.category}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-ink/40 font-semibold">
          Sample brief
        </span>
      </div>

      {/* abstract visual — relevant to the brief type, not a stock image */}
      <div className="mt-5 rounded-xl border border-navy/10 bg-navy-tint p-4 h-32 relative overflow-hidden">
        <div className="space-y-2">
          <div className="h-2.5 w-2/3 rounded-full bg-ink/15" />
          <div className="h-2 w-5/6 rounded-full bg-ink/10" />
          <div className="h-2 w-1/2 rounded-full bg-ink/10" />
        </div>
        <div
          className={`absolute -bottom-6 -right-6 h-20 w-20 rounded-full ${a.bg} opacity-25`}
        />
        <div
          className={`absolute top-2 right-3 h-6 w-12 rounded-full ${a.bg} opacity-90`}
        />
      </div>

      <h3 className="mt-5 font-display font-bold text-ink text-xl">{b.title}</h3>
      <p className="mt-2 text-sm text-ink/65 leading-relaxed">{b.summary}</p>

      <Link
        href="#contact"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-navy transition-colors"
      >
        Read sample brief
        <ArrowUpRight className="h-4 w-4 icon-swap" />
      </Link>
    </article>
  );
}
