import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Leaf, MapPin, CheckCircle2, Phone, Star, Sparkles, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const citiesDetails: Record<string, {
  name: string;
  state: string;
  lat: number;
  lng: number;
  postalCode: string;
  street: string;
  localities: { slug: string; name: string }[];
  description: string;
  testimonials: { name: string; role: string; text: string; rating: number }[];
}> = {
  "lucknow": {
    name: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.7865,
    lng: 80.9632,
    postalCode: "226029",
    street: "Vrindavan Yojana, Sector 5B",
    localities: [
      { slug: "gomti-nagar", name: "Gomti Nagar" },
      { slug: "indira-nagar", name: "Indira Nagar" },
      { slug: "aliganj", name: "Aliganj" },
      { slug: "hazratganj", name: "Hazratganj" },
      { slug: "jankipuram", name: "Jankipuram" },
      { slug: "alambagh", name: "Alambagh" },
      { slug: "ashiyana", name: "Ashiyana" },
      { slug: "vrindavan-yojana", name: "Vrindavan Yojana" }
    ],
    description: " Lucknow is the heart of Uttar Pradesh, known for its royal gardens and green heritage. Green Ganga Associates is proud to serve Lucknow with state-of-the-art landscaping, premium lawn installation, automatic drip irrigation, and luxury terrace gardens. From historic Hazratganj bungalows to newly developed Gomti Nagar villas and Vrindavan Yojna townships, we design outdoor spaces that elevate property value and provide a serene green getaway.",
    testimonials: [
      { name: "Rajesh Kumar", role: "Vrindavan Yojna, Lucknow", text: "Green Ganga converted my bare rooftop into a beautiful terrace garden. The lightweight soil mixes and automatic drip lines work flawlessly.", rating: 5 },
      { name: "Lalit Gupta", role: "Director, Ansal API Lucknow", text: "Their team managed landscaping for our high-tech township project. Exceptional environmental planning and horticulture consultancy.", rating: 5 }
    ]
  },
  "kanpur": {
    name: "Kanpur",
    state: "Uttar Pradesh",
    lat: 26.4499,
    lng: 80.3319,
    postalCode: "208001",
    street: "Civil Lines, Kanpur",
    localities: [
      { slug: "civil-lines", name: "Civil Lines" },
      { slug: "swaroop-nagar", name: "Swaroop Nagar" },
      { slug: "kalyanpur", name: "Kalyanpur" },
      { slug: "kidwai-nagar", name: "Kidwai Nagar" }
    ],
    description: "As UP's industrial hub, Kanpur benefits immensely from environmental landscaping and green belts to reduce pollution. Green Ganga Associates designs and maintains industrial park landscaping, commercial green belts for factories, and private villa gardens in Swaroop Nagar and Civil Lines. Our team of agri-experts specializes in climate-friendly species that act as natural filters while remaining easy to maintain.",
    testimonials: [
      { name: "Amit Khanna", role: "Factory Owner, Kalyanpur", text: "Green Ganga Associates developed the green belt around our chemical unit. They strictly followed pollution control guidelines and delivered on time.", rating: 5 },
      { name: "Dr. Sandeep Shukla", role: "Swaroop Nagar, Kanpur", text: "Stunning backyard waterfall and lawn installation work. Their team is extremely professional and polite.", rating: 5 }
    ]
  },
  "noida": {
    name: "Noida",
    state: "Uttar Pradesh",
    lat: 28.5355,
    lng: 77.3910,
    postalCode: "201301",
    street: "Sector 62, Noida",
    localities: [
      { slug: "sector-62", name: "Sector 62" },
      { slug: "sector-15", name: "Sector 15" },
      { slug: "sector-50", name: "Sector 50" },
      { slug: "sector-137", name: "Sector 137" }
    ],
    description: " Noida represents modern urban planning where vertical gardens and terrace gardens are essential to bring nature into high-rise environments. We install smart vertical green walls, automatic balcony setups, and commercial lawns for multi-national corporate offices. Our smart irrigation systems utilize water-saving technology to ensure compliance with strict urban sustainability laws.",
    testimonials: [
      { name: "Devansh Mehta", role: "Corporate Admin, Sector 62", text: "We installed two large vertical gardens inside our reception lobby. They look incredibly fresh and our employees love them.", rating: 5 },
      { name: "Neha Roy", role: "Highrise Resident, Sector 137", text: "Perfect balcony garden design. They set up the pots, soil, plants, and an automatic watering controller so I don't have to worry when traveling.", rating: 5 }
    ]
  },
  "prayagraj": {
    name: "Prayagraj",
    state: "Uttar Pradesh",
    lat: 25.4358,
    lng: 81.8463,
    postalCode: "211001",
    street: "Civil Lines, Prayagraj",
    localities: [
      { slug: "civil-lines", name: "Civil Lines" },
      { slug: "katra", name: "Katra" },
      { slug: "georgetown", name: "Georgetown" },
      { slug: "jhusi", name: "Jhusi" }
    ],
    description: "Prayagraj combines cultural heritage with rapidly expanding urban spaces. Green Ganga Associates designs luxury farmhouse landscapes, resort gardens, and residential properties across Civil Lines, Jhusi, and beyond. We focus on designing natural stone pathways, classical water fountains, and planting low-maintenance ornamental trees suited for Prayagraj's warm climate.",
    testimonials: [
      { name: "Suresh Mishra", role: "Farmhouse Owner, Jhusi", text: "They landscaped my 2-acre farmhouse with local fruit orchards, beautiful lawns, and warm landscape lighting. Outstanding design work.", rating: 5 }
    ]
  },
  "varanasi": {
    name: "Varanasi",
    state: "Uttar Pradesh",
    lat: 25.3176,
    lng: 82.9739,
    postalCode: "221001",
    street: "Cantonment Area, Varanasi",
    localities: [
      { slug: "lanka", name: "Lanka" },
      { slug: "sigra", name: "Sigra" },
      { slug: "cantt", name: "Cantonment" },
      { slug: "sarnath", name: "Sarnath" }
    ],
    description: "Varanasi is a spiritual center with unique spatial layouts. We design classical gardens for hotels, ghat-side cafes, ashrams, and private residences. Our designs focus on sacred and Vastu-aligned plants (like Tulsi, Parijat, Bel, and Plumeria) to create quiet, meditative outdoor spaces that fit perfectly with the ancient city's energy.",
    testimonials: [
      { name: "Ramanathan Iyer", role: "Hotel Manager, Cantt", text: "We contracted Green Ganga to landscape our hotel courtyard. Guests constantly praise the beautiful plants and relaxing water fountain.", rating: 5 }
    ]
  }
};

