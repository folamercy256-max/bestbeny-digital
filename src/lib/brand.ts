/**
 * BestBeny Digital — brand constants
 * --------------------------------
 * Single source of truth for brand identity, contact links and copy used
 * across the site. Update the WhatsApp number, email and social handles
 * here and they propagate everywhere.
 *
 * Brand palette (logo colors): navy blue + gold + white + black.
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
  email: "bestbenydigitabrand@gmail.com",
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

/**
 * Brand palette — gold, white, black, navy blue.
 * Navy blue is the primary "logo color" used on buttons, numbers and key text.
 */
export const BRAND_COLORS = {
  navy: "#1E3A5F",
  navyDeep: "#142841",
  navySoft: "#2C4D75",
  navyTint: "#EEF2F7",
  gold: "#F4B942",
  goldTint: "#FBF1DC",
  white: "#FFFFFF",
  black: "#0A0A0A",
  ink: "#0F0F14",
} as const;
