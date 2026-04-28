import type { Metadata } from "next";
import { Mail, Clock, MessageSquare, MessageCircle } from "lucide-react";

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { SchemaMarkup } from "@/components/schema-markup";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";

const CONTACT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I need help with my IPTV subscription.")}`;

export const metadata: Metadata = {
  title: "Contact 24/7 Support",
  description:
    "Need help with your IPTV subscription? Contact Bald Eagle Streamz's 24/7 support team via live chat or email. Average response time under 15 minutes.",
  alternates: { canonical: "/contact" },
};

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email Support",
    value: "support@baldeaglestreamz.com",
    description: "For billing, account, and general inquiries",
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available 24/7",
    description: "Fastest response — start a chat from any page",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Under 15 minutes",
    description: "Average first response time across all channels",
  },
  {
    icon: IconX,
    label: "Twitter / X",
    value: "@BaldEagleStreamz",
    description: "For quick updates and announcements",
  },
];

export default function ContactPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema(
      "Contact 24/7 Support",
      "Need help with your IPTV subscription? Contact Bald Eagle Streamz's 24/7 support team via live chat or email.",
      `${SITE_URL}/contact`,
      "ContactPage"
    ),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Contact", url: `${SITE_URL}/contact` },
    ]),
  ];

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <PageHeader
        title="Get in Touch"
        subtitle="Our support team is available 24/7. Whether you need setup help, have a billing question, or just want to explore your options — we're here."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-20" aria-label="Contact information">
        <div className="container-box">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Direct Contact */}
            <div className="flex flex-col justify-center bg-[var(--bg-subtle)] p-8 rounded-[var(--radius-2xl)] border border-[var(--border)] h-full">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Send us a message on WhatsApp
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
                For the fastest response, reach out to us directly on WhatsApp. Our support team is available 24/7 and typically replies within minutes.
              </p>
              <Button variant="primary" size="xl" className="w-full sm:w-auto" asChild>
                <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5c] text-white border-none">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Other ways to reach us
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Prefer a direct line? Here are all the ways to get support.
              </p>

              <div className="flex flex-col gap-4">
                {CONTACT_METHODS.map(({ icon: Icon, label, value, description }) => (
                  <div
                    key={label}
                    className="card flex items-start gap-4 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent-muted)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {value}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support note */}
              <div className="mt-6 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg-subtle)] p-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-semibold text-[var(--text-primary)]">
                    New customer?
                  </span>{" "}
                  Ask us about our free 24-hour trial. We&rsquo;ll set you up with test
                  credentials so you can verify our service works perfectly on your devices
                  before committing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
