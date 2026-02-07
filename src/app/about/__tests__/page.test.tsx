import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage, { metadata } from "../page";

describe("About page", () => {
  it("renders the hero heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /rooted in the pacific northwest/i })
    ).toBeInTheDocument();
  });

  it("renders the origin story section", () => {
    render(<AboutPage />);
    expect(screen.getByText(/nick and carolyn stanley found/i)).toBeInTheDocument();
  });

  it("renders the land section", () => {
    render(<AboutPage />);
    expect(screen.getByText(/evergreen forests, river/i)).toBeInTheDocument();
  });

  it("renders mission values", () => {
    render(<AboutPage />);
    expect(screen.getByText("Stewardship")).toBeInTheDocument();
    expect(screen.getByText("Hospitality")).toBeInTheDocument();
    expect(screen.getByText("Simplicity")).toBeInTheDocument();
  });

  it("renders milestones timeline", () => {
    render(<AboutPage />);
    expect(screen.getByText("1999")).toBeInTheDocument();
    expect(screen.getByText("Today")).toBeInTheDocument();
  });

  it("renders CTA linking to /booking", () => {
    render(<AboutPage />);
    const link = screen.getByRole("link", { name: /book your stay/i });
    expect(link).toHaveAttribute("href", "/booking");
  });

  it("exports correct metadata", () => {
    expect(metadata.title).toBe("Our Story | Camp Stanley");
  });
});
