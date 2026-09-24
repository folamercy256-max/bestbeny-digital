"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";
import { SectionBadge } from "./SectionBadge";

/**
 * Portfolio
 * ---------
 * A "slots reserved" portfolio area. We leave 14 open slots — each one is a
 * space for a future client project. The user asked to "leave space for
 * portfolio at 12-14 space", so this section literally reserves 14 card
 * slots and labels them clearly as open.
 *
 * Section background: NAVY TINT (very pale navy) — sits between HowWeWork
 * (white) above and Stats (black) below, keeping the four-color section
 * rhythm intact.
 */

const TOTAL_SLOTS = 14;

export function Portfolio() {
  return (
    <section id="work" className="relative bg-navy-tint py-20 sm:py-28 border-y border-navy/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge label="Our work" showAiWebsitesCount={false} />
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            14 open slots. Your project could be one of them.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
            We keep our portfolio small on purpose. Every slot gets full
            attention. When a slot is filled, the project shows up here as a
            real case study. For now, the slots below are open — and one of
            them has your name on it.
          </p>
        </div>

        {/* Slot grid */}
        <ol
          aria-label="Open portfolio slots"
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4"
        >
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
            <li
              key={i}
              aria-label={`Slot ${i + 1} — open`}
              className="group lift-on-hover relative aspect-[4/5] rounded-2xl border-2 border-dashed border-navy/25 bg-white/60 flex flex-col items-center justify-center p-4 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-tint text-navy/60 icon-swap group-hover:bg-navy group-hover:text-white">
                <Plus className="h-5 w-5" />
              </div>
              <p className="mt-3 font-display text-sm font-bold brand-number">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-ink/45 font-semibold">
                Open slot
              </p>
            </li>
          ))}
        </ol>

        {/* CTA below slots */}
        <div className="mt-10 rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-display font-bold text-ink text-xl">
              Want to fill one of these slots?
            </p>
            <p className="mt-1.5 text-sm text-ink/65 leading-relaxed max-w-xl">
              Send a short message on WhatsApp. Tell us about your business
              and what you want your website to do. We will reply with a clear
              next step.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5 shrink-0"
          >
            Claim a slot
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Note for the site owner */}
        <p className="mt-6 text-xs text-ink/40">
          Slot count reserved: <span className="brand-number">14</span>. As
          real client projects are completed, each slot becomes a case study
          with the client name, brief and outcome.
        </p>
      </div>
    </section>
  );
}
