"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle, ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";
import { SectionBadge } from "./SectionBadge";
import { PROJECTS, type Project } from "./portfolio-data";

/**
 * Portfolio
 * ---------
 * Real past projects — every project was built with AI by BestBeny Digital.
 *
 * Each card shows:
 *   - the project screenshot (loaded from /brand/portfolio/pXX.png)
 *   - the project category chip + title + brief description
 *   - two buttons:
 *       1. "View Live Website"  → opens the live site in a NEW TAB
 *       2. "Discuss a Similar Project" → opens WhatsApp with a pre-filled
 *          message that mentions the project title
 *
 * Section background: NAVY TINT (very pale navy) — sits between HowWeWork
 * (white) above and Stats (black) below, keeping the four-color section
 * rhythm intact.
 */
export function Portfolio() {
  return (
    <section id="work" className="relative bg-navy-tint py-20 sm:py-28 border-y border-navy/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge label="Our work" showAiWebsitesCount={false} />
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Past projects built with AI.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
            These are real websites we designed and built using AI. Each one
            was launched fast, runs fast, and serves a real business. Tap
            <span className="font-semibold text-navy"> View Live Website </span>
            to see it in action, or
            <span className="font-semibold text-navy"> Discuss a Similar Project </span>
            to start one of your own.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-display font-bold text-ink text-xl">
              Want a website like one of these?
            </p>
            <p className="mt-1.5 text-sm text-ink/65 leading-relaxed max-w-xl">
              Send a short message on WhatsApp. Tell us which project caught
              your eye and what your business does. We will reply with a clear
              next step.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5 shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Start your project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  // Pre-fill a WhatsApp message that mentions this specific project
  const waMessage = encodeURIComponent(
    `Hello BestBeny Digital, I just saw the ${p.title} project on your site and I'd like to discuss a similar project for my business.`,
  );
  const waHref = `https://wa.me/2348000000000?text=${waMessage}`;

  return (
    <article className="group lift-on-hover flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white">
      {/* Screenshot */}
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live website for ${p.title} in a new tab`}
        className="relative block aspect-[4/3] overflow-hidden bg-navy-tint"
      >
        <Image
          src={p.image}
          alt={`${p.title} — website screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* hover overlay chip */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-3 w-3" />
          Open live site
        </span>
        {/* slot number — keeps the "01–14" brand-number visual from before */}
        <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          <span className="brand-number font-extrabold text-gold mr-1">
            {String(p.id).padStart(2, "0")}
          </span>
          / 14
        </span>
      </a>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-gold-tint px-2.5 py-1 text-[11px] font-semibold text-navy">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {p.category}
        </span>

        <h3 className="mt-3 font-display font-bold text-ink text-lg sm:text-xl leading-tight">
          {p.title}
        </h3>

        <p className="mt-2 text-sm text-ink/65 leading-relaxed flex-1">
          {p.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-2">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Live Website
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-4 py-2.5 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Discuss a Similar Project
          </a>
        </div>
      </div>
    </article>
  );
}
