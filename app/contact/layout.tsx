import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Green Ganga",
  description: "Get a free landscaping quote and a professional garden assessment today. Reach out across Lucknow, Prayagraj, Noida, and Northern India.",
  openGraph: {
    title: "Contact India's Best Landscaping Experts",
    description: "Connect with us to plan your green vision. Serving Lucknow, Noida, and India wide.",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
