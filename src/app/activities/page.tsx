import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Things To Do | Camp Stanley",
  description:
    "From river fishing and kayaking to stargazing and campfire cooking — discover everything waiting for you at Camp Stanley.",
};

interface Activity {
  name: string;
  description: string;
  bestSeason: string;
  skillLevel: string;
  icon: string;
}

interface ActivityCategory {
  title: string;
  subtitle: string;
  image: string | null;
  activities: Activity[];
}

const categories: ActivityCategory[] = [
  {
    title: "On the Water",
    subtitle: "The river runs through everything we do",
    image: "/camp-stanley/River.jpg",
    activities: [
      {
        name: "Fishing",
        description:
          "Cast a line from the bank or wade into the shallows. The river holds bass, catfish, and seasonal trout in the cooler months.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "fish",
      },
      {
        name: "Kayaking",
        description:
          "Paddle calm stretches of the river with kayaks available at the boat shed. A gentle current makes for a perfect afternoon float.",
        bestSeason: "Spring – Fall",
        skillLevel: "Beginner friendly",
        icon: "paddle",
      },
      {
        name: "Swimming",
        description:
          "Cool off in the swimming hole below the bluff. A rope swing and sandy bank make it the camp's favorite gathering spot on hot days.",
        bestSeason: "Summer",
        skillLevel: "All levels",
        icon: "waves",
      },
    ],
  },
  {
    title: "On the Land",
    subtitle: "Eight miles of trails and wide-open meadows",
    image: "/camp-stanley/Grounds.jpg",
    activities: [
      {
        name: "Hiking",
        description:
          "Trails range from easy riverside strolls to ridge-top loops with panoramic views. Pick up a map at the camp store.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "boot",
      },
      {
        name: "Trail Running",
        description:
          "The ridge trail offers a challenging 5-mile loop with elevation changes through cedar breaks and open meadows.",
        bestSeason: "Spring & Fall",
        skillLevel: "Intermediate",
        icon: "run",
      },
      {
        name: "Wildlife Watching",
        description:
          "White-tailed deer, wild turkeys, and dozens of bird species call the property home. Dawn and dusk are prime viewing times.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "binoculars",
      },
    ],
  },
  {
    title: "After Dark",
    subtitle: "When the sun sets, the real magic begins",
    image: "/camp-stanley/Tent.jpg",
    activities: [
      {
        name: "Campfire Cooking",
        description:
          "Every site has a fire ring. Bring your own provisions or grab a s'mores kit from the camp store. We supply the firewood.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "flame",
      },
      {
        name: "Stargazing",
        description:
          "Zero light pollution means you can see the Milky Way with the naked eye. The meadow above the ridge is the best vantage point.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "star",
      },
      {
        name: "Candle Making",
        description:
          "Join a hands-on workshop in the craft lodge and pour your own hand-dipped candles to take home as a keepsake.",
        bestSeason: "Year-round",
        skillLevel: "All levels",
        icon: "candle",
      },
    ],
  },
];

function ActivityIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6";
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: cls,
  };

  switch (icon) {
    case "fish":
      return <svg {...props}><path d="M2 16s1-4 5-4c3 0 4 2 6 2s3.5-2 6.5-2c1.5 0 2.5.5 2.5.5s-1 3.5-4 3.5-4-2-6-2-3.5 2-6.5 2C3 16.5 2 16 2 16z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="18" cy="13" r="0.5" fill="currentColor" /></svg>;
    case "paddle":
      return <svg {...props}><path d="M4 20l6-6M12 12c-2-2-2-5 0-7s5-2 7 0-2 5-2 5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "waves":
      return <svg {...props}><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "boot":
      return <svg {...props}><path d="M7 21h14l-2-8h-4V7a2 2 0 00-2-2H9v8H5l2 8z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "run":
      return <svg {...props}><circle cx="14" cy="4" r="2" /><path d="M6 21l3-7 3 2 4-5 2 4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "binoculars":
      return <svg {...props}><circle cx="7" cy="17" r="4" /><circle cx="17" cy="17" r="4" /><path d="M7 13V7l5 3 5-3v6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "flame":
      return <svg {...props}><path d="M12 22c-4 0-7-3-7-7 0-3 2-5 3-7 1 2 3 3 3 3s2-2 2-5c3 3 6 6 6 9 0 4-3 7-7 7z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "star":
      return <svg {...props}><path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "candle":
      return <svg {...props}><rect x="8" y="10" width="8" height="12" rx="1" /><path d="M12 10V7M10 7c0-2 2-4 2-4s2 2 2 4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 text-center">
        <Image
          src="/camp-stanley/Sunset-River.jpg"
          alt="Sunset over the river at Camp Stanley"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            Things To Do
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            Adventure waits outside your door
          </h1>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.title}
          className={`px-6 py-24 lg:py-32 ${
            catIndex % 2 === 0 ? "bg-charcoal" : "bg-charcoal-light"
          }`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Info side */}
              <div className={catIndex % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
                  {cat.title}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
                  {cat.subtitle}
                </h2>

                <div className="mt-10 space-y-8">
                  {cat.activities.map((act) => (
                    <div key={act.name} className="flex gap-4">
                      <span className="mt-1 text-bronze">
                        <ActivityIcon icon={act.icon} />
                      </span>
                      <div>
                        <h3 className="font-medium text-cream">{act.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-cream/70">
                          {act.description}
                        </p>
                        <div className="mt-2 flex gap-4 text-xs text-warm-gray">
                          <span>{act.bestSeason}</span>
                          <span>&middot;</span>
                          <span>{act.skillLevel}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              {cat.image && (
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${catIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="hero-gradient px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Ready to explore?
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Pick your adventure and reserve your dates.
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
