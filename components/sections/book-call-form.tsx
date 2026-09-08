"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { bookCall } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { scheduleCallSchema, type ScheduleCallInput } from "@/lib/schedule-call/schema";

type FieldName = keyof ScheduleCallInput;

const FIELD_NAMES: readonly FieldName[] = [
  "name",
  "email",
  "phone",
  "preferredDate",
  "message",
  "company",
];

function isFieldName(value: string): value is FieldName {
  return (FIELD_NAMES as readonly string[]).includes(value);
}

const inputClass =
  "h-[52px] w-full rounded-[14px] border border-ink/[0.16] bg-navy/55 px-[18px] text-base text-ink outline-none placeholder:text-ink/60 focus:border-teal focus:ring-4 focus:ring-teal/[0.18] aria-[invalid=true]:border-rose";

const labelClass = "flex flex-col gap-2";
const labelTextClass = "text-[13px] font-bold text-ink/75";
const optionalClass = "font-medium text-ink/65";

interface ServerFieldErrors {
  ok: false;
  errors: Record<string, string>;
}

function isServerFieldErrors(value: unknown): value is ServerFieldErrors {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return record.ok === false && typeof record.errors === "object" && record.errors !== null;
}

type Status = "idle" | "sent" | "failed";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} className="text-[13px] text-rose">
      {message}
    </span>
  );
}

export function BookCallForm({ contactEmail }: { contactEmail: string }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ScheduleCallInput>({
    resolver: zodResolver(scheduleCallSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const fieldId = (name: FieldName) => `${id}-${name}`;
  const errorId = (name: FieldName) => `${id}-${name}-error`;

  function fieldProps(name: FieldName) {
    const hasError = Boolean(errors[name]);
    return {
      id: fieldId(name),
      "aria-invalid": hasError ? ("true" as const) : ("false" as const),
      "aria-describedby": hasError ? errorId(name) : undefined,
    };
  }

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setStatus("sent");
        return;
      }
      if (response.status === 400) {
        const payload: unknown = await response.json().catch(() => null);
        if (isServerFieldErrors(payload)) {
          let focused = false;
          for (const [field, message] of Object.entries(payload.errors)) {
            if (isFieldName(field) && ["name", "email", "message"].includes(field)) {
              setError(field, { type: "server", message }, { shouldFocus: !focused });
              focused = true;
            }
          }
          if (!focused) setStatus("failed");
          return;
        }
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  });

  if (status === "sent") {
    return (
      <div
        role="status"
        className="glass-soft flex min-h-[280px] flex-col items-center justify-center gap-5 rounded-[22px] p-8 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-pill bg-teal/[0.16] text-teal">
          <CheckIcon size={26} />
        </span>
        <p className="max-w-md text-[17px] leading-relaxed text-ink/86">
          {bookCall.success(contactEmail)}
        </p>
      </div>
    );
  }

  return (
    <form
      aria-busy={isSubmitting}
      noValidate
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[18px]"
    >
      <label htmlFor={fieldId("name")} className={labelClass}>
        <span className={labelTextClass}>{bookCall.fields.name.label}</span>
        <input
          {...register("name")}
          {...fieldProps("name")}
          required
          type="text"
          autoComplete="name"
          placeholder={bookCall.fields.name.placeholder}
          className={inputClass}
        />
        <FieldError id={errorId("name")} message={errors.name?.message} />
      </label>

      <label htmlFor={fieldId("email")} className={labelClass}>
        <span className={labelTextClass}>{bookCall.fields.email.label}</span>
        <input
          {...register("email")}
          {...fieldProps("email")}
          required
          spellCheck={false}
          type="email"
          autoComplete="email"
          placeholder={bookCall.fields.email.placeholder}
          className={inputClass}
        />
        <FieldError id={errorId("email")} message={errors.email?.message} />
      </label>

      <label htmlFor={fieldId("message")} className={`${labelClass} md:col-span-2`}>
        <span className={labelTextClass}>
          {bookCall.fields.message.label}{" "}
          <span className={optionalClass}>{bookCall.fields.message.optional}</span>
        </span>
        <textarea
          {...register("message")}
          {...fieldProps("message")}
          rows={4}
          placeholder={bookCall.fields.message.placeholder}
          className={`${inputClass} h-auto min-h-[120px] resize-y py-3.5`}
        />
        <FieldError id={errorId("message")} message={errors.message?.message} />
      </label>

      <input
        {...register("company")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "failed" ? (
        <p role="alert" className="text-[15px] leading-relaxed text-rose md:col-span-2">
          {bookCall.failure}{" "}
          {contactEmail ? (
            <a className="underline underline-offset-4" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          ) : null}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 md:col-span-2 md:flex-row-reverse md:items-center md:justify-between md:gap-4">
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? bookCall.submitting : bookCall.submit}
          <ArrowRightIcon />
        </Button>
        <span className="text-center text-[13px] leading-normal text-ink/65 md:text-left">
          {bookCall.replyNote(contactEmail)}
        </span>
      </div>
    </form>
  );
}
