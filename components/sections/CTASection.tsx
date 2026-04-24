import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to stream without limits?",
  description = "Join thousands of viewers enjoying 15,000+ channels and 50,000+ on-demand titles in crystal-clear HD & 4K. Start your free trial today.",
}: CTASectionProps) {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden section-dark"
      aria-label="Call to action"
    >
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(229,9,20,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 70% 50%, rgba(229,9,20,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-box relative">
        <div
          className="rounded-[var(--radius-2xl)] border border-[var(--accent)] bg-[var(--bg-card)] p-10 md:p-16 text-center"
          style={{
            boxShadow:
              "var(--shadow-card), var(--shadow-accent), var(--shadow-inset)",
          }}
        >
          <h2 className="heading-display heading-2 text-balance mb-5">{title}</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="xl" asChild>
              <Link href="/subscriptions" className="group">
                Get a Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
