"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { businessFeatures, consumerFeatures } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("consumer");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features =
    audience === "business" ? businessFeatures : consumerFeatures;

  return (
    <section className="app-container py-20 md:py-28" id="features">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
      >
        <Typography
          variant="h2"
          className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5"
        >
          Built for how you actually use it
        </Typography>

        <Typography
          variant="p"
          className="text-gray-500 text-lg md:text-xl leading-relaxed"
        >
          Different needs, same goal: getting stuff back to its owner, fast.
        </Typography>

        {/* Toggle */}
        <div className="inline-flex mt-8 rounded-lg bg-gray-100 p-1">
          <Button
            size="default"
            variant={audience === "consumer" ? "default" : "ghost"}
            className={
              audience === "consumer"
                ? "rounded-md font-semibold bg-white text-gray-900 shadow-sm hover:bg-white"
                : "rounded-md font-semibold text-gray-500 hover:text-gray-900"
            }
            onClick={() => setAudience("consumer")}
          >
            For Individuals
          </Button>
          <Button
            size="default"
            variant={audience === "business" ? "default" : "ghost"}
            className={
              audience === "business"
                ? "rounded-md font-semibold bg-white text-gray-900 shadow-sm hover:bg-white"
                : "rounded-md font-semibold text-gray-500 hover:text-gray-900"
            }
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.4)}
            className="p-6 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-gray-200 "
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 text-primary-600 mb-5">
              <feature.icon className="h-6 w-6" />
            </div>

            <h3 className="font-bold mb-2 text-gray-900 text-lg">
              {feature.title}
            </h3>

            <p className="text-gray-500 text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
