import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Calendar, CheckCircle2, ArrowLeft, Ruler, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ProjectDetails {
  title: string;
  category: string;
  location: string;
  area: string;
  timeTaken: string;
  plantsUsed: string[];
  description: string;
  challenge: string;
  result: string;
  beforeImage: string;
  afterImage: string;
}

const projectsData: Record<string, ProjectDetails> = {
  "pgi-hospital": {
    title: "GS infra - Client UPRNN PGI Hospital",
    category: "Garden Development",
    location: "SGPGI Road, Lucknow, UP",
    area: "35,000 Sq. Ft.",
    timeTaken: "60 Days",
    plantsUsed: ["Selection No. 1 Grass", "Golden Bottle Brush", "Ficus Panda", "Areca Palms", "Dracaena Mahatma"],
    description: "Full-scale ecological greening and boundary landscape architecture for the premier medical facility in Lucknow. The client required a clean, dust-repellant, and positive healing garden setup suitable for recovering patients.",
    challenge: "Heavy construction dust on site, clayey topsoil with poor water absorption, and low root ventilation.",
    result: "Installed specialized root aeration systems, added 100 metric tons of organic compost, laid fresh Selection No. 1 turf grass, and built pathway borders with high oxygen-producing evergreens.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/ds-group.jpeg"
  },
  "abdul-kalam-university": {
    title: "UPRNN - Abdul Kalam UPAKTU University",
    category: "Garden Development",
    location: "Jankipuram Extension, Lucknow",
    area: "1.2 Lakh Sq. Ft.",
    timeTaken: "90 Days",
    plantsUsed: ["Bermuda Grass", "Foxtail Palms", "Royal Palms", "Nerium Oleander", "Bougainvillea Spectabilis"],
    description: "Extensive green belt planning and campus turfing for the prestigious technical university campus. Aimed to construct a multi-tiered shade canopy to lower urban temperatures around lecture halls.",
    challenge: "Massive open grounds exposed to direct hot summer sun waves (Loo), requiring heat-resistant foliage and high-volume sprinkler layout.",
    result: "Planted 250 mature palms, installed pop-up watering systems, laid Bermuda turf slabs, and created decorative multi-tiered shrub hedges matching university paths.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/farmhouse-vrindavan-yojna.jpeg"
  },
  "guru-kripa-utsav": {
    title: "GuruKirpa Utsav Resort & Farmhouse",
    category: "Farmhouse & Resorts",
    location: "Raebareli Road, Lalganj",
    area: "40,000 Sq. Ft.",
    timeTaken: "45 Days",
    plantsUsed: ["Mexican Grass", "Cycas Revoluta", "Golden Cypress", "Wodyetia Bifurcata", "Adenium Obesum"],
    description: "Conversion of a dry agricultural lot into a luxury marriage resort and private farmhouse landscape, complete with manicured lawn borders and aesthetic entrance flowerbeds.",
    challenge: "Slightly saline groundwater and low nutrients in topsoil layer.",
    result: "Applied customized gypsum soil treatments, established organic sand-based subgrades, and laid imported drought-resilient Mexican grass turf.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/guru-kripa-utsav.jpeg"
  },
  "vrindavan-yojana-farmhouse": {
    title: "Farm House Vrindavan Yojna",
    category: "Farmhouse & Resorts",
    location: "Sector 5B, Vrindavan Yojna, Lucknow",
    area: "15,000 Sq. Ft.",
    timeTaken: "30 Days",
    plantsUsed: ["Selection No. 1 Turf", "Pandanus", "Ravenala Madagascariensis (Traveler's Palm)", "Plumeria Rubra"],
    description: "Modern minimalist residential farmhouse garden design with private sit-out zones, Vastu Shastra plant placements, and warm indirect spike LED uplighting.",
    challenge: "Limited natural light near high brick compound walls and compact layout boundary constraints.",
    result: "Selected shade-loving foliage plants for borders, integrated natural stone step-stones, and set up automatic drip lines.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/farmhouse-vrindavan-yojna.jpeg"
  },
  "grand-hotel-resort": {
    title: "The Grand Hotel & Resort",
    category: "Hotels",
    location: "RBL Road, Mohanlalganj, Lucknow",
    area: "20,000 Sq. Ft.",
    timeTaken: "35 Days",
    plantsUsed: ["Korean Grass Slabs", "Dwarf Areca Palms", "Hibiscus Rosa-sinensis", "Monstera Deliciosa"],
    description: "Luxury hotel entrance landscape and poolside greening to build a premium tropical retreat appearance for incoming tourists and wedding guests.",
    challenge: "High pedestrian foot traffic requiring wear-resistant turf types and strict waterproofing limits near swimming lines.",
    result: "Laid durable Korean grass slabs, setup smart drainage layers, and placed mature ornamental palms in masonry planters.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/grand-hotel-resort.jpeg"
  },
  "ansal-api-township": {
    title: "Ansal API Hitech Township",
    category: "Consultancy & Services",
    location: "Sultanpur Road, Lucknow, UP",
    area: "4,500 Acres (Consultancy)",
    timeTaken: "6 Years Service",
    plantsUsed: ["Acclimatized Native Palms", "Cassia Fistula", "Jacaranda Mimosifolia", "Conocarpus Erectus"],
    description: "Managed landscaping planning, avenue tree planting guides, nursery operations, and park preservation guidelines for the massive 4,500-acre smart township project.",
    challenge: "Maintaining landscaping uniformity across dozens of neighborhood parks and wide highway green belts.",
    result: "Built a centralized propagation nursery on-site, formulated climate-specific plantation maps, and guided 100+ field laborers for optimal execution.",
    beforeImage: "/client/GS infra.jpeg",
    afterImage: "/client/ansal-api.jpeg"
  },
  "subh-vilas-hotel": {
    title: "Shubh Villas Hotel & Resort",
    category: "Hotels",
    location: "Naini, Prayagraj",
    area: "6,00,000 Sq. Ft.",
    timeTaken: "30 Days",
    plantsUsed: ["Selection No. 1 Grass", "Areca Palms", "Golden Duranta", "Red Hibiscus", "Star Jasmine"],
    description: "Elegant garden and marriage lawn landscaping for the luxury hotel suites. Designed to withstand heavy foot traffic while providing a premium, lush backdrop for wedding events.",
    challenge: "Soil compaction from ongoing hotel construction and high traffic requirements for large events.",
    result: "Prepared a premium sand-soil substrate mixture for excellent drainage, laid durable Selection No. 1 grass turf, and lined borders with beautiful flowering evergreens.",
    beforeImage: "/gallery/subh-vilas-before.jpeg",
    afterImage: "/gallery/subh-vilas-after.jpeg"
  },
  "nandi-farmhouse": {
    title: "Prayagraj Luxury Farm House",
    category: "Farmhouse & Resorts",
    location: "Prayagraj, UP",
    area: "5,000+ Sq. Ft.",
    timeTaken: "25 Days",
    plantsUsed: ["Mexican Grass Slabs", "Cycas Palms", "Adenium Obesum", "Golden Cypress", "Ravenala"],
    description: "High-profile farmhouse landscape design utilizing native flora and modern amenities. Built to create a peaceful personal retreat with rich green layouts.",
    challenge: "Poor topsoil nutrition and lack of natural shade for delicate plants.",
    result: "Enriched the soil with organic compost, strategically planted mature trees for shade canopy, and installed automatic drip lines.",
    beforeImage: "/gallery/prayagraj-farmhouse-before.jpeg",
    afterImage: "/gallery/prayagraj-farmhouse-after.jpeg"
  },
  "farmhouse-cum-resort": {
    title: "Farm House Cum Resort",
    category: "Farmhouse & Resorts",
    location: "Satrik Road, Barabanki",
    area: "8,00,000 Sq. Ft.",
    timeTaken: "35 Days",
    plantsUsed: ["Bermuda Grass", "Neem Trees", "Gulmohar", "Areca Palms", "Bougainvillea"],
    description: "Luxury farmhouse cum resort development featuring native landscapes, rustic pathways, and lush ornamental borders suitable for the Barabanki climate.",
    challenge: "Heavy weed infestation across a large area and sandy soil texture.",
    result: "Conducted complete weed clearance, added nutrient-rich organic topsoil, and laid Bermuda turf alongside climate-acclimatized native trees.",
    beforeImage: "/gallery/farmhouse-cum-resort-before.jpeg",
    afterImage: "/gallery/farmhouse-cum-resort-after.jpeg"
  },
  "gyan-dairy-school": {
    title: "Gyan Dairy & Gyan Heritage School",
    category: "Others",
    location: "Sultanpur Road & Lucknow",
    area: "7,00,000 Sq. Ft.",
    timeTaken: "40 Days",
    plantsUsed: ["Korean Grass", "Ficus Panda", "Royal Palms", "Golden Bottle Brush", "Xanadu"],
    description: "Greenery development for industrial dairy unit alongside institutional landscape planning for the school campus. Designed for visual appeal and environmental safety.",
    challenge: "Balancing industrial zone emissions with a safe, kid-friendly school environment.",
    result: "Planted boundary hedges with high oxygen-producing species and created soft, open turf play zones on the school grounds.",
    beforeImage: "/gallery/gyan-diary-before.jpeg",
    afterImage: "/gallery/gyan-diary-after.jpeg"
  }
};

