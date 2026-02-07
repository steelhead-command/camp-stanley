import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";

// Get a reference to the mocked module so we can change usePathname per test
const mockPush = vi.fn();

vi.mock("next/navigation", async () => ({
  useRouter: () => ({
    push: mockPush,
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders all 6 navigation links on desktop", () => {
    render(<Navbar />);
    const expectedLabels = [
      "Home",
      "About",
      "Activities",
      "Gallery",
      "Book a Stay",
      "Contact",
    ];
    // Desktop links are rendered as <a> tags (through mocked next/link)
    for (const label of expectedLabels) {
      const links = screen.getAllByText(label);
      expect(links.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("applies text-bronze class to the active route", () => {
    render(<Navbar />);
    // Home link (href="/") should be active since usePathname returns "/"
    const homeLinks = screen.getAllByText("Home");
    const desktopHomeLink = homeLinks.find(
      (el) => el.tagName.toLowerCase() === "a"
    );
    expect(desktopHomeLink?.className).toContain("text-bronze");
  });

  it("toggles mobile menu open and closed", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const hamburger = screen.getByLabelText("Toggle menu");

    // Menu should not show mobile links initially (buttons)
    expect(screen.queryAllByRole("button", { name: "About" })).toHaveLength(0);

    // Open menu
    await user.click(hamburger);
    expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();

    // Close menu
    await user.click(hamburger);
    expect(screen.queryByRole("button", { name: "About" })).not.toBeInTheDocument();
  });

  it("closes mobile menu and calls router.push when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Open mobile menu
    await user.click(screen.getByLabelText("Toggle menu"));

    // Click "About" in mobile menu
    await user.click(screen.getByRole("button", { name: "About" }));

    expect(mockPush).toHaveBeenCalledWith("/about");
    // Menu should be closed
    expect(screen.queryByRole("button", { name: "About" })).not.toBeInTheDocument();
  });
});
