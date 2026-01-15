import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description: "Join Renuir's network of partner venues and businesses",
};

export default function PartnerPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Partner with Renuir
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Transform your lost & found operations into a modern, efficient
          service.
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-10">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Why Partner with Us?
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Renuir helps airports, hotels, transit systems, and venues manage
            lost property with ease. Our platform replaces manual logging with a
            smart, automated system that saves time for your staff and provides
            a better experience for your customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Efficiency
              </h4>
              <p className="text-gray-600">
                Reduce the time spent on manual logs and phone inquiries by up
                to 80%.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-gray-600">
                Provide your customers with a modern, transparent way to find
                their lost items.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-600">
                Secure verification process ensures items are returned to their
                rightful owners.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Analytics
              </h4>
              <p className="text-gray-600">
                Gain insights into lost property trends and operational
                performance.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 border-t border-gray-100 pt-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            Become a Partner
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are looking for venues and businesses that want to provide an
            exceptional lost & found service. Whether you're a small boutique
            hotel or a major international airport, Renuir scales to fit your
            needs.
          </p>
          <div className="bg-primary-600 rounded-[2rem] p-8 md:p-12 text-white shadow-xl shadow-primary-200">
            <h4 className="text-2xl md:text-3xl font-black mb-4">
              Interested in a demo?
            </h4>
            <p className="text-primary-100 mb-8 text-lg font-medium">
              Join our business waitlist and our team will reach out to discuss
              how Renuir can help your organization.
            </p>
            <a
              href="/#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-gray-50 transition-all shadow-lg"
            >
              Contact Business Team
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            General Inquiries
          </h3>
          <p className="text-gray-700">
            For partnership inquiries and business development, please contact
            our team at:
            <br />
            <a
              href="mailto:partners@renuir.com"
              className="text-primary-600 font-bold hover:underline"
            >
              partners@renuir.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
