import { describe, expect, it } from "vitest";
import { createResendSender } from "./send";

const mail = { subject: "s", text: "t", html: "<p>t</p>" };

describe("createResendSender", () => {
  it("does not throw when constructed without an API key", () => {
    expect(() => createResendSender("", "RGD <onboarding@resend.dev>")).not.toThrow();
  });

  it("rejects send() with a configuration error when the API key is missing", async () => {
    const sender = createResendSender("", "RGD <onboarding@resend.dev>");
    await expect(sender.send({ to: "a@b.co", replyTo: "c@d.co", mail })).rejects.toThrow(
      /RESEND_API_KEY/,
    );
  });
});
