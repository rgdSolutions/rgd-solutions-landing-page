"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-triggered rise-in. Uses motion's lightweight `m` components (features are
 * loaded lazily by MotionProvider). Renders plain markup when the visitor prefers
 * reduced motion, so server-rendered content never flashes at opacity 0.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "blockquote" | "li";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
