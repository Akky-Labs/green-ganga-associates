"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Leaf, Filter } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Industrial", "Farmhouse", "Terrace", "Government"];

const projects = [
  {
    image: "/project-residential.png",
    title: "Shalimar Imperial Gardens",
    category: "Residential",
    location: "Lucknow, UP",
    desc: "Premium residential landscape with ornamental gardens, stone pathways, and water features for luxury apartments.",
    area: "2 Acres",
  },
  {
    image: "/project-commercial.png",
    title: "Corporate Tech Park Campus",
    category: "Commercial",
    location: "Noida, UP",
    desc: "Vertical gardens, landscaped walkways, and open green spaces for 500+ employees in a modern office campus.",
    area: "5 Acres",
  },
  {
    image: "/project-farmhouse.png",
    title: "Singh Paradise Resort & Farms",
    category: "Farmhouse",
    location: "Lucknow, UP",
    desc: "Complete resort landscaping with native planting, pond, orchard, pergola, and outdoor entertainment areas.",
    area: "10 Acres",
  },
  {
    image: "/project-terrace.png",
    title: "Sapphire Apartments Terrace Garden",
    category: "Terrace",
    location: "Delhi NCR",
    desc: "Luxurious 3,000 sq ft rooftop terrace with container gardens, seating areas, and vertical greenery wall.",
    area: "3,000 sqft",
  },
  {
    image: "/project-industrial.png",
    title: "Rail Coach Factory Landscape",
    category: "Government",
    location: "Rae Bareli, UP",
    desc: "Complete campus landscaping for RCF with green buffers, recreation areas, and water management systems.",
    area: "15 Acres",
  },
  {
    image: "/hero.png",
    title: "Kaps Resort Garden Design",
    category: "Farmhouse",
    location: "Lucknow, UP",
    desc: "Traditional garden design with fountains, flowering trees, and manicured lawns for a premium resort.",
    area: "4 Acres",
  },
  {
    image: "/project-commercial.png",
    title: "Shalimar Commercial Complex",
    category: "Commercial",
    location: "Rana Pratap Marg, Lucknow",
    desc: "Modern commercial complex with integrated green spaces, lobby gardens, and elegant parking landscapes.",
    area: "3 Acres",
  },
  {
    image: "/project-industrial.png",
    title: "Command HQ Landscape",
    category: "Government",
    location: "Lucknow, UP",
    desc: "Formal landscape design for Command Head Quarter with lawns, parade grounds, and ornamental gardens.",
    area: "12 Acres",
  },
  {
    image: "/project-farmhouse.png",
    title: "Ritz Resort & Farms",
    category: "Farmhouse",
    location: "Lucknow, UP",
    desc: "A sustainable farmhouse with organic kitchen garden, fruit orchards, and meditation garden spaces.",
    area: "6 Acres",
  },
  {
    image: "/project-terrace.png",
    title: "Surya Auditorium Garden",
    category: "Commercial",
    location: "Lucknow, UP",
    desc: "Elegant landscape design around auditorium premises with ornamental plants and ambient lighting.",
    area: "1,800 sqft",
  },
  {
    image: "/project-residential.png",
    title: "Shalimar Royal Residence",
    category: "Residential",
    location: "Lucknow, UP",
    desc: "Contemporary courtyard design with minimalist planting, water feature, and geometric hardscaping.",
    area: "4,000 sqft",
  },
  {
    image: "/project-industrial.png",
    title: "STF Head Quarter Landscape",
    category: "Government",
    location: "Lucknow, UP",
    desc: "Professional landscape design for STF headquarters with formal gardens and shade tree avenues.",
    area: "8 Acres",
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
              Projects That{" "}
              <span className="text-accent-gold">Inspire</span>
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
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
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
              { num: "500+", label: "Projects Completed" },
              { num: "10+", label: "States Served" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "15+", label: "Years Experience" },
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
