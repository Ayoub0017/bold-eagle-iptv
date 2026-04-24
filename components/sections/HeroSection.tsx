import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center section-dark"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg-v2.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(16, 16, 20, 0.55) 0%, rgba(16, 16, 20, 0.85) 60%, var(--bg-base) 100%)",
        }}
      />

      {/* Colored accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 70% 80%, rgba(229,9,20,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container-box relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-1.5 text-xs font-semibold text-[var(--text-primary)] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Now streaming 15,000+ channels in HD & 4K
          </div>

          {/* Headline */}
          <h1 className="heading-display heading-1 mb-6">
            The Best IPTV Provider{" "}
            <br />
            <span className="gradient-text">in the USA.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed text-balance mb-10 max-w-xl mx-auto">
            Stream 15,000+ live channels and 50,000+ on-demand titles across 50+ countries —
            in stunning HD and 4K quality. No buffering, no contracts, no limits.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="xl" asChild>
              <Link href="/subscriptions" className="group">
                View Plans
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/about" className="group">
                <PlayCircle className="h-4 w-4" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "No credit card required",
              "24-hour free trial",
              "Cancel anytime",
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
        </div>
      </div>
    </section>
  );
}
