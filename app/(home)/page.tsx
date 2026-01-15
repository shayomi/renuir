import { FAQSection } from "@/components/home/HomeFaq";
import HomeHero from "@/components/home/HomeHero";
import HomeQuote from "@/components/home/HomeQuote";
import { EarlyAccessSection } from "@/components/home/HomeWaitlist";
import { LostSomething } from "@/components/home/HowitWorks";

import { TailoredForEveryone } from "@/components/home/TailoredFor";

const SECTIONS = [
  { Component: HomeHero, className: "" },
  { Component: TailoredForEveryone, className: "" },
  { Component: LostSomething, className: "" },
  { Component: HomeQuote, className: "" },
  { Component: FAQSection, className: "" },
  { Component: EarlyAccessSection, className: "" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
