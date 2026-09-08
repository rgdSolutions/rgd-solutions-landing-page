import { siteConfig } from "@/lib/site-config";

/**
 * The RGD Solutions wordmark: initials over an aurora rule over the descriptor.
 * Vector versions for use elsewhere live in public/brand/.
 */
export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a href={href} aria-label={siteConfig.name} className="flex flex-col items-center gap-1">
      <span className="font-display text-2xl leading-[0.9] font-bold tracking-[-0.04em] text-ink">
        RGD
      </span>
      <span
        aria-hidden="true"
        data-testid="logo-rule"
        className="from-teal to-rose h-0.5 self-stretch bg-linear-to-r"
      />
      <span className="font-sans -mr-[0.3em] text-[8px] leading-none font-semibold tracking-[0.3em] text-ink/70 uppercase">
        Solutions
      </span>
    </a>
  );
}
