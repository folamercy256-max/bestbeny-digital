# BestBeny Digital — AI Website Design Studio

A single-page marketing website for BestBeny Digital, an AI website design studio. Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

**Live site:** <https://bestbenydigital.space-z.ai/> (z.ai sandbox)

---

## What's inside

- **Hero** — AI website design pitch, founder portrait, "Let's Talk" WhatsApp CTA, "30+ AI websites" badge.
- **Brand Marquee** — scrolling strip of brand names on navy blue.
- **About** — what makes BestBeny different.
- **Services** — AI Website Design, Brand Identity, Digital Marketing, Content & Creative.
- **Why BestBeny** — 4 reasons, navy section with gold accents.
- **How We Work** — 4-step process: Discover → Plan → Build → Launch.
- **Portfolio** — 14 real past projects, each with a "View Live Website" button (opens in new tab) and "Discuss a Similar Project" button (opens WhatsApp with a project-specific pre-filled message).
- **Stats** — 30+ / 12+ / 95% / 3+ on a black section.
- **Testimonials**, **FAQ**, **Final CTA**, **Footer**.

## Brand palette

| Color      | Hex       | Usage |
|------------|-----------|-------|
| Navy blue  | `#1E3A5F` | Primary logo color — buttons, numbers, key text |
| Gold       | `#F4B942` | Accent — logo dot, highlights on dark sections |
| White      | `#FFFFFF` | Light section backgrounds |
| Black      | `#0A0A0A` | Dark section backgrounds |

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **Fonts:** Inter (body), Manrope (display), Playfair Display (hero H1)
- **Icons:** lucide-react
- **Images:** `next/image` (SVG support enabled for inlined brand assets)

## Local development

```bash
# Install deps
bun install

# Start dev server on http://localhost:3000
bun run dev

# Lint
bun run lint
```

## Deployment

This codebase deploys to **three platforms** without code changes:

| Platform | Status | How |
|----------|--------|-----|
| z.ai sandbox | Live at <https://bestbenydigital.space-z.ai/> | Uses `output: "standalone"` + `.next/standalone/server.js` |
| Cloudflare Pages | Deploy via the steps below | Uses `@cloudflare/next-on-pages` adapter |
| Vercel | Optional fallback | Uses `next build` (overridden by `vercel.json`) |

### Option A — z.ai sandbox (already running)

The site is live at <https://bestbenydigital.space-z.ai/>. The z.ai sandbox uses `output: "standalone"` in `next.config.ts` and runs `.next/standalone/server.js` in production.

### Option B — Cloudflare Pages (recommended)

The repo is already on GitHub at <https://github.com/folamercy256-max/bestbeny-digital>.

**Step-by-step in the Cloudflare dashboard:**

1. Go to <https://dash.cloudflare.com/> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare to access your GitHub account and select `folamercy256-max/bestbeny-digital`.
3. **Project name:** `bestbeny-digital` (this becomes your subdomain — `bestbeny-digital.pages.dev`).
4. **Production branch:** `main`.
5. Under **Build settings**, set EXACTLY these values (don't add anything else):
   - **Framework preset:** `Next.js (Static HTML Export)` is fine, or `None` — doesn't matter.
   - **Build command:** `npx @cloudflare/next-on-pages`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** `/` (default)
   - **Environment variables:** `NEXT_TELEMETRY_DISABLED` = `1` (optional)
   - **⚠️ Leave "Deploy command" EMPTY.** Do NOT type `npx wrangler deploy` here — that's for Cloudflare Workers, not Pages. Pages auto-deploys the build output directory after the build step.
6. Click **Save and Deploy**.

Cloudflare will run `npx @cloudflare/next-on-pages` (which internally runs `next build` + post-processes the output into a Cloudflare Workers bundle), then auto-deploy the `.vercel/output/static` directory to your `*.pages.dev` URL.

After the first deploy, every push to `main` auto-redeploys.

### Option C — Vercel (alternative)

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> and import the GitHub repo.
3. Vercel auto-detects Next.js — keep the defaults (the `vercel.json` file in this repo handles the build command override).
4. No environment variables required.
5. Click **Deploy**.

### Why the same codebase works on all three

- `next.config.ts` keeps `output: "standalone"` — required by z.ai sandbox.
- Cloudflare's `@cloudflare/next-on-pages` adapter runs `next build` underneath (which respects `output: "standalone"`), then post-processes the output into a Cloudflare Workers bundle. The standalone flag is harmless here.
- Vercel uses its own build pipeline; the `vercel.json` override ensures it runs `next build` (not the package.json `build` script that has z.ai-specific `cp -r` commands).


## Customising

### Update contact details

All contact info lives in [`src/lib/brand.ts`](src/lib/brand.ts):

```ts
export const BRAND = {
  whatsappNumber: "2348000000000",          // ← replace with your real WhatsApp number (international format, no +)
  email: "bestbenydigitabrand@gmail.com",
  domain: "bestbenydigital.com",
  // ...
};
```

The WhatsApp number is also hardcoded in [`src/components/site/Portfolio.tsx`](src/components/site/Portfolio.tsx) for each project's "Discuss a Similar Project" button. Search the codebase for `2348000000000` to find every reference.

### Update portfolio projects

Edit [`src/components/site/portfolio-data.ts`](src/components/site/portfolio-data.ts). Project images live in [`public/brand/portfolio/`](public/brand/portfolio/) (named `p01.png` through `p14.png`).

### Swap the founder photo

Replace [`public/brand/founder-real.jpeg`](public/brand/founder-real.jpeg) with your own photo (same filename, 853×1280 or any portrait aspect ratio).

## License

Private — © BestBeny Digital.
