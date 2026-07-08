"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const HomeQuote = () => {
  return (
    <section id="about" className="app-container py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="bezel">
            <div className="bezel-core relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/Building.png"
                alt="Someone who has just lost their bag"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 max-w-xl lg:order-2">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Why we&apos;re building this
          </h2>

          <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-ink/60">
            <p>
              We&apos;ve all felt it. That sinking moment when you realise your
              bag is gone, then the worst part: calling every place you visited,
              repeating the same description, hoping someone handed it in.
            </p>
            <p className="font-display text-[20px] font-medium leading-snug text-ink md:text-[22px]">
              One report should be enough.
            </p>
            <p>
              We&apos;re making it easy to get your things back, and just as easy
              for good people to return what they find.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeQuote;
