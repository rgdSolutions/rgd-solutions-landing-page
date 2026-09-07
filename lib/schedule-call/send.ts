import { Resend } from "resend";
import type { LeadSender } from "./handler";

/**
 * Resend adapter. RESEND_API_KEY is provisioned by the Vercel Marketplace integration.
 * LEAD_FROM_EMAIL must be a sender on a verified Resend domain; until rgd-solutions.com is
 * verified, Resend's onboarding sender works for delivery to the account owner's inbox.
 */
export function createResendSender(apiKey: string, from: string): LeadSender {
  const resend = new Resend(apiKey);
  return {
    async send({ to, replyTo, mail }) {
      const { error } = await resend.emails.send({
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
