// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { applyTheme, readTheme, THEME_STORAGE_KEY, themeInitScript } from "./theme";

function runInitScript() {
  new Function(themeInitScript)();
}

afterEach(() => {
  document.documentElement.removeAttribute("data-theme");
  localStorage.clear();
});

describe("themeInitScript", () => {
  it("applies the light theme before paint when the visitor chose it earlier", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "light");

    runInitScript();

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("leaves the default dark theme when nothing was stored", () => {
    runInitScript();

    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
  });

  it("treats any stored value other than light as dark", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "system");

    runInitScript();

    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
  });
});

describe("applyTheme", () => {
  it("switches the document to light and remembers the choice", () => {
    applyTheme("light");

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(readTheme()).toBe("light");
  });

  it("switches back to dark by clearing the attribute and remembers the choice", () => {
    applyTheme("light");

    applyTheme("dark");

    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(readTheme()).toBe("dark");
  });
});
