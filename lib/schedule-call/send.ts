import { Resend } from "resend";
import type { LeadSender } from "./handler";

/**
 * Resend adapter. RESEND_API_KEY is provisioned by the Vercel Marketplace integration.
 * LEAD_FROM_EMAIL must be a sender on a verified Resend domain; until rgd-solutions.com is
 * verified, Resend's onboarding sender works for delivery to the account owner's inbox.
 *
 * The client is created lazily so a missing key surfaces as a handled send() failure
 * (generic 500 to the visitor, structured log for us) instead of crashing the route.
 */
export function createResendSender(apiKey: string, from: string): LeadSender {
  let client: Resend | undefined;
  return {
    async send({ to, replyTo, mail }) {
      if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
      client ??= new Resend(apiKey);
      const { error } = await client.emails.send({
        from,
        to: [to],
        replyTo,
        subject: mail.subject,
        text: mail.text,
        html: mail.html,
      });
      if (error) throw new Error(`resend: ${error.name}`);
    },
  };
}
