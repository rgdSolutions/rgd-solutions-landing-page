/**
 * Two themes only: dark is the default, light is opt-in. The choice lives in
 * localStorage and is expressed as data-theme="light" on <html>; dark has no attribute.
 */
export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

const THEME_ATTRIBUTE = "data-theme";

/**
 * Runs inline in <head> before first paint so a returning visitor never sees a dark flash.
 * Kept as a plain string with no dependencies so it can be inlined verbatim.
 */
export const themeInitScript =
  `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="light")` +
  `document.documentElement.setAttribute("${THEME_ATTRIBUTE}","light")}catch(e){}`;

export function readTheme(): Theme {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) === "light" ? "light" : "dark";
}

/** Notifies `listener` whenever the theme attribute changes, from any toggle. */
export function subscribeTheme(listener: () => void): () => void {
  const observer = new MutationObserver(listener);
  observer.observe(document.documentElement, { attributeFilter: [THEME_ATTRIBUTE] });
  return () => observer.disconnect();
}

export function applyTheme(theme: Theme) {
  if (theme === "light") {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, "light");
  } else {
    document.documentElement.removeAttribute(THEME_ATTRIBUTE);
  }
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the theme still applies.
  }
}
