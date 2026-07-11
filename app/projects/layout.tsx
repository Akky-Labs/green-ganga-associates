import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Landscaping & Gardening Projects in Lucknow | Green Ganga",
  description: "Browse Green Ganga Associates' project portfolio. Featuring corporate garden designs, luxury farmhouse landscaping & vertical walls in Lucknow & UP.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Landscaping & Gardening Projects in Lucknow | Green Ganga Associates",
    description: "Browse Green Ganga Associates' project portfolio. Featuring corporate garden designs, luxury farmhouse landscaping & vertical walls in Lucknow & UP.",
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
