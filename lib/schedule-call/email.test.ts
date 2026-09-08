import { describe, expect, it } from "vitest";
import { buildLeadEmail } from "./email";

const lead = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  preferredDate: "2026-10-01",
  company: "",
};

describe("buildLeadEmail", () => {
  it("builds a request without a preferred date", () => {
    const mail = buildLeadEmail({ name: "Ada", email: "ada@example.com" });
    expect(mail.subject).toBe("Call request from Ada");
    expect(mail.text).not.toContain("Preferred date");
    expect(mail.html).not.toContain("undefined");
  });
  it("puts the lead's name and date in the subject", () => {
    const mail = buildLeadEmail(lead);
    expect(mail.subject).toBe("Call request from Ada Lovelace for 2026-10-01");
  });

  it("includes name, email and date in both text and html bodies", () => {
    const mail = buildLeadEmail(lead);
    for (const body of [mail.text, mail.html]) {
      expect(body).toContain("Ada Lovelace");
      expect(body).toContain("ada@example.com");
      expect(body).toContain("2026-10-01");
    }
  });

  it("omits the phone line when no phone was given", () => {
    const mail = buildLeadEmail(lead);
    expect(mail.text).not.toMatch(/phone/i);
    expect(mail.html).not.toMatch(/phone/i);
  });

  it("includes phone and message when given", () => {
    const mail = buildLeadEmail({ ...lead, phone: "+1 555 0100", message: "Need a RAG pipeline." });
    expect(mail.text).toContain("+1 555 0100");
    expect(mail.text).toContain("Need a RAG pipeline.");
    expect(mail.html).toContain("+1 555 0100");
    expect(mail.html).toContain("Need a RAG pipeline.");
  });

  it("escapes html in user-supplied fields", () => {
    const mail = buildLeadEmail({ ...lead, name: "<script>alert(1)</script>" });
    expect(mail.html).not.toContain("<script>");
    expect(mail.html).toContain("&lt;script&gt;");
  });
});
