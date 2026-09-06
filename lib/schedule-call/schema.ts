import { z } from "zod";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => (value ? value : undefined));

export const scheduleCallSchema = z.object({
  name: z.string().trim().min(1, "Please tell me your name.").max(120),
  email: z.email("Please enter a valid email address.").trim().max(254),
  phone: optionalText(40),
  preferredDate: z
    .string()
    .regex(ISO_DATE, "Please pick a date.")
    .refine((value) => value >= todayIso(), "Please pick today or a later date."),
  message: optionalText(2000),
  // Honeypot: real users never see or fill this field.
  company: z.string().max(200).optional().default(""),
});

export type ScheduleCallInput = z.input<typeof scheduleCallSchema>;
export type ScheduleCallRequest = z.output<typeof scheduleCallSchema>;
