"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";

/**
 * Hero
 * ----
 * Buttons: "Let's Talk" (violet, WhatsApp) + "See Our Work" (violet outline).
 * Image: a designed AI-website-builder mockup panel (no irrelevant stock photo).
 * "30+" badge overlay is rendered in the logo violet color.
 */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      {/* soft brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 12%, rgba(108,77,255,0.18), transparent 60%), radial-gradient(45% 40% at 95% 8%, rgba(244,185,66,0.18), transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/25 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-violet">
              <Sparkles className="h-3.5 w-3.5" />
              AI Website Design Studio
            </span>

            <h1 className="mt-5 font-display font-extrabold tracking-tight text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              AI Website Design
              <br className="hidden sm:block" />
              <span className="text-violet"> that moves your business forward.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              Your business deserves a smarter digital presence. We design and
              build modern, AI-powered websites that look professional,
              communicate clearly and give customers a reason to choose you —
              launched faster, without the agency runaround.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(108,77,255,0.7)] transition-all hover:bg-violet-soft hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Let&apos;s Talk
              </a>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-violet bg-transparent px-6 py-3.5 text-sm font-semibold text-violet transition-all hover:bg-violet hover:text-white hover:-translate-y-0.5"
              >
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* social proof */}
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-2.5">
                {[
                  "from-violet to-violet-soft",
                  "from-gold to-amber-300",
                  "from-ink to-slate-700",
                  "from-violet-soft to-pink-300",
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-paper bg-gradient-to-br ${g}`}
                    aria-hidden
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-violet">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-ink/60">
                  Trusted by founders &amp; growing brands
                </p>
              </div>
            </div>
          </div>

          {/* Visual column — designed AI builder mockup */}
          <div className="lg:col-span-6 relative">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * HeroMockup
 * ----------
 * A stylised browser window that shows an AI website builder session —
 * relevant to BestBeny Digital's service (AI website design). The "30+"
 * badge is rendered in the logo violet color, per the user's request.
 */
function HeroMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,77,255,0.35), rgba(244,185,66,0.25))",
        }}
      />
      <div className="relative rounded-2xl border border-violet/15 bg-white shadow-[0_30px_80px_-30px_rgba(20,17,43,0.45)] overflow-hidden">
        {/* browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-violet/10 bg-paper">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 flex-1">
            <div className="h-6 rounded-md bg-violet-tint text-[10px] font-medium text-violet flex items-center px-3">
              bestbenydigital.studio/builder
            </div>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-12 gap-0">
          {/* left rail */}
          <div className="col-span-3 border-r border-violet/10 bg-paper/60 p-3 hidden sm:block">
            <div className="space-y-2">
              {["Layout", "Branding", "Copy", "Pages", "Launch"].map((s, i) => (
                <div
                  key={s}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                    i === 0
                      ? "bg-violet text-white"
                      : "text-ink/60 hover:text-violet hover:bg-violet/5"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-violet/15 bg-white p-3">
              <div className="text-[10px] uppercase tracking-wider text-ink/40 font-semibold">
                AI Assistant
              </div>
              <div className="mt-1.5 text-[11px] text-ink/70 leading-snug">
                Suggesting a homepage layout for a modern consulting brand.
              </div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-violet-tint px-2 py-0.5 text-[10px] font-semibold text-violet">
                <Sparkles className="h-3 w-3" /> Generating
              </div>
            </div>
          </div>

          {/* preview canvas */}
          <div className="col-span-12 sm:col-span-9 p-4 bg-gradient-to-br from-white to-violet-tint/40">
            <div className="rounded-xl border border-violet/10 bg-white overflow-hidden">
              {/* fake navbar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-violet/10">
                <div className="flex items-center gap-1.5">
                  <div className="h-3.5 w-3.5 rounded bg-violet" />
                  <div className="h-2 w-14 rounded-full bg-ink/15" />
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="h-1.5 w-7 rounded-full bg-ink/10" />
                  <div className="h-1.5 w-7 rounded-full bg-ink/10" />
                  <div className="h-1.5 w-7 rounded-full bg-ink/10" />
                </div>
                <div className="h-5 w-12 rounded-full bg-violet" />
              </div>

              {/* hero block inside preview */}
              <div className="p-5 sm:p-7">
                <div className="h-2 w-2/3 rounded-full bg-ink/15" />
                <div className="mt-2 h-4 w-5/6 rounded-full bg-ink/20" />
                <div className="mt-2 h-4 w-3/5 rounded-full bg-ink/10" />
                <div className="mt-4 flex gap-2">
                  <div className="h-7 w-20 rounded-full bg-violet" />
                  <div className="h-7 w-20 rounded-full border-2 border-violet" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-violet/10 bg-paper p-3"
                    >
                      <div className="h-5 w-5 rounded-md bg-violet/20" />
                      <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10" />
                      <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-ink/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* live metrics row */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { k: "Page score", v: "98" },
                { k: "Lighthouse", v: "A+" },
                { k: "Build time", v: "12s" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-lg border border-violet/10 bg-white px-3 py-2"
                >
                  <div className="text-[9px] uppercase tracking-wider text-ink/40 font-semibold">
                    {m.k}
                  </div>
                  <div className="text-sm font-bold text-violet">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 30+ badge — rendered in logo violet color */}
      <div className="absolute -bottom-5 -left-3 sm:-left-5 rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(108,77,255,0.55)] border border-violet/15 px-4 py-3 animate-float-soft">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-extrabold brand-number leading-none">
            30+
          </div>
          <div className="text-[11px] leading-tight text-ink/60">
            AI websites
            <br />
            delivered
          </div>
        </div>
      </div>

      {/* floating AI chip */}
      <div className="absolute -top-3 right-3 sm:right-6 inline-flex items-center gap-1.5 rounded-full bg-violet px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg animate-float-soft">
        <Sparkles className="h-3 w-3" />
        Built with AI
      </div>
    </div>
  );
}
