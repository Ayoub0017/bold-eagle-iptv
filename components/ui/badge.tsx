import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        popular: "badge-popular",
        value: "badge-value",
        category: [
          "bg-[var(--bg-subtle)] text-[var(--text-secondary)]",
          "border border-[var(--border)]",
        ].join(" "),
        accent: [
          "bg-[var(--accent-muted)] text-[var(--accent)]",
          "border border-[rgba(229,9,20,0.3)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "category",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
