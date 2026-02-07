import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with HTTP 200 in under 2 seconds", async ({ page }) => {
    const start = Date.now();
    const response = await page.goto("/");
    const elapsed = Date.now() - start;

    expect(response?.status()).toBe(200);
    expect(elapsed).toBeLessThan(2000);
  });

  test("has no failed resource requests", async ({ page }) => {
    const failedRequests: string[] = [];

    page.on("requestfailed", (request) => {
      failedRequests.push(`${request.url()} - ${request.failure()?.errorText}`);
    });

    await page.goto("/", { waitUntil: "networkidle" });

    expect(failedRequests).toEqual([]);
  });

  test("mobile menu toggles correctly", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");

    await page.goto("/");

    const hamburger = page.getByLabel("Toggle menu");
    await expect(hamburger).toBeVisible();

    // Open menu
    await hamburger.click();
    await expect(page.getByRole("button", { name: "About" })).toBeVisible();

    // Close menu
    await hamburger.click();
    await expect(
      page.getByRole("button", { name: "About" })
    ).not.toBeVisible();
  });

  test("hero CTA buttons are clickable", async ({ page }) => {
    await page.goto("/");

    // Scope to the hero section to avoid matching nav/footer links
    const hero = page.locator("section").first();

    const bookLink = hero.getByRole("link", { name: /book a stay/i });
    await expect(bookLink).toBeVisible();
    await expect(bookLink).toHaveAttribute("href", "/booking");

    const storyLink = hero.getByRole("link", { name: /our story/i });
    await expect(storyLink).toBeVisible();
    await expect(storyLink).toHaveAttribute("href", "/about");
  });
});
