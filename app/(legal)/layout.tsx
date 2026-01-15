"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-24 md:pt-32 pb-24 app-container">
        {children}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Button
            variant="link"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
