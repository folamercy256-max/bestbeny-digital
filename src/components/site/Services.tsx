"use client";

import Link from "next/link";
import {
  LayoutTemplate,
  Palette,
  Megaphone,
  PenLine,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

type Service = {
  num: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "AI Website Design & Development",
    body: "We design and build fast, modern websites — using AI to accelerate structure, copy and prototypes, then finishing by hand. Built to make your business easier to understand and easier to choose.",
    cta: "Explore web design",
    href: "#work",
    icon: LayoutTemplate,
  },
  {
    num: "02",
    title: "Brand Identity",
    body: "From your visual identity to the way your business speaks, we help create a brand people can recognise and remember — logo, palette, type and tone, all in one system.",
    cta: "Explore branding",
    href: "#work",
    icon: Palette,
  },
  {
    num: "03",
    title: "Digital Marketing",
    body: "We help you reach the right audience through content, social media, campaigns and practical digital marketing strategies that fit how your customers actually behave.",
    cta: "Explore marketing",
    href: "#work",
    icon: Megaphone,
  },
  {
    num: "04",
    title: "Content & Creative",
    body: "From social content to campaign visuals, we create useful creative assets that keep your brand active and consistent — informed by what your audience already responds to.",
    cta: "Explore content",
    href: "#work",
    icon: PenLine,
  },
];

/**
 * Services
 * --------
 * Section background: GOLD TINT (soft cream). One of the four brand colors,
 * used here as a warm, soft background to differentiate from the white
 * About section above and the navy WhyBestBeny section below.
 *
 * All section numbers (01–04) are rendered in the logo color (navy).
 * The icons stay in a neutral color, then change to navy on hover
 * (per the user's request). Each service card lifts on hover.
 */
export function Services() {
  return (
    <section id="services" className="relative bg-gold-tint py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge label="What we do" />
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Everything your business needs to show up online.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
            AI website design, brand identity, marketing and content under one
            roof. So you don&apos;t have to chase five different people to get
            one project done.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: Service }) {
  const Icon = s.icon;
  return (
    <article className="group lift-on-hover relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
      {/* number — logo color (navy) */}
      <div className="flex items-start justify-between">
        <span className="font-display text-4xl font-extrabold brand-number">
          {s.num}
        </span>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-tint text-ink/55 icon-swap">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3 className="mt-5 font-display font-bold text-ink text-xl sm:text-2xl">
        {s.title}
      </h3>
      <p className="mt-3 text-sm sm:text-base text-ink/65 leading-relaxed">
        {s.body}
      </p>

      <Link
        href={s.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-navy transition-colors"
      >
        {s.cta}
        <ArrowUpRight className="h-4 w-4 icon-swap" />
      </Link>
    </article>
  );
}
