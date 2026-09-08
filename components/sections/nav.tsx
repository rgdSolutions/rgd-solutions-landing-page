"use client";

import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeMenuItem } from "@/components/ui/theme-toggle";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const navLinkClass =
  "font-sans text-[15px] font-semibold text-ink/[0.78] transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Nav({ home = true }: { home?: boolean }) {
  const anchor = (href: string) => (home ? href : `/${href}`);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-navy/70 backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-5 py-4 md:px-20 md:py-5">
        <Logo href={anchor("#top")} />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={anchor(link.href)} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink size="sm" href={anchor(nav.primaryCta.href)}>
            {nav.primaryCta.label}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink
            size="sm"
            href={anchor(nav.primaryCta.href)}
            onClick={() => setOpen(false)}
            className="h-11 px-4 text-sm"
          >
            {nav.primaryCta.label}
          </ButtonLink>
          <button
            ref={menuButton}
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
            href={anchor(link.href)}
            className={`${navLinkClass} flex h-11 items-center rounded-[12px] px-4 text-base`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <ThemeMenuItem />
      </nav>
    </header>
  );
}
