import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Landscaping & Garden Projects in Lucknow & India | Green Ganga",
  description: "Browse 50+ luxury villa garden designs, corporate campus landscaping, resort green belts & vertical gardens by Green Ganga Associates across Lucknow & 8+ states in India.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Landscaping & Garden Projects in Lucknow & India | Green Ganga Associates",
    description: "Browse 50+ luxury villa garden designs, corporate campus landscaping, resort green belts & vertical gardens by Green Ganga Associates across Lucknow & 8+ states in India.",
    images: ["/images/pan-india-expansion-banner.jpg"]
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
