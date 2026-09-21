import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Landscape Consultation & Gardening Services | Contact Green Ganga",
  description: "Get a free landscaping estimate, site visit audit & garden design consultation in Lucknow, UP, Delhi NCR & across 8+ states. Call +91 9129177119 or WhatsApp us today!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book Landscape Consultation & Gardening Services | Contact Green Ganga Associates",
    description: "Get a free landscaping estimate, site visit audit & garden design consultation in Lucknow, UP, Delhi NCR & across 8+ states. Call +91 9129177119 or WhatsApp us today!",
    images: ["/images/pan-india-expansion-banner.jpg"]
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
