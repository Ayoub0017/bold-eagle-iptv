import type { Metadata } from "next";
import { Shield, Globe, Zap, HeartHandshake, Trophy, Users } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Bold Eagle IPTV — American IPTV Provider",
  description:
    "Bold Eagle IPTV is a trusted American IPTV provider with 15,000+ channels and 50,000+ VOD titles. Learn about our mission, values, and story.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Reliability First",
    description:
      "Our infrastructure is built for 99.9% uptime. We run redundant servers across multiple regions so your stream never drops during the moments that matter.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "From North America to the Middle East, Europe to Asia — we deliver channels from 50+ countries with full localization and regional programming.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "Anti-freeze technology, adaptive bitrate streaming, and a modern CDN ensure the highest quality signal regardless of your connection speed.",
  },
  {
    icon: HeartHandshake,
    title: "Real Human Support",
    description:
      "No bots. Our 24/7 support team is composed of real streaming experts who can resolve setup issues, answer billing questions, and guide you through any problem.",
  },
  {
    icon: Trophy,
    title: "Premium Content",
    description:
      "We continuously expand our library — adding new channels, refreshing the VOD catalog weekly, and partnering with more content providers every quarter.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our roadmap is shaped by subscriber feedback. The features our customers request become our priorities — not the other way around.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    event: "Bold Eagle IPTV is founded with 2,000 channels and a small but dedicated subscriber base.",
  },
  {
    year: "2020",
    event: "Expanded to 5,000+ channels and launched VOD library with 15,000+ titles. First international markets added.",
  },
  {
    year: "2022",
    event: "Crossed 15,000 live channels. Launched Anti-Freeze technology and EPG guide. 4K streaming introduced.",
  },
  {
    year: "2024",
    event: "VOD library reached 50,000+ titles. Support expanded to 24/7 live chat. Now serving 50+ countries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Bold Eagle IPTV"
        subtitle="Bold Eagle IPTV is an American IPTV provider that offers 15,000+ live channels, 50,000+ movies and series, and crystal-clear HD & 4K streaming — all with 24/7 live support and no long-term contracts."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Mission */}
      <section className="py-20 md:py-28" aria-label="Mission statement">
        <div className="container-box">
          <div className="mx-auto max-w-3xl">
            <div className="card p-8 md:p-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] leading-relaxed text-balance">
                &ldquo;To deliver the world&rsquo;s best live TV and on-demand content to every
                screen, everywhere — at a price that makes cutting the cord an obvious choice.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[var(--bg-surface)]" aria-label="Our values">
        <div className="container-box">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              Our Values
            </p>
            <h2 className="heading-display heading-2 text-balance">
              What we stand for
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28" aria-label="Company timeline">
        <div className="container-box">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                Our Story
              </p>
              <h2 className="heading-display heading-2 text-balance">
                How we got here
              </h2>
            </div>

            <ol className="relative flex flex-col gap-0">
              {TIMELINE.map(({ year, event }, i) => (
                <li key={year} className="flex gap-6 pb-10 last:pb-0">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] text-sm font-bold z-10">
                      {year.slice(2)}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-[var(--border)]" />
                    )}
                  </div>

                  <div className="pt-1.5 pb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-1">
                      {year}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                      {event}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to experience Bold Eagle IPTV?"
        description="Join thousands of subscribers worldwide. Start your free 24-hour trial today — no credit card required."
      />
    </>
  );
}
