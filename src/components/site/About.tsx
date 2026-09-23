import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * About
 * -----
 * A natural, plainly-written explanation of what BestBeny Digital does,
 * focused on AI website design. Each section uses a different background
 * color so the page reads in clear visual chapters.
 */
export function About() {
  return (
    <section id="about" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
              About BestBeny
            </p>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              A better way to build with AI.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              Good digital work should make things clearer, not more
              complicated. Your website shouldn&apos;t just sit online looking
              good — it should explain what you do, build confidence and make
              it easy for the right people to take the next step.
            </p>
            <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed">
              That is how we approach every project at BestBeny Digital. We
              pair human design judgement with AI-assisted building to create
              websites that make sense for the people using them and the
              businesses behind them — shipped in days and weeks, not months.
            </p>

            <Link
              href="#services"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-soft hover:-translate-y-0.5"
            >
              More about what we do
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right column: feature points */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "AI-assisted, human-led",
                  body: "AI helps us move faster on structure, copy and prototypes. Every decision is still made by a designer who understands business context — never auto-published.",
                },
                {
                  title: "Built around your customer",
                  body: "We design backwards from the action you want a visitor to take, then make that path obvious, fast and trustworthy.",
                },
                {
                  title: "Realistic timelines",
                  body: "Most projects launch in 1–3 weeks depending on scope. You get a clear timeline before any work begins, with no surprise extensions.",
                },
                {
                  title: "Foundations that grow",
                  body: "We ship on a modern stack so your website can evolve — add pages, integrate tools, scale content — without starting from zero.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="lift-on-hover rounded-2xl border border-violet/10 bg-white p-6"
                >
                  <h3 className="font-display font-bold text-ink text-lg">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
