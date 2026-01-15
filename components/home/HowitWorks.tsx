"use client";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Loststat } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const LostSomething = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="bg-gray-50 py-20 md:py-28">
      <div ref={ref} className="app-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <Typography
            variant="h2"
            className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5"
          >
            How it works
          </Typography>

          <Typography
            variant="h4"
            className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed"
          >
            Three simple steps to get your belongings back. No hassle, no
            endless searching.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 max-w-5xl mx-auto">
          <div className="  space-y-8">
            {Loststat.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={fadeIn("left", "tween", 0.3 + index * 0.15, 0.6)}
                className="flex items-start gap-6 group"
              >
                <div className="relative shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-gray-200 shadow-sm text-primary-600 font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                    {stat.order}
                  </div>
                </div>

                <div className="space-y-2">
                  <Typography
                    variant="h4"
                    className="font-bold text-gray-900 text-lg md:text-xl tracking-tight"
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-gray-500 leading-relaxed text-base font-medium"
                  >
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0.2, 0.6)}
            className="order-2"
          >
            <div className="relative w-full aspect-24/18  rounded-2xl overflow-hidden">
              <Image
                src="/images/howitworks.jpeg"
                alt="How Renuir works"
                fill
                className="object-cover rounded-2xl border"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/#waitlist">
            <Button
              size="lg"
              className="px-8 h-14 rounded-xl font-bold text-base bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get started now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
