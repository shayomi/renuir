"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../utils/data/homeItems";
import { Reveal } from "@/components/ui/Reveal";
import { Mail } from "lucide-react";

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="border-y border-ink/[0.06] bg-white py-24 md:py-32"
    >
      <div className="app-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
              Questions,
              <br />
              answered
            </h2>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/55">
              Everything about how Renuir helps you get back what you lost.
            </p>
            <Link
              href="mailto:info@renuir.com"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink/[0.04] px-5 py-3 text-[15px] font-semibold text-ink ring-1 ring-ink/[0.06] transition-colors duration-300 hover:bg-ink/[0.07]"
            >
              <Mail className="h-4 w-4 text-primary-600" strokeWidth={2} />
              Still curious? Email us
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-ink/[0.08]"
              >
                <AccordionTrigger className="py-5 text-left text-[17px] font-semibold text-ink hover:no-underline data-[state=open]:text-primary-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15.5px] leading-relaxed text-ink/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
