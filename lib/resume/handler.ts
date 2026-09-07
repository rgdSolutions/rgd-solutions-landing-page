const BLOB_HOST_SUFFIX = ".public.blob.vercel-storage.com";

function isBlobUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname.endsWith(BLOB_HOST_SUFFIX);
  } catch {
    return false;
  }
}

/**
 * GET /resume redirects to the PDF in Vercel Blob. The `download=1` flag makes Blob
 * answer with a Content-Disposition: attachment header, so browsers save the file
 * instead of opening it. Only Blob URLs are honoured, so a bad RESUME_URL cannot
 * turn the site into an open redirect.
 */
export function createResumeHandler({ resumeUrl }: { resumeUrl: string }) {
  return async function handleResume(): Promise<Response> {
    if (!isBlobUrl(resumeUrl)) {
      return Response.json({ error: "Resume is not available right now." }, { status: 404 });
    }
    const target = new URL(resumeUrl);
    target.searchParams.set("download", "1");
    return Response.redirect(target.toString(), 307);
  };
}
