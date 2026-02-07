"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder — wire to Mailchimp/ConvertKit later
    setSubmitted(true);
  }

  return (
    <section className="border-t border-stone/10 bg-sand px-6 py-12">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
          Stay in the loop
        </h3>
        <p className="mt-2 text-sm text-driftwood">
          Get seasonal updates, exclusive offers, and stories from the campfire.
        </p>

        {submitted ? (
          <p className="mt-6 text-sm font-medium text-sage">
            Thanks for subscribing! We&rsquo;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-full border border-stone/15 bg-white px-5 py-3 text-sm text-foreground placeholder:text-driftwood/60 focus:border-sage/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-6 text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-sage-light"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
