// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
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

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/^name/i), "Ada Lovelace");
  await user.type(screen.getByLabelText(/^email/i), "ada@example.com");
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
    await user.type(screen.getByLabelText(/^email/i), "not-an-email");
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email/i)).toHaveAttribute("aria-invalid", "true");
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
    const emailInput = screen.getByLabelText(/^email/i);
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(emailInput.getAttribute("aria-describedby")).toBe(error.id);
    expect(emailInput).toHaveFocus();
  });

  it("prevents duplicate submissions while a request is pending", async () => {
    const user = userEvent.setup();
    let resolveRequest!: (response: Response) => void;
    fetchMock.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveRequest = resolve;
      }),
    );
    render(<BookCallForm contactEmail={CONTACT} />);
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));
    const pending = await screen.findByRole("button", { name: /sending/i });
    expect(pending).toBeDisabled();
    await user.click(pending);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    resolveRequest(jsonResponse(200, { ok: true }));
    expect(await screen.findByRole("status")).toHaveTextContent(/arrange your call/i);
  });

  it("shows the failure alert on a 500 and keeps the typed values", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(jsonResponse(500, { ok: false, error: "boom" }));
    render(<BookCallForm contactEmail={CONTACT} />);

    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /request a call/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/could not be sent/i);
    expect(screen.getByLabelText(/^name/i)).toHaveValue("Ada Lovelace");
    expect(screen.getByRole("button", { name: /request a call/i })).toBeEnabled();
  });
});
