import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const { name, duration, price, perMonth, description, features, popular, bestValue, badge, ctaLabel, ctaHref } = plan;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-2xl)] p-6 md:p-8",
        "border transition-all duration-[var(--duration-normal)]",
        popular
          ? "border-[var(--accent)] bg-[var(--bg-card)] shadow-[var(--shadow-card),var(--shadow-accent),var(--shadow-inset)]"
          : "border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-card),var(--shadow-inset)] hover:border-[var(--border-strong)]"
      )}
    >

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1">
              {duration}
            </p>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{name}</h3>
          </div>
          {badge && (
            <Badge variant={popular ? "popular" : "value"}>
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-[var(--border)]">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            ${price}
          </span>
          <span className="text-sm text-[var(--text-muted)] mb-1">
            / {duration.toLowerCase()}
          </span>
        </div>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          <span className="text-[var(--success)] font-medium">
            ${perMonth.toFixed(2)}/mo
          </span>
          {" "}billed once
        </p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                popular
                  ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                  : "bg-[var(--success-muted)] text-[var(--success)]"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className="text-[var(--text-secondary)]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={popular ? "primary" : "secondary"}
        size="lg"
        className="w-full"
        asChild
      >
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </div>
  );
}
