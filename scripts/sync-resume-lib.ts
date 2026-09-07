import { readFile } from "node:fs/promises";

/** Fixed pathname in the Blob store, so the URL never changes between syncs. */
export const RESUME_PATHNAME = "ricardo-dalessandro-resume.pdf";

export interface UploadOptions {
  access: "public";
  contentType: string;
  addRandomSuffix: boolean;
  allowOverwrite: boolean;
}

/** The Blob `put` boundary, injected so the sync logic is testable without network. */
export type UploadFn = (
  pathname: string,
  body: Buffer,
  options: UploadOptions,
) => Promise<{ url: string }>;

export interface SyncResumeResult {
  url: string;
  bytes: number;
}

export async function syncResume({
  source,
  upload,
}: {
  source: string;
  upload: UploadFn;
}): Promise<SyncResumeResult> {
  let body: Buffer;
  try {
    body = await readFile(source);
  } catch {
    throw new Error(`sync-resume: source not found: ${source}`);
  }
  if (!body.subarray(0, 5).toString("latin1").startsWith("%PDF-")) {
    throw new Error(`sync-resume: ${source} is not a PDF`);
  }
  const { url } = await upload(RESUME_PATHNAME, body, {
    access: "public",
    contentType: "application/pdf",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return { url, bytes: body.byteLength };
}
