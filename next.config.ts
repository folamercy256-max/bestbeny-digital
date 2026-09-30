import type { NextConfig } from "next";

/**
 * Next.js config for BestBeny Digital
 * -----------------------------------
 * The same codebase deploys to THREE platforms without changes:
 *
 *   1. z.ai sandbox  — uses `output: "standalone"` + .next/standalone/server.js
 *   2. Cloudflare Pages — uses `@cloudflare/next-on-pages` adapter (which itself
 *      runs `next build` underneath, then post-processes the .next/ output
 *      into a Cloudflare Workers-compatible bundle)
 *   3. Vercel — uses plain `next build` + Vercel's own runtime
 *
 * The `output: "standalone"` flag is harmless on Cloudflare/Vercel — their
 * build adapters ignore the standalone output and use their own.
 */
const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow next/image to render SVGs served from /public/brand/
  // (used for the founder portrait placeholder + logo assets).
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
