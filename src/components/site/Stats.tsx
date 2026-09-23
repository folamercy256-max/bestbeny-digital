"use client";

/**
 * Stats
 * -----
 * All numbers in this section are rendered in the logo violet color.
 *
 * The section uses a dark ink background so it visually anchors the
 * middle of the page and contrasts with the lighter sections around
 * it — a deliberate "different color per section" choice.
 *
 * Note: figures shown are clearly-labelled placeholder metrics. Replace
 * with verified numbers before publishing.
 */
const STATS = [
  {
    num: "30+",
    label: "Digital projects delivered",
    placeholder: "Placeholder metric 01",
  },
  {
    num: "12+",
    label: "Industries served",
    placeholder: "Placeholder metric 02",
  },
  {
    num: "95%",
    label: "Client satisfaction",
    placeholder: "Placeholder metric 03",
  },
  {
    num: "3+",
    label: "Years building digital experiences",
    placeholder: "Placeholder metric 04",
  },
];

export function Stats() {
  return (
    <section className="relative bg-ink py-20 sm:py-24 text-white overflow-hidden">
      {/* soft brand wash on dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 60% at 10% 10%, rgba(108,77,255,0.35), transparent 60%), radial-gradient(40% 50% at 95% 90%, rgba(244,185,66,0.20), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-soft">
            By the numbers
          </p>
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            The goal is not to make more noise. The goal is to make the right
            impression.
          </h2>
        </div>

        <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                {/* number — logo violet */}
                <span className="font-display text-4xl sm:text-5xl font-extrabold brand-number">
                  {s.num}
                </span>
                <p className="mt-2 text-sm text-white/70 leading-snug">
                  {s.label}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-white/30 font-medium">
                  {s.placeholder}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-xs text-white/40 max-w-2xl leading-relaxed">
          The figures above are clearly-labelled placeholder metrics in the
          source. Replace them with verified numbers before publishing the
          site.
        </p>
      </div>
    </section>
  );
}
