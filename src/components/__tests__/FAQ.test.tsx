import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQ from "../FAQ";

const items = [
  { question: "What time is check-in?", answer: "Check-in is at 3 PM." },
  { question: "Are pets allowed?", answer: "Yes, dogs are welcome." },
];

describe("FAQ", () => {
  it("renders all questions", () => {
    render(<FAQ items={items} />);
    expect(screen.getByText("What time is check-in?")).toBeInTheDocument();
    expect(screen.getByText("Are pets allowed?")).toBeInTheDocument();
  });

  it("answers are hidden by default", () => {
    render(<FAQ items={items} />);
    // The answer elements exist but are in a collapsed grid-rows-[0fr] container
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("expands an answer on click", async () => {
    const user = userEvent.setup();
    render(<FAQ items={items} />);

    await user.click(screen.getByText("What time is check-in?"));
    const button = screen.getAllByRole("button")[0];
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("collapses on second click", async () => {
    const user = userEvent.setup();
    render(<FAQ items={items} />);

    await user.click(screen.getByText("What time is check-in?"));
    await user.click(screen.getByText("What time is check-in?"));
    const button = screen.getAllByRole("button")[0];
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
