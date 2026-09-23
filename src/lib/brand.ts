/**
 * BestBeny Digital — brand constants
 * --------------------------------
 * Single source of truth for brand identity, contact links and copy used
 * across the site. Update the WhatsApp number, email and social handles
 * here and they propagate everywhere.
 */

export const BRAND = {
  name: "BestBeny Digital",
  tagline: "AI Website Design that moves your business forward",
  description:
    "We design AI-built websites and digital experiences that look professional, communicate clearly and give customers a reason to choose you.",
  /** TODO: Replace with the real BestBeny Digital WhatsApp number (international format, no +). */
  whatsappNumber: "2348000000000",
  whatsappMessage:
    "Hello BestBeny Digital, I'd like to talk about an AI website design project.",
  email: "hello@bestbenydigital.com",
  domain: "bestbenydigital.com",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
  BRAND.whatsappMessage,
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BRAND_COLORS = {
  violet: "#6C4DFF",
  violetSoft: "#8C72FF",
  violetTint: "#EFEBFF",
  gold: "#F4B942",
  ink: "#14112B",
  paper: "#FBFAF7",
} as const;
