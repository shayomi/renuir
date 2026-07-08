"use client";

import Image from "next/image";
import { Loststat } from "../utils/data/homeItems";
import { Reveal } from "@/components/ui/Reveal";

export const LostSomething = () => {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-ink/[0.06] bg-white py-24 md:py-32"
    >
      <div className="app-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Real product, in hand */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-6 top-10 -z-10 rounded-[3rem] bg-gradient-to-b from-primary-600/[0.12] to-primary-600/[0.02] blur-2xl"
              />
              <Image
                src="/images/heroimg-1.png"
                alt="Someone reporting a lost item in the Renuir app"
                width={912}
                height={1508}
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full drop-shadow-[0_18px_40px_rgba(11,18,32,0.1)]"
              />
            </div>
          </Reveal>

          {/* Vertical stepper */}
          <Reveal delay={0.1} className="order-1 max-w-lg lg:order-2">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
              Three steps. That&apos;s it.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-ink/55">
              No calling round every place you visited. No repeating the same
              description ten times.
            </p>

            <ol className="mt-12">
              {Loststat.map((step, index) => {
                const isLast = index === Loststat.length - 1;
                return (
                  <li key={index} className="relative flex gap-5 pb-10 last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute bottom-1 left-[27px] top-14 w-px bg-gradient-to-b from-primary-300 to-primary-100"
                      />
                    )}
                    <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl bg-white text-primary-600 ring-1 ring-ink/[0.07]">
                      <step.icon className="h-6 w-6" strokeWidth={1.75} />
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-[11px] font-semibold text-white">
                        {step.order}
                      </span>
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em] text-ink">
                        {step.value}
                      </h3>
                      <p className="mt-1.5 text-[16px] leading-relaxed text-ink/55">
                        {step.label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
