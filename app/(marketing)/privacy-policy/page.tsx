import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — Bald Eagle Streamz",
  description:
    "Read Bald Eagle Streamz's Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with applicable privacy regulations.",
  robots: { index: false },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 md:py-20" aria-label="Privacy policy content">
        <div className="container-box">
          <div className="mx-auto prose-legal">
            <p>
              Bald Eagle Streamz (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our service. Please read
              this policy carefully.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>1.1 Information You Provide</h3>
            <p>
              When you create an account, subscribe to a plan, or contact support, we may collect:
            </p>
            <ul>
              <li>Name and email address</li>
              <li>Billing information (processed securely through our payment providers)</li>
              <li>Support communications and correspondence</li>
              <li>Device type and connection preferences</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <p>When you access our service, we may automatically collect:</p>
            <ul>
              <li>IP address and approximate geographic location</li>
              <li>Browser type, device type, and operating system</li>
              <li>Pages visited and features used</li>
              <li>Connection timestamps and session duration</li>
              <li>Error logs and performance data</li>
            </ul>

            <h3>1.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze
              usage patterns, and remember your preferences. You may control cookie settings through
              your browser. Disabling cookies may limit certain functionality.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our streaming service</li>
              <li>Process payments and manage your subscription</li>
              <li>Send transactional emails (receipts, renewal reminders, support responses)</li>
              <li>Respond to customer support requests</li>
              <li>Detect fraud, abuse, and security incidents</li>
              <li>Comply with legal obligations</li>
              <li>Send promotional emails (only with your explicit consent)</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share your
              data with third parties only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Payment processors, email delivery services, and
                analytics providers that operate under strict data protection agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or
                governmental authority.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale
                of business assets, with appropriate notice to users.
              </li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account remains active or as needed
              to provide you services. Billing records are retained for 7 years to comply with
              financial regulations. You may request deletion of your account data at any time
              by contacting support.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your personal
              data:
            </p>
            <ul>
              <li>The right to access the personal data we hold about you</li>
              <li>The right to correct inaccurate or incomplete data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to object to or restrict certain processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@boldeagleiptv.com">privacy@boldeagleiptv.com</a>.
            </p>

            <h2>6. Security</h2>
            <p>
              We implement industry-standard security measures including 256-bit SSL encryption,
              secure data centers, and regular security audits. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Children&rsquo;s Privacy</h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with personal
              information, contact us immediately and we will delete it.
            </p>

            <h2>8. International Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your own. We
              ensure adequate protection for such transfers through Standard Contractual Clauses or
              equivalent mechanisms.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo;
              date. Continued use of the service after changes constitutes acceptance of the updated
              policy.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@boldeagleiptv.com">privacy@boldeagleiptv.com</a></li>
              <li>Support portal: <a href="/contact">boldeagleiptv.com/contact</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
