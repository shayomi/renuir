"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { clsx } from "clsx";

import { menuItems } from "../utils/data/menuItems";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100 shadow-sm">
      <div className="app-container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Renuirlogo-1.svg"
            alt="Renuir Logo"
            width={90}
            height={90}
            className="w-20 sm:w-22.5 h-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                pathname === item.href ||
                  (pathname === "/" && item.href.startsWith("/#"))
                  ? "text-slate-900"
                  : "text-slate-700 hover:text-slate-900",
                "px-4 py-2 text-sm font-semibold transition-colors"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pl-4">
            <Link href="/#waitlist">
              <Button
                size="sm"
                className="rounded-lg font-bold px-5 bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all"
              >
                Join waitlist
              </Button>
            </Link>
          </div>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
