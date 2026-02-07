import { test, expect } from "@playwright/test";

test.describe("Performance budgets", () => {
  test("total transferred JS is under 750KB", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const transferredJSKB = await page.evaluate(() => {
      const entries = performance.getEntriesByType(
        "resource"
      ) as PerformanceResourceTiming[];
      let total = 0;
      for (const entry of entries) {
        if (entry.initiatorType === "script" || entry.name.endsWith(".js")) {
          total += entry.transferSize;
        }
      }
      return total / 1024;
    });

    console.log(`Total JS (transfer): ${transferredJSKB.toFixed(1)} KB`);
    expect(transferredJSKB).toBeGreaterThan(0);
    expect(transferredJSKB).toBeLessThan(750);
  });

  test("total transferred CSS is under 50KB", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const transferredCSSKB = await page.evaluate(() => {
      const entries = performance.getEntriesByType(
        "resource"
      ) as PerformanceResourceTiming[];
      let total = 0;
      for (const entry of entries) {
        if (entry.initiatorType === "link" && entry.name.endsWith(".css")) {
          total += entry.transferSize;
        }
      }
      return total / 1024;
    });

    console.log(`Total CSS (transfer): ${transferredCSSKB.toFixed(1)} KB`);
    expect(transferredCSSKB).toBeGreaterThan(0);
    expect(transferredCSSKB).toBeLessThan(50);
  });

  test("LCP is under 2.5 seconds", async ({ page }) => {
    await page.goto("/");

    const lcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ type: "largest-contentful-paint", buffered: true });

        // Timeout — fail explicitly if LCP is never reported
        setTimeout(() => resolve(-1), 10000);
      });
    });

    console.log(`LCP: ${lcp.toFixed(0)} ms`);
    expect(lcp, "LCP was not reported by the browser").toBeGreaterThan(0);
    expect(lcp).toBeLessThan(2500);
  });
});
