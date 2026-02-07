import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "../page";

describe("Contact page", () => {
  it("renders the hero heading", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /get in touch/i })
    ).toBeInTheDocument();
  });

  it("renders the contact form with all fields", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("renders contact details", () => {
    render(<ContactPage />);
    expect(screen.getByText("carolynfstanley@yahoo.com")).toBeInTheDocument();
  });

  it("renders directions", () => {
    render(<ContactPage />);
    expect(screen.getByText(/contact carolyn stanley for directions/i)).toBeInTheDocument();
  });

  it("shows success message on form submit", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByLabelText(/name/i), "Test User");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/subject/i), "Question");
    await user.type(screen.getByLabelText(/message/i), "Hello there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });
});
