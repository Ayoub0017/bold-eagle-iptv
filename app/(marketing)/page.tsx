import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChannelCountBanner } from "@/components/sections/ChannelCountBanner";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PricingCard } from "@/components/sections/PricingCard";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { DevicesSection } from "@/components/sections/DevicesSection";
import { PRICING_PLANS } from "@/lib/constants";
import { SchemaMarkup } from "@/components/schema-markup";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Bald Eagle Streamz — #1 IPTV Provider in the USA",
  },
  description:
    "Bald Eagle Streamz offers 15,000+ live channels & 50,000+ movies in HD & 4K. Best IPTV service in the USA. 50+ countries covered. Start your free trial today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const schemas = [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateWebPageSchema(
      "Bald Eagle Streamz — #1 IPTV Provider in the USA",
      "Bald Eagle Streamz offers 15,000+ live channels & 50,000+ movies in HD & 4K. Best IPTV service in the USA. 50+ countries covered. Start your free trial today.",
      SITE_URL
    ),
    generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }]),
  ];

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <HeroSection />
      <ChannelCountBanner />
      <FeatureGrid />
      <DevicesSection />

      {/* Pricing Preview */}
      <section className="py-20 md:py-28" aria-label="Pricing plans">
        <div className="container-box">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              Pricing
            </p>
            <h2 className="heading-display heading-2 text-balance mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              No hidden fees. No contracts. Cancel anytime.
              Choose the plan that fits your viewing habits.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
