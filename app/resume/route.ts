import { createResumeHandler } from "@/lib/resume/handler";

/**
 * The redirect target only changes when the resume is re-synced, so let the CDN cache
 * this response and refresh it hourly instead of invoking a function per click.
 */
export const revalidate = 3600;

export async function GET() {
  return createResumeHandler({ resumeUrl: process.env.RESUME_URL ?? "" })();
}
