"use client";

import { useSyncExternalStore } from "react";
import { applyTheme, readTheme, subscribeTheme, type Theme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

const serverTheme = (): Theme => "dark";

/** The document attribute is the single source of truth, so every control on the page agrees. */
function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";
  return { theme, next, switchTheme: () => applyTheme(next) };
}

/** One icon button, two states. Shows the theme it will switch to. Desktop header. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, next, switchTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={`Switch to ${next} theme`}
      className={`glass flex size-8 cursor-pointer items-center justify-center rounded-[10px] text-ink/80 transition-colors hover:text-ink focus-visible:ring-4 focus-visible:ring-teal/40 focus-visible:outline-none ${className}`}
    >
      {theme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
    </button>
  );
}

/** The same switch as a labelled row, styled like the links in the mobile menu. */
export function ThemeMenuItem({ className = "" }: { className?: string }) {
  const { theme, next, switchTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={switchTheme}
      className={`flex h-11 w-full cursor-pointer items-center gap-2.5 rounded-[12px] px-4 font-sans text-base font-semibold text-ink/[0.78] transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      {next === "light" ? "Light theme" : "Dark theme"}
    </button>
  );
}
