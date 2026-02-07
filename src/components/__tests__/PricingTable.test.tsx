import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PricingTable from "../PricingTable";

describe("PricingTable", () => {
  it("renders accommodation types", () => {
    render(<PricingTable />);
    expect(screen.getByText("Tent Site")).toBeInTheDocument();
    expect(screen.getByText("Cabin")).toBeInTheDocument();
    expect(screen.getByText("Group Site")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    render(<PricingTable />);
    expect(screen.getByText("Weekday")).toBeInTheDocument();
    expect(screen.getByText("Weekend")).toBeInTheDocument();
    expect(screen.getByText("Weekly")).toBeInTheDocument();
  });

  it("renders prices", () => {
    render(<PricingTable />);
    expect(screen.getByText("$35")).toBeInTheDocument();
    expect(screen.getByText("$120")).toBeInTheDocument();
  });

  it("renders best value badges", () => {
    render(<PricingTable />);
    const badges = screen.getAllByText("Best value");
    expect(badges.length).toBe(3);
  });

  it("renders season info", () => {
    render(<PricingTable />);
    expect(screen.getByText("Peak Season")).toBeInTheDocument();
    expect(screen.getByText("Off-Peak")).toBeInTheDocument();
  });
});
