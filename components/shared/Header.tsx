"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

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
            {NAV_ITEMS.map((item) => (
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
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <Link href="/subscriptions">Get Free Trial</Link>
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
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-[var(--radius-xl)]",
                        "transition-colors duration-[var(--duration-fast)]",
                        pathname === item.href
                          ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-[var(--border)]">
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <SheetClose asChild>
                      <Link href="/subscriptions">Get Free Trial</Link>
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
