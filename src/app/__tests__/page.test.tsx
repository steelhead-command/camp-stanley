import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /where every season/i })
    ).toBeInTheDocument();
  });

  it("renders both CTA buttons with correct hrefs", () => {
    render(<Home />);
    const bookLink = screen.getByRole("link", { name: /book a stay/i });
    expect(bookLink).toHaveAttribute("href", "/booking");

    const storyLink = screen.getByRole("link", { name: /our story/i });
    expect(storyLink).toHaveAttribute("href", "/about");
  });

  it("renders all 3 highlight cards with title, description, and SVG icon", () => {
    const { container } = render(<Home />);
    const highlights = [
      {
        title: "Rustic Cabins",
        desc: /hand-built cabins/i,
      },
      {
        title: "Miles of Trails",
        desc: /winding paths/i,
      },
      {
        title: "Starlit Nights",
        desc: /far from city lights/i,
      },
    ];

    for (const h of highlights) {
      expect(screen.getByText(h.title)).toBeInTheDocument();
      expect(screen.getByText(h.desc)).toBeInTheDocument();
    }

    // 3 highlight icons + 1 testimonial quote icon = 4 total
    const svgs = container.querySelectorAll("svg.h-8.w-8");
    expect(svgs).toHaveLength(4);
  });

  it("renders all 4 activity cards", () => {
    render(<Home />);
    const activities = [
      "Hiking & Trail Running",
      "Fishing & Kayaking",
      "Campfire Cooking",
      "Stargazing",
    ];
    for (const activity of activities) {
      expect(screen.getByText(activity)).toBeInTheDocument();
    }
  });

  it("renders the testimonial quote and attribution", () => {
    render(<Home />);
    expect(
      screen.getByText(/we\u2019ve been bringing our family here/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The Martinez Family, Austin TX/)
    ).toBeInTheDocument();
  });

  it("renders the final CTA linking to /booking", () => {
    render(<Home />);
    const availabilityLink = screen.getByRole("link", {
      name: /check availability/i,
    });
    expect(availabilityLink).toHaveAttribute("href", "/booking");
  });
});
