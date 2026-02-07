import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Rustic Cabins",
    description:
      "Hand-built cabins nestled among towering oaks, each with a porch overlooking the hills.",
    icon: "cabin",
  },
  {
    title: "Miles of Trails",
    description:
      "Winding paths through wildflower meadows, creek crossings, and shaded canopy groves.",
    icon: "trail",
  },
  {
    title: "Starlit Nights",
    description:
      "Far from city lights, gather around the fire pit and watch the Milky Way stretch overhead.",
    icon: "stars",
  },
];

const activities = [
  { name: "Hiking & Trail Running", gradient: "nature-gradient-1", image: null },
  { name: "Fishing & Kayaking", gradient: "nature-gradient-2", image: null },
  { name: "Campfire Cooking", gradient: "nature-gradient-3", image: "/Tent.jpg" },
  { name: "Stargazing", gradient: "hero-gradient", image: null },
];

function HighlightIcon({ icon }: { icon: string }) {
  if (icon === "cabin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "trail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M12 2C8 6 4 9 4 13a8 8 0 0016 0c0-4-4-7-8-11z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22v-6M9 18l3-2 3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
      <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <Image
          src="/River.jpg"
          alt="River flowing through the Camp Stanley grounds"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/60" />

        <p className="relative z-10 text-xs font-medium uppercase tracking-[0.25em] text-bronze">
          Est. 1962 &middot; Hill Country, Texas
        </p>

        <h1 className="relative z-10 mt-6 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl">
          Where Every Season <br className="hidden sm:block" />
          Feels Like Home
        </h1>

        <p className="relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
          A year-round retreat for families and groups to unplug, explore, and
          make memories that outlast the campfire.
        </p>

        <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex h-12 items-center justify-center rounded-full bg-bronze px-8 text-sm font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-bronze-light"
          >
            Book a Stay
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-cream/20 px-8 text-sm font-medium uppercase tracking-[0.1em] text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
          >
            Our Story
          </Link>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-cream/40">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-8 w-px bg-cream/20" />
        </div>
      </section>

      {/* ───── Highlights ───── */}
      <section className="bg-charcoal px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            What We Offer
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Simple comforts, wide-open spaces
          </h2>

          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="group">
                <div className="text-bronze transition-colors group-hover:text-bronze-light">
                  <HighlightIcon icon={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Activities Grid ───── */}
      <section className="bg-charcoal-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            Things to Do
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Adventure waits outside your door
          </h2>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {activities.map((act) => (
              <div
                key={act.name}
                className={`${act.image ? "" : act.gradient} relative flex aspect-[16/9] items-end overflow-hidden rounded-2xl p-6 transition-transform hover:scale-[1.02]`}
              >
                {act.image && (
                  <>
                    <Image
                      src={act.image}
                      alt={act.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/40" />
                  </>
                )}
                <span className="relative z-10 text-lg font-semibold text-cream">
                  {act.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/activities"
              className="text-sm font-medium uppercase tracking-[0.15em] text-bronze transition-colors hover:text-bronze-light"
            >
              View All Activities &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Testimonial ───── */}
      <section className="bg-charcoal px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-8 w-8 text-bronze/40">
            <path d="M11 7H7a4 4 0 00-4 4v0a4 4 0 004 4h0a2 2 0 002-2v-1a2 2 0 00-2-2H5v-1a2 2 0 012-2h4V7zm10 0h-4a4 4 0 00-4 4v0a4 4 0 004 4h0a2 2 0 002-2v-1a2 2 0 00-2-2h-2v-1a2 2 0 012-2h4V7z" />
          </svg>
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-cream/90 sm:text-3xl">
            We&rsquo;ve been bringing our family here every summer for twelve
            years. The kids count down the days, and honestly, so do we.
          </blockquote>
          <p className="mt-6 text-sm text-warm-gray">
            &mdash; The Martinez Family, Austin TX
          </p>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="hero-gradient px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Your next chapter starts here
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Whether it&rsquo;s a weekend getaway or a week-long retreat, we&rsquo;ll
            save a spot by the fire for you.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-bronze px-8 text-sm font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-bronze-light"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
