import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Island CTA with the nested "button-in-button" trailing icon.
 * Pill shape, spring hover physics, tactile press. Brand blue locked.
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: CtaButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-[15px] font-semibold",
        "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
        isPrimary
          ? "bg-primary-600 text-white shadow-float hover:bg-primary-700"
          : "bg-ink/[0.04] text-ink hover:bg-ink/[0.07] ring-1 ring-ink/[0.06]",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:translate-x-0.5 group-hover:-translate-y-px",
          isPrimary ? "bg-white/15" : "bg-white shadow-soft"
        )}
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </span>
    </Link>
  );
}
