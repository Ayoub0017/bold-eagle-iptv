import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Use — Bald Eagle Streamz",
  description:
    "Read Bald Eagle Streamz's Terms of Use. Understand your rights and obligations when subscribing to and using our IPTV streaming service.",
  robots: { index: false },
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        title="Terms of Use"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <section className="py-16 md:py-20" aria-label="Terms of use content">
        <div className="container-box">
          <div className="mx-auto prose-legal">
            <p>
              Please read these Terms of Use (&ldquo;Terms&rdquo;) carefully before using the Bald Eagle Streamz
              IPTV website and streaming service. By accessing or using our service, you agree to
              be bound by these Terms. If you do not agree, do not use the service.
            </p>

            <h2>1. Service Description</h2>
            <p>
              Bald Eagle Streamz provides a subscription-based Internet Protocol Television (IPTV) service
              that allows subscribers to access live television channels and video-on-demand content
              over the internet. The service is available on a variety of compatible devices.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years of age to use this service. By using the service, you
              represent and warrant that you are of legal age in your jurisdiction and have the legal
              capacity to enter into a binding agreement.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access the service, you must create an account. You agree to provide accurate,
              current, and complete information. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Notifying us immediately of any unauthorized access or security breach</li>
            </ul>
            <p>
              We reserve the right to terminate accounts that violate these Terms or engage in
              fraudulent activity.
            </p>

            <h2>4. Subscriptions and Billing</h2>
            <h3>4.1 Subscription Plans</h3>
            <p>
              We offer subscription plans of 3, 6, 12, and 24 months. Plan details, pricing, and
              features are described on our Subscriptions page and may change from time to time
              with prior notice.
            </p>
            <h3>4.2 Payment</h3>
            <p>
              Payment is due in full at the time of subscription. We accept major credit cards,
              PayPal, and cryptocurrency. All charges are processed securely. By providing payment
              information, you authorize us to charge your selected payment method.
            </p>
            <h3>4.3 No Auto-Renewal</h3>
            <p>
              Subscriptions do not auto-renew. You will receive a reminder email 7 days before
              your subscription expires. You are responsible for renewing before expiry to
              maintain uninterrupted access.
            </p>
            <h3>4.4 Refund Policy</h3>
            <p>
              Refunds are considered on a case-by-case basis. We offer a 24-hour free trial;
              subscribers who use the trial prior to purchasing forfeit their right to a refund
              based on service dissatisfaction. Technical issues that are unresolvable by our
              support team may be eligible for a prorated refund.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Share your subscription credentials with individuals outside your household</li>
              <li>Resell, redistribute, or sublicense access to the service</li>
              <li>Use the service for commercial broadcast or public display</li>
              <li>Circumvent, disable, or interfere with security features</li>
              <li>Access the service through automated tools, scripts, or bots</li>
              <li>Use the service in violation of applicable laws or regulations</li>
            </ul>
            <p>
              Violation of these acceptable use provisions may result in immediate account
              termination without refund.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on our website are owned by
              or licensed to Bald Eagle Streamz. You may not reproduce, distribute, or create derivative
              works without express written permission.
            </p>
            <p>
              The streaming content accessible through the service remains the property of its
              respective rights holders. Bald Eagle Streamz does not claim ownership of third-party content.
            </p>

            <h2>7. Service Availability</h2>
            <p>
              We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled
              maintenance, technical issues, or circumstances beyond our control may cause temporary
              disruptions. We are not liable for service interruptions caused by your internet
              service provider, device issues, or force majeure events.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of
              any kind, express or implied. We disclaim all warranties including merchantability,
              fitness for a particular purpose, and non-infringement to the maximum extent
              permitted by applicable law.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Bald Eagle Streamz shall not be liable for
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of or inability to use the service, even if advised of the possibility of such
              damages. Our total liability shall not exceed the amount paid by you in the 3 months
              preceding the claim.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable law. Any
              disputes arising from these Terms shall be resolved through binding arbitration or
              in the courts of the jurisdiction in which Bald Eagle Streamz operates, as permitted
              by law.
            </p>

            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes become effective
              upon posting. Your continued use of the service after changes constitutes acceptance.
              We will notify subscribers of material changes by email.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may suspend or terminate your account at our sole discretion, with or without
              notice, for conduct that violates these Terms or is harmful to other users, us, or
              third parties. Upon termination, your right to use the service ceases immediately.
            </p>

            <h2>13. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@baldeaglestreamz.com">legal@baldeaglestreamz.com</a> or through
              our <a href="/contact">support portal</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
