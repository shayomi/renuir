"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ShieldCheck, Sparkles, BellRing } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

const EASE = [0.16, 1, 0.3, 1] as const;

const HomeHero = () => {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient brand wash, never a hard purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 18%, rgba(36,56,235,0.10), transparent 70%), radial-gradient(45% 40% at 8% 8%, rgba(36,56,235,0.05), transparent 70%)",
        }}
      />

      <div className="app-container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.span
              {...rise(0)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-ink/70 shadow-soft ring-1 ring-ink/[0.06]"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary-600" strokeWidth={2} />
              Early access is opening soon
            </motion.span>

            <motion.h1
              {...rise(0.08)}
              className="font-display mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]"
            >
              Report it once.
              <br />
              We find it{" "}
              <span className="text-primary-600">everywhere.</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/60"
            >
              Renuir searches hotels, airports and transit in real time, then
              quietly reunites you with what you lost.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-8">
              <WaitlistForm cta="Get early access" />
            </motion.div>

            <motion.div
              {...rise(0.32)}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-ink/55"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary-600" strokeWidth={2} />
                Private by default
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-600" strokeWidth={2} />
                Free for individuals
              </span>
            </motion.div>
          </div>

          {/* Device */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 30, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 1, delay: 0.15, ease: EASE },
                })}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[440px]"
          >
            {/* soft plate behind the device */}
            <div
              aria-hidden
              className="absolute inset-x-6 top-10 bottom-6 -z-10 rounded-[3rem] bg-gradient-to-b from-primary-600/[0.14] to-primary-600/[0.02] blur-2xl"
            />
            <Image
              src="/images/heroo-img.png"
              alt="The Renuir app home screen"
              width={860}
              height={1048}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(11,18,32,0.08)]"
            />

            {/* floating match notification — decorative accent, not a fake UI */}
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16, x: -8 },
                    animate: { opacity: 1, y: 0, x: 0 },
                    transition: { duration: 0.7, delay: 0.7, ease: EASE },
                  })}
              className="absolute -left-3 top-[26%] flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-4 shadow-float ring-1 ring-ink/[0.06] backdrop-blur-md sm:-left-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <BellRing className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-semibold text-ink">
                  Match found
                </span>
                <span className="block text-[12px] text-ink/55">
                  Your bag is at Terminal 2
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
