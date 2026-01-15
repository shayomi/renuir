import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Renuir",
  description: "Renuir's Privacy Policy detailing how we handle your data",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Privacy Policy
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">
            At Renuir, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our mobile
            application.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            1. Information We Collect
          </h3>

          <div className="space-y-3">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Personal Data
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We collect personally identifiable information, such as your
                name, email address, and telephone number, only when you
                voluntarily provide it to us (e.g., when joining the waitlist or
                reporting an item).
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Item Data
              </h4>
              <p className="text-gray-700 leading-relaxed">
                When you report a lost or found item, we collect descriptions,
                images, and location data related to that item to facilitate
                matching.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Automatically Collected Data
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We automatically collect certain information when you visit our
                website, including your IP address, browser type, operating
                system, referring URLs, and information about how you interact
                with our Service.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Facilitate the matching of lost and found items</li>
            <li>Communicate with you regarding your reports or account</li>
            <li>Improve our matching algorithms (using anonymized data)</li>
            <li>Prevent fraudulent activity</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send you updates about our services (with your consent)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            3. Disclosure of Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal data. We may share your information
            with verified business partners (e.g., the airport or hotel where
            you lost an item) strictly for the purpose of reuniting you with
            your property. Contact details are only shared after a confirmed
            match and your explicit consent.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            4. Data Retention
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy. Lost and found
            item reports are retained for up to 90 days after resolution.
            Account information is retained until you request deletion.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            5. Data Security
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal data against unauthorized access,
            alteration, disclosure, or destruction. This includes encryption of
            data in transit and at rest, regular security assessments, and
            access controls.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            6. Your Rights Under GDPR (EU/EEA Residents)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you are located in the European Union or European Economic Area,
            you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Right of Access:</strong> Request a copy of your personal
              data
            </li>
            <li>
              <strong>Right to Rectification:</strong> Request correction of
              inaccurate data
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request deletion of your
              personal data
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> Request limitation
              of how we use your data
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Receive your data in a
              structured, machine-readable format
            </li>
            <li>
              <strong>Right to Object:</strong> Object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at
              any time where processing is based on consent
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            7. Your Rights Under CCPA (California Residents)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you are a California resident, the California Consumer Privacy
            Act (CCPA) provides you with the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Right to Know:</strong> Request information about the
              categories and specific pieces of personal information we have
              collected
            </li>
            <li>
              <strong>Right to Delete:</strong> Request deletion of your
              personal information
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> Opt-out of the sale of your
              personal information (note: we do not sell personal information)
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising your privacy rights
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            8. International Data Transfers
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Your information may be transferred to and processed in countries
            other than your country of residence. We ensure appropriate
            safeguards are in place to protect your data in accordance with this
            Privacy Policy, including Standard Contractual Clauses approved by
            relevant authorities.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            9. Children&apos;s Privacy
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our Service is not directed to individuals under the age of 16. We
            do not knowingly collect personal information from children. If you
            become aware that a child has provided us with personal data, please
            contact us.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            10. Contact Us
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you have questions about this Privacy Policy or wish to exercise
            your rights, please contact our Data Protection Officer:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@renuir.com
              <br />
              <strong>Address:</strong> Renuir UG (haftungsbeschränkt)
              <br />
              Hönower Wiesenweg 57, 10318 Berlin, Germany
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
