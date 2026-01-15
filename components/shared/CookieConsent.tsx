"use client";
import React, { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import Link from "next/link";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("renuir-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consentData = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const consentData = {
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden ring-1 ring-gray-900/5">
          {!showPreferences ? (
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex w-14 h-14 bg-primary-50 rounded-2xl items-center justify-center shrink-0 border border-primary-100 shadow-sm">
                  <Cookie className="w-7 h-7 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We use cookies to enhance your browsing experience and
                    analyze our traffic. By clicking &quot;Accept All&quot;, you
                    consent to our use of cookies. Read our{" "}
                    <Link
                      href="/cookies"
                      className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-bold transition-colors"
                    >
                      Cookie Policy
                    </Link>{" "}
                    for more information.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 active:translate-y-0.5"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectNonEssential}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all active:translate-y-0.5"
                    >
                      Essential Only
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-3 text-gray-500 rounded-xl font-bold text-sm hover:text-gray-900 transition-all flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleRejectNonEssential}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  aria-label="Close cookie banner"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900 tracking-tightest">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      Essential Cookies
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      Required for the website to function properly
                    </p>
                  </div>
                  <div className="px-3 py-1.5 bg-gray-200 text-gray-600 rounded-lg text-xs font-black uppercase tracking-wider">
                    Always On
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      Help us understand how visitors interact with our site
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      Functional Cookies
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      Enable enhanced functionality and personalization
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          functional: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 active:translate-y-0.5"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all active:translate-y-0.5"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
