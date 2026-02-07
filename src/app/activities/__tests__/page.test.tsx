import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ActivitiesPage, { metadata } from "../page";

describe("Activities page", () => {
  it("renders the hero heading", () => {
    render(<ActivitiesPage />);
    expect(
      screen.getByRole("heading", { name: /adventure waits/i })
    ).toBeInTheDocument();
  });

  it("renders all three category headings", () => {
    render(<ActivitiesPage />);
    expect(screen.getByText("On the Water")).toBeInTheDocument();
    expect(screen.getByText("On the Land")).toBeInTheDocument();
    expect(screen.getByText("After Dark")).toBeInTheDocument();
  });

  it("renders individual activities", () => {
    render(<ActivitiesPage />);
    expect(screen.getByText("Fishing")).toBeInTheDocument();
    expect(screen.getByText("Kayaking")).toBeInTheDocument();
    expect(screen.getByText("Hiking")).toBeInTheDocument();
    expect(screen.getByText("Stargazing")).toBeInTheDocument();
    expect(screen.getByText("Campfire Cooking")).toBeInTheDocument();
    expect(screen.getByText("Candle Making")).toBeInTheDocument();
  });

  it("shows best season and skill level for activities", () => {
    render(<ActivitiesPage />);
    expect(screen.getAllByText("Year-round").length).toBeGreaterThan(0);
    expect(screen.getAllByText("All levels").length).toBeGreaterThan(0);
  });

  it("renders CTA linking to /booking", () => {
    render(<ActivitiesPage />);
    const link = screen.getByRole("link", { name: /book your stay/i });
    expect(link).toHaveAttribute("href", "/booking");
  });

  it("exports correct metadata", () => {
    expect(metadata.title).toBe("Things To Do | Camp Stanley");
  });
});
