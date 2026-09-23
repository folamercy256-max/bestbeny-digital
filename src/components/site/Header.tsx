"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-navy/10 shadow-[0_8px_30px_-12px_rgba(30,58,95,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="flex h-16 md:h-20 items-center justify-between gap-4"
        >
          <Link
            href="#home"
            aria-label="BestBeny Digital home"
            className="shrink-0 rounded-xl p-1.5 -ml-1.5 transition-colors hover:bg-navy/5"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink/70 hover:text-navy hover:bg-navy/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(30,58,95,0.55)] transition-all hover:bg-navy-soft hover:shadow-[0_14px_36px_-12px_rgba(30,58,95,0.7)] hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Talk
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 text-ink hover:bg-navy/5 transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy/10 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-ink/80 hover:text-navy hover:bg-navy/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Talk on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
