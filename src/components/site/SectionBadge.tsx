import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  /** Eyebrow label text, e.g. "What we do". */
  label: string;
  /** When true, renders on a dark background — chip turns gold. */
  onDark?: boolean;
  /** Show the small "30+ AI websites" pill next to the eyebrow. */
  showAiWebsitesCount?: boolean;
  /** Show the "Built with AI" pill next to the eyebrow. */
  showBuiltWithAi?: boolean;
  className?: string;
};

/**
 * SectionBadge
 * ------------
 * A consistent eyebrow row used at the top of every section. It shows:
 *   - the section label (e.g. "What we do")
 *   - a "Built with AI" pill (with a Sparkles icon)
 *   - a "30+ AI websites" pill (number rendered in the logo color)
 *
 * Per the user's request, these badges should "show everywhere" across the
 * site, not just the hero.
 */
export function SectionBadge({
  label,
  onDark = false,
  showAiWebsitesCount = true,
  showBuiltWithAi = true,
  className,
}: SectionBadgeProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {/* Eyebrow label */}
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.25em]",
          onDark ? "text-gold" : "text-navy",
        )}
      >
        {label}
      </span>

      {/* Built with AI pill */}
      {showBuiltWithAi && (
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
            onDark
              ? "bg-gold text-ink"
              : "bg-navy text-white",
          )}
        >
          <Sparkles className="h-3 w-3" />
          Built with AI
        </span>
      )}

      {/* 30+ AI websites pill */}
      {showAiWebsitesCount && (
        <span
          className={cn(
            "inline-flex items-baseline gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
            onDark
              ? "bg-white/10 text-white"
              : "bg-navy-tint text-ink/70",
          )}
        >
          <span className="brand-number font-extrabold">30+</span>
          AI websites
        </span>
      )}
    </div>
  );
}
