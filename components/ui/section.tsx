import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/** Standard section shell: 80px side padding on desktop, 20px on mobile, matching the artboards. */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative z-[2] scroll-mt-20 px-5 py-10 md:px-20 md:pt-10 md:pb-[110px] ${className}`}
    >
      {children}
    </section>
  );
}

/** Eyebrow + h2, optionally with an intro paragraph on the right on desktop. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="grid grid-cols-12 items-end gap-6 md:gap-8">
      <div className={`col-span-12 flex flex-col gap-4 ${intro ? "md:col-span-5" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-display text-[34px] leading-[1.08] font-bold tracking-[-0.025em] md:text-5xl">
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="col-span-12 text-[17px] leading-relaxed text-white/70 md:col-start-7 md:col-span-6 md:text-[19px]">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

const accentClasses = {
  teal: "bg-teal/[0.14] text-teal",
  rose: "bg-rose/[0.14] text-rose",
  white: "bg-white/10 text-white",
} as const;

export function AccentBadge({
  accent,
  className = "",
  children,
}: {
  accent: keyof typeof accentClasses;
  className?: string;
  children: ReactNode;
}) {
  return <span className={`${accentClasses[accent]} ${className}`}>{children}</span>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-pill border border-white/[0.14] px-2.5 py-1.5 text-xs font-semibold text-white/70">
      {children}
    </span>
  );
}
