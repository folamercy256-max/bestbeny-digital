import Link from "next/link";
import { Mail, Globe, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_LINK, BRAND } from "@/lib/brand";

/**
 * Footer
 * ------
 * Section background: BLACK (deep). Sticky-footer friendly: parent <main>
 * uses min-h-screen flex flex-col, this footer sits at the end with mt-auto
 * applied from the page wrapper.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-black-deep text-white/80">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo onDark />
            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              {BRAND.description}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-navy-soft"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 font-semibold">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 font-semibold">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2.5 text-sm text-white/70">
                  <Globe className="h-4 w-4 text-gold" />
                  {BRAND.domain}
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>
            &copy; {year} {BRAND.name}. All rights reserved.
          </p>
          <p className="sm:text-right max-w-md leading-relaxed">
            Sample site content shown for layout. Replace placeholder
            testimonials, metrics and contact details before publishing.
          </p>
        </div>
      </div>
    </footer>
  );
}
