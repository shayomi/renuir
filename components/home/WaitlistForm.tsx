"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type WaitlistFormProps = {
  className?: string;
  cta?: string;
  align?: "start" | "center";
};

export function WaitlistForm({
  className,
  cta = "Get early access",
  align = "start",
}: WaitlistFormProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });
      if (!res.ok) throw new Error("Submission failed");

      setDone(true);
      toast.success("You're on the list", {
        description: "We'll email you the moment early access opens.",
      });
      form.reset();
      setTimeout(() => setDone(false), 4000);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("w-full max-w-md", className)}
      >
        {/* Single pill enclosure: input + submit share one machined surface */}
        <div
          className={cn(
            "flex items-center gap-2 rounded-full bg-white p-1.5 shadow-soft",
            "ring-1 ring-ink/[0.07] transition-shadow duration-500",
            "focus-within:ring-2 focus-within:ring-primary-600/40"
          )}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    disabled={loading}
                    aria-label="Email address"
                    placeholder="you@example.com"
                    className="h-11 border-0 bg-transparent pl-4 text-[15px] text-ink shadow-none placeholder:text-ink/40 focus-visible:ring-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button
            type="submit"
            disabled={loading || done}
            className={cn(
              "flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold text-white",
              "bg-primary-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              "hover:bg-primary-700 active:scale-[0.97] disabled:opacity-70"
            )}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : done ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : null}
            {loading ? "Joining" : done ? "Joined" : cta}
          </button>
        </div>
        <div
          className={cn(
            "min-h-5 px-4 pt-2",
            align === "center" ? "text-center" : "text-left"
          )}
        >
          <FormMessage className="text-[13px]" />
        </div>
      </form>
    </Form>
  );
}
