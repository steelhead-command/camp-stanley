import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GalleryPage from "../page";

describe("Gallery page", () => {
  it("renders the hero heading", () => {
    render(<GalleryPage />);
    expect(
      screen.getByRole("heading", { name: /a glimpse of camp life/i })
    ).toBeInTheDocument();
  });

  it("renders category filter buttons", () => {
    render(<GalleryPage />);
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Grounds" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Activities" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accommodations" })).toBeInTheDocument();
  });

  it("renders photo grid with images", () => {
    render(<GalleryPage />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(7);
  });

  it("filters photos by category", async () => {
    const user = userEvent.setup();
    render(<GalleryPage />);

    await user.click(screen.getByRole("button", { name: "Activities" }));
    const images = screen.getAllByRole("img");
    // Should show only Activities photos (Fishing + Candles)
    expect(images.length).toBe(2);
  });

  it("opens lightbox when photo is clicked", async () => {
    const user = userEvent.setup();
    render(<GalleryPage />);

    // Click on a photo (the grid buttons)
    const photoButtons = screen.getAllByRole("button").filter(
      (btn) => !["All", "Grounds", "Activities", "Accommodations"].includes(btn.textContent || "")
    );
    await user.click(photoButtons[0]);

    // Lightbox should show close button
    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument();
  });
});
