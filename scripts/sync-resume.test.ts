import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { RESUME_PATHNAME, syncResume, type UploadFn } from "./sync-resume-lib";

function tempPdf(contents = "%PDF-1.7 fake resume bytes") {
  const dir = mkdtempSync(path.join(tmpdir(), "resume-"));
  const file = path.join(dir, "resume.pdf");
  writeFileSync(file, contents);
  return { dir, file };
}

describe("syncResume", () => {
  it("uploads the PDF bytes to a fixed public pathname and returns the blob URL", async () => {
    const { file } = tempPdf();
    const upload = vi.fn<UploadFn>(async (pathname) => ({
      url: `https://store.public.blob.vercel-storage.com/${pathname}`,
    }));

    const result = await syncResume({ source: file, upload });

    expect(result.url).toBe(
      "https://store.public.blob.vercel-storage.com/ricardo-dalessandro-resume.pdf",
    );
    expect(result.bytes).toBe(Buffer.byteLength("%PDF-1.7 fake resume bytes"));
    const [pathname, body, options] = upload.mock.calls[0]!;
    expect(pathname).toBe(RESUME_PATHNAME);
    expect(Buffer.from(body).toString()).toBe("%PDF-1.7 fake resume bytes");
    expect(options).toMatchObject({
      access: "public",
      contentType: "application/pdf",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
  });

  it("rejects with the missing path and never uploads when the source PDF does not exist", async () => {
    const { dir } = tempPdf();
    const missing = path.join(dir, "missing.pdf");
    const upload = vi.fn<UploadFn>();

    await expect(syncResume({ source: missing, upload })).rejects.toThrow(missing);
    expect(upload).not.toHaveBeenCalled();
  });

  it("rejects when the source is not a PDF", async () => {
    const { file } = tempPdf("<html>not a pdf</html>");
    const upload = vi.fn<UploadFn>();

    await expect(syncResume({ source: file, upload })).rejects.toThrow(/not a PDF/);
    expect(upload).not.toHaveBeenCalled();
  });
});
