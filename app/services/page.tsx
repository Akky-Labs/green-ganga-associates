import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  Palette,
  Wrench,
  Droplets,
  Home as HomeIcon,
  TreePine,
  ClipboardList,
  Factory,
  Flower2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileCheck,
  Hammer,
  HeartHandshake,
  ChevronRight,
  Leaf,
  Phone,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Landscaping & Gardening Services India",
  description:
    "Expert landscaping and gardening services in Lucknow, Noida, and across India. Specialized in garden design, vertical gardens, terrace gardens, and organic farming by Green Ganga Associates.",
};

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design & Development",
    desc: "Customized landscape layouts for homes, hotels, parks, cafes, farmhouses, offices, and institutions. Plant selection based on climate, soil, and visual appeal. Integration of lawns, flower beds, pathways, and decorative features.",
    features: ["Custom Layouts", "Plant Selection", "Lawns & Flower Beds", "Pathways & Decor"],
    image: "/gallery/design-development.jpeg",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Maintenance & Care",
    desc: "Regular watering, pruning, and soil treatment. Seasonal flower planting and lawn upkeep. Pest control and plant health monitoring to keep your garden vibrant year-round.",
    features: ["Watering & Pruning", "Soil Treatment", "Pest Control", "Seasonal Planting"],
    image: "/gallery/maintain-care.jpeg",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Water Management",
    desc: "Smart irrigation systems for efficient water use. Sprinklers, drip irrigation, and eco-friendly solutions. Consultancy on sustainable water practices for large projects.",
    features: ["Drip Irrigation", "Sprinkler Systems", "Smart Controllers", "Sustainable Practices"],
    image: "/gallery/water-management.jpeg",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Vertical & Terrace Gardens",
    desc: "Modern vertical garden designs for walls and compact spaces. Terrace garden development for homes, hotels, and offices. Customized solutions for urban environments with limited land.",
    features: ["Vertical Walls", "Terrace Gardens", "Urban Solutions", "Custom Designs"],
    image: "/gallery/Vertical-Terrace .jpeg",
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Consultancy",
    desc: "Expert advice on plant selection, layout planning, and sustainability. Guidance for industrial landscaping, government projects, and large institutions. Professional project reports and cost-effective solutions.",
    features: ["Plant Selection", "Layout Planning", "Project Reports", "Cost-Effective Plans"],
    image: "/gallery/consultency.jpeg",
    objectFit: "object-contain bg-soft-beige",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrial & Government Projects",
    desc: "Large-scale landscaping for factories, public parks, and institutional campuses. Compliance with safety and environmental standards. Durable designs that withstand heavy use and long-term exposure.",
    features: ["Factory Campuses", "Public Parks", "Safety Compliance", "Durable Designs"],
    image: "/project-industrial.png",
  },
  {
    icon: <HomeIcon className="w-8 h-8" />,
    title: "Farmhouses & Commercial Spaces",
    desc: "Elegant garden designs for farmhouses, resorts, and hotels. Compact, evergreen plants for high-traffic commercial areas. Landscaping that enhances property value and guest experience.",
    features: ["Farmhouse Design", "Resort Gardens", "Property Value", "Evergreen Plants"],
    image: "/project-farmhouse.png",
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Organic Farming & Fruit Gardens",
    desc: "In organic farming system — vegetable and fruit garden plans for commercial and personal use. Sustainable, chemical-free growing solutions that bring fresh produce to your doorstep.",
    features: ["Vegetable Gardens", "Fruit Orchards", "Chemical-Free", "Commercial Plans"],
    image: "/hero.png",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Plantation According To Vastu",
    desc: "Harmonize your living space with expert guidance on plant placement and species selection according to Vastu principles. Create a garden that not only looks beautiful but also invites positive energy and prosperity into your home.",
    features: ["Auspicious Plant Selection", "Directional Placement", "Energy Balance", "Expert Consultation"],
    image: "/gallery/WhatsApp Image 2026-03-27 at 11.57.51 AM (1).jpeg",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "Free site visit and discussion to understand your vision, requirements, and budget.", icon: <MessageSquare className="w-6 h-6" /> },
  { step: "02", title: "Design", desc: "Custom landscape layouts with plant palettes and decorative feature planning.", icon: <Palette className="w-6 h-6" /> },
  { step: "03", title: "Approval", desc: "Transparent quote and revisions until you're 100% satisfied with the plan.", icon: <FileCheck className="w-6 h-6" /> },
  { step: "04", title: "Execution", desc: "Professional installation with quality plants, durable materials, and on-time delivery.", icon: <Hammer className="w-6 h-6" /> },
  { step: "05", title: "Aftercare", desc: "Ongoing maintenance plans and plant health monitoring for lasting beauty.", icon: <HeartHandshake className="w-6 h-6" /> },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Services", item: "https://greengangaassociates.com/services" }
        ]} 
      />
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image src="/client/farmhouse-vrindavan-yojna.jpeg" alt="Green Ganga services" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-medium">Services We Provide</span>
            </div>
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              End-to-End <br />
              <span className="text-accent-gold">Green Solutions</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-white/70 text-lg leading-relaxed max-w-lg">
              From creative design to long-term maintenance — ensuring every
              space we work on remains green, functional, and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
              >
                <div className={`relative ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-deep-green/10 img-hover-zoom">
                    <Image src={service.image} alt={service.title} width={700} height={450} className={`${(service as any).objectFit || "object-cover"} w-full h-[350px] lg:h-[420px]`} sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
                  </div>
                  <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-14 h-14 rounded-2xl bg-linear-to-br from-deep-green to-fresh-green flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-deep-green/30" data-aos="zoom-in" data-aos-delay="200">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""} data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}>
                  <div className="w-14 h-14 rounded-2xl bg-light-green/50 text-deep-green flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((f, featureIdx) => (
                      <div key={f} className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={featureIdx * 50}>
                        <CheckCircle2 className="w-4 h-4 text-fresh-green shrink-0" />
                        <span className="text-sm text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-6 h-11 font-semibold transition-all duration-300 shadow-lg shadow-deep-green/20">
                      Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-4 mb-5">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined, transparent process designed for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="premium-card p-6 rounded-3xl bg-white border border-gray-100 text-center h-full cursor-pointer hover:shadow-2xl hover:shadow-deep-green/5 hover:-translate-y-1 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-deep-green to-fresh-green text-white mb-4 shadow-lg shadow-deep-green/20">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-deep-green mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-deep-green/30 z-10">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
