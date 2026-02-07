import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-cream">Camp Stanley</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-gray">
              A year-round retreat where families and companies come together to
              live, laugh, and create lasting memories in nature.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-bronze">
              Explore
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/activities", label: "Activities" },
                { href: "/gallery", label: "Gallery" },
                { href: "/booking", label: "Book a Stay" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 transition-colors hover:text-bronze-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-bronze">
              Get in Touch
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/60">
              <p>carolynfstanley@yahoo.com</p>
              <p>Pacific Northwest</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Camp Stanley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
