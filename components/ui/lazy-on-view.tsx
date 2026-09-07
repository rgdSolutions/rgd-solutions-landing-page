"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders `placeholder` until the wrapper comes within `rootMargin` of the viewport,
 * then renders `children`. Pair it with next/dynamic so heavy below-the-fold widgets
 * (the booking form and its date picker) stay out of the initial JavaScript.
 */
export function LazyOnView({
  children,
  placeholder = null,
  rootMargin = "600px 0px",
  className,
}: {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    if (typeof IntersectionObserver === "undefined") {
      // No observer support: show the content on the next tick (never during render).
      const id = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : placeholder}
    </div>
  );
}
