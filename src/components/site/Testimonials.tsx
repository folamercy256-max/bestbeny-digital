"use client";

import { Star } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: "navy" | "gold" | "ink";
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before working with BestBeny, we knew our website was not doing us any favours. They helped us simplify the message, improve the design and finally create something we were proud to send people to.",
    name: "Sarah A.",
    role: "Founder, Growth Company",
    initials: "S",
    accent: "navy",
  },
  {
    quote:
      "They listened first instead of jumping straight into design. That made the whole project easier and the final result felt much more like us.",
    name: "Daniel O.",
    role: "Managing Director",
    initials: "D",
    accent: "gold",
  },
  {
    quote:
      "Our new website is clearer, faster and much easier for customers to use. The difference was obvious almost immediately.",
    name: "Amaka E.",
    role: "Business Owner",
    initials: "A",
    accent: "ink",
  },
];

const accentBg = {
  navy: "bg-navy text-white",
  gold: "bg-gold text-ink",
  ink: "bg-ink text-white",
} as const;

/**
 * Testimonials
 * ------------
 * Section background: WHITE. Sample testimonials shown for layout. Replace
 * with verified client testimonials before publishing.
 */
export function Testimonials() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge label="What clients say" />
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Good work should make the business owner feel the difference.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="lift-on-hover rounded-2xl border border-navy/10 bg-white p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base text-ink/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display font-bold ${accentBg[t.accent]}`}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {t.name}
                  </span>
                  <span className="block text-xs text-ink/55">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink/40">
          Sample testimonials shown for layout. Replace with verified client
          testimonials before publishing.
        </p>
      </div>
    </section>
  );
}
