import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Case Studies & Project Reports | Green Ganga",
  description: "Browse detailed case studies of our institutional, commercial, and residential landscaping projects in Lucknow & UP. See real-world execution!",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Landscape Case Studies & Project Reports | Green Ganga Associates",
    description: "Browse detailed case studies of our institutional, commercial, and residential landscaping projects in Lucknow & UP. See real-world execution!",
  }
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
