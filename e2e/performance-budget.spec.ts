import { test, expect } from "@playwright/test";

test.describe("Performance budgets", () => {
  test("total JS bundle is under 500KB", async ({ page }) => {
    let totalJS = 0;
    const jsResponses: any[] = [];

    page.on("response", (response) => {
      const url = response.url();
      const contentType = response.headers()["content-type"] || "";
      if (
        contentType.includes("javascript") ||
        url.endsWith(".js") ||
        url.includes("/_next/static/chunks/")
      ) {
        jsResponses.push(response);
      }
    });

    await page.goto("/", { waitUntil: "networkidle" });

    for (const response of jsResponses) {
      try {
        const body = await response.body();
        totalJS += body.length;
      } catch {
        // Response body unavailable (e.g. redirect), skip
      }
    }

    const totalJSKB = totalJS / 1024;
    console.log(`Total JS: ${totalJSKB.toFixed(1)} KB`);
    expect(totalJSKB).toBeGreaterThan(0);
    expect(totalJSKB).toBeLessThan(500);
  });

  test("total CSS is under 50KB", async ({ page }) => {
    let totalCSS = 0;

    const responses: any[] = [];

    page.on("response", (response) => {
      const url = response.url();
      const contentType = response.headers()["content-type"] || "";
      if (contentType.includes("css") || url.endsWith(".css")) {
        responses.push(response);
      }
    });

    await page.goto("/", { waitUntil: "networkidle" });

    for (const response of responses) {
      try {
        const body = await response.body();
        totalCSS += body.length;
      } catch {
        // Response body unavailable, skip
      }
    }

    const totalCSSKB = totalCSS / 1024;
    console.log(`Total CSS: ${totalCSSKB.toFixed(1)} KB`);
    expect(totalCSSKB).toBeGreaterThan(0);
    expect(totalCSSKB).toBeLessThan(50);
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
