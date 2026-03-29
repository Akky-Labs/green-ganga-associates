import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Landscaping Portfolio",
  description: "Explore Green Ganga Associates' diverse portfolio of landscaping and gardening projects across residential, commercial, industrial, and government sectors in India.",
  openGraph: {
    title: "Green Ganga Associates | Project Portfolio",
    description: "Explore our stunning landscaping transformations across Lucknow, Noida, and India.",
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
