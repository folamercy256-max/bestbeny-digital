"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/brand";
import { SectionBadge } from "./SectionBadge";

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Every project is different. We price projects based on the scope, number of pages, functionality and level of strategic work involved. After an initial conversation, we can recommend an approach and provide a clear proposal — no vague ranges, no surprise add-ons later.",
  },
  {
    q: "How long does a website project take?",
    a: "A typical website project can take one to three weeks depending on the scope and how quickly content and feedback are provided. We give you a realistic timeline before work begins, and we stick to it.",
  },
  {
    q: "Do you work with businesses outside your city?",
    a: "Yes. Most digital projects can be handled remotely. We use calls, shared documents and project communication tools to keep everything moving — distance rarely slows a project down.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. If the existing website has a good foundation, we can improve it. If the underlying structure is holding the business back, we will explain what needs to change and why — then handle the rebuild.",
  },
  {
    q: "Do you use AI to build the website?",
    a: "Yes — we use AI-assisted tooling to move faster on structure, copy drafts and prototype exploration. Every output is reviewed, edited and signed off by a human designer, so the work never reads like it was auto-generated.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Ongoing website maintenance, updates, content support and digital improvements can be arranged after launch. We can set up a simple monthly plan or work on an as-needed basis — whichever fits your business better.",
  },
];

/**
 * FAQ
 * ---
 * Section background: GOLD TINT (soft cream). Uses the shadcn/ui Accordion.
 * The "+" indicator and the question color shift to navy on hover/open.
 */
export function FAQ() {
  return (
    <section id="faq" className="relative bg-gold-tint py-20 sm:py-28 border-t border-navy/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionBadge label="Common questions" />
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              A few things you may want to know before we start.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              Still unsure about something? Send a short note on WhatsApp and
              we will reply with a straight answer.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Ask on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3"
              defaultValue="faq-0"
            >
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="rounded-xl border border-navy/10 bg-white px-5 transition-colors data-[state=open]:border-navy/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:text-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-ink/70 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
