import {
  Plane,
  Hotel,
  TrainFront,
  UtensilsCrossed,
  ShoppingBag,
  Landmark,
  Bus,
  Dumbbell,
} from "lucide-react";

const VENUES = [
  { icon: Plane, label: "Airports" },
  { icon: Hotel, label: "Hotels" },
  { icon: TrainFront, label: "Transit" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Landmark, label: "Venues" },
  { icon: Bus, label: "Coaches" },
  { icon: Dumbbell, label: "Gyms" },
];

export const SearchNetwork = () => {
  return (
    <section className="border-y border-ink/[0.06] bg-white py-8">
      <div className="app-container">
        <p className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.18em] text-ink/40">
          One report, searched across your whole city
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...VENUES, ...VENUES].map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-ink/70 shadow-soft ring-1 ring-ink/[0.05]"
              >
                <v.icon className="h-4 w-4 text-primary-600" strokeWidth={1.75} />
                {v.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
