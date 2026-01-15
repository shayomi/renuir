"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "../ui/typography";
import { faqs } from "../utils/data/homeItems";
import { HelpCircle, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import Link from "next/link";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-gray-50 py-20 md:py-28" id="faq">
      <div ref={ref} className="app-container max-w-3xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.5)}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-5">
            <HelpCircle className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">FAQ</span>
          </div>

          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5"
          >
            Common questions
          </Typography>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Everything you need to know about how Renuir helps you find what you
            lost.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0.2, 0.5)}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-5 bg-white overflow-hidden hover:shadow-sm transition-shadow duration-300 data-[state=open]:border-primary-200 data-[state=open]:bg-primary-50/30"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 leading-snug">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <Link href="mailto:info@renuir.com">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all shadow-lg">
              <Mail className="h-5 w-5" />
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
