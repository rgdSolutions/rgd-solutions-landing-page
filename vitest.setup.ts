import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Vitest does not enable Testing Library's automatic cleanup without `globals: true`.
afterEach(() => {
  cleanup();
});
