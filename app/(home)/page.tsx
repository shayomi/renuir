import { FAQSection } from "@/components/home/HomeFaq";
import HomeHero from "@/components/home/HomeHero";
import HomeQuote from "@/components/home/HomeQuote";
import { EarlyAccessSection } from "@/components/home/HomeWaitlist";
import { LostSomething } from "@/components/home/HowitWorks";
import { SearchNetwork } from "@/components/home/SearchNetwork";
import { TailoredForEveryone } from "@/components/home/TailoredFor";

const SECTIONS = [
  HomeHero,
  SearchNetwork,
  TailoredForEveryone,
  LostSomething,
  HomeQuote,
  FAQSection,
  EarlyAccessSection,
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {SECTIONS.map((Component, index) => (
        <Component key={index} />
      ))}
    </main>
  );
}
