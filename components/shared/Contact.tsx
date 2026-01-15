import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  HelpCircle,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography
          variant="h2"
          className="mb-2 text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl"
        >
          Contact Support
        </Typography>
        <Typography variant="lead" className="text-gray-600 text-lg md:text-xl">
          We're here to help. Reach out to us for any questions, support, or
          inquiries.
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-10">
        {/* Contact Methods */}
        <section className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Get in Touch
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Inquiries */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    General Inquiries
                  </h4>
                  <p className="text-sm text-gray-500">For general questions</p>
                </div>
              </div>
              <a
                href="mailto:info@renuir.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-base"
              >
                info@renuir.com
              </a>
            </div>

            {/* Support */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Support</h4>
                  <p className="text-sm text-gray-500">Technical assistance</p>
                </div>
              </div>
              <a
                href="mailto:support@renuir.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-base"
              >
                support@renuir.com
              </a>
            </div>

            {/* Partnerships */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Partnerships
                  </h4>
                  <p className="text-sm text-gray-500">Business inquiries</p>
                </div>
              </div>
              <a
                href="mailto:partners@renuir.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-base"
              >
                partners@renuir.com
              </a>
            </div>

            {/* Privacy & Legal */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Privacy & Legal
                  </h4>
                  <p className="text-sm text-gray-500">Data protection</p>
                </div>
              </div>
              <a
                href="mailto:privacy@renuir.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-base"
              >
                privacy@renuir.com
              </a>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="space-y-4 border-t border-gray-100 pt-8">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-primary-50 border border-primary-100">
            <Clock className="h-6 w-6 text-primary-600 mt-1 shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Response Time
              </h4>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We aim to respond to all inquiries within{" "}
                <strong>24-48 hours</strong> during business days. For urgent
                matters, please mark your email as urgent and we'll prioritize
                your request.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/#faq"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-all"
            >
              <HelpCircle className="h-5 w-5 text-primary-600 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">
                  Frequently Asked Questions
                </p>
                <p className="text-sm text-gray-500">
                  Find answers to common questions
                </p>
              </div>
            </Link>
            <Link
              href="/safety"
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-all"
            >
              <HelpCircle className="h-5 w-5 text-primary-600 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Safety Tips</p>
                <p className="text-sm text-gray-500">
                  Guidelines for safe item returns
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Social Media */}
        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Follow Us
          </h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Stay connected with us on social media for updates, tips, and news.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/renuir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/renuir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/renuir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Company Info */}
        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Company Information
          </h3>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 font-medium text-base md:text-lg">
              <strong>Renuir UG (haftungsbeschränkt)</strong>
              <br />
              Hönower Wiesenweg 57
              <br />
              10318 Berlin, Germany
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
