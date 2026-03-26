import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore 25+ landscaping and gardening projects by Green Ganga Associates across Lucknow, Prayagraj, Noida, and all of India. Farmhouses, resorts, and govt projects.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
