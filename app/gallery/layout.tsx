import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Gallery | Captures of Our Site Visits & Completed Landscaping",
  description:
    "See our gardening expertise in action. A gallery of our working sites, vertical gardens, terrace transformations, and commercial landscaping projects by Green Ganga Associates.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
