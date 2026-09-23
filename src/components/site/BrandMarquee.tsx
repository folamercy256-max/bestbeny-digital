"use client";

/**
 * BrandMarquee
 * ------------
 * "Helping businesses show up better online." — the brand-name strip
 * that the user asked to be scrolling.
 *
 * Section background: NAVY BLUE (one of the four brand colors).
 * Brand names scroll in opposite directions on a smooth, infinite loop.
 * Gold accent dots separate items. No images, just stylised wordmarks.
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
            className="inline-flex items-center gap-3 text-xl sm:text-2xl font-display font-semibold tracking-tight text-white/55 hover:text-gold transition-colors duration-300 cursor-default whitespace-nowrap"
          >
            {b}
            <span className="h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="on-dark relative bg-navy py-14 sm:py-16 border-y border-white/10 overflow-hidden">
      {/* subtle gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 60% at 10% 50%, rgba(244,185,66,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.25em] text-gold">
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
