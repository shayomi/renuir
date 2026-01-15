import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Renuir",
  description: "Renuir's commitment to accessibility and digital inclusion",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Accessibility Statement
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Commitment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Renuir is committed to ensuring digital accessibility for people
            with disabilities. We are continually improving the user experience
            for everyone and applying the relevant accessibility standards to
            ensure that our platform is inclusive and easy to use.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Conformance Status
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) defines requirements
            for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A,
            Level AA, and Level AAA. Renuir is partially conformant with WCAG
            2.1 level AA. Partially conformant means that some parts of the
            content do not fully conform to the accessibility standard.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Feedback</h3>
          <p className="text-gray-700 leading-relaxed">
            We welcome your feedback on the accessibility of Renuir. Please let
            us know if you encounter accessibility barriers on our platform:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700">
              <strong>Email:</strong> accessibility@renuir.com
              <br />
              <strong>Address:</strong> Renuir UG (haftungsbeschränkt), Hönower
              Wiesenweg 57, 10318 Berlin, Germany
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We try to respond to feedback within 5 business days.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Compatibility
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Renuir is designed to be compatible with the following assistive
            technologies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
            <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Keyboard-only navigation</li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900">
            Technical Specifications
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Accessibility of Renuir relies on the following technologies to work
            with the particular combination of web browser and any assistive
            technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
