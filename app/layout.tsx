import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSProvider from "@/components/AOSProvider";
import NatureEffects from "@/components/NatureEffects";
import GoogleLocalBusinessSchema from "@/components/GoogleLocalBusinessSchema";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from "@/components/ThemeProvider";

import FacebookPixel from "@/components/FacebookPixel";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const baseUrl = 'https://www.greengangaassociates.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Green Ganga Associates | Top Landscaping & Gardening Company in Lucknow & India",
    template: "%s | Green Ganga Associates"
  },
  description:
    "India's leading landscaping & garden design company. Green Ganga Associates specializes in luxury garden design, vertical green walls, terrace gardens, farmhouse landscaping, smart drip irrigation, and commercial horticultural development across Lucknow, UP, Delhi NCR, and 8+ states in India. Call +91-9129177119 for a free site consultation.",
  keywords: [
    // ── All Original Core Keywords ──
    "best gardening in Lucknow", "best landscaping in Lucknow", "green ganda landscaping",
    "green ganaga gardening", "green ganga flowering", "best gardening in UP", "best landscaping in UP",
    "landscaping in India", "landscaping company in Lucknow", "garden design India",
    "best landscaping experts Noida", "terrace garden design Prayagraj", "vertical gardens India",
    "farmhouse landscaping UP", "resort landscape design Kanpur", "smart irrigation India",
    "industrial landscaping experts", "horticulture consultant India", "organic farming Lucknow",
    "professional gardening services India", "terrace garden designer Lucknow",
    "vertical garden installation North India", "best rose garden makers India",
    "landscape architect Varanasi", "Green Ganga Associates Lucknow", "landscaping in Barabanki",
    "gardening services Ayodhya", "cafe garden design India", "restaurant landscaping Lucknow",
    "terrace garden design cost Lucknow", "low maintenance balcony plants Noida",
    "lawn watering schedule UP summer winter", "resort landscape ideas North India",
    "vertical garden installation cost Noida", "landscape architects in Lucknow",
    "drip irrigation installation Lucknow", "farmhouse garden design Prayagraj",
    "commercial landscape developers Uttar Pradesh", "organic lawn maintenance Lucknow, ganga associates",

    // ── Combined High Intent & Active Expansion Keywords ──
    "green ganga associates", "top landscape architects in Lucknow", "hire landscaping contractor Lucknow",
    "garden design services Lucknow", "vertical garden installation Lucknow", "commercial landscaping Lucknow",
    "villa garden makeover Lucknow", "lawn maintenance services Lucknow", "top landscaping services Delhi NCR",
    "farmhouse garden design Noida", "landscape architect Uttar Pradesh", "resort landscaping Rajasthan",
    "industrial landscaping Gujarat", "commercial garden development Maharashtra", "luxury villa landscaping Goa",
    "smart irrigation Karnataka", "terrace garden makers Tamil Nadu", "landscaping contractor Bihar",
    "horticulture consultancy Jharkhand", "landscape design Odisha", "best garden planners North India",
    "resort landscape development India", "vertical garden installation cost", "terrace garden design ideas",
    "automatic lawn sprinkler system", "sustainable green solutions India", "plantation according to vastu",
    "Miyawaki forest plantation contractor", "factory green belt development", "rooftop garden setup cost",
    "artificial grass installation Lucknow", "zen garden design India", "hotel landscape architect India",
    "landscaping in Gomti Nagar Lucknow", "garden maintenance Indira Nagar Lucknow", "gardening services Aliganj Lucknow",
    "landscape design Hazratganj", "terrace garden Vrindavan Yojana Lucknow", "landscaping in Prayagraj",
    "garden designers Varanasi", "farmhouse landscaping Kanpur", "landscaping contractor Jhansi, ganga associates"
  ],
  authors: [{ name: "Green Ganga Associates", url: baseUrl }],
  creator: "Green Ganga Associates",
  publisher: "Green Ganga Associates",
  category: "Home & Garden",
  classification: "Professional Landscaping and Gardening Services",
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
    title: "Green Ganga Associates | Top Landscaping & Gardening Company in Lucknow & India",
    description: "Transform your outdoor and rooftop spaces with Green Ganga Associates. 25+ years expertise in luxury villa landscaping, terrace gardens, vertical walls, and commercial greenery across Lucknow and 8+ states in India.",
    images: [
      {
        url: "/images/pan-india-expansion-banner.jpg",
        width: 1200,
        height: 675,
        alt: "Green Ganga Associates - Serving Across 8+ States in India",
      },
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
    title: "Green Ganga Associates | Premier Landscaping & Garden Design India",
    description: "Your Green Vision, Our Expertise. Professional garden design, terrace gardens, vertical green walls, and commercial landscaping across 8+ states in India.",
    images: ["/images/pan-india-expansion-banner.jpg"],
  },
  verification: {
    google: "g1tLhIbn_2ExoSTvLsYkpqH4vRdkK9SOJOvO__bbLh0",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <FacebookPixel />
      </head>
      <body className="min-h-full flex flex-col font-outfit" suppressHydrationWarning>
        <ThemeProvider>
          <GoogleLocalBusinessSchema />
          <AOSProvider />
          <NatureEffects />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-29R5R9BCPS" />
    </html>
  );
}
