import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Amenities from "../Amenities";

describe("Amenities", () => {
  it("renders category headings", () => {
    render(<Amenities />);
    expect(screen.getByText("The Lodge")).toBeInTheDocument();
    expect(screen.getByText("Recreation")).toBeInTheDocument();
    expect(screen.getByText("Outdoors")).toBeInTheDocument();
  });

  it("renders amenity labels", () => {
    render(<Amenities />);
    expect(screen.getByText("12 Beds")).toBeInTheDocument();
    expect(screen.getByText("Full Kitchen")).toBeInTheDocument();
    expect(screen.getByText("Fishing")).toBeInTheDocument();
    expect(screen.getByText("River Access")).toBeInTheDocument();
  });

  it("renders 12 amenity items", () => {
    render(<Amenities />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(12);
  });
});
