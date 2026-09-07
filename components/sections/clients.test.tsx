// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClientMark, Clients } from "./clients";

describe("Clients", () => {
  it("shows an official logo, labelled with the brand name, for clients that have one", () => {
    render(<Clients />);

    const logo = screen.getByRole("img", { name: "CNN" });

    expect(logo.style.maskImage).toContain("/logos/cnn.svg");
    expect(screen.queryByText("CNN")).not.toBeInTheDocument();
  });

  it("falls back to the brand name as text for a client without a logo", () => {
    render(
      <ul>
        <ClientMark client={{ name: "Example Co" }} />
      </ul>,
    );

    expect(screen.getByText("Example Co")).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "Example Co" })).not.toBeInTheDocument();
  });
});
