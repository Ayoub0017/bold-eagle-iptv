import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Shield,
  Zap,
  Tv,
  Monitor,
  Film,
  Smartphone,
  CalendarDays,
  Headphones,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/sections/PricingCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import {
  PRICING_PLANS,
  WHATSAPP_NUMBER,
  PLAN_WHY_CHOOSE,
  PLAN_FAQS,
  TESTIMONIALS,
} from "@/lib/constants";
import { SchemaMarkup } from "@/components/schema-markup";
import {
  generateProductSchema,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_URL,
} from "@/lib/schema";

/* ── Static generation ── */
export function generateStaticParams() {
  return PRICING_PLANS.map((plan) => ({ slug: plan.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = PRICING_PLANS.find((p) => p.id === slug);
  if (!plan) return { title: "Plan Not Found" };

  return {
    title: `${plan.name} Plan - ${plan.duration} IPTV Subscription`,
    description: `Get the Bald Eagle Streamz ${plan.name} plan — ${plan.duration} of premium IPTV for just $${plan.price} ($${plan.perMonth.toFixed(2)}/mo). ${plan.features.slice(0, 4).join(", ")}. Free 24-hour trial.`,
    alternates: { canonical: `/subscriptions/${plan.id}` },
  };
}

/* ── Feature icon map for the included features grid ── */
const PLAN_FEATURE_DETAILS = [
  { icon: Tv, title: "15,000+ Live TV Channels", description: "Access channels from around the world — sports, news, entertainment, kids, music, and more, all in real time." },
  { icon: Film, title: "50,000+ Movies & Series", description: "A massive VOD library updated weekly with the latest blockbusters, classic films, and binge-worthy series." },
  { icon: Monitor, title: "HD, FHD & 4K Quality", description: "Crystal-clear picture quality on every screen. 4K available on 6-month plans and above." },
  { icon: Smartphone, title: "1 Active Connection", description: "Use your subscription on the device of your choice — Smart TV, phone, tablet, PC, or Fire Stick." },
  { icon: Zap, title: "Anti-Freeze Technology", description: "Our high-performance server infrastructure eliminates buffering for smooth, uninterrupted streaming." },
  { icon: Headphones, title: "24/7 Customer Support", description: "Our expert team is available around the clock via chat, email, or WhatsApp to help with any issue." },
  { icon: CalendarDays, title: "EPG TV Guide", description: "Browse the real-time program guide directly in your IPTV player so you never miss your favorite shows." },
  { icon: Film, title: "Full VOD Library Access", description: "Stream on-demand content instantly at any time — movies, series, and documentaries in multiple languages." },
];

const PLAN_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  "3-months": {
    src: "/images/3-months-iptv-subscription.png",
    alt: "3 months IPTV subscription — casual streaming setup with Smart TV in a cozy living room",
  },
  "6-months": {
    src: "/images/6-months-iptv-subscription.png",
    alt: "6 months IPTV subscription — 4K Ultra HD Smart TV and tablet streaming cinematic content",
  },
  "12-months": {
    src: "/images/12-months-iptv-subscription.png",
    alt: "12 months IPTV subscription — premium family entertainment center with live sports streaming",
  },
  "24-months": {
    src: "/images/24-months-iptv-subscription.png",
    alt: "24 months IPTV subscription — ultimate home theater with multi-device 4K streaming setup",
  },
};

export default async function PlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = PRICING_PLANS.find((p) => p.id === slug);
  if (!plan) notFound();

  const whyChoose = PLAN_WHY_CHOOSE[plan.id] ?? [];
  const planFaqs = PLAN_FAQS[plan.id] ?? [];
  const otherPlans = PRICING_PLANS.filter((p) => p.id !== plan.id);

  const prefilledMessage = encodeURIComponent(
    `Hello! I would like to subscribe to the ${plan.duration} (${plan.name}) IPTV plan for $${plan.price}.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${prefilledMessage}`;

  const freeTrialMessage = encodeURIComponent(
    "Hello! I would like to request a free 24-hour IPTV trial."
  );
  const freeTrialUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${freeTrialMessage}`;

  const planUrl = `${SITE_URL}/subscriptions/${plan.id}`;
  const planImage = PLAN_HERO_IMAGES[plan.id]?.src ? `${SITE_URL}${PLAN_HERO_IMAGES[plan.id].src}` : `${SITE_URL}/images/plan-hero.png`;
  
  const schemas = [
    generateWebPageSchema(
      `${plan.name} Plan - ${plan.duration} IPTV Subscription`,
      `Get the Bald Eagle Streamz ${plan.name} plan — ${plan.duration} of premium IPTV for just $${plan.price} ($${plan.perMonth.toFixed(2)}/mo).`,
      planUrl
    ),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Subscriptions", url: `${SITE_URL}/subscriptions` },
      { name: plan.name, url: planUrl },
    ]),
    generateProductSchema({
      name: `${plan.name} IPTV Plan (${plan.duration})`,
      description: plan.description,
      price: plan.price,
      url: planUrl,
      imageUrl: planImage,
      sku: plan.id,
      reviews: TESTIMONIALS.map((t) => ({
        author: t.author,
        reviewBody: t.quote,
        ratingValue: t.rating,
      })),
    }),
    generateServiceSchema({
      name: `${plan.name} IPTV Subscription Service`,
      description: plan.description,
      url: planUrl,
    }),
  ];

  if (planFaqs.length > 0) {
    schemas.push(generateFAQSchema(planFaqs));
  }

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      {/* ═══════════════════════════════════════════
          HERO — 2-Column: Image + Price/CTA
          ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16 md:py-24 section-dark"
        aria-label="Plan hero"
      >
        {/* Accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(229,9,20,0.1) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 100%, rgba(229,9,20,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="container-box relative">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-10"
          >
            <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">Home</Link>
            <span className="text-[var(--border-strong)]">/</span>
            <Link href="/subscriptions" className="hover:text-[var(--text-secondary)] transition-colors">Subscriptions</Link>
            <span className="text-[var(--border-strong)]">/</span>
            <span className="text-[var(--text-secondary)]">{plan.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column — Image */}
            <div className="relative aspect-[4/3] rounded-[var(--radius-2xl)] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-elevated)]">
              <Image
                src={PLAN_HERO_IMAGES[plan.id]?.src ?? "/images/plan-hero.png"}
                alt={PLAN_HERO_IMAGES[plan.id]?.alt ?? `${plan.name} IPTV subscription`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              {/* Subtle gradient overlay on the image */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(229,9,20,0.08) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Right Column — Text + CTA */}
            <div>
              {plan.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-muted)] border border-[rgba(229,9,20,0.3)] px-4 py-1.5 text-xs font-semibold text-[var(--accent)] mb-5">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </span>
              )}

              <h1 className="heading-display heading-1 text-balance mb-4">
                {plan.duration} IPTV{" "}
                <span className="gradient-text">Subscription</span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
                Just ${plan.perMonth.toFixed(2)}/month. Full access to all channels, movies, and series in crystal-clear quality.
              </p>

              {/* Price block */}
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-6xl font-bold tracking-tight text-[var(--text-primary)]">
                    ${plan.price}
                  </span>
                  <span className="text-xl text-[var(--text-secondary)] mb-2 font-medium">
                    / {plan.duration.toLowerCase()}
                  </span>
                </div>
                <p className="text-sm text-[var(--success)] font-medium">
                  That&rsquo;s just ${plan.perMonth.toFixed(2)} per month — billed once
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="xl" className="shadow-[var(--shadow-accent)] hover:shadow-[0_0_24px_rgba(229,9,20,0.5)] transition-shadow" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group">
                    Subscribe via WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button variant="secondary" size="xl" asChild>
                  <a href={freeTrialUrl} target="_blank" rel="noopener noreferrer">
                    Get a Free Trial
                  </a>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {["Instant activation", "No auto-renewal", "24/7 support", "Cancel anytime"].map(
                  (text) => (
                    <span key={text} className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                      <svg className="h-3.5 w-3.5 text-[var(--success)]" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      {text}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES INCLUDED
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" aria-label="Features included">
        <div className="container-box">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              What&rsquo;s Included
            </p>
            <h2 className="heading-display heading-2 text-balance mb-4">
              Your {plan.duration} plan includes all these features
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Every feature you need for a premium IPTV experience — included from day one.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLAN_FEATURE_DETAILS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 group hover:border-[var(--border-strong)] transition-all duration-200">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent-muted)] text-[var(--accent)] transition-colors group-hover:bg-[rgba(229,9,20,0.15)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE THIS PLAN
          ═══════════════════════════════════════════ */}
      {whyChoose.length > 0 && (
        <section className="py-20 md:py-28 bg-[var(--bg-surface)] section-dark" aria-label="Why choose this plan">
          <div className="container-box">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                Why This Plan
              </p>
              <h2 className="heading-display heading-2 text-balance mb-4">
                Here&rsquo;s why the {plan.name} plan is right for you
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {whyChoose.map(({ title, description }, i) => (
                <div key={title} className="card p-8 text-center group hover:border-[var(--accent)] transition-colors">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          PLAN COMPARISON
          ═══════════════════════════════════════════ */}
      <section id="comparison" className="py-20 md:py-28" aria-label="Compare plans">
        <div className="container-box">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              Compare Plans
            </p>
            <h2 className="heading-display heading-2 text-balance mb-4">
              Choose the plan that best fits your needs
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              All plans include the same full channel lineup and VOD library. Higher tiers add better support, extended catch-up, and exclusive features.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((p) => (
              <PricingCard key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[var(--bg-surface)]" aria-label="Customer reviews">
        <div className="container-box">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              Customer Stories
            </p>
            <h2 className="heading-display heading-2 text-balance mb-4">
              What our subscribers say
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
              Join thousands of happy subscribers worldwide.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <figure key={t.id} className="card p-6 flex flex-col gap-4">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[var(--warning)]" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] text-sm font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{t.author}</p>
                    <p className="text-xs text-[var(--text-muted)]">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PLAN-SPECIFIC FAQ
          ═══════════════════════════════════════════ */}
      {planFaqs.length > 0 && (
        <FAQAccordion
          faqs={planFaqs}
          title={`${plan.name} Plan Questions`}
          subtitle={`Everything you need to know about the ${plan.duration} subscription.`}
        />
      )}

      {/* ═══════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════ */}
      <CTASection
        title={`Ready to start with the ${plan.name} plan?`}
        description={`Get ${plan.duration} of unlimited IPTV streaming for just $${plan.price}. Start with a free trial today — no credit card needed.`}
      />
    </>
  );
}
