"use client";
import { Typography } from "../ui/typography";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import Image from "next/image";

const HomeQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-white py-20 md:py-28" id="about">
      <div ref={ref} className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0, 0.6)}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/Building.png"
                alt="Why we're building Renuir"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("left", "tween", 0.2, 0.6)}
            className="order-1 lg:order-2 space-y-6"
          >
            <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Why we&apos;re building this
            </Typography>

            <div className="space-y-5">
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                We&apos;ve all been there. That sinking feeling when you realize your bag is gone. Then comes the worst part: calling every place you visited, repeating the same description, hoping someone picked it up.
              </p>

              <p className="font-semibold text-gray-900 leading-relaxed text-base md:text-lg">
                We&apos;re building Renuir because that process is broken. One report should be enough. We want to make it easy to get your stuff back, and easy for good people to return what they find.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
