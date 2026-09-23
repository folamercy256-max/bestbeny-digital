"use client";

/**
 * HowWeWork
 * ---------
 * 4-step process. Numbers 01–04 are in the logo violet color. Each step
 * has a different background tint so the section feels like a real,
 * stepped journey rather than four identical cards.
 *
 * Background for this section is paper (warm off-white), which differs
 * from WhyBestBeny (cream) above it and Portfolio (sand) below it.
 */
const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "We learn about your business, your audience, your goals and what is currently getting in the way. A short kickoff call, a few sharp questions, and we have what we need to start.",
  },
  {
    num: "02",
    title: "Plan",
    body: "We turn the information into a clear structure, messaging direction and project plan. You see the shape of the website before any pixel is pushed — and sign off on it.",
  },
  {
    num: "03",
    title: "Build",
    body: "We design and develop the website using AI-assisted tooling for speed, finished and polished by hand. You get regular previews and clear checkpoints, not a long silence.",
  },
  {
    num: "04",
    title: "Launch & Improve",
    body: "We ship the site, hook up analytics, then measure what matters. After launch we identify small, compounding improvements to keep the site working harder over time.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
            How we work
          </p>
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            A straightforward process, from first conversation to launch.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
            No black box. No vague phases. Four clear steps, each with an
            output you can see and approve.
          </p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <li
              key={s.num}
              className="group relative rounded-2xl border border-violet/10 bg-white p-6 lift-on-hover"
            >
              {/* connecting line on large screens */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-1/2 -right-2.5 h-px w-5 bg-violet/25"
                />
              )}
              <span className="font-display text-3xl font-extrabold brand-number">
                {s.num}
              </span>
              <h3 className="mt-4 font-display font-bold text-ink text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
