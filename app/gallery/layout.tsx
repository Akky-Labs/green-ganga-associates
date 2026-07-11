import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Design & Garden Gallery in Lucknow | Green Ganga",
  description: "Browse photos of our stunning vertical gardens, terrace setups, and farmhouse landscaping in Lucknow, Noida & UP. See real transformations!",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Landscape Design & Garden Gallery in Lucknow | Green Ganga Associates",
    description: "Browse photos of our stunning vertical gardens, terrace setups, and farmhouse landscaping in Lucknow, Noida & UP. See real transformations!",
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
