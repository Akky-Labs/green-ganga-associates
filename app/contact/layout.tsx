import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Green Ganga Associates | Landscaping Services Lucknow",
  description: "Get a free landscaping and gardening quote in Lucknow, Noida, Prayagraj, and Uttar Pradesh. Reach out to Green Ganga Associates today.",
  openGraph: {
    title: "Contact Green Ganga Associates | Landscaping & Gardening Experts",
    description: "Connect with us to plan your green vision. Serving Lucknow, Noida, Prayagraj, and across Uttar Pradesh.",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