// Generates static paths for all 5 cities to support static HTML export
export async function generateStaticParams() {
  return Object.keys(citiesDetails).map((city) => ({ city }));
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = citiesDetails[resolvedParams.city] || citiesDetails["lucknow"];
  const title = `Top-Rated Landscaping & Gardening in ${city.name} | Green Ganga`;
  const description = `#1 landscape contractor & gardening services in ${city.name}, UP. Custom garden design, terrace landscaping & vertical walls. Request site audit!`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://greengangaassociates.com/cities/${resolvedParams.city}`
    },
    openGraph: {
      title,
      description,
      images: [{ url: "/hero.png" }]
    }
  };
}

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const city = citiesDetails[resolvedParams.city];

  if (!city) {
    notFound();
  }

  // Schema for localized LocalBusiness structure
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "@id": `https://greengangaassociates.com/cities/${resolvedParams.city}#business`,
    "name": `Green Ganga Associates - Landscaping & Gardening ${city.name}`,
    "description": `Green Ganga Associates is the premier landscaping, lawn development, and gardening service provider in ${city.name}, Uttar Pradesh.`,
    "url": `https://greengangaassociates.com/cities/${resolvedParams.city}`,
    "logo": "https://greengangaassociates.com/favicon.png",
    "image": "https://greengangaassociates.com/hero.png",
    "telephone": "+91-9999177119",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": city.street,
      "addressLocality": city.name,
      "addressRegion": city.state,
      "postalCode": city.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "areaServed": city.localities.map((l) => ({
      "@type": "AdministrativeArea",
      "name": `${l.name}, ${city.name}`
    }))
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Cities", item: "https://greengangaassociates.com/cities" },
          { name: city.name, item: `https://greengangaassociates.com/cities/${resolvedParams.city}` }
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
            alt={`Landscaping in ${city.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-semibold uppercase tracking-wider">{city.name}, UP</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Best Landscaping & Gardening in {city.name}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
              Transforming private properties, high-rises, hotels, and commercial landscapes in {city.name} with certified horticulture experts.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CITY OVERVIEW ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Local Experts</span>
              </div>
              <h2 className="text-3xl font-bold text-deep-green mt-4 mb-6">
                Premium Gardening Services in {city.name}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {city.description}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Qualified team of B.Sc. & Ph.D. Agriculture professionals",
                  "Native plant selection suited to regional soil & temperature",
                  "Automated smart irrigation systems to save water",
                  "Full-service residential, resort, and commercial garden care"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-fresh-green shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+919999177119" className="flex items-center gap-2 text-deep-green font-bold text-sm">
                  <Phone className="w-4 h-4 text-fresh-green" /> 9999177119
                </a>
              </div>
            </div>

            {/* Localities Directory Card */}
            <div className="p-8 rounded-3xl bg-soft-beige/50 border border-gray-100 shadow-xl shadow-deep-green/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-deep-green/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-deep-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-deep-green">Service Areas in {city.name}</h3>
                  <p className="text-xs text-muted-foreground">Select your neighborhood for local gardening services</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {city.localities.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/cities/${resolvedParams.city}/${loc.slug}`}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:border-deep-green hover:text-deep-green hover:scale-[1.02] transition-all duration-300 shadow-sm"
                  >
                    <span>{loc.name}</span>
                    <ArrowRight className="w-4 h-4 text-fresh-green" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── LOCAL TESTIMONIALS ─── */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-deep-green/5 px-3 py-1 mb-4 border border-deep-green/10">
              <Sparkles className="w-3.5 h-3.5 text-fresh-green animate-pulse" />
              <span className="text-deep-green text-xs font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl font-bold text-deep-green mt-2 mb-4">
              What Clients in {city.name} Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-soft-beige/30 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-deep-green text-white font-bold flex items-center justify-center text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-deep-green">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
