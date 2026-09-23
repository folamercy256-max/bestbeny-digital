import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  /** Render the wordmark in white — use on dark backgrounds. */
  onDark?: boolean;
};

const sizeMap = {
  sm: { mark: "h-8 w-8", text: "text-base" },
  md: { mark: "h-10 w-10", text: "text-lg" },
  lg: { mark: "h-14 w-14", text: "text-2xl" },
};

/**
 * BestBeny Digital brand logo — a rounded navy-blue tile with a gold "B"
 * monogram and a small gold accent dot, plus the wordmark "BestBeny Digital".
 *
 * The SVG is inlined (rather than referenced as an <img>) so the brand
 * color stays crisp on every background and never picks up parent opacity.
 *
 * NOTE: When the user's actual logo file is uploaded, replace the <svg>
 * below with <img src="/brand/bb-logo.png" alt="BestBeny Digital" />.
 */
export function Logo({ className, showWordmark = true, size = "md", onDark = false }: LogoProps) {
  const dims = sizeMap[size];
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="BestBeny Digital logo"
        className={cn("block shrink-0", dims.mark)}
      >
        {/* navy tile */}
        <rect width="64" height="64" rx="16" fill="#1E3A5F" />
        {/* gold "B" monogram */}
        <path
          d="M22 18h13.5c5.2 0 8.5 2.6 8.5 7.1 0 3-1.8 5-4.4 5.9 3.2 0.8 5.4 2.9 5.4 6.6 0 5-3.9 8.4-9.8 8.4H22V18Zm6.4 11.2h6.4c2.2 0 3.6-1.1 3.6-2.9s-1.4-2.9-3.6-2.9h-6.4v5.8Zm0 11.4h7.1c2.4 0 3.9-1.2 3.9-3.2s-1.5-3.2-3.9-3.2h-7.1v6.4Z"
          fill="#F4B942"
        />
        {/* small gold accent dot */}
        <circle cx="46" cy="20" r="3.2" fill="#F4B942" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display font-extrabold tracking-tight",
              onDark ? "text-white" : "text-ink",
            )}
          >
            BestBeny
          </span>
          <span className="font-display text-[0.65em] font-medium uppercase tracking-[0.22em] text-gold">
            Digital
          </span>
        </span>
      )}
    </span>
  );
}
