"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";

/**
 * Hero
 * ----
 * Section background: WHITE.
 * Buttons: "Let's Talk" (navy filled, WhatsApp) + "See Our Work" (navy outline).
 * Founder portrait image sits beside the title (right column on desktop,
 * below the title on mobile).
 *
 * The portrait is loaded from /brand/founder-portrait.svg. When the user's
 * real photo is uploaded, drop the file at:
 *   /home/z/my-project/public/brand/founder.jpeg
 * and swap the `src` and `width`/`height` below — nothing else needs to change.
 */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* soft brand wash — navy + gold */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 12%, rgba(30,58,95,0.10), transparent 60%), radial-gradient(45% 40% at 95% 8%, rgba(244,185,66,0.18), transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-navy">
              <Sparkles className="h-3.5 w-3.5" />
              AI Website Design Studio
            </span>

            <h1 className="mt-5 font-display font-extrabold tracking-tight text-ink text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05]">
              Launch a Professional Website Without Paying for an Expensive Hosting.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              You want a website for your business. But paying for hosting every
              year is hard. We build your website with AI, host it for free on
              a subdomain, and hand it over ready to use. No big bills. No
              confusion. Just a clean, fast website your customers will trust —
              so you can focus on running your business.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(30,58,95,0.7)] transition-all hover:bg-navy-soft hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Let&apos;s Talk
              </a>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-transparent px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white hover:-translate-y-0.5"
              >
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* social proof */}
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-2.5">
                {[
                  "from-navy to-navy-soft",
                  "from-gold to-amber-300",
                  "from-ink to-slate-700",
                  "from-navy-soft to-sky-300",
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br ${g}`}
                    aria-hidden
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
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

          {/* Founder portrait column */}
          <div className="lg:col-span-5 relative">
            <FounderPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * FounderPortrait
 * --------------
 * Renders the founder's portrait inside a navy card with a gold frame,
 * floating AI chips, and a "30+" violet/navy badge per the user's earlier
 * request.
 *
 * The portrait image is currently a placeholder SVG (public/brand/founder-portrait.svg)
 * because the user's uploaded file did not reach the server. When the real
 * photo is uploaded to /home/z/my-project/public/brand/founder.jpeg, swap
 * the `src` prop below to "/brand/founder.jpeg" — nothing else needs to change.
 */
function FounderPortrait() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* outer glow */}
      <div
        aria-hidden
        className="absolute -inset-5 rounded-[2rem] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,58,95,0.45), rgba(244,185,66,0.35))",
        }}
      />

      {/* portrait card */}
      <div className="relative rounded-[1.75rem] overflow-hidden border border-navy/15 bg-navy shadow-[0_30px_80px_-30px_rgba(15,15,20,0.55)]">
        <Image
          src="/brand/founder-portrait.svg"
          alt="BestBeny Digital founder portrait"
          width={640}
          height={720}
          priority
          className="block w-full h-auto"
        />

        {/* 30+ badge — rendered in the logo color (navy) */}
        <div className="absolute -bottom-5 -left-3 sm:-left-5 rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(30,58,95,0.55)] border border-navy/15 px-4 py-3 animate-float-soft">
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
        <div className="absolute -top-3 right-3 sm:right-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-navy shadow-lg animate-float-soft">
          <Sparkles className="h-3 w-3 text-gold" />
          Built with AI
        </div>
      </div>
    </div>
  );
}
