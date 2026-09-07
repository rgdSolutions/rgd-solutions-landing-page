import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-pill font-sans font-bold whitespace-nowrap transition-[transform,box-shadow,background-color] duration-250 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-navy shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover motion-reduce:hover:translate-y-0",
  ghost:
    "bg-white/[0.06] border border-white/[0.18] text-white font-semibold hover:bg-white/[0.12]",
};

const sizes: Record<Size, string> = {
  md: "h-[52px] px-6 text-base",
  sm: "h-[46px] px-5 text-[15px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonClass(variant, size, `cursor-pointer disabled:opacity-60 ${className}`)}
      {...rest}
    >
      {children}
    </button>
  );
}
