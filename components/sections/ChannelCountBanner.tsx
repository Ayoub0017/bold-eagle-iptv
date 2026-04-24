import React from "react";
import { STATS } from "@/lib/constants";

export function ChannelCountBanner() {
  return (
    <section
      className="border-y border-[var(--border)] bg-[var(--bg-surface)] section-dark"
      aria-label="Key statistics"
    >
      <div className="container-box py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 text-center relative"
            >
              {/* Vertical divider (not on last) */}
              {i < STATS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[var(--border)]"
                />
              )}
              <span className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                {value}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
