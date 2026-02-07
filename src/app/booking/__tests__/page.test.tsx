import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingPage, { metadata } from "../page";

describe("Booking page", () => {
  it("renders the hero heading", () => {
    render(<BookingPage />);
    expect(
      screen.getByRole("heading", { name: /reserve your spot/i })
    ).toBeInTheDocument();
  });

  it("renders external booking link", () => {
    render(<BookingPage />);
    const bookLink = screen.getByRole("link", { name: /book on hipcamp/i });
    expect(bookLink).toHaveAttribute("href", "https://www.hipcamp.com");
    expect(bookLink).toHaveAttribute("target", "_blank");
  });

  it("renders FAQ section with questions", () => {
    render(<BookingPage />);
    expect(screen.getByText(/check-in and check-out times/i)).toBeInTheDocument();
    expect(screen.getByText(/what is the cancellation policy/i)).toBeInTheDocument();
    expect(screen.getByText(/pets allowed/i)).toBeInTheDocument();
  });

  it("renders contact link", () => {
    render(<BookingPage />);
    const contactLink = screen.getByRole("link", { name: /questions\? contact us/i });
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("exports correct metadata", () => {
    expect(metadata.title).toBe("Book Your Stay | Camp Stanley");
  });
});
