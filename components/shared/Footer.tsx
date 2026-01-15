import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-400">
      <div className="app-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={100}
                height={35}
                className="w-22.5 h-auto"
              />
            </Link>

            <p className="max-w-md text-base leading-relaxed text-gray-400 font-medium">
              Renuir is a trusted platform connecting finders and owners of lost
              items, making it easy to reunite people with their belongings.
              Report once, and we'll search everywhere for you in real time.
            </p>

            <div className="space-y-1 text-sm font-medium">
              <p className="text-gray-300">Renuir UG (haftungsbeschränkt)</p>
              <p>Hönower Wiesenweg 57, 10318 Berlin, Germany</p>
              <p className="pt-2">
                <Link
                  href="mailto:info@renuir.com"
                  className="text-primary-400 hover:text-white transition-colors"
                >
                  info@renuir.com
                </Link>
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-2">
              <Link
                href="https://twitter.com/renuir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/renuir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/renuir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#waitlist"
                  className="hover:text-white transition-colors"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">
              Support & Legal
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-white transition-colors"
                >
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-white transition-colors"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-6">
            <span>© 2025 Renuir UG. All rights reserved.</span>
            <Link
              href="/imprint"
              className="hover:text-white transition-colors"
            >
              Imprint
            </Link>
          </div>

          <div className="flex gap-6">
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
