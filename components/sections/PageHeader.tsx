import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  centered?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  centered = true,
}: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 border-b border-[var(--border)] section-dark"
      aria-label="Page header"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(229,9,20,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(229,9,20,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container-box relative">
        <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className={cn("flex items-center gap-1 text-xs text-[var(--text-muted)] mb-5", centered && "justify-center")}
            >
              <Link href="/" className="hover:text-[var(--text-secondary)] transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.label}>
                  <ChevronRight className="h-3 w-3 text-[var(--border-strong)]" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[var(--text-secondary)] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[var(--text-secondary)]">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="heading-display heading-1 text-balance mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
