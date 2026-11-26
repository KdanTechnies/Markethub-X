import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "quiet" | "danger";
  children: ReactNode;
};

const variants = {
  primary: "bg-brand-green text-white hover:bg-emerald-700",
  secondary: "border border-brand-border bg-white text-brand-navy hover:bg-slate-50",
  quiet: "text-brand-navy hover:bg-slate-100",
  danger: "bg-rose-700 text-white hover:bg-rose-800",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
