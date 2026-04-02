"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Leaf, Filter } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const categories = ["All", "Garden Development", "Farmhouse & Resorts", "Hotels", "Consultancy & Services", "Others"];

const projects = [
  // Garden Development & Maintenance
  {
    image: "/client/GS infra.jpeg",
    title: "GS infra - Client UPRNN PGI Hospital",
    category: "Garden Development",
    location: "Lucknow, UP",
    desc: "Comprehensive garden development and maintenance services for UPRNN at PGI Hospital campus.",
    area: "Campus Wide",
  },
  {
    image: "/client/abdul-kalam.png",
    title: "UPRNN - Abdul Kalam UPAKTU University",
    category: "Garden Development",
    location: "New Campus, Lucknow",
    desc: "Professional landscaping and green belt development for the new university campus.",
    area: "Campus Wide",
  },
  {
    image: "/project-industrial.png",
    title: "Durable Polymers Unit",
    category: "Garden Development",
    location: "Kanpur Road, Lucknow",
    desc: "Industrial landscaping and environmental maintenance for the manufacturing unit.",
    area: "Unit Site",
  },

  // Marriage Home & Farm Houses
  {
    image: "/client/guru-kripa-utsav.jpeg",
    title: "GuruKirpa Utsav",
    category: "Farmhouse & Resorts",
    location: "Raebareli Road, Lalganj",
    desc: "Elegant marriage home cum farmhouse with lush gardens and event spaces.",
    area: "Marriage Resort",
  },
  {
    image: "/client/farmhouse-cum-resort.jpeg",
    title: "Farm House Cum Resort",
    category: "Farmhouse & Resorts",
    location: "Satrik Road, Barabanki",
    desc: "Luxury farmhouse cum resort development with native landscape and modern amenities.",
    area: "Resort Complex",
  },
  {
    image: "/client/nandi-farmhuse.jpeg",
    title: "Farm House",
    category: "Farmhouse & Resorts",
    location: "Prayagraj, UP",
    desc: "High-profile farmhouse landscape design with native flora and modern amenities.",
    area: "Private Estate",
  },
  {
    image: "/client/garden-development-mr-dines.jpeg",
    title: "Garden Development - Mr. Dinesh Sharma",
    category: "Farmhouse & Resorts",
    location: "Lucknow, UP",
    desc: "Exclusive garden development project for Rajya Sabha Member and former Deputy CM.",
    area: "Estate Garden",
  },
  {
    image: "/client/farmhouse-vrindavan-yojna.jpeg",
    title: "Farm House Vrindavan Yojna",
    category: "Farmhouse & Resorts",
    location: "Sec-B Road, Lucknow",
    desc: "Contemporary farmhouse landscape design with minimalist planting and open lawns.",
    area: "Farm House",
  },

  // Hotels
  {
    image: "/client/grand-hotel-resort.jpeg",
    title: "The Grand Hotel & Resort",
    category: "Hotels",
    location: "RBL Road, Mohanlalganj, Lko",
    desc: "Complete landscape design and development for the premium hotel and resort property.",
    area: "Hotel Grounds",
  },
  {
    image: "/client/subh-vilas-hotel.jpeg",
    title: "Shubh Villas Hotel & Resort",
    category: "Hotels",
    location: "Naini, Prayagraj",
    desc: "Elegant garden and pool-side landscaping for the luxury resort suites.",
    area: "Resort Grounds",
  },

  // Consultancy
  {
    image: "/client/ds-group.jpeg",
    title: "Paras merchant pvt ltd sister con. of DS group",
    category: "Consultancy & Services",
    location: "Noida, UP",
    desc: "Technical consultancy and service management for over 6 years.",
    area: "6 Years Experience",
  },
  {
    image: "/client/orris.jpeg",
    title: "Orris Infrastructure Pvt Ltd",
    category: "Consultancy & Services",
    location: "Gurugram, HR",
    desc: "Landscaping consultancy and project planning for urban infrastructure development.",
    area: "1 Year Experience",
  },
  {
    image: "/client/jaypee-group.jpeg",
    title: "Jaypee Group (JIIT)",
    category: "Consultancy & Services",
    location: "Noida, UP",
    desc: "Extensive service period of 7 years managing landscapes for Jaypee institutions.",
    area: "7 Years Experience",
  },
  {
    image: "/client/ansal-api.jpeg",
    title: "Ansal API Hitech Township",
    category: "Consultancy & Services",
    location: "Lucknow, UP",
    desc: "Managed landscaping for the 4,500-acre Hitech Township developmental project.",
    area: "4,500 Acres",
  },

  {
    image: "/client/jindal.jpeg",
    title: "Jindal Steel & Power Ltd",
    category: "Consultancy & Services",
    location: "Raigarh, CG",
    desc: "Specialized consultancy for industrial green belts and site landscaping.",
    area: "1 Year Experience",
  },

  // Others
  {
    image: "/indian-township.png",
    title: "Rishita Developers - Mulberry Heights",
    category: "Consultancy & Services",
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
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Projects", item: "https://greengangaassociates.com/projects" }
        ]}
      />
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/client/farmhouse-vrindavan-yojna.jpeg"
            alt="Best landscaping services by Green Ganga Associates"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-xs font-bold uppercase tracking-widest">Our Projects Portfolio</span>
            </div>
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Discover Our <br />
              <span className="text-accent-gold">Portfolio</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-white/70 text-lg leading-relaxed max-w-lg">
              Explore our diverse portfolio of landscaping and gardening projects
              across residential, commercial, industrial, and government sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FILTER + GALLERY ────────────────────────────── */}
      <section className="py-12 sm:py-20 lg:py-28 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeFilter === cat
                  ? "bg-deep-green text-white shadow-lg shadow-deep-green/20 scale-105"
                  : "bg-white text-foreground/70 hover:bg-deep-green/10 hover:text-deep-green border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((project, i) => (
              <div
                key={`${project.title}-${i}`}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="group relative h-full rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-5 sm:p-7 hover:border-fresh-green/30 hover:shadow-[0_25px_50px_rgba(31,93,59,0.08)] transition-all duration-700 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Visual Decorative Backgrounds */}
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-fresh-green/5 rounded-bl-[60px] sm:rounded-bl-[100px] -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-125 transition-transform duration-1000 ease-out" />
                <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 w-24 h-24 sm:w-32 sm:h-32 bg-accent-gold/5 rounded-tr-full group-hover:scale-125 transition-transform duration-1000 ease-out" />

                {/* Top Badge Section */}
                <div className="relative z-10 flex justify-between items-center mb-5 sm:mb-6">
                  <div className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-fresh-green/10 text-fresh-green text-[8px] sm:text-[9px] font-bold uppercase tracking-widest sm:tracking-widest border border-fresh-green/10">
                    {project.category}
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-soft-beige flex items-center justify-center text-deep-green group-hover:bg-deep-green group-hover:text-white group-hover:rotate-360 transition-all duration-700 ease-in-out shadow-sm">
                    <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-green group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-black text-deep-green mb-3 sm:mb-5 leading-tight group-hover:text-fresh-green transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed sm:leading-[1.8] mb-8 sm:mb-10 line-clamp-4 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {project.desc}
                  </p>
                </div>

                {/* Bottom Info Section */}
                <div className="relative z-10 mt-auto pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-deep-green/70">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-fresh-green/10 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fresh-green" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-tight">{project.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-fresh-green" />
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-fresh-green/80">
                          {project.area}
                        </span>
                      </div>
                    </div>
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
