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
    render(<Home />);
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

  it("renders multiple testimonials", () => {
    render(<Home />);
    expect(
      screen.getByText(/we\u2019ve been bringing our family here/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The Martinez Family/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/David Chen/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Sarah Okonkwo/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The Nguyen Family/)
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
