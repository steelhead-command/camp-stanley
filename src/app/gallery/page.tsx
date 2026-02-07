"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/River.jpg", alt: "River flowing through the Camp Stanley grounds", category: "Grounds" },
  { src: "/Tent.jpg", alt: "Camping tent under the trees at dusk", category: "Accommodations" },
  { src: "/Morning-River.jpg", alt: "Morning sunlight filtering through trees along the river", category: "Grounds" },
  { src: "/Sunset-River.jpg", alt: "Sunset over the river with misty waters", category: "Grounds" },
  { src: "/Fishing.jpg", alt: "Guest holding a fresh catch by the river", category: "Activities" },
  { src: "/Grounds.jpg", alt: "Camp grounds with archery target and towering trees", category: "Grounds" },
  { src: "/Candles.jpg", alt: "Candle-making workshop in the craft lodge", category: "Activities" },
];

const categories = ["All", "Grounds", "Activities", "Accommodations"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[40vh] items-center justify-center bg-charcoal px-6 pt-20 text-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            Gallery
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            A glimpse of camp life
          </h1>
          <p className="mt-4 text-lg text-cream/70">
            More photos coming soon — this is just the beginning.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-charcoal px-6 pb-6 pt-12">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
                activeCategory === cat
                  ? "bg-bronze text-charcoal"
                  : "border border-white/10 text-cream/60 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="bg-charcoal px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/30" />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-warm-gray">
            No photos in this category yet — check back soon.
          </p>
        )}
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-cream/60 hover:text-cream"
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Prev / Next */}
          {filtered.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((lightbox - 1 + filtered.length) % filtered.length);
                }}
                className="absolute left-4 text-cream/60 hover:text-cream"
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((lightbox + 1) % filtered.length);
                }}
                className="absolute right-16 text-cream/60 hover:text-cream"
                aria-label="Next photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div className="relative max-h-[80vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-cream/60">
              {filtered[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
