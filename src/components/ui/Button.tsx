"use client";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-[#111111] text-white hover:bg-[#242424] focus-visible:ring-[#111111]",
  secondary:
    "bg-white text-[#111111] border border-[#e5e7eb] hover:bg-[#f5f5f5] focus-visible:ring-[#111111]",
  ghost:
    "bg-transparent text-[#374151] hover:bg-[#f5f5f5] focus-visible:ring-[#111111]",
};

const sizeClasses = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
