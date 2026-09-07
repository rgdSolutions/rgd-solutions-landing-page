"use client";

import { useEffect, useId, useState } from "react";
import { nav } from "@/content/site";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeMenuItem } from "@/components/ui/theme-toggle";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/ui/icons";

const navLinkClass =
  "font-sans text-[15px] font-semibold text-ink/[0.78] transition-colors hover:text-ink focus-visible:outline-none focus-visible:text-ink";

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-navy/70 backdrop-blur-[18px]">
      <div className="flex items-center justify-between gap-3 px-5 py-4 md:px-20 md:py-7">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink variant="ghost" size="sm" href={siteConfig.resumePath} download>
            <DownloadIcon />
            {nav.resumeLabel}
          </ButtonLink>
          <ButtonLink size="sm" href={nav.primaryCta.href}>
            {nav.primaryCta.label}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink size="sm" href={nav.primaryCta.href} className="h-11 px-4 text-sm">
            {nav.primaryCta.label}
          </ButtonLink>
          <button
            type="button"
            className="glass flex size-11 cursor-pointer items-center justify-center rounded-[14px] text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        className="glass mx-5 mb-4 flex flex-col rounded-[18px] p-2 md:hidden"
      >
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${navLinkClass} flex h-11 items-center rounded-[12px] px-4 text-base`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.resumePath}
          download
          className={`${navLinkClass} flex h-11 items-center gap-2.5 rounded-[12px] px-4 text-base`}
          onClick={() => setOpen(false)}
        >
          <DownloadIcon />
          {nav.resumeLabel}
        </a>
        <ThemeMenuItem />
      </nav>
    </header>
  );
}
