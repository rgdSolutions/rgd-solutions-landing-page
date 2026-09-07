// @vitest-environment jsdom
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DatePicker } from "./date-picker";

// A fixed "today" (a Wednesday mid-month) so day numbers are unambiguous within the visible month.
const TODAY = new Date(2026, 8, 16); // 2026-09-16 local

function setup(props: Partial<React.ComponentProps<typeof DatePicker>> = {}) {
  const onChange = vi.fn();
  const utils = render(
    <>
      <label id="pd-label" htmlFor="pd">
        Preferred date
      </label>
      <DatePicker id="pd" value="" onChange={onChange} today={TODAY} {...props} />
    </>,
  );
  return { ...utils, onChange, user: userEvent.setup() };
}

describe("DatePicker", () => {
  it("is closed by default and shows the placeholder", () => {
    setup({ placeholder: "Pick a date" });
    const trigger = screen.getByLabelText(/preferred date/i);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveTextContent("Pick a date");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens a calendar dialog when the trigger is clicked", async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/preferred date/i));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred date/i)).toHaveAttribute("aria-expanded", "true");
  });

  it("selecting a day reports it as YYYY-MM-DD, closes the dialog and shows the formatted date", async () => {
    const { user, onChange } = setup();
    await user.click(screen.getByLabelText(/preferred date/i));
    const dialog = screen.getByRole("dialog");
    await user.click(within(dialog).getByRole("button", { name: /\b25(st|nd|rd|th)?\b/ }));
    expect(onChange).toHaveBeenCalledWith("2026-09-25");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders the current value as a readable date on the trigger", () => {
    setup({ value: "2026-09-25" });
    expect(screen.getByLabelText(/preferred date/i)).toHaveTextContent(/Sep(tember)? 25, 2026/);
  });

  it("disables days before today so they cannot be chosen", async () => {
    const { user, onChange } = setup();
    await user.click(screen.getByLabelText(/preferred date/i));
    const dialog = screen.getByRole("dialog");
    const past = within(dialog).getByRole("button", { name: /\b3(st|nd|rd|th)?\b/ });
    expect(past).toBeDisabled();
    await user.click(past);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { user } = setup();
    const trigger = screen.getByLabelText(/preferred date/i);
    await user.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("marks the trigger invalid and links the error message passed from the form", () => {
    setup({ "aria-invalid": true, "aria-describedby": "pd-error" });
    const trigger = screen.getByLabelText(/preferred date/i);
    expect(trigger).toHaveAttribute("data-invalid", "true");
    expect(trigger).toHaveAttribute("aria-describedby", "pd-error");
  });
});
