// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeMenuItem, ThemeToggle } from "./theme-toggle";

afterEach(() => {
  document.documentElement.removeAttribute("data-theme");
  localStorage.clear();
});

describe("ThemeToggle", () => {
  it("offers the light theme while the default dark theme is active", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: "Switch to light theme" })).toBeInTheDocument();
  });

  it("switches the page to light, remembers it, and then offers dark", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Switch to light theme" }));

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
  });

  it("switches back to dark on the second press", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Switch to light theme" }));
    await user.click(screen.getByRole("button", { name: "Switch to dark theme" }));

    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("keeps a second toggle in step when the first one is pressed", async () => {
    const user = userEvent.setup();
    render(
      <>
        <ThemeToggle />
        <ThemeToggle />
      </>,
    );

    const [first] = screen.getAllByRole("button", { name: "Switch to light theme" });
    await user.click(first);

    expect(screen.getAllByRole("button", { name: "Switch to dark theme" })).toHaveLength(2);
  });

  it("reflects a light theme that was applied before it mounted", () => {
    document.documentElement.setAttribute("data-theme", "light");

    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
  });
});

describe("ThemeMenuItem", () => {
  it("offers the light theme as a labelled menu row while dark is active", () => {
    render(<ThemeMenuItem />);

    expect(screen.getByRole("button", { name: "Light theme" })).toBeInTheDocument();
  });

  it("switches the page to light and then offers dark", async () => {
    const user = userEvent.setup();
    render(<ThemeMenuItem />);

    await user.click(screen.getByRole("button", { name: "Light theme" }));

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Dark theme" })).toBeInTheDocument();
  });
});
