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
 * Brand color: #6C4DFF (logo violet). Accent: #F4B942 (logo gold dot).
 *
 * Section background rhythm (different color per section, as requested):
 *   Hero         — paper (warm off-white)
 *   BrandMarquee — cream
 *   About        — paper
 *   Services     — mist (cool light grey-blue)
 *   WhyBestBeny  — cream
 *   HowWeWork    — paper
 *   Portfolio    — sand (warm sand)
 *   Stats        — ink (deep dark)
 *   Testimonials — paper
 *   FAQ          — mist
 *   FinalCTA     — violet (brand)
 *   Footer       — ink (deep dark)
 *
 * Removed per the user's request:
 *   - "Strategy" section
 *   - "From the journal" section and its image
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
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
