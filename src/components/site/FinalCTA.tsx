"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";

/**
 * FinalCTA
 * --------
 * The "Let's start" closing block. The "Let's Talk" button opens WhatsApp.
 * Uses the violet brand background so the page closes on a strong, branded
 * note — distinct from every other section color in the page.
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-violet py-20 sm:py-28 text-white overflow-hidden"
    >
      {/* decorative wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 90% 10%, rgba(244,185,66,0.35), transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          Let&apos;s start
        </p>
        <h2 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Let&apos;s build a website your customers actually choose.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
          Send a short message on WhatsApp. Tell us about your business and
          what you want the website to do. We will reply with a clear next
          step — usually within a few hours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] transition-all hover:bg-paper hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Let&apos;s Talk on WhatsApp
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-violet hover:-translate-y-0.5"
          >
            See our work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">
          Replies typically within a few hours, Mon–Fri.
        </p>
      </div>
    </section>
  );
}
