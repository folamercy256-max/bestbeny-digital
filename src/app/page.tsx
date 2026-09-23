import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyBestBeny } from "@/components/site/WhyBestBeny";
import { HowWeWork } from "@/components/site/HowWeWork";
import { Portfolio } from "@/components/site/Portfolio";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

/**
 * BestBeny Digital — single-page marketing site.
 *
 * Focus: AI Website Design service.
 * Brand palette: navy blue (logo color) + gold + white + black.
 *
 * Section background rhythm — different color per section, drawn ONLY from
 * the four brand colors (gold, white, black, navy blue) per the user's
 * request:
 *
 *   Hero          — WHITE
 *   BrandMarquee  — NAVY BLUE
 *   About         — WHITE
 *   Services      — GOLD (soft tint)
 *   WhyBestBeny   — NAVY BLUE
 *   HowWeWork     — WHITE
 *   Portfolio     — NAVY TINT (very pale navy) — 14 reserved open slots
 *   Stats         — BLACK
 *   Testimonials  — WHITE
 *   FAQ           — GOLD (soft tint)
 *   FinalCTA      — NAVY BLUE
 *   Footer        — BLACK
 *
 * Removed per the user's request:
 *   - "Strategy" section
 *   - "From the journal" section and its image
 *   - Any image that is not relevant to the AI website design service
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <BrandMarquee />
        <About />
        <Services />
        <WhyBestBeny />
        <HowWeWork />
        <Portfolio />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
