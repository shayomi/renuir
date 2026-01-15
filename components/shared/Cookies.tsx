import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Renuir",
  description: "How Renuir uses cookies and similar technologies",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Cookies Policy
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            1. What are Cookies?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are stored on your device
            (computer, tablet, or mobile) when you visit a website. They are
            widely used to make websites work, or work more efficiently, as well
            as to provide information to the owners of the site.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            2. How We Use Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We use cookies for several reasons:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the
              website to function properly. They include, for example, cookies
              that enable you to log into secure areas of our website.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> They allow us
              to recognize and count the number of visitors and to see how
              visitors move around our website when they are using it. This
              helps us to improve the way our website works.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These are used to
              recognize you when you return to our website. This enables us to
              personalize our content for you and remember your preferences.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            3. Your Choices
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Most web browsers allow some control of most cookies through the
            browser settings. To find out more about cookies, including how to
            see what cookies have been set, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              className="text-primary-600 hover:underline"
            >
              www.aboutcookies.org
            </a>{" "}
            or{" "}
            <a
              href="https://www.allaboutcookies.org"
              className="text-primary-600 hover:underline"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please note that if you choose to block all cookies (including
            essential cookies), you may not be able to access all or parts of
            our website.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900">
            4. Contact Us
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you have any questions about our use of cookies, please contact
            us at:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 font-medium">
              Email: privacy@renuir.com
              <br />
              Renuir UG (haftungsbeschränkt), Berlin, Germany
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
