import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { PRICING_PLANS, FAQS } from "@/lib/constants";
import { SchemaMarkup } from "@/components/schema-markup";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_URL,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV Subscriptions & Pricing Plans",
  description:
    "Choose an IPTV plan from $30/month. 3, 6, 12 or 24-month options. 15,000+ channels, HD & 4K quality, 24/7 support. Free 24-hour trial. No contracts.",
  alternates: { canonical: "/subscriptions" },
};

export default function SubscriptionsPage() {
  const schemas = [
    generateWebPageSchema(
      "IPTV Subscriptions & Pricing Plans",
      "Choose an IPTV plan from $30/month. 3, 6, 12 or 24-month options. 15,000+ channels, HD & 4K quality, 24/7 support. Free 24-hour trial. No contracts.",
      `${SITE_URL}/subscriptions`
    ),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Subscriptions", url: `${SITE_URL}/subscriptions` },
    ]),
  ];

  if (FAQS.length > 0) {
    schemas.push(generateFAQSchema(FAQS));
  }

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="IPTV Subscriptions"
        subtitle="Simple, honest pricing. No hidden fees, no auto-renewals, no contracts. Pick the plan that fits your budget and viewing habits."
        breadcrumbs={[{ label: "Subscriptions" }]}
      />

      {/* Plans */}
      <section className="py-16 md:py-20" aria-label="Subscription plans">
        <div className="container-box">
          {/* Value callout */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "Free 24-hour trial",
              "No auto-renewals",
              "15,000+ channels included",
              "Upgrade anytime",
            ].map((text) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]"
              >
                <svg
                  className="h-3.5 w-3.5 text-[var(--success)]"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                {text}
              </span>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Comparison note */}
          <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
            All plans include the same full channel lineup and VOD library. Higher tiers add
            better support priority, extended catch-up, and exclusive features.
          </p>
        </div>
      </section>

      <FAQAccordion
        faqs={FAQS}
        title="Subscription Questions"
        subtitle="Common questions about plans, billing, and getting started."
      />

      <CTASection
        title="Not sure which plan is right for you?"
        description="Start with a free 24-hour trial — no credit card needed. Our support team is available 24/7 to help you pick the right plan."
      />
    </>
  );
}
