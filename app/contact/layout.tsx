import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Landscape Contractors in Lucknow | Green Ganga",
  description: "Get a free garden landscaping & lawn design quote in Lucknow, Noida & UP. Call +91 9999177119 or book your site inspection online today!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Landscape Contractors in Lucknow | Green Ganga Associates",
    description: "Get a free garden landscaping & lawn design quote in Lucknow, Noida & UP. Call +91 9999177119 or book your site inspection online today!",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
