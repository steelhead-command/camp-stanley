import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Camp Stanley")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(/a year-round retreat where families/i)
    ).toBeInTheDocument();
  });

  it("renders all 5 navigation links", () => {
    render(<Footer />);
    const expectedLinks = [
      "About",
      "Activities",
      "Gallery",
      "Book a Stay",
      "Contact",
    ];
    for (const label of expectedLinks) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("carolynfstanley@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Pacific Northwest")).toBeInTheDocument();
  });

  it("displays the current year in copyright", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} Camp Stanley`))
    ).toBeInTheDocument();
  });
});
