"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Smartphone } from "lucide-react";

const IOS_STORE_URL =
  process.env.NEXT_PUBLIC_IOS_STORE_URL || "https://apps.apple.com/app/id6758735828";
const ANDROID_STORE_URL =
  process.env.NEXT_PUBLIC_ANDROID_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.renuir.app";

type PostDeepLinkLandingProps = {
  postId: string;
};

const getPreferredStoreUrl = () => {
  if (typeof navigator === "undefined") return IOS_STORE_URL;
  return /android/i.test(navigator.userAgent) ? ANDROID_STORE_URL : IOS_STORE_URL;
};

const isMobileBrowser = () => {
  if (typeof navigator === "undefined") return false;
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
};

export function PostDeepLinkLanding({ postId }: PostDeepLinkLandingProps) {
  const [status, setStatus] = useState<"checking" | "ready" | "not-opened">("checking");
  const [storeUrl, setStoreUrl] = useState(IOS_STORE_URL);
  const appUrl = useMemo(() => `com.renuir.app://post/${encodeURIComponent(postId)}`, [postId]);
  const webUrl = useMemo(() => `https://www.renuir.com/post/${encodeURIComponent(postId)}`, [postId]);

  useEffect(() => {
    setStoreUrl(getPreferredStoreUrl());

    if (!isMobileBrowser()) {
      setStatus("ready");
      return;
    }

    const timer = window.setTimeout(() => {
      window.location.href = appUrl;
      window.setTimeout(() => {
        if (document.visibilityState === "visible") {
          setStatus("not-opened");
        }
      }, 1400);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [appUrl]);

  const handleOpenApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const startedAt = Date.now();
    window.location.href = appUrl;
    window.setTimeout(() => {
      if (document.visibilityState === "visible" && Date.now() - startedAt < 2400) {
        window.location.href = getPreferredStoreUrl();
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-white text-[#15171f]">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-10 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_0.85fr]">
          <div>
            <Image
              src="/images/renuir-logo.png"
              alt="Renuir"
              width={128}
              height={42}
              priority
              className="mb-10 h-auto w-32"
            />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4E7F2] px-3 py-1 text-sm font-medium text-[#636877]">
              <Smartphone className="size-4 text-primary-600" />
              Shared Renuir post
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-[#12141B] sm:text-5xl">
              Open this lost and found post in Renuir.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#636877]">
              This link points to post #{postId}. Open it in the app to view the item, contact the poster,
              or continue after installing Renuir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={appUrl}
                onClick={handleOpenApp}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 text-base font-bold text-white shadow-[0_14px_34px_rgba(37,99,235,0.22)] transition hover:bg-primary-700"
              >
                Open in Renuir
                <ArrowRight className="size-4" />
              </a>
              <a
                href={storeUrl}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#DDE1EF] px-6 text-base font-bold text-[#15171f] transition hover:border-primary-200 hover:bg-primary-50"
              >
                Download app
                <ExternalLink className="size-4" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-primary-700">
              <a href={IOS_STORE_URL} className="hover:underline">
                App Store
              </a>
              <span className="text-[#C1C6D4]">/</span>
              <a href={ANDROID_STORE_URL} className="hover:underline">
                Google Play
              </a>
              <span className="text-[#C1C6D4]">/</span>
              <Link href="/" className="hover:underline">
                Renuir.com
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#8C92A1]" aria-live="polite">
              {status === "checking"
                ? "Checking whether the app can open this post..."
                : status === "not-opened"
                  ? "If the app did not open, install Renuir and return to this link."
                  : `Post link: ${webUrl}`}
            </p>
          </div>

          <div className="rounded-[32px] border border-[#E8EBF5] bg-[#F7F8FC] p-5 shadow-[0_20px_60px_rgba(18,20,27,0.08)]">
            <div className="rounded-[26px] bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded-full bg-primary-600" />
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#8C92A1]">
                    Post #{postId}
                  </p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Smartphone className="size-5" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-2/3 rounded-full bg-[#DDE2F0]" />
                <div className="h-4 w-full rounded-full bg-[#EEF1F7]" />
                <div className="h-4 w-5/6 rounded-full bg-[#EEF1F7]" />
              </div>
              <div className="mt-8 rounded-2xl border border-[#E8EBF5] bg-[#FBFCFF] p-4">
                <p className="text-sm font-bold text-[#15171f]">Continue in app</p>
                <p className="mt-1 text-sm leading-6 text-[#636877]">
                  Renuir keeps the post ID in the link so the app can route directly to the item.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
