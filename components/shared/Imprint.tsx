import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Renuir",
  description: "Legal imprint information for Renuir UG",
};

export default function ImprintPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Imprint
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Legal information according to German law
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Information according to § 5 TMG
          </h3>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 font-medium">
              <strong>Renuir UG (haftungsbeschränkt)</strong>
              <br />
              Hönower Wiesenweg 57
              <br />
              10318 Berlin
              <br />
              Germany
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Contact</h3>
          <p className="text-gray-700 leading-relaxed">
            Email:{" "}
            <a
              href="mailto:info@renuir.com"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              info@renuir.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Register Entry
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Registered in the Commercial Register (Handelsregister)
            <br />
            Register Court: Amtsgericht Berlin-Charlottenburg
            <br />
            Registration Number: HRB [pending]
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">VAT ID</h3>
          <p className="text-gray-700 leading-relaxed">
            VAT identification number according to § 27a Umsatzsteuergesetz:
            <br />
            [pending registration]
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Responsible for Content (§ 55 Abs. 2 RStV)
          </h3>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 font-medium">
              Renuir UG (haftungsbeschränkt)
              <br />
              Hönower Wiesenweg 57
              <br />
              10318 Berlin, Germany
            </p>
          </div>
        </section>

        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900">
            EU Dispute Resolution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The European Commission provides a platform for online dispute
            resolution (OS):{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are not willing or obliged to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>
        </section>
      </div>
    </div>
  );
}