// Generates static paths for the 6 main projects to satisfy SSG static export
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug] || projectsData["pgi-hospital"];
  const title = `${project.title} Landscaping Project Lucknow | Green Ganga`;
  const description = `Read case study on ${project.title} in ${project.location}. View our professional garden planning, site parameters & results in UP.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://greengangaassociates.com/projects/${resolvedParams.slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Projects", item: "https://greengangaassociates.com/projects" },
          { name: project.title, item: `https://greengangaassociates.com/projects/${resolvedParams.slug}` }
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src={project.afterImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-xs text-xs font-bold text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 text-fresh-green transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="px-3.5 py-1.5 rounded-full bg-fresh-green/20 text-fresh-green text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-fresh-green/20">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Explore how we transformed this layout from raw ground to a beautifully managed landscape.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY SPECIFICATIONS ─── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-deep-green/5 flex items-center justify-center text-deep-green shrink-0">
                <MapPin className="w-5 h-5 text-fresh-green" />
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Location</span>
                <p className="text-sm font-bold text-deep-green mt-0.5">{project.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-deep-green/5 flex items-center justify-center text-deep-green shrink-0">
                <Ruler className="w-5 h-5 text-fresh-green" />
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Area Size</span>
                <p className="text-sm font-bold text-deep-green mt-0.5">{project.area}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-deep-green/5 flex items-center justify-center text-deep-green shrink-0">
                <Calendar className="w-5 h-5 text-fresh-green" />
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Time Taken</span>
                <p className="text-sm font-bold text-deep-green mt-0.5">{project.timeTaken}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEFORE/AFTER VISUAL COMPARISON ─── */}
      <BeforeAfterSlider
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        title="Visual Transformation"
        subtitle="Slide the divider back and forth to compare the original raw soil/cleared grounds with the completed lush green landscaping."
      />

      {/* ─── CASE STUDY WRITE-UP ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Description & Challenges */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="section-decorator">
                  <span className="text-sm font-bold text-fresh-green uppercase tracking-widest">Project Story</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mt-4 mb-4">Project Overview</h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-deep-green mb-3">The Challenges Faced</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-deep-green mb-3">Our Work & Result</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Plants Used Sidebar */}
            <div className="lg:col-span-1">
              <div className="p-8 rounded-3xl bg-soft-beige/50 border border-gray-100 shadow-xl shadow-deep-green/5 space-y-6">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-fresh-green animate-pulse" />
                  <h3 className="text-lg font-bold text-deep-green">Plants & Slabs Used</h3>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Our agriculture team carefully selected and laid these acclimatized botanical species:
                </p>

                <div className="space-y-3.5 pt-2">
                  {project.plantsUsed.map((plant, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-fresh-green shrink-0 mt-0.5" />
                      <span>{plant}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <a
                    href={`https://wa.me/919999177119?text=Hi, I am looking for landscaping like ${project.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full rounded-full bg-deep-green hover:bg-dark-green text-white h-12 font-semibold shadow-md shadow-deep-green/10">
                      Consult Similar Project
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
