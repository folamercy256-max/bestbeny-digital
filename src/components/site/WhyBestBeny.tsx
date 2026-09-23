"use client";

import {
  Brain,
  Target,
  MessagesSquare,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  num: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const REASONS: Reason[] = [
  {
    num: "01",
    title: "Clear thinking",
    body: "We start with the business problem before we start designing. AI helps us test ideas quickly — but the strategy is always written by a person who understands the brief.",
    icon: Brain,
  },
  {
    num: "02",
    title: "Built around your goals",
    body: "Your website should support what you are trying to achieve, not simply look impressive. Every section earns its place by being useful to a real customer journey.",
    icon: Target,
  },
  {
    num: "03",
    title: "Simple communication",
    body: "No unnecessary jargon. No confusing process. Just clear updates and useful conversations — and a single point of contact from kickoff to launch.",
    icon: MessagesSquare,
  },
  {
    num: "04",
    title: "Built to grow",
    body: "We create digital foundations that can evolve as your business grows — adding pages, integrations and content without having to start over.",
    icon: TrendingUp,
  },
];

/**
 * WhyBestBeny
 * -----------
 * Section background: NAVY BLUE. White text. Numbers (01–04) render in GOLD
 * via the .on-dark .brand-number rule (so they pop on the dark background).
 * Icons stay neutral-on-dark and shift to gold on hover.
 */
export function WhyBestBeny() {
  return (
    <section className="on-dark relative bg-navy py-20 sm:py-28 text-white overflow-hidden">
      {/* subtle gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 60% at 90% 10%, rgba(244,185,66,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Why BestBeny
            </p>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              You shouldn&apos;t have to chase five people to ship one project.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
              A good digital project needs more than good design. It needs
              someone who understands the business behind the brief. At
              BestBeny Digital, strategy, design and development work together
              from the beginning — which means fewer disconnected decisions,
              clearer communication and a final result that actually supports
              the business.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {REASONS.map((r) => (
              <ReasonCard key={r.num} reason={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason: r }: { reason: Reason }) {
  const Icon = r.icon;
  return (
    <article className="group lift-on-hover rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <div className="flex items-center justify-between">
        {/* on-dark → numbers render in gold */}
        <span className="font-display text-3xl font-extrabold brand-number">
          {r.num}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 icon-swap">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-4 font-display font-bold text-lg sm:text-xl">
        {r.title}
      </h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.body}</p>
    </article>
  );
}
