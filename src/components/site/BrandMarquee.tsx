"use client";

/**
 * BrandMarquee
 * ------------
 * "Helping businesses show up better online." — the brand-name strip
 * that the user asked to be scrolling.
 *
 * Two rows of brand names scroll in opposite directions on a smooth,
 * infinite loop. Hovering a name lifts it slightly. No images, just
 * stylised wordmarks — relevant and natural.
 */
const BRANDS_TOP = [
  "NOVA",
  "Kora",
  "Mason & Co.",
  "Northline",
  "Apex",
  "Luma",
  "Verra",
  "Studio Heir",
];

const BRANDS_BOTTOM = [
  "Halo & Co.",
  "Brightline",
  "Forma",
  "Origin Studio",
  "Atlas",
  "Meridian",
  "Cedar",
  "North & Pine",
];

function Row({
  brands,
  reverse,
  ariaHidden,
}: {
  brands: string[];
  reverse?: boolean;
  ariaHidden?: boolean;
}) {
  // duplicate the list so the marquee can loop seamlessly
  const items = [...brands, ...brands];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max items-center gap-10 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        aria-hidden={ariaHidden}
      >
        {items.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="text-xl sm:text-2xl font-display font-semibold tracking-tight text-ink/35 hover:text-violet transition-colors duration-300 cursor-default whitespace-nowrap"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="relative bg-cream py-14 sm:py-16 border-y border-violet/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.25em] text-ink/45">
          Helping businesses show up better online
        </p>
        <div className="mt-8 space-y-5">
          <Row brands={BRANDS_TOP} />
          <Row brands={BRANDS_BOTTOM} reverse ariaHidden />
        </div>
      </div>
    </section>
  );
}
