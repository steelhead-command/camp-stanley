import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../layout";

describe("RootLayout", () => {
  it("renders children", () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello</div>
      </RootLayout>,
      { container: document.body }
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("includes Navbar, Footer, and NewsletterSignup", () => {
    render(
      <RootLayout>
        <div>content</div>
      </RootLayout>,
      { container: document.body }
    );
    // Navbar and Footer both render "Camp Stanley"
    const campStanleyElements = screen.getAllByText("Camp Stanley");
    expect(campStanleyElements.length).toBeGreaterThanOrEqual(2);
    // NewsletterSignup renders its heading
    expect(screen.getByText(/stay in the loop/i)).toBeInTheDocument();
  });

  it("exports correct metadata title", () => {
    expect(metadata.title).toBe("Camp Stanley | A Year-Round Retreat");
  });

  it("exports correct metadata description", () => {
    expect(metadata.description).toContain("Camp Stanley");
    expect(metadata.description).toContain("year-round campsite");
  });

  it("exports OpenGraph metadata", () => {
    expect(metadata.openGraph).toBeDefined();
  });
});
