import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-surface)]" aria-label="Testimonials">
      <div className="container-box">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
            Customer Stories
          </p>
          <h2 className="heading-display heading-2 text-balance mb-4">
            Trusted by viewers worldwide
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            Join thousands of happy subscribers who made the switch to Bald Eagle Streamz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="card p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[var(--warning)]"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
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
  );
}
