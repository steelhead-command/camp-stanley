import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Camp Stanley | A Year-Round Retreat",
  description:
    "Camp Stanley is a year-round campsite and property where families and companies come together to live, laugh, and create lasting memories.",
  openGraph: {
    title: "Camp Stanley | A Year-Round Retreat",
    description:
      "A Pacific Northwest retreat for families and groups since 1999. A premier camping and fishing lodge with crafting, river access, and starlit skies.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/camp-stanley/River.jpg", width: 1200, height: 800, alt: "Camp Stanley river view" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Camp Stanley",
  description:
    "A year-round camping and fishing lodge in the Pacific Northwest, offering crafting, river access, trails, and group facilities since 1999.",
  url: "https://campstanley.com",
  email: "carolynfstanley@yahoo.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Pacific Northwest",
    addressCountry: "US",
  },
  image: "/camp-stanley/River.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <NewsletterSignup />
        <Footer />
      </body>
    </html>
  );
}
