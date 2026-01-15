import Nav from "@/components/navbar/Nav";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FloatingWaitlist } from "@/components/shared/FloatingWaitlist";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      <FloatingWaitlist />
    </div>
  );
}
