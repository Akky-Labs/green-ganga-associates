import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Green Ganga Associates for professional landscaping and gardening in Lucknow and All India. Free quote for garden design, terrace gardens, and more. Call +91 9999177119.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
