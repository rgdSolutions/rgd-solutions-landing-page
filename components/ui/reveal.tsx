import type { ReactNode } from "react";

/** Content stays visible during SSR, without JavaScript, and with reduced motion. */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "blockquote" | "li";
}) {
  return <Tag className={className}>{children}</Tag>;
}
