// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./logo";

describe("Logo", () => {
  it("links back to the top of the page under the full company name", () => {
    render(<Logo />);

    const link = screen.getByRole("link", { name: "RGD Solutions" });

    expect(link).toHaveAttribute("href", "#top");
  });

  it("stacks the initials above the descriptor with the rule between them", () => {
    render(<Logo />);

    const initials = screen.getByText("RGD");
    const descriptor = screen.getByText("Solutions");
    const rule = screen.getByTestId("logo-rule");

    expect(initials.compareDocumentPosition(rule) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(
      rule.compareDocumentPosition(descriptor) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
