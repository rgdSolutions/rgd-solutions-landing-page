import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const script = path.resolve(__dirname, "sync-resume.sh");

function runSync(env: Record<string, string>) {
  return spawnSync("bash", [script], { env: { ...process.env, ...env }, encoding: "utf8" });
}

describe("sync-resume.sh", () => {
  it("exits non-zero and names the missing source when the resume PDF does not exist", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "resume-"));
    const result = runSync({
      RESUME_SOURCE: path.join(dir, "missing.pdf"),
      RESUME_DEST: path.join(dir, "out.pdf"),
    });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("missing.pdf");
  });

  it("copies the source PDF byte-for-byte to the destination", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "resume-"));
    const src = path.join(dir, "resume.pdf");
    const dest = path.join(dir, "public", "resume.pdf");
    writeFileSync(src, "%PDF-1.7 fake resume bytes");
    const result = runSync({ RESUME_SOURCE: src, RESUME_DEST: dest });
    expect(result.status).toBe(0);
    expect(readFileSync(dest, "utf8")).toBe("%PDF-1.7 fake resume bytes");
  });
});
