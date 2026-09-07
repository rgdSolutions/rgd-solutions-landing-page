import { createResumeHandler } from "@/lib/resume/handler";

export async function GET() {
  return createResumeHandler({ resumeUrl: process.env.RESUME_URL ?? "" })();
}
