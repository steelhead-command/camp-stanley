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
  { name: "Hiking & Trail Running", image: "/camp-stanley/Grounds.jpg" },
  { name: "Fishing & Kayaking", image: "/camp-stanley/Fishing.jpg" },
  { name: "Campfire Cooking", image: "/camp-stanley/Tent.jpg" },
  { name: "Stargazing", image: "/camp-stanley/Sunset-River.jpg" },
];

const testimonials = [
  {
    quote:
      "We\u2019ve been bringing our family here every summer for twelve years. The kids count down the days, and honestly, so do we.",
    author: "The Martinez Family",
    location: "Portland, OR",
  },
  {
    quote:
      "I came for a weekend and stayed for a week. There\u2019s something about waking up by the river that resets your whole system.",
    author: "David Chen",
    location: "Seattle, WA",
  },
  {
    quote:
      "We held our company retreat here and it was the best team-building experience we\u2019ve ever had. The land does the work for you.",
    author: "Sarah Okonkwo",
    location: "Bend, OR",
  },
  {
    quote:
      "My daughter caught her first fish here. My son saw the Milky Way for the first time. Some places just make memories stick.",
    author: "The Nguyen Family",
    location: "Eugene, OR",
  },
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
          src="/camp-stanley/River.jpg"
          alt="River flowing through the Camp Stanley grounds"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-stone/50" />

        <p className="relative z-10 text-xs font-medium uppercase tracking-[0.25em] text-sage-light">
          Est. 1999 &middot; Pacific Northwest
        </p>

        <h1 className="relative z-10 mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Where Every Season <br className="hidden sm:block" />
          Feels Like Home
        </h1>

        <p className="relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          A year-round retreat for families and groups to unplug, explore, and
          make memories that outlast the campfire.
        </p>

        <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-8 text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-sage-light"
          >
            Book a Stay
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-sm font-medium uppercase tracking-[0.1em] text-white/90 transition-colors hover:border-white/50 hover:text-white"
          >
            Our Story
          </Link>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-8 w-px bg-white/20" />
        </div>
      </section>

      {/* ───── Highlights ───── */}
      <section className="bg-background px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            What We Offer
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            Simple comforts, wide-open spaces
          </h2>

          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="group">
                <div className="text-sage transition-colors group-hover:text-sage-light">
                  <HighlightIcon icon={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-driftwood">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Activities Grid ───── */}
      <section className="bg-sand px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
            Things to Do
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            Adventure waits outside your door
          </h2>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {activities.map((act) => (
              <div
                key={act.name}
                className="relative flex aspect-[16/9] items-end overflow-hidden rounded-2xl p-6 transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={act.image}
                  alt={act.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone/40" />
                <span className="relative z-10 text-lg font-semibold text-white">
                  {act.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/activities"
              className="text-sm font-medium uppercase tracking-[0.15em] text-sage transition-colors hover:text-sage-light"
            >
              View All Activities &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-background px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-sage">
            Guest Stories
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            What people are saying
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-stone/10 bg-sand p-8"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sage/30">
                  <path d="M11 7H7a4 4 0 00-4 4v0a4 4 0 004 4h0a2 2 0 002-2v-1a2 2 0 00-2-2H5v-1a2 2 0 012-2h4V7zm10 0h-4a4 4 0 00-4 4v0a4 4 0 004 4h0a2 2 0 002-2v-1a2 2 0 00-2-2h-2v-1a2 2 0 012-2h4V7z" />
                </svg>
                <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <p className="mt-4 text-sm text-driftwood">
                  &mdash; {t.author}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="hero-gradient px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
            Your next chapter starts here
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether it&rsquo;s a weekend getaway or a week-long retreat, we&rsquo;ll
            save a spot by the fire for you.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium uppercase tracking-[0.1em] text-sage-dark transition-colors hover:bg-sand"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
