import { describe, expect, it } from "vitest";
import { createResumeHandler } from "./handler";

describe("resume download handler", () => {
  it("redirects to the blob URL with the download flag so the browser saves the file", async () => {
    const handler = createResumeHandler({
      resumeUrl: "https://store.public.blob.vercel-storage.com/ricardo-dalessandro-resume.pdf",
    });
    const res = await handler();
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(
      "https://store.public.blob.vercel-storage.com/ricardo-dalessandro-resume.pdf?download=1",
    );
  });

  it("returns 404 when no resume URL is configured", async () => {
    const handler = createResumeHandler({ resumeUrl: "" });
    const res = await handler();
    expect(res.status).toBe(404);
  });

  it("refuses to redirect anywhere other than Vercel Blob storage", async () => {
    const handler = createResumeHandler({ resumeUrl: "https://evil.example.com/x.pdf" });
    const res = await handler();
    expect(res.status).toBe(404);
  });
});
