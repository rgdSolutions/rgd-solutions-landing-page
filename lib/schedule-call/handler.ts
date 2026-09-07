import { buildLeadEmail, type LeadEmail } from "./email";
import { scheduleCallSchema } from "./schema";

/**
 * Thrown by senders for provider/configuration failures. Its message must never contain
 * lead data (only provider error names or config keys), so the handler may log it.
 */
export class LeadSendError extends Error {
  override readonly name = "LeadSendError";
}

export interface LeadSender {
  send(args: { to: string; replyTo: string; mail: LeadEmail }): Promise<void>;
}

export interface ScheduleCallDeps {
  sender: LeadSender;
  /** Where lead emails go. Comes from LEAD_INBOX_EMAIL. */
  inbox: string;
}

const GENERIC_FAILURE = "Could not send your request right now.";

function fieldErrors(issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>) {
  const errors: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!(key in errors)) errors[key] = issue.message;
  }
  return errors;
}

/**
 * Builds the POST handler for /api/schedule-call with its side effects injected,
 * so tests exercise the real validation, honeypot and error paths against a fake sender.
 */
export function createScheduleCallHandler({ sender, inbox }: ScheduleCallDeps) {
  return async function handleScheduleCall(request: Request): Promise<Response> {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { ok: false, errors: { form: "Invalid request body." } },
        { status: 400 },
      );
    }

    const parsed = scheduleCallSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { ok: false, errors: fieldErrors(parsed.error.issues) },
        { status: 400 },
      );
    }

    // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
    if (parsed.data.company) {
      return Response.json({ ok: true });
    }

    if (!inbox) {
      console.error("schedule-call: LEAD_INBOX_EMAIL is not configured");
      return Response.json({ ok: false, error: GENERIC_FAILURE }, { status: 500 });
    }

    try {
      await sender.send({
        to: inbox,
        replyTo: parsed.data.email,
        mail: buildLeadEmail(parsed.data),
      });
    } catch (error) {
      // Never log lead fields; an arbitrary error message may echo them. Only our own
      // LeadSendError messages are safe to record.
      console.error("schedule-call: send failed", {
        errorName: error instanceof Error ? error.name : typeof error,
        reason: error instanceof LeadSendError ? error.message : undefined,
      });
      return Response.json({ ok: false, error: GENERIC_FAILURE }, { status: 500 });
    }

    return Response.json({ ok: true });
  };
}
