"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-all duration-[var(--duration-normal)] ease",
    "focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--accent)] text-[var(--accent-fg)]",
          "hover:bg-[var(--accent-hover)]",
          "shadow-[0_1px_2px_rgba(0,0,0,0.15)]",
          "hover:shadow-[var(--shadow-accent)]",
        ].join(" "),

        secondary: [
          "bg-[var(--bg-card)] text-[var(--text-primary)]",
          "border border-[var(--border)]",
          "hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-strong)]",
        ].join(" "),
        ghost: [
          "text-[var(--text-secondary)]",
          "hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]",
        ].join(" "),
        outline: [
          "border border-[var(--accent)] text-[var(--accent)]",
          "hover:bg-[var(--accent-muted)]",
        ].join(" "),
        destructive: [
          "bg-[var(--error)] text-[var(--accent-fg)]",
          "hover:opacity-90",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-[var(--radius-lg)]",
        md: "h-10 px-5 text-sm rounded-[var(--radius-xl)]",
        lg: "h-12 px-7 text-base rounded-[var(--radius-xl)]",
        xl: "h-14 px-8 text-base rounded-[var(--radius-xl)]",
        icon: "h-10 w-10 rounded-[var(--radius-xl)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
