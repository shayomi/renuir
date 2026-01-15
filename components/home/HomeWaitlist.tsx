"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../Variants";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const EarlyAccessSection = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      toast.success("You're on the waitlist 🎉", {
        description: "We’ll notify you when early access is ready.",
      });

      form.reset();
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="waitlist"
      className="bg-white py-20 md:py-28 border-t border-gray-100"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="app-container max-w-2xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
          <Sparkles className="h-4 w-4 text-primary-600" />
          <span className="text-sm font-semibold text-primary-700">
            Be the first to know when we launch
          </span>
        </div>

        <Typography
          variant="h2"
          className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-5 tracking-tight"
        >
          Ready to Renuir?
        </Typography>

        <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed">
          Join the waitlist today for early access and exclusive updates. No
          spam, just progress.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        disabled={loading}
                        className="pl-12 h-14 text-base rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 bg-gray-50 focus:bg-white shadow-sm transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-14 px-8 text-base font-bold rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join the list"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </form>
        </Form>

        <p className="mt-6 text-sm text-gray-400">
          Join 500+ people already on the waitlist.
        </p>
      </motion.div>
    </section>
  );
};
