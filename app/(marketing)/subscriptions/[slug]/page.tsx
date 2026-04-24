import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Shield, Zap, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { PRICING_PLANS, FAQS, WHATSAPP_NUMBER } from "@/lib/constants";

// For static generation
export function generateStaticParams() {
  return PRICING_PLANS.map((plan) => ({
    slug: plan.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const plan = PRICING_PLANS.find((p) => p.id === slug);

  if (!plan) {
    return { title: "Plan Not Found" };
  }

  return {
    title: `${plan.name} Plan - ${plan.duration} IPTV Subscription | Bald Eagle Streamz`,
    description: `Get the ${plan.name} IPTV subscription plan for ${plan.duration}. Includes ${plan.features.join(", ").substring(0, 100)}... Stream in HD and 4K today.`,
    alternates: {
      canonical: `/subscriptions/${plan.id}`,
    },
  };
}

export default async function PlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = PRICING_PLANS.find((p) => p.id === slug);

  if (!plan) {
    notFound();
  }

  const prefilledMessage = encodeURIComponent(
    `Hello! I would like to subscribe to the ${plan.duration} (${plan.name}) IPTV plan for $${plan.price}.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${prefilledMessage}`;

  return (
    <>
      <PageHeader
        title={`${plan.duration} IPTV Subscription`}
        subtitle={`Subscribe for ${plan.duration} and enjoy uninterrupted premium streaming.`}
        breadcrumbs={[
          { label: "Subscriptions", href: "/subscriptions" },
          { label: plan.name },
        ]}
      />

      <section className="py-16 md:py-24" aria-label="Plan details">
        <div className="container-box">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            
            {/* Left Col: Plan Overview */}
            <div className="flex flex-col gap-8">
              <div>
                {plan.badge && (
                  <span className="inline-block rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--accent)] mb-4">
                    {plan.badge}
                  </span>
                )}
                <h2 className="heading-display heading-2 mb-4">
                  Everything included in <br />
                  <span className="text-[var(--accent)]">{plan.name}</span>
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {plan.description}. Get access to thousands of live channels, movies, and TV shows in crystal-clear quality.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-subtle)] text-[var(--text-primary)]">
                    <Tv className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Instant Access</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Delivered to your email instantly.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-subtle)] text-[var(--text-primary)]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Anti-Freeze</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Server stability 99.9% uptime.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-subtle)] text-[var(--text-primary)]">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Secure Payment</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Safe transactions via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Checkout Card */}
            <div className="card border-[var(--accent)] shadow-[var(--shadow-accent)] p-8 lg:p-10 sticky top-28">
              <div className="mb-8 border-b border-[var(--border)] pb-8">
                <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Order Summary
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                    ${plan.price}
                  </span>
                  <span className="text-[var(--text-secondary)] mb-1 font-medium">
                    / {plan.duration.toLowerCase()}
                  </span>
                </div>
                <p className="text-sm text-[var(--success)] font-medium">
                  That's just ${plan.perMonth.toFixed(2)} per month!
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="xl" className="w-full text-lg shadow-[var(--shadow-accent)] hover:shadow-[0_0_24px_rgba(229,9,20,0.5)] transition-shadow" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Subscribe via WhatsApp
                </a>
              </Button>
              <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
                Our support team will send your credentials immediately after payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={FAQS} />

      {/* Global CTA */}
      <CTASection />
    </>
  );
}
