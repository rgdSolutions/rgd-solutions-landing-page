/**
 * Uploads the latest resume PDF from the resume-typst project to Vercel Blob.
 *
 *   pnpm sync-resume            # uses ../../resume-typst/out/resume.pdf
 *   RESUME_SOURCE=path pnpm sync-resume
 *
 * Needs BLOB_READ_WRITE_TOKEN, loaded from .env.local (run `vercel env pull` first).
 * Prints the public URL; set it as RESUME_URL in Vercel if it ever changes.
 */
import { put } from "@vercel/blob";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { syncResume, type UploadFn } from "./sync-resume-lib.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const source =
  process.env.RESUME_SOURCE ?? path.resolve(here, "../../../resume-typst/out/resume.pdf");

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("sync-resume: BLOB_READ_WRITE_TOKEN is missing; run `vercel env pull` first");
  process.exit(1);
}

const upload: UploadFn = (pathname, body, options) => put(pathname, body, options);

try {
  const { url, bytes } = await syncResume({ source, upload });
  console.log(`sync-resume: uploaded ${bytes} bytes`);
  console.log(`sync-resume: ${url}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
