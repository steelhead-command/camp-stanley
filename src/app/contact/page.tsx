"use client";

import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "carolynfstanley@yahoo.com", href: "mailto:carolynfstanley@yahoo.com" },
  { label: "Location", value: "Pacific Northwest" },
];


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire to API / form service later
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[40vh] items-center justify-center bg-background px-6 pt-20 text-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-driftwood">
            Questions, group bookings, or just want to say hello — we&rsquo;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="bg-background px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Send us a message
            </h2>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-sage/20 bg-sand p-8 text-center">
                <p className="text-xl font-bold text-foreground">Thank you!</p>
                <p className="mt-2 text-sm text-driftwood">
                  We&rsquo;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-[0.1em] text-driftwood">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-lg border border-stone/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-driftwood/40 focus:border-sage/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-[0.1em] text-driftwood">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-lg border border-stone/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-driftwood/40 focus:border-sage/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-xs font-medium uppercase tracking-[0.1em] text-driftwood">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full rounded-lg border border-stone/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-driftwood/40 focus:border-sage/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-[0.1em] text-driftwood">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-lg border border-stone/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-driftwood/40 focus:border-sage/40 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-8 text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-sage-light"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Contact details
              </h2>
              <div className="mt-6 space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-sage">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block whitespace-pre-line text-sm text-driftwood transition-colors hover:text-sage"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-driftwood">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-sage">
                How to Get Here
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-driftwood">
                Contact Carolyn Stanley for directions.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-stone/10">
              <div className="flex aspect-video items-center justify-center bg-sand">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mx-auto h-10 w-10 text-sage/40">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <p className="mt-2 text-xs text-driftwood">Map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
