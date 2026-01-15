import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips | Renuir",
  description: "Safety guidelines for meeting and returning lost items",
};

export default function SafetyPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Safety Tips
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Your safety is our priority. Please follow these guidelines when using
          Renuir.
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-10">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            1. Meeting in Person
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you've found an item and are coordinating a return directly with
            the owner, please keep these safety tips in mind:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium">
            <li>
              <strong>Meet in a Public Place:</strong> Always choose a well-lit,
              high-traffic public area for the meeting, such as a coffee shop,
              police station lobby, or a busy mall.
            </li>
            <li>
              <strong>Don't Go Alone:</strong> If possible, bring a friend or
              family member with you to the meeting.
            </li>
            <li>
              <strong>Share Your Plans:</strong> Let someone know where you are
              going, who you are meeting, and when you expect to be back.
            </li>
            <li>
              <strong>Stay Alert:</strong> Trust your instincts. If something
              feels wrong, don't hesitate to cancel the meeting or leave.
            </li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-100 pt-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            2. Verification
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Before meeting or sending an item, always use our platform to verify
            ownership:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium">
            <li>
              <strong>Detailed Matching:</strong> Ensure the description and
              photos provided by the owner match the item you found.
            </li>
            <li>
              <strong>Ownership Questions:</strong> Use the platform to ask
              specific questions that only the owner would know (e.g., "What was
              the wallpaper on the phone?").
            </li>
            <li>
              <strong>Never Share Personal Sensitive Data:</strong> Do not share
              passwords, financial information, or your home address through the
              platform.
            </li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-100 pt-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            3. Shipping Items
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you choose to have an item shipped:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium">
            <li>
              <strong>Use Trackable Shipping:</strong> Always use a shipping
              method that provides a tracking number.
            </li>
            <li>
              <strong>Insurance:</strong> For valuable items, consider
              purchasing shipping insurance.
            </li>
            <li>
              <strong>Platform Payments:</strong> For shipping costs, always
              coordinate through our secure platform to avoid scams.
            </li>
          </ul>
        </section>

        <section className="bg-orange-50 border border-orange-100 rounded-2xl p-8 mt-12">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Important Warning
          </h3>
          <p className="text-orange-800 leading-relaxed font-medium">
            Renuir will never ask you for your password or financial information
            via email or text. If you receive suspicious requests, please report
            them to{" "}
            <a href="mailto:safety@renuir.com" className="underline font-bold">
              safety@renuir.com
            </a>{" "}
            immediately.
          </p>
        </section>
      </div>
    </div>
  );
}
