import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../layout";

describe("RootLayout", () => {
  it("renders children", () => {
    // Render into document.body to avoid <html> inside <div> invalid DOM
    render(
      <RootLayout>
        <div data-testid="child">Hello</div>
      </RootLayout>,
      { container: document.body }
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("includes Navbar and Footer", () => {
    render(
      <RootLayout>
        <div>content</div>
      </RootLayout>,
      { container: document.body }
    );
    // Navbar renders "Camp Stanley" as logo text
    // Footer also renders "Camp Stanley"
    const campStanleyElements = screen.getAllByText("Camp Stanley");
    expect(campStanleyElements.length).toBeGreaterThanOrEqual(2);
  });

  it("exports correct metadata title", () => {
    expect(metadata.title).toBe("Camp Stanley | A Year-Round Retreat");
  });

  it("exports correct metadata description", () => {
    expect(metadata.description).toContain("Camp Stanley");
    expect(metadata.description).toContain("year-round campsite");
  });
});
