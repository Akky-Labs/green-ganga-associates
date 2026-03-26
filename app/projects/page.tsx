"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Leaf, Filter } from "lucide-react";

const categories = ["All", "Garden Development", "Farmhouse & Resorts", "Hotels", "Consultancy", "Others"];

const projects = [
  // Garden Development & Maintenance
  {
    image: "/indian-institutional.png",
    title: "GS infra - Client UPRNN PGI Hospital",
    category: "Garden Development",
    location: "Lucknow, UP",
    desc: "Comprehensive garden development and maintenance services for UPRNN at PGI Hospital campus.",
    area: "Campus Wide",
  },
  {
    image: "/indian-institutional.png",
    title: "UPRNN - Abdul Kalam UPAKTU University",
    category: "Garden Development",
    location: "New Campus, Lucknow",
    desc: "Professional landscaping and green belt development for the new university campus.",
    area: "Campus Wide",
  },
  {
    image: "/indian-institutional.png",
    title: "Durable Polymers Unit",
    category: "Garden Development",
    location: "Kanpur Road, Lucknow",
    desc: "Industrial landscaping and environmental maintenance for the manufacturing unit.",
    area: "Unit Site",
  },

  // Marriage Home & Farm Houses
  {
    image: "/indian-resort.png",
    title: "GuruKirpa Utsav",
    category: "Farmhouse & Resorts",
    location: "Raebareli Road, Lalganj",
    desc: "Elegant marriage home cum farmhouse with lush gardens and event spaces.",
    area: "Marriage Resort",
  },
  {
    image: "/indian-resort.png",
    title: "Farm House Cum Resort",
    category: "Farmhouse & Resorts",
    location: "Satrik Road, Barabanki",
    desc: "Luxury farmhouse cum resort development with native landscape and modern amenities.",
    area: "Resort Complex",
  },
  {
    image: "/indian-farmhouse.png",
    title: "Farm House - Mr. Nandi Gopal Nandi",
    category: "Farmhouse & Resorts",
    location: "Prayagraj, UP",
    desc: "High-profile farmhouse landscape design for Cabinet Minister Mr. Nandi Gopal Nandi.",
    area: "Private Estate",
  },
  {
    image: "/indian-farmhouse.png",
    title: "Garden Development - Mr. Dinesh Sharma",
    category: "Farmhouse & Resorts",
    location: "Lucknow, UP",
    desc: "Exclusive garden development project for Rajya Sabha Member and former Deputy CM.",
    area: "Estate Garden",
  },
  {
    image: "/indian-farmhouse.png",
    title: "Farm House Vrindavan Yojna",
    category: "Farmhouse & Resorts",
    location: "Sec-B Road, Lucknow",
    desc: "Contemporary farmhouse landscape design with minimalist planting and open lawns.",
    area: "Farm House",
  },

  // Hotels
  {
    image: "/indian-hotel.png",
    title: "The Grand Hotel & Resort",
    category: "Hotels",
    location: "RBL Road, Mohanlalganj, Lko",
    desc: "Complete landscape design and development for the premium hotel and resort property.",
    area: "Hotel Grounds",
  },
  {
    image: "/indian-hotel.png",
    title: "Shubh Villas Hotel & Resort",
    category: "Hotels",
    location: "Naini, Prayagraj",
    desc: "Elegant garden and pool-side landscaping for the luxury resort suites.",
    area: "Resort Grounds",
  },

  // Consultancy
  {
    image: "/indian-township.png",
    title: "DS Group",
    category: "Consultancy",
    location: "Noida, UP",
    desc: "Technical consultancy and service management for over 6 years.",
    area: "6 Years Experience",
  },
  {
    image: "/indian-township.png",
    title: "Orris Infrastructure Pvt Ltd",
    category: "Consultancy",
    location: "Gurugram, HR",
    desc: "Landscaping consultancy and project planning for urban infrastructure development.",
    area: "1 Year Experience",
  },
  {
    image: "/indian-township.png",
    title: "Jaypee Group (JIIT)",
    category: "Consultancy",
    location: "Noida, UP",
    desc: "Extensive service period of 7 years managing landscapes for Jaypee institutions.",
    area: "7 Years Experience",
  },
  {
    image: "/indian-township.png",
    title: "Ansal API Hitech Township",
    category: "Consultancy",
    location: "Lucknow, UP",
    desc: "Managed landscaping for the 4,500-acre Hitech Township developmental project.",
    area: "4,500 Acres",
  },
  {
    image: "/indian-township.png",
    title: "BBD Group - Viraj Constructions",
    category: "Consultancy",
    location: "Lucknow, UP",
    desc: "Consultancy for a 350-acre integrated township project over a period of 9 years.",
    area: "350 Acres",
  },
  {
    image: "/indian-township.png",
    title: "Jindal Steel & Power Ltd",
    category: "Consultancy",
    location: "Raigarh, CG",
    desc: "Specialized consultancy for industrial green belts and site landscaping.",
    area: "1 Year Experience",
  },

  // Others
  {
    image: "/indian-township.png",
    title: "Rishita Developers - Mulberry Heights",
    category: "Others",
    location: "Lucknow, UP",
    desc: "Modern landscaping for Manhattan-style luxury apartments and community spaces.",
    area: "Residential Society",
  },
  {
    image: "/indian-institutional.png",
    title: "Gyan Dairy & Gyan Heritage School",
    category: "Others",
    location: "Aashiyana, Lucknow",
    desc: "Greenery development for industrial dairy unit and school campus.",
    area: "Campus Garden",
  },
  {
    image: "/indian-resort.png",
    title: "Rajender Nursery",
    category: "Others",
    location: "Faizabad Road, Barabanki",
    desc: "Establishment and management of large-scale nursery units for ornamental plants.",
    area: "Nursery Site",
  },
  {
    image: "/project-terrace.png",
    title: "Penthouse at Jopling Road",
    category: "Others",
    location: "Lucknow, UP",
    desc: "Exclusive terrace garden and landscape design for a premium penthouse unit.",
    area: "Penthouse Terrace",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image src="/project-farmhouse.png" alt="Green Ganga projects" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our <span className="text-accent-gold">Landscaping Portfolio</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Explore our diverse portfolio of landscaping projects across
              residential, commercial, industrial, and government sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FILTER + GALLERY ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeFilter === cat
                  ? "bg-deep-green text-white shadow-lg shadow-deep-green/20"
                  : "bg-white text-foreground/70 hover:bg-deep-green/10 hover:text-deep-green border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={`${project.title}-${i}`}
                className="premium-card group rounded-3xl bg-white border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-deep-green/80 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="px-3 py-1 rounded-full bg-white/90 text-deep-green text-xs font-medium">
                      {project.area}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-deep-green mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-1 text-fresh-green text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-deep-green to-dark-green text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "25+", label: "Projects Completed" },
              { num: "15+", label: "Cities Served" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "25+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl sm:text-5xl font-bold text-accent-gold mb-2">{s.num}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-green mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create a landscape that inspires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold shadow-lg shadow-deep-green/20 transition-all duration-300">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
