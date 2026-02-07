import Link from "next/link";
import type { Metadata } from "next";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Book Your Stay | Camp Stanley",
  description:
    "Reserve your stay at Camp Stanley. Book your Pacific Northwest getaway at our premier camping and fishing lodge.",
};

const faqItems = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early arrivals and late departures can be arranged based on availability — just ask when you book.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Full refund if you cancel at least 14 days before arrival. Cancellations within 14 days receive a 50% refund. No-shows are non-refundable. Weather-related cancellations are handled on a case-by-case basis.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes! Well-behaved dogs are welcome at all tent and group sites (max 2 per site). Dogs must be leashed in common areas. Cabins are pet-free to accommodate guests with allergies. A $15/night pet fee applies.",
  },
  {
    question: "What should I bring?",
    answer:
      "The lodge sleeps 12 with linens provided. Full kitchen, washer and dryer, and 3 bathrooms on-site. Bring your personal gear and provisions — the kitchen is fully stocked with cookware.",
  },
  {
    question: "Is there cell service and WiFi?",
    answer:
      "Cell service is limited on the grounds — that's part of the charm. WiFi is available at the main lodge for anyone who needs to check in with the outside world.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "We're open rain or shine. The lodge has a large covered porch, games, and a library. Rainy mornings on the river have their own kind of beauty. We'll never cancel your reservation due to weather, but we're happy to reschedule if you prefer.",
  },
];

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[40vh] items-center justify-center bg-background px-6 pt-20 text-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            Book Your Stay
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Reserve your spot
          </h1>
          <p className="mt-4 text-lg text-driftwood">
            Pick your dates, choose your site, and leave the rest to us.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-sand px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            What&rsquo;s Included
          </p>
          <h2 className="mt-4 mb-12 text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            Everything you need for a great stay
          </h2>
          <Amenities />
        </div>
      </section>

      {/* Book CTA */}
      <section className="hero-gradient px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
            Ready to book?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We handle reservations through Hipcamp for a smooth, secure booking experience.
          </p>
          <a
            href="https://www.hipcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium uppercase tracking-[0.1em] text-sage-dark transition-colors hover:bg-sand"
          >
            Book on Hipcamp &rarr;
          </a>
          <p className="mt-6">
            <Link
              href="/contact"
              className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              Questions? Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="bg-sand px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-sage">
            Cancellation Policy
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-driftwood">
            Full refund 14+ days before arrival. 50% refund within 14 days.
            No-shows are non-refundable. Weather exceptions considered on a
            case-by-case basis. Contact us if you need to make changes.
          </p>
        </div>
      </section>
    </>
  );
}
