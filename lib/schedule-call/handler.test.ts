import { describe, expect, it, vi } from "vitest";
import type { LeadEmail } from "./email";
import { createScheduleCallHandler, LeadSendError, type LeadSender } from "./handler";

const today = new Date().toISOString().slice(0, 10);
const validBody = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  preferredDate: today,
  message: "We need a RAG pipeline.",
};

function makeRequest(body: unknown, contentType = "application/json") {
  return new Request("http://localhost/api/schedule-call", {
    method: "POST",
    headers: { "content-type": contentType },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

function makeSender(impl?: LeadSender["send"]) {
  const sent: Array<{ to: string; replyTo: string; mail: LeadEmail }> = [];
  const sender: LeadSender = {
    send: impl ?? (async (args) => void sent.push(args)),
  };
  return { sender, sent };
}

describe("schedule-call handler", () => {
  it("accepts the simplified form without a phone or preferred date", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest({ name: "Ada", email: "ada@example.com" }));
    expect(res.status).toBe(200);
    expect(sent).toHaveLength(1);
    expect(sent[0]?.mail.subject).toBe("Call request from Ada");
    expect(sent[0]?.mail.text).not.toContain("undefined");
  });
  it("returns 200 and sends the lead email to the inbox with reply-to set to the lead", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest(validBody));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({ to: "inbox@example.com", replyTo: "ada@example.com" });
    expect(sent[0]?.mail.subject).toBe(`Call request from Ada Lovelace for ${today}`);
    expect(sent[0]?.mail.text).toContain("We need a RAG pipeline.");
  });

  it("returns 400 with per-field errors and sends nothing when the body is invalid", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest({ ...validBody, email: "nope", name: "" }));
    expect(res.status).toBe(400);
    const json = (await res.json()) as { ok: boolean; errors: Record<string, string> };
    expect(json.ok).toBe(false);
    expect(Object.keys(json.errors).sort()).toEqual(["email", "name"]);
    expect(sent).toHaveLength(0);
  });

  it("returns 400 when the body is not JSON", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest("not json"));
    expect(res.status).toBe(400);
    expect(sent).toHaveLength(0);
  });

  it("returns 200 but sends nothing when the honeypot field is filled", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest({ ...validBody, company: "Acme Bots Inc" }));
    expect(res.status).toBe(200);
    expect(sent).toHaveLength(0);
  });

  it("returns 500 with a generic message and no lead details when sending fails", async () => {
    const { sender } = makeSender(async () => {
      throw new Error("resend exploded: ada@example.com");
    });
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    const res = await handler(makeRequest(validBody));
    expect(res.status).toBe(500);
    const json = (await res.json()) as { ok: boolean; error: string };
    expect(json.ok).toBe(false);
    expect(json.error).not.toContain("ada@example.com");
    expect(json.error).not.toContain("resend");
  });

  it("returns 500 when the inbox address is not configured", async () => {
    const { sender, sent } = makeSender();
    const handler = createScheduleCallHandler({ sender, inbox: "" });
    const res = await handler(makeRequest(validBody));
    expect(res.status).toBe(500);
    expect(sent).toHaveLength(0);
  });

  it("logs a warning without the lead's fields when sending fails", async () => {
    const warn = vi.spyOn(console, "error").mockImplementation(() => {});
    const { sender } = makeSender(async () => {
      throw new Error("boom");
    });
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    await handler(makeRequest(validBody));
    const logged = warn.mock.calls.flat().map(String).join(" ");
    expect(logged).not.toContain("ada@example.com");
    expect(logged).not.toContain("Ada Lovelace");
    warn.mockRestore();
  });

  it("logs the provider error name when the sender raises a LeadSendError", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const { sender } = makeSender(async () => {
      throw new LeadSendError("resend: validation_error");
    });
    const handler = createScheduleCallHandler({ sender, inbox: "inbox@example.com" });
    await handler(makeRequest(validBody));
    const logged = log.mock.calls
      .flat()
      .map((v) => JSON.stringify(v))
      .join(" ");
    expect(logged).toContain("validation_error");
    expect(logged).not.toContain("ada@example.com");
    log.mockRestore();
  });
});
