"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, WHATSAPP_NUMBER, PRICING_PLANS } from "@/lib/constants";

const FREE_TRIAL_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I would like to request a free 24-hour IPTV trial.")}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-surface)]/95 backdrop-blur-xl border-b border-[var(--border)] section-dark"
          : "bg-transparent"
      )}
    >
      <div className="container-box">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Bald Eagle Streamz home">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-[var(--radius-lg)]",
              "bg-[var(--accent)] text-[var(--accent-fg)]",
              "shadow-[var(--shadow-accent)] group-hover:shadow-[0_0_32px_rgba(229,9,20,0.5)]",
              "transition-shadow duration-300"
            )}>
              <Zap className="h-4 w-4" fill="currentColor" />
            </div>
            <span className="text-base font-bold tracking-tight text-[var(--text-primary)]">
              Bald Eagle Streamz <span className="text-[var(--accent)]">IPTV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Subscriptions") {
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[var(--radius-lg)]",
                        "transition-colors duration-[var(--duration-fast)]",
                        pathname === item.href || pathname.startsWith("/subscriptions")
                          ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[200px]">
                      <div className="bg-[var(--bg-surface)] section-dark border border-[var(--border)] shadow-[var(--shadow-elevated)] rounded-[var(--radius-xl)] p-2 flex flex-col gap-1">
                        <Link
                          href="/subscriptions"
                          className="px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] rounded-[var(--radius-lg)] transition-colors"
                        >
                          All Plans
                        </Link>
                        <div className="h-px bg-[var(--border)] my-1 mx-2" />
                        {PRICING_PLANS.map((plan) => (
                          <Link
                            key={plan.id}
                            href={`/subscriptions/${plan.id}`}
                            className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] rounded-[var(--radius-lg)] transition-colors flex justify-between items-center"
                          >
                            <span>{plan.duration}</span>
                            <span className="text-xs text-[var(--text-muted)]">${plan.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-[var(--radius-lg)]",
                    "transition-colors duration-[var(--duration-fast)]",
                    pathname === item.href
                      ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <a href={FREE_TRIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Get Free Trial</a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <React.Fragment key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-3 text-base font-medium rounded-[var(--radius-xl)] flex justify-between items-center",
                          "transition-colors duration-[var(--duration-fast)]",
                          pathname === item.href
                            ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                    
                    {/* Render sub-links for Subscriptions on mobile */}
                    {item.label === "Subscriptions" && (
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-[var(--border)] ml-4 mt-1 mb-2">
                        {PRICING_PLANS.map((plan) => (
                          <SheetClose asChild key={plan.id}>
                            <Link
                              href={`/subscriptions/${plan.id}`}
                              className={cn(
                                "px-4 py-2 text-sm font-medium rounded-[var(--radius-lg)]",
                                "transition-colors duration-[var(--duration-fast)] flex justify-between items-center",
                                pathname === `/subscriptions/${plan.id}`
                                  ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                              )}
                            >
                              <span>{plan.duration}</span>
                              <span className="text-xs text-[var(--text-muted)]">${plan.price}</span>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-[var(--border)]">
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <SheetClose asChild>
                      <a href={FREE_TRIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Get Free Trial</a>
                    </SheetClose>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
