"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { CalendarIcon } from "./icons";

/** "2026-09-25" -> local Date; avoids the UTC shift of `new Date("2026-09-25")`. */
export function parseIsoDate(value: string): Date | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return undefined;
  const [, y, m, d] = match;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return Number.isNaN(date.getTime()) ? undefined : date;
}

/** Local Date -> "YYYY-MM-DD". */
export function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const displayFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const dayButton =
  "flex size-10 items-center justify-center rounded-pill text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 " +
  "group-data-[selected=true]:bg-teal group-data-[selected=true]:text-navy group-data-[selected=true]:shadow-[0_8px_24px_rgba(63,210,199,0.35)] " +
  "group-data-[today=true]:ring-1 group-data-[today=true]:ring-teal/60 " +
  "group-data-[disabled=true]:cursor-not-allowed group-data-[disabled=true]:text-white/25 group-data-[disabled=true]:hover:bg-transparent";

const navButton =
  "flex size-9 items-center justify-center rounded-pill border border-white/[0.14] text-white/80 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 disabled:opacity-30 [&_svg]:size-4 [&_svg]:fill-current";

const classNames = {
  root: "font-sans text-white",
  months: "flex",
  month: "flex flex-col gap-3",
  month_caption: "flex h-9 items-center justify-center",
  caption_label: "font-display text-[17px] font-semibold tracking-[-0.01em]",
  nav: "absolute inset-x-0 top-0 flex justify-between",
  button_previous: navButton,
  button_next: navButton,
  month_grid: "border-collapse",
  weekdays: "",
  weekday: "size-10 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-white/45",
  week: "",
  day: "group p-0.5 text-center",
  day_button: dayButton,
  today: "",
  selected: "",
  disabled: "",
  outside: "opacity-0",
  hidden: "invisible",
  focused: "",
} as const;

export interface DatePickerProps {
  id: string;
  /** ISO date string (YYYY-MM-DD) or "" when unset. */
  value: string;
  onChange: (iso: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  /** Injected for deterministic tests; defaults to the real current date. */
  today?: Date;
  /** Marks the field invalid (rendered as data-invalid; buttons do not support aria-invalid). */
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

export function DatePicker({
  id,
  value,
  onChange,
  onBlur,
  placeholder = "Pick a date",
  today,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();
  const selected = parseIsoDate(value);
  // Fixed for the component's lifetime so re-renders never shift the "today" boundary.
  const [startOfToday] = useState(() => {
    const date = today ? new Date(today) : new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  });

  const close = useCallback(
    (restoreFocus: boolean) => {
      setOpen(false);
      onBlur?.();
      if (restoreFocus) triggerRef.current?.focus();
    },
    [onBlur],
  );

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    }
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (popoverRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      close(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
        data-invalid={ariaInvalid ? "true" : "false"}
        aria-describedby={ariaDescribedBy}
        onClick={() => (open ? close(false) : setOpen(true))}
        className="flex h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-[14px] border border-white/[0.16] bg-navy/55 px-[18px] text-left text-base text-white outline-none transition-colors hover:border-white/30 focus-visible:border-teal focus-visible:ring-4 focus-visible:ring-teal/[0.18] aria-[expanded=true]:border-teal data-[invalid=true]:border-rose"
      >
        <span className={selected ? "text-white" : "text-white/40"}>
          {selected ? displayFormat.format(selected) : placeholder}
        </span>
        <CalendarIcon className="shrink-0 text-teal" />
      </button>

      {open ? (
        <div
          ref={popoverRef}
          id={dialogId}
          role="dialog"
          aria-modal="false"
          aria-label="Choose a date"
          className="absolute left-0 top-[calc(100%+8px)] z-40 rounded-[20px] border border-white/[0.16] bg-[#0c182e]/[0.97] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-[18px]"
        >
          <DayPicker
            mode="single"
            required={false}
            selected={selected}
            today={startOfToday}
            defaultMonth={selected ?? startOfToday}
            disabled={{ before: startOfToday }}
            showOutsideDays={false}
            autoFocus
            classNames={classNames}
            onSelect={(date) => {
              if (!date) return;
              onChange(toIsoDate(date));
              close(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
