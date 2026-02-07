import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Amenities from "@/components/Amenities";

export const metadata: Metadata = {
  title: "Our Story | Camp Stanley",
  description:
    "Since 1999, Camp Stanley has been a Pacific Northwest camping and fishing lodge where families gather, explore, craft, and make lasting memories along the river.",
};

const milestones = [
  { year: "1999", event: "Nick and Carolyn Stanley purchase the property in the Pacific Northwest." },
  { year: "2000s", event: "Cabins built out, trails cleared, and river access developed for guests." },
  { year: "2010s", event: "Craft barn added — candle-making workshops and hands-on crafting begin." },
  { year: "Today", event: "The Pacific Northwest's premier camping, fishing, and crafting lodge." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 text-center">
        <Image
          src="/River.jpg"
          alt="The river at Camp Stanley"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            Our Story
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            Rooted in the Pacific Northwest since 1999
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-charcoal px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            How It Started
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            A place worth coming back to
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-cream/70 sm:text-base">
            <p>
              In 1999, Nick and Carolyn Stanley found a piece of land in the Pacific
              Northwest that felt like it had been waiting for them — a stretch of river
              lined with towering evergreens, misty mornings that burned off into golden
              afternoons, and the kind of quiet you can only find far from town.
            </p>
            <p>
              Over the next twenty-plus years, they built it into something special. Cabins
              went up along the river. Trails were cleared through the forest. A craft barn
              took shape for candle-making workshops and hands-on projects. What started as
              a personal retreat became the Pacific Northwest&rsquo;s premier camping and
              fishing lodge — a place where guests come to fish, craft, explore, and
              reconnect with the outdoors.
            </p>
            <p>
              The mission hasn&rsquo;t changed: keep the land wild, the welcome warm,
              and the campfire lit.
            </p>
          </div>
        </div>
      </section>

      {/* The Land */}
      <section className="bg-charcoal-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
                The Land
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
                Evergreen forests, river, and sky
              </h2>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-cream/70">
                <p>
                  The property follows the river through old-growth evergreens, with fishing
                  banks, swimming holes, and gravel bars that shift with the seasons.
                  The water runs clear and cold year-round.
                </p>
                <p>
                  Trails wind through fir and cedar forest, opening to meadows and
                  ridge-top overlooks where you can see the surrounding peaks. At
                  night, far from any city glow, the Milky Way stretches overhead.
                </p>
                <p>
                  The lodge and cabins sit in the heart of it all — close enough to the
                  river to hear the current, sheltered by the tree line for cool,
                  misty mornings.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/Morning-River.jpg"
                alt="Morning sunlight filtering through trees along the river"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-charcoal px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            What We Believe
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Simple values, wide-open spaces
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Stewardship",
                text: "We take care of this land so it can take care of the people who visit. Every decision starts with the river, the soil, and the trees.",
              },
              {
                title: "Hospitality",
                text: "A warm welcome isn't a policy — it's a tradition. Whether it's your first visit or your fiftieth, you're family here.",
              },
              {
                title: "Simplicity",
                text: "No TVs in the cabins. No schedules to keep. Just the space and time to reconnect with the people and places that matter most.",
              },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-semibold text-cream">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            Milestones
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Over two decades and counting
          </h2>
          <div className="mt-12 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6">
                <span className="w-16 shrink-0 text-sm font-medium text-bronze">
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-cream/70">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-charcoal px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            On the Grounds
          </p>
          <h2 className="mt-4 mb-12 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Everything you need, nothing you don&rsquo;t
          </h2>
          <Amenities />
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-charcoal-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            The Team
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            The people behind the place
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { name: "Nick & Carolyn Stanley", role: "Owners & Founders" },
              { name: "Camp Crew", role: "Grounds & Guest Services" },
              { name: "You?", role: "We're always looking for great people" },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-white/5 bg-charcoal p-8 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forest/30 text-2xl text-bronze">
                  {member.name[0]}
                </div>
                <h3 className="mt-4 font-medium text-cream">{member.name}</h3>
                <p className="mt-1 text-sm text-warm-gray">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Come see for yourself
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            The best way to know Camp Stanley is to be here.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-bronze px-8 text-sm font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-bronze-light"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}
