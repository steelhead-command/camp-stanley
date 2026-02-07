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
    <section className="border-t border-white/5 bg-charcoal-light px-6 py-12">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="font-serif text-xl text-cream sm:text-2xl">
          Stay in the loop
        </h3>
        <p className="mt-2 text-sm text-warm-gray">
          Get seasonal updates, exclusive offers, and stories from the campfire.
        </p>

        {submitted ? (
          <p className="mt-6 text-sm font-medium text-bronze">
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
              className="flex-1 rounded-full border border-white/10 bg-charcoal px-5 py-3 text-sm text-cream placeholder:text-warm-gray/60 focus:border-bronze/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-bronze px-6 text-sm font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-bronze-light"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
