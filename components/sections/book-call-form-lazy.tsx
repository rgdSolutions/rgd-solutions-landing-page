"use client";

import dynamic from "next/dynamic";
import { LazyOnView } from "@/components/ui/lazy-on-view";

/** Reserves the form's footprint so nothing shifts when it loads. */
function FormPlaceholder() {
  return <div aria-hidden="true" className="min-h-[420px] md:min-h-[440px]" />;
}

const BookCallForm = dynamic(() => import("./book-call-form").then((mod) => mod.BookCallForm), {
  ssr: false,
  loading: FormPlaceholder,
});

/**
 * The booking form (react-hook-form, zod, the date picker) is the heaviest client code
 * on the page and sits at the very bottom, so it is fetched only when the visitor
 * scrolls near it.
 */
export function BookCallFormLazy({ contactEmail }: { contactEmail: string }) {
  return (
    <LazyOnView placeholder={<FormPlaceholder />}>
      <BookCallForm contactEmail={contactEmail} />
    </LazyOnView>
  );
}
