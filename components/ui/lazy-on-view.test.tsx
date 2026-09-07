// @vitest-environment jsdom
import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LazyOnView } from "./lazy-on-view";

type Callback = (entries: Array<Pick<IntersectionObserverEntry, "isIntersecting">>) => void;

describe("LazyOnView", () => {
  let callbacks: Callback[];
  let disconnect: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    callbacks = [];
    disconnect = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(cb: Callback) {
          callbacks.push(cb);
        }
        observe() {}
        unobserve() {}
        disconnect = disconnect;
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the placeholder, not the children, until the area scrolls near the viewport", () => {
    render(
      <LazyOnView placeholder={<div data-testid="placeholder" />}>
        <div data-testid="content" />
      </LazyOnView>,
    );
    expect(screen.getByTestId("placeholder")).toBeInTheDocument();
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("swaps in the children once the observer reports an intersection, and stops observing", () => {
    render(
      <LazyOnView placeholder={<div data-testid="placeholder" />}>
        <div data-testid="content" />
      </LazyOnView>,
    );
    act(() => callbacks[0]!([{ isIntersecting: true }]));
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.queryByTestId("placeholder")).not.toBeInTheDocument();
    expect(disconnect).toHaveBeenCalled();
  });

  it("keeps the placeholder when the observer fires without an intersection", () => {
    render(
      <LazyOnView placeholder={<div data-testid="placeholder" />}>
        <div data-testid="content" />
      </LazyOnView>,
    );
    act(() => callbacks[0]!([{ isIntersecting: false }]));
    expect(screen.getByTestId("placeholder")).toBeInTheDocument();
  });

  it("renders the children on the next tick when IntersectionObserver is unavailable", async () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(
      <LazyOnView placeholder={<div data-testid="placeholder" />}>
        <div data-testid="content" />
      </LazyOnView>,
    );
    expect(await screen.findByTestId("content")).toBeInTheDocument();
  });
});
