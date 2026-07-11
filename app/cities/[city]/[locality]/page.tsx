import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Leaf, MapPin, CheckCircle2, Phone, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const citiesList = ["lucknow", "kanpur", "noida", "prayagraj", "varanasi"];

const lucknowLocalities: Record<string, string> = {
  "gomti-nagar": "Gomti Nagar",
  "indira-nagar": "Indira Nagar",
  "aliganj": "Aliganj",
  "hazratganj": "Hazratganj",
  "jankipuram": "Jankipuram",
  "alambagh": "Alambagh",
  "ashiyana": "Ashiyana",
  "vrindavan-yojana": "Vrindavan Yojana"
};

// Mapped coordinate references for Local Schema
const geoRefs: Record<string, { lat: number; lng: number }> = {
  "gomti-nagar": { lat: 26.8530, lng: 80.9996 },
  "indira-nagar": { lat: 26.8837, lng: 80.9902 },
  "aliganj": { lat: 26.8924, lng: 80.9463 },
  "hazratganj": { lat: 26.8467, lng: 80.9462 },
  "jankipuram": { lat: 26.9205, lng: 80.9575 },
  "alambagh": { lat: 26.8042, lng: 80.9069 },
  "ashiyana": { lat: 26.7865, lng: 80.9254 },
  "vrindavan-yojana": { lat: 26.7865, lng: 80.9632 }
};

// Generates static params for locality routes to satisfy Next.js static HTML export
export async function generateStaticParams() {
  const params: { city: string; locality: string }[] = [];

  // Generate for all Lucknow neighborhoods
  Object.keys(lucknowLocalities).forEach((locality) => {
    params.push({ city: "lucknow", locality });
  });

  // Generate generic default locality for other cities to ensure dynamic scaling
  citiesList.filter(c => c !== "lucknow").forEach((city) => {
    params.push({ city, locality: "civil-lines" });
  });

  return params;
}

interface PageProps {
  params: Promise<{ city: string; locality: string }>;
}

function getLocalityName(city: string, locality: string): string {
  if (city === "lucknow") {
    return lucknowLocalities[locality] || "";
  }
  // Fallback capitalization for other cities
  return locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function getCityName(city: string): string {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityName = getCityName(resolvedParams.city);
  const localityName = getLocalityName(resolvedParams.city, resolvedParams.locality);

  if (!localityName) {
    return {
      title: "Landscaping Services",
      description: "Professional gardening and landscaping services by Green Ganga Associates.",
      alternates: {
        canonical: `https://greengangaassociates.com/cities/${resolvedParams.city}`
      }
    };
  }

  const title = `Best Landscaping & Gardening in ${localityName}, ${cityName} | Green Ganga`;
  const description = `Top-rated gardening & landscape contractor services in ${localityName}, ${cityName}. Specialized in vertical gardens, terrace setups & lawn care.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://greengangaassociates.com/cities/${resolvedParams.city}/${resolvedParams.locality}`
    },
    openGraph: {
      title,
      description,
      images: [{ url: "/hero.png" }]
    }
  };
}

export default async function LocalityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityName = getCityName(resolvedParams.city);
  const localityName = getLocalityName(resolvedParams.city, resolvedParams.locality);

  if (!localityName) {
    notFound();
  }

  const geo = geoRefs[resolvedParams.locality] || { lat: 26.8467, lng: 80.9462 };

  // LocalBusiness structured schema for this neighborhood
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "@id": `https://greengangaassociates.com/cities/${resolvedParams.city}/${resolvedParams.locality}#business`,
    "name": `Green Ganga Associates Landscaping - ${localityName}, ${cityName}`,
    "description": `Professional garden design, landscape maintenance, vertical walls, and turf grass laying in ${localityName}, ${cityName} by Green Ganga Associates.`,
    "url": `https://greengangaassociates.com/cities/${resolvedParams.city}/${resolvedParams.locality}`,
    "logo": "https://greengangaassociates.com/favicon.png",
    "image": "https://greengangaassociates.com/hero.png",
    "telephone": "+91-9999177119",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${localityName} area`,
      "addressLocality": cityName,
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.lat,
      "longitude": geo.lng
    }
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Cities", item: "https://greengangaassociates.com/cities" },
          { name: cityName, item: `https://greengangaassociates.com/cities/${resolvedParams.city}` },
          { name: localityName, item: `https://greengangaassociates.com/cities/${resolvedParams.city}/${resolvedParams.locality}` }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/client/farmhouse-vrindavan-yojna.jpeg"
            alt={`Landscaping in ${localityName}, ${cityName}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <Link
              href={`/cities/${resolvedParams.city}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-fresh-green uppercase tracking-widest hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to {cityName}
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-fresh-green" />
              <span className="text-fresh-green text-sm font-semibold uppercase tracking-wider">
                {localityName}, {cityName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Landscaping & Gardening in {localityName}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Serving the residential and commercial properties of {localityName} with professional lawn turfing, organic compost mix, terrace gardens, and smart water sprinklers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT DETAILS ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Local Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mt-4 mb-6">
                Premium Landscaping Solutions in {localityName}
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                At Green Ganga Associates, we understand that homes and offices in {localityName} require custom, weather-friendly botanical selections. Our team offers on-ground inspection, Vastu plantation consulting, water-saving sprinkler setups, and monthly garden care packages.
              </p>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8">
                All ornamental palms, foliage shrubs, and lawn turfing are selected carefully from our acclimatized nursery, ensuring a 100% survival rate for your garden in {localityName}.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/919999177119?text=Hi, I am looking for gardening services in ${localityName}, ${cityName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-bold shadow-lg shadow-deep-green/20">
                    Book Site Consultation
                  </Button>
                </a>
                <a href="tel:+919999177119">
                  <Button variant="outline" className="rounded-full border-deep-green/20 text-deep-green hover:bg-deep-green/5 px-8 h-12 font-bold">
                    Call 9999177119
                  </Button>
                </a>
              </div>
            </div>

            {/* Right checklist card */}
            <div className="p-8 rounded-3xl bg-soft-beige/50 border border-gray-100 shadow-xl shadow-deep-green/5 space-y-6">
              <h3 className="text-lg font-bold text-deep-green">Available Services in {localityName}</h3>
              <div className="space-y-3">
                {[
                  "Luxury Villa & Farmhouse Landscape Design",
                  "Lightweight Rooftop & Balcony Terrace Gardens",
                  "Automatic Smart Drip Irrigation & Pop-up Sprinklers",
                  "Synthetic UV-Protected Artificial Grass Turfs",
                  "Natural Stone Pathways & Ornamental Water Features",
                  "Vastu Shastra Plantation and Tree Placement consulting",
                  "Regular Weeding, Pruning & Organic Fertilization Care"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh-green shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
