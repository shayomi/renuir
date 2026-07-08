"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { businessFeatures, consumerFeatures } from "../utils/data/homeItems";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

// Wide, brand-tinted cells for rhythm; N items -> N cells, no empties.
const SPAN = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"consumer" | "business">("consumer");
  const reduce = useReducedMotion();
  const features = audience === "business" ? businessFeatures : consumerFeatures;

  return (
    <section id="features" className="app-container py-24 md:py-32">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
          Built for how you actually use it
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-ink/55">
          Different needs, one goal: getting things back to the people they
          belong to, fast.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="inline-flex rounded-full bg-ink/[0.05] p-1">
          {(["consumer", "business"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setAudience(key)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-300",
                audience === key ? "text-ink" : "text-ink/50 hover:text-ink/80"
              )}
            >
              {audience === key && (
                <motion.span
                  layoutId="audience-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-soft"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
              <span className="relative">
                {key === "consumer" ? "For individuals" : "For business"}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <AnimatePresence mode="wait">
          {features.map((feature, index) => {
            const wide = SPAN[index] === "md:col-span-2";
            return (
              <motion.article
                key={`${audience}-${index}`}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                className={cn(
                  "group flex flex-col justify-between rounded-[1.75rem] p-7 ring-1 transition-shadow duration-500 hover:shadow-soft",
                  SPAN[index],
                  wide
                    ? "bg-primary-50 ring-primary-100"
                    : "bg-white ring-ink/[0.06]"
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-0.5",
                    wide
                      ? "bg-primary-600 text-white"
                      : "bg-primary-50 text-primary-600"
                  )}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className={cn(wide ? "mt-10" : "mt-8")}>
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-ink/55",
                      wide ? "max-w-md text-[16px]" : "text-[15px]"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
