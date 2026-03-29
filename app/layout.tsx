import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSProvider from "@/components/AOSProvider";
import NatureEffects from "@/components/NatureEffects";
import GoogleLocalBusinessSchema from "@/components/GoogleLocalBusinessSchema";
import { GoogleAnalytics } from '@next/third-parties/google'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const baseUrl = 'https://greengangaassociates.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Green Ganga Associates | Professional Landscaping & Gardening in India",
    template: "%s | Green Ganga Associates"
  },
  description:
    "India's best landscaping & gardening company. Green Ganga Associates experts in garden design, maintenance, vertical gardens, terrace gardens, and farmhouse landscaping across Lucknow, Noida, and All India. 25+ years expertise.",
  keywords: [
    "landscaping in India", "landscaping company in Lucknow", "garden design India", 
    "best landscaping experts Noida", "terrace garden design Prayagraj", "vertical gardens India", 
    "farmhouse landscaping UP", "resort landscape design Kanpur", "smart irrigation India", 
    "industrial landscaping experts", "horticulture consultant India", "organic farming Lucknow", 
    "professional gardening services India", "terrace garden designer Lucknow", 
    "vertical garden installation North India", "best rose garden makers India", 
    "landscape architect Varanasi", "Green Ganga Associates Lucknow", "landscaping in Barabanki", 
    "gardening services Ayodhya", "cafe garden design India", "restaurant landscaping Lucknow"
  ],
  authors: [{ name: "Green Ganga Associates" }],
  creator: "Green Ganga Associates",
  publisher: "Green Ganga Associates",
  category: "Home & Garden",
  classification: "Landscaping Services",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Green Ganga Associates",
    title: "Green Ganga Associates | Professional Landscaping & Gardening in India",
    description: "India's leading landscaping & gardening company. Expert garden design, vertical gardens, and terrace development for homes, cafes, and resorts nationwide.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Green Ganga Associates Landscaping and Gardening India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Ganga Associates | Top Landscaping Experts in India",
    description: "Your Green Vision, Our Expertise. Professional garden design and maintenance services for homes, cafes, and commercial projects across India.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "9MtFcmT1l01BFM-K7Q4111TfeONTAZ1MElNpe4zcl5o",
    yandex: "yandex_verification_code",
    me: "greenganga.aso@gmail.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col font-outfit" suppressHydrationWarning>
        <GoogleLocalBusinessSchema />
        <AOSProvider />
        <NatureEffects />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" /> {/* Replace with actual GA4 Measurement ID */}
    </html>
  );
}
