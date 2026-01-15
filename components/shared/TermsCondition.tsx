import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Renuir",
  description: "Terms and Conditions for using Renuir's services",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Terms & Conditions
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            1. Introduction
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Renuir. These Terms and Conditions ("Terms") govern your
            use of our website and services (collectively, the "Service"). By
            accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use our
            Service.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            2. Eligibility
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You must be at least 16 years of age to use the Service. By using
            the Service, you represent and warrant that you meet this age
            requirement and have the legal capacity to enter into these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            3. Account Registration
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Some features of the Service may require you to create an account.
            You agree to provide accurate, current, and complete information
            during registration and to update such information as necessary. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            4. Use of Service
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Renuir provides a platform for reporting and matching lost and found
            items. You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Submit false reports or claim items that do not belong to you
            </li>
            <li>Use the Service to facilitate illegal activities</li>
            <li>Impersonate any person or entity</li>
            <li>Upload malicious software or content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the Service or servers</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            5. User Content
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You retain ownership of any content you submit to the Service (such
            as item descriptions and images). By submitting content, you grant
            Renuir a non-exclusive, worldwide, royalty-free license to use,
            display, and process that content for the purpose of providing the
            Service and facilitating lost-and-found matches.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            6. Intellectual Property
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of Renuir UG
            (haftungsbeschränkt) and its licensors. Our trademarks, logos, and
            service marks may not be used without our prior written consent.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            7. Third-Party Services
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Service may contain links to third-party websites or services.
            Renuir does not control and is not responsible for the content,
            privacy policies, or practices of third-party sites. Your use of
            third-party services is at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            8. Disclaimer of Warranties
          </h3>
          <p className="text-gray-700 leading-relaxed">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
            GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR
            ERROR-FREE. WE DO NOT GUARANTEE THE SUCCESSFUL RETURN OF ANY LOST
            ITEM.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            9. Limitation of Liability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, RENUIR AND ITS DIRECTORS,
            EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, AND AFFILIATES SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS,
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
            ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            10. Indemnification
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify, defend, and hold harmless Renuir and its
            officers, directors, employees, and agents from any claims, damages,
            losses, or expenses (including reasonable attorneys' fees) arising
            out of your use of the Service, your violation of these Terms, or
            your violation of any rights of a third party.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            11. Governing Law
          </h3>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of the Federal Republic of Germany, without regard to its
            conflict of law provisions. Any legal action or proceeding arising
            under these Terms shall be brought exclusively in the courts located
            in Berlin, Germany.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            12. Dispute Resolution
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              <strong>Informal Resolution:</strong> Before filing any formal
              legal claim, you agree to contact us at legal@renuir.com to
              attempt to resolve any dispute informally. We will try to resolve
              the dispute within 30 days.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>EU Online Dispute Resolution:</strong> The European
              Commission provides a platform for online dispute resolution (OS)
              available at{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . We are not obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            13. Termination
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We may terminate or suspend your access to the Service immediately,
            without prior notice or liability, for any reason, including without
            limitation if you breach these Terms. Upon termination, your right
            to use the Service will immediately cease.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            14. Severability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary so that these Terms shall otherwise remain
            in full force and effect.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            15. Changes to Terms
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify or replace these Terms at any time.
            We will notify you of any material changes by posting the new Terms
            on this page and updating the "Last updated" date. Your continued
            use of the Service after any such changes constitutes your
            acceptance of the new Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            16. Contact Us
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong> legal@renuir.com
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
