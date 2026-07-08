import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Landscaping & Gardening Projects in Lucknow & UP",
  description: "Explore Green Ganga Associates' diverse portfolio of landscaping and gardening projects across residential, commercial, industrial, and government sectors in Uttar Pradesh (UP) and India.",
  openGraph: {
    title: "Completed Landscaping & Gardening Projects | Green Ganga Associates",
    description: "Explore our stunning landscaping transformations across Lucknow, Noida, and Uttar Pradesh.",
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
