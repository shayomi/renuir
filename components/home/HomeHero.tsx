"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { CheckCircleIcon, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeIn } from "../Variants";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const HomeHero = () => {
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

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="bg-white pt-20 md:pt-24 pb-10 md:pb-16 overflow-hidden">
      <div ref={containerRef} className="app-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="flex-1 lg:flex-[0.55] space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
            >
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Waitlist now open for early access
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typography
                variant="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
              >
                Lost it?
                <br />
                <span className="text-primary-600">Renuir it.</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Typography
                variant="p"
                className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg"
              >
                The modern lost & found platform that actually works. Report
                once, and we&apos;ll search everywhere for you in real time.
              </Typography>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                            <Input
                              {...field}
                              disabled={loading}
                              placeholder="Enter your email"
                              className="pl-12 h-14 text-base rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 bg-white shadow-sm transition-all placeholder:text-gray-400"
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
                    className="h-14 px-8 text-base font-bold rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? "Joining..." : "Get Early Access"}
                    {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-50 text-primary-600">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <span className="text-gray-700 font-semibold text-base">
                  Smart matching
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-50 text-primary-600">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <span className="text-gray-700 font-semibold text-base">
                  Free for individuals
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.95, x: 20 }
            }
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex-1 lg:flex-[0.45] w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="/images/heroo-img.png"
                alt="Renuir platform illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
