"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Leaf, Calendar, ShieldCheck, Sparkles, Ruler } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const caseStudies = [
  {
    title: "UPRNN - PGI Hospital Garden Development",
    slug: "pgi-hospital",
    location: "Lucknow, UP",
    category: "Institutional",
    duration: "6 Months",
    area: "Campus Wide",
    description: "Full-scale landscape design, soil replenishment, and year-round green belt maintenance for Lucknow's premiere medical institute campus under UPRNN.",
    plants: ["Royal Palms", "Korean Grass", "Golden Duranta", "Bougainvillea"],
    image: "/client/GS infra.jpeg"
  },
  {
    title: "UPRNN - Abdul Kalam Technical University",
    slug: "abdul-kalam-university",
    location: "Jankipuram, Lucknow",
    category: "Educational",
    duration: "8 Months",
    area: "University Grounds",
    description: "Premium green belt development and open turf installations matching institutional environmental standards at the brand new AKTU university campus.",
    plants: ["Fox Tail Palms", "Selection Grass", "Nerium Oleander", "Ficus Benjamina"],
    image: "/client/abdul-kalam.png"
  },
  {
    title: "Guru Kirpa Utsav Marriage Lawn",
    slug: "guru-kripa-utsav",
    location: "Raebareli Road, Lalganj",
    category: "Commercial Resort",
    duration: "4 Months",
    area: "Event Lawns & Gardens",
    description: "Premium wedding garden landscaping, decorative waterfall structures, and ambient landscape uplighting for a luxury wedding event resort.",
    plants: ["Areca Palms", "Bermuda Grass", "Plumeria Alba", "Star Jasmine"],
    image: "/client/guru-kripa-utsav.jpeg"
  },
  {
    title: "Vrindavan Yojana Luxury Farmhouse",
    slug: "vrindavan-yojana-farmhouse",
    location: "Sector 5B, Vrindavan Yojna, Lko",
    category: "Residential Estate",
    duration: "3 Months",
    area: "Private Estate Garden",
    description: "Contemporary farmhouse landscape design, large step-stone pathways, native fruit orchards, and a custom sheet waterfall with warm LED uplighting.",
    plants: ["Cycas Palms", "Selection No. 1 Grass", "Agave Americana", "Dracaena"],
    image: "/client/farmhouse-vrindavan-yojna.jpeg"
  },
  {
    title: "The Grand Hotel & Resort",
    slug: "grand-hotel-resort",
    location: "Mohanlalganj, Lucknow",
    category: "Hospitality",
    duration: "5 Months",
    area: "Hotel Grounds & Pool",
    description: "High-end resort theme landscaping, pool-side palm layouts, and zero-maintenance ornamental borders for a luxury hospitality property.",
    plants: ["Traveler Palms", "Mexican Carpet Grass", "Exotic Hibiscus", "Duranta Gold"],
    image: "/client/grand-hotel-resort.jpeg"
  },
  {
    title: "Ansal API Hitech Township",
    slug: "ansal-api-township",
    location: "Sultanpur Road, Lucknow",
    category: "Township / Urban Planning",
    duration: "7+ Years (Ongoing)",
    area: "4,500 Acres Development",
    description: "Laying out and maintaining green belts, parkways, avenue tree plantations, and providing master horticultural consultancy for Lko's largest hitech township.",
    plants: ["Neem Trees", "Gulmohar", "Amaltas (Golden Shower)", "Lawn Turf"],
    image: "/client/ansal-api.jpeg"
  },
  {
    title: "Shubh Villas Hotel & Resort",
    slug: "subh-vilas-hotel",
    location: "Naini, Prayagraj",
    category: "Commercial & Event Lawn",
    duration: "30 Days",
    area: "6,00,000 Sq. Ft.",
    description: "Elegant garden and marriage lawn development featuring manicured grass borders and premium resort landscaping for luxury events.",
    plants: ["Selection No. 1 Grass", "Areca Palms", "Golden Duranta", "Red Hibiscus"],
    image: "/gallery/subh-vilas-after.jpeg"
  },
  {
    title: "Prayagraj Luxury Farm House",
    slug: "nandi-farmhouse",
    location: "Prayagraj, UP",
    category: "Residential Farmhouse",
    duration: "25 Days",
    area: "5,000+ Sq. Ft.",
    description: "High-profile private farmhouse landscape design utilizing acclimatized native flora, rustic stepping stones, and open turf layouts.",
    plants: ["Mexican Grass Slabs", "Cycas Palms", "Adenium Obesum", "Golden Cypress"],
    image: "/gallery/prayagraj-farmhouse-after.jpeg"
  },
  {
    title: "Farm House Cum Resort",
    slug: "farmhouse-cum-resort",
    location: "Satrik Road, Barabanki",
    category: "Commercial Resort",
    duration: "35 Days",
    area: "8,00,000 Sq. Ft.",
    description: "Luxury weekend getaway landscape development with native plantations, wide open lawns, and automatic micro-irrigation systems.",
    plants: ["Bermuda Grass", "Neem Trees", "Gulmohar", "Areca Palms"],
    image: "/gallery/farmhouse-cum-resort-after.jpeg"
  },
  {
    title: "Gyan Dairy & Gyan Heritage School",
    slug: "gyan-dairy-school",
    location: "Sultanpur Road & Lucknow",
    category: "Industrial & School Campus",
    duration: "40 Days",
    area: "7,000+ Sq. Ft.",
    description: "Eco-friendly industrial greening for Gyan Dairy unit alongside child-safe turf play zones and boundary hedges for school grounds.",
    plants: ["Korean Grass", "Ficus Panda", "Royal Palms", "Golden Bottle Brush"],
    image: "/gallery/gyan-diary-after.jpeg"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Case Studies", item: "https://greengangaassociates.com/case-studies" }
        ]}
      />

      {/* ─── HERO SECTION ─────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/client/luxury-hero.png"
            alt="Best landscaping case studies by Green Ganga Associates in UP"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-black/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">Real Project Success Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Our Landscaping <br />
              <span className="text-fresh-green">Case Studies</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Deep dive into how we design, build, and maintain luxury gardens, commercial resorts, and large-scale government green zones across Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES INDEX LIST ─────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-soft-beige/40 dark:bg-background relative overflow-hidden transition-colors duration-300">
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fresh-green/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.slug}
                className="group flex flex-col lg:flex-row items-stretch bg-white dark:bg-card border border-gray-100 dark:border-white/5 overflow-hidden shadow-xs hover:shadow-xl hover:border-fresh-green/20 dark:hover:border-fresh-green/30 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] overflow-hidden bg-gray-150">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-deep-green text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    {cs.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between relative">
                  <div>
                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold text-muted-foreground dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5 text-deep-green dark:text-accent-gold">
                        <MapPin className="w-4 h-4 text-fresh-green" />
                        <span>{cs.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-fresh-green" />
                        <span>{cs.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4 text-fresh-green" />
                        <span>{cs.area}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-deep-green dark:text-white mb-5 leading-tight group-hover:text-fresh-green transition-colors">
                      {cs.title}
                    </h2>

                    <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed mb-8 font-medium">
                      {cs.description}
                    </p>

                    {/* Plants Pills */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase font-bold text-deep-green dark:text-white mb-3 tracking-wider flex items-center gap-1">
                        <Leaf className="w-3.5 h-3.5 text-fresh-green" /> Key Foliage & Materials:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.plants.map((plant) => (
                          <span
                            key={plant}
                            className="text-xs bg-soft-beige dark:bg-white/10 border border-gray-150 dark:border-white/5 text-deep-green/90 dark:text-white/90 px-3 py-1 rounded-full font-semibold"
                          >
                            {plant}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-white/10 pt-6">
                    <Link href={`/projects/${cs.slug}`}>
                      <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-bold transition-all shadow-md shadow-deep-green/10 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST FACTOR ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-deep-green text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fresh-green/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 text-accent-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Guaranteed Quality & Lifetime Care
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our case studies showcase our commitment to excellence. We offer continuous gardening consultation, lightweight soil structures, and automated micro-irrigation layout designs to ensure that your landscape flourishes forever.
          </p>
          <Link href="/contact">
            <Button className="rounded-full bg-accent-gold hover:bg-yellow-600 text-deep-green px-8 h-12 font-bold transition-all">
              Discuss Your Vision
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
