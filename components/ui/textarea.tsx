import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-[var(--radius-lg)]",
          "border border-[var(--border)] bg-[var(--bg-surface)]",
          "px-4 py-3 text-sm text-[var(--text-primary)]",
          "placeholder:text-[var(--text-muted)]",
          "transition-colors duration-[var(--duration-fast)]",
          "focus-visible:outline-none focus-visible:border-[var(--accent)]",
          "focus-visible:ring-2 focus-visible:ring-[rgba(229,9,20,0.2)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
