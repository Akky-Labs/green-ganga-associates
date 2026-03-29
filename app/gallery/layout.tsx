import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Ganga Gallery",
  description: "Witness our commitment to excellence through these captures of our working sites and completed landscaping transformations across India.",
  openGraph: {
    title: "Project Gallery | Green Ganga Associates",
    description: "Visual portfolio of our best landscaping and gardening projects in Lucknow, Noida, and beyond.",
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
