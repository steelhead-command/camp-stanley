import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterSignup from "../NewsletterSignup";

describe("NewsletterSignup", () => {
  it("renders heading and description", () => {
    render(<NewsletterSignup />);
    expect(screen.getByText(/stay in the loop/i)).toBeInTheDocument();
    expect(screen.getByText(/seasonal updates/i)).toBeInTheDocument();
  });

  it("renders email input and submit button", () => {
    render(<NewsletterSignup />);
    expect(screen.getByPlaceholderText(/your@email.com/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });

  it("shows success message on submit", async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    await user.type(screen.getByPlaceholderText(/your@email.com/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
  });
});
