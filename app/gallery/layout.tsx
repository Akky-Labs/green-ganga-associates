import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden & Landscape Design Gallery | Lucknow & UP",
  description: "Witness our commitment to excellence through these captures of our working sites and completed landscaping and gardening transformations across Lucknow, UP, and India.",
  openGraph: {
    title: "Garden & Landscape Design Gallery | Green Ganga Associates",
    description: "Visual portfolio of our best landscaping and gardening projects in Lucknow, Noida, and Uttar Pradesh.",
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
