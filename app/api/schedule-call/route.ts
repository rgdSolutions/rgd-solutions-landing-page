import { createScheduleCallHandler } from "@/lib/schedule-call/handler";
import { createResendSender } from "@/lib/schedule-call/send";

const DEFAULT_FROM = "RGD Solutions <onboarding@resend.dev>";

export async function POST(request: Request) {
  const handler = createScheduleCallHandler({
    sender: createResendSender(
      process.env.RESEND_API_KEY ?? "",
      process.env.LEAD_FROM_EMAIL ?? DEFAULT_FROM,
    ),
    inbox: process.env.LEAD_INBOX_EMAIL ?? "",
  });
  return handler(request);
}
