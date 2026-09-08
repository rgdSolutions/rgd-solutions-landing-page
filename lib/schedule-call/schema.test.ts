import { describe, expect, it } from "vitest";
import { scheduleCallSchema } from "./schema";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
};

describe("scheduleCallSchema", () => {
  it("accepts a minimal valid request and defaults optional fields", () => {
    const result = scheduleCallSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.phone).toBeUndefined();
      expect(result.data.message).toBeUndefined();
      expect(result.data.company).toBe("");
    }
  });

  it("rejects a missing name", () => {
    const result = scheduleCallSchema.safeParse({ ...valid, name: "  " });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.issues[0]?.path).toEqual(["name"]);
  });

  it("rejects an invalid email", () => {
    const result = scheduleCallSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.issues[0]?.path).toEqual(["email"]);
  });

  it("rejects a preferred date in the past", () => {
    const result = scheduleCallSchema.safeParse({ ...valid, preferredDate: "2000-01-01" });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.issues[0]?.path).toEqual(["preferredDate"]);
  });

  it("rejects a preferred date that is not YYYY-MM-DD", () => {
    const result = scheduleCallSchema.safeParse({ ...valid, preferredDate: "tomorrow" });
    expect(result.success).toBe(false);
  });

  it("keeps an optional phone and message when provided", () => {
    const result = scheduleCallSchema.safeParse({
      ...valid,
      phone: "+1 555 0100",
      message: "We need a RAG pipeline.",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.phone).toBe("+1 555 0100");
      expect(result.data.message).toBe("We need a RAG pipeline.");
    }
  });

  it("rejects a message longer than 2000 characters", () => {
    const result = scheduleCallSchema.safeParse({ ...valid, message: "x".repeat(2001) });
    expect(result.success).toBe(false);
  });
});
