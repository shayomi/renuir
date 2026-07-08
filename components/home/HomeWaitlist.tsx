"use client";

import { Reveal } from "@/components/ui/Reveal";
import { WaitlistForm } from "./WaitlistForm";

export const EarlyAccessSection = () => {
  return (
    <section id="waitlist" className="app-container py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-600 px-6 py-16 text-center md:px-16 md:py-24">
          {/* soft internal light, not a hard glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(255,255,255,0.22), transparent 70%), radial-gradient(40% 50% at 85% 100%, rgba(255,255,255,0.12), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-6xl">
              Ready to Renuir?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[18px] leading-relaxed text-white/80">
              Join early for first access when we launch. No spam, just
              progress.
            </p>

            <div className="mt-9 flex justify-center">
              <WaitlistForm cta="Join the waitlist" align="center" />
            </div>

            <p className="mt-6 text-[14px] text-white/70">
              Join 500+ people already on the waitlist.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
