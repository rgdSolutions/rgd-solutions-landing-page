// @vitest-environment jsdom
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BookCallForm } from "./book-call-form";

const CONTACT = "hello@example.com";

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function tomorrow(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d;
}

function tomorrowIso(): string {
  const d = tomorrow();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Opens the glass date picker and chooses tomorrow, moving to next month when needed. */
async function pickTomorrow(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByLabelText(/preferred date/i));
  const dialog = screen.getByRole("dialog");
  const target = tomorrow();
  if (target.getMonth() !== new Date().getMonth()) {
    await user.click(within(dialog).getByRole("button", { name: /next month/i }));
  }
  const dayPattern = new RegExp(`\\b${target.getDate()}(st|nd|rd|th)?\\b`);
  await user.click(within(dialog).getByRole("button", { name: dayPattern }));
}

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/^name/i), "Ada Lovelace");
  await user.type(screen.getByLabelText(/work email/i), "ada@example.com");
  await pickTomorrow(user);
  await user.type(screen.getByLabelText(/what are you building/i), "A RAG pipeline.");
}

describe("BookCallForm", () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows an inline error for an invalid email and does not submit", async () => {
    const user = userEvent.setup();
    render(<BookCallForm contactEmail={CONTACT} />);

    await user.type(screen.getByLabelText(/^name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/work email/i), "not-an-email");
    await pickTomorrow(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toHaveAttribute("aria-invalid", "true");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the typed fields as JSON and shows the success message on 200", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { ok: true }));
    render(<BookCallForm contactEmail={CONTACT} />);

    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    const status = await screen.findByRole("status");
    expect(status).toHaveTextContent(CONTACT);
    expect(screen.queryByRole("button", { name: /request a call/i })).not.toBeInTheDocument();

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/schedule-call");
    expect(init.method).toBe("POST");
    const body = JSON.parse(String(init.body)) as Record<string, string>;
    expect(body).toMatchObject({
      name: "Ada Lovelace",
      email: "ada@example.com",
      preferredDate: tomorrowIso(),
      message: "A RAG pipeline.",
      company: "",
    });
  });

  it("shows server-side field errors from a 400 response under the field", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(
      jsonResponse(400, { ok: false, errors: { email: "Use a work email" } }),
    );
    render(<BookCallForm contactEmail={CONTACT} />);

    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    const error = await screen.findByText("Use a work email");
    const emailInput = screen.getByLabelText(/work email/i);
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(emailInput.getAttribute("aria-describedby")).toBe(error.id);
  });

  it("shows the failure alert on a 500 and keeps the typed values", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(jsonResponse(500, { ok: false, error: "boom" }));
    render(<BookCallForm contactEmail={CONTACT} />);

    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/something went wrong/i);
    expect(screen.getByLabelText(/^name/i)).toHaveValue("Ada Lovelace");
    expect(screen.getByRole("button", { name: /request a call/i })).toBeEnabled();
  });
});
