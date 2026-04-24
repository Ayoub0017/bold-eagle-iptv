import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[var(--radius-lg)]",
          "border border-[var(--border)] bg-[var(--bg-surface)]",
          "px-4 py-2 text-sm text-[var(--text-primary)]",
          "placeholder:text-[var(--text-muted)]",
          "transition-colors duration-[var(--duration-fast)]",
          "focus-visible:outline-none focus-visible:border-[var(--accent)]",
          "focus-visible:ring-2 focus-visible:ring-[rgba(229,9,20,0.2)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
