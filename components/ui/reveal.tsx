"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-triggered rise-in. Renders children immediately (no opacity 0 flash for
 * server-rendered content) when the visitor prefers reduced motion.
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
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
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
