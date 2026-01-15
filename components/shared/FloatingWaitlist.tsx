"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FloatingWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed it
    const dismissed = localStorage.getItem(
      "renuir-floating-waitlist-dismissed"
    );
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("renuir-floating-waitlist-dismissed", "true");
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-8 left-1/2  z-50 px-4 w-full max-w-2xl animate-slide-up">
      <div className="bg-gray-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] px-6 py-4 flex items-center justify-between gap-6 border border-white/10 ring-1 ring-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 shadow-lg shadow-primary-600/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <p className="text-white font-bold text-base md:text-lg tracking-tightest">
            Don&apos;t miss early access
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/#waitlist">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl px-8 h-12 shadow-xl shadow-primary-600/20 active:translate-y-0.5 transition-all"
            >
              Join the List
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <button
            onClick={handleDismiss}
            className="text-white/40 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
            aria-label="Dismiss"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
