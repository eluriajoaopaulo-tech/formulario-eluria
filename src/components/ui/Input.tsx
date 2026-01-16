import React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            "flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus-visible:border-brand-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
