"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

import { menuItems } from "../utils/data/menuItems";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={clsx(
          "flex w-full max-w-[1080px] items-center justify-between rounded-full py-2 pl-5 pr-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          scrolled
            ? "bg-white/80 shadow-soft ring-1 ring-ink/[0.06] backdrop-blur-xl"
            : "bg-white/60 ring-1 ring-ink/[0.04] backdrop-blur-md"
        )}
      >
        <Link href="/" className="flex items-center py-1" aria-label="Renuir home">
          <Image
            src="/images/Renuirlogo-1.svg"
            alt="Renuir"
            width={90}
            height={28}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => {
            const active =
              pathname === item.href ||
              (pathname === "/" && item.href.startsWith("/#"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300",
                  active
                    ? "text-ink"
                    : "text-ink/60 hover:text-ink hover:bg-ink/[0.04]"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/#waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-600 py-2.5 pl-5 pr-5 text-[14px] font-semibold text-white shadow-float transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary-700 active:scale-[0.97]"
          >
            Join waitlist
          </Link>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
};

export default Nav;
