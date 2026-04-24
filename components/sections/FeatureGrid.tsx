import React from "react";
import {
  Monitor,
  Tv,
  Film,
  Smartphone,
  CalendarDays,
  Headphones,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Tv,
  Film,
  Smartphone,
  CalendarDays,
  HeadphonesIcon: Headphones,
};

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 md:py-28" aria-label="Features">
      <div className="container-box">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
            Why Bold Eagle
          </p>
          <h2 className="heading-display heading-2 text-balance mb-4">
            Everything you need to stream without limits
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Built for quality-first viewers who demand reliability, breadth of content,
            and rock-solid performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Monitor;
            return (
              <div
                key={feature.id}
                className={cn(
                  "card p-6 group",
                  "hover:border-[var(--border-strong)]",
                  "transition-all duration-[var(--duration-normal)]"
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-[var(--radius-xl)]",
                    "bg-[var(--accent-muted)] text-[var(--accent)]",
                    "transition-colors duration-[var(--duration-normal)]",
                    "group-hover:bg-[rgba(229,9,20,0.15)]"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
