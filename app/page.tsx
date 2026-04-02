import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Ganga Associates | Professional Landscaping & Gardening Lucknow",
  description: "India's top landscaping group. Expert garden design, vertical gardens, and terrace development in Lucknow, Noida, Prayagraj and across India. 25+ years of excellence.",
  openGraph: {
    title: "Green Ganga Associates - Your Green Vision, Our Expertise",
    description: "Transforming spaces into lush paradises across India. Best landscaping services for resorts, farmhouses, and homes.",
  }
};

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Building2,
  Droplets,
  TreePine,
  ClipboardList,
  Factory,
  CheckCircle2,
  Star,
  Award,
  Users,
  MapPin,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Gem,
  BarChart3,
  Palette,
  Wrench,
  Sparkles,
  Trophy,
  Home as HomeIcon,
  MessageCircle,
  Target,
  Eye,
  Rocket,
  Flower2,
  Fence,
  Smile,
  History,
  GraduationCap,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const trustFeatures = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: "Professional Planning",
    desc: "Clear schedules, resource allocation, and daily progress tracking for every project we undertake.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Quality Plants",
    desc: "Selected for local climate, durability, and visual appeal — only the healthiest plants make the cut.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Safety & Compliance",
    desc: "Strict adherence to site safety standards and risk management on all projects.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Sustainability",
    desc: "Eco-friendly methods that protect the environment and reduce long-term costs for lasting results.",
  },
];

const services = [
  { title: "Design & Development", icon: <Palette className="w-8 h-8" />, desc: "Customized landscape layouts for homes, hotels, parks, cafe farmhouses, offices, and institutions." },
  { title: "Maintenance & Care", icon: <Wrench className="w-8 h-8" />, desc: "Regular watering, pruning, seasonal planting, pest control, and plant health monitoring." },
  { title: "Water Management", icon: <Droplets className="w-8 h-8" />, desc: "Smart irrigation systems — sprinklers, drip irrigation, and eco-friendly water solutions." },
  { title: "Vertical & Terrace Gardens", icon: <TreePine className="w-8 h-8" />, desc: "Modern vertical garden designs and terrace garden development for urban environments." },
  { title: "Consultancy & Services", icon: <ClipboardList className="w-8 h-8" />, desc: "Expert advice on plant selection, layout planning, sustainability, and project reports." },
  { title: "Industrial & Govt. Projects", icon: <Factory className="w-8 h-8" />, desc: "Large-scale landscaping for factories, public parks, and institutional campuses." },
  { title: "Farmhouse & Commercial", icon: <HomeIcon className="w-8 h-8" />, desc: "Elegant garden designs for farmhouses, resorts, hotels, and high-traffic commercial areas." },
  { title: "Organic Farming", icon: <Flower2 className="w-8 h-8" />, desc: "Organic vegetable & fruit garden plans for commercial and personal use." },
  { title: "Plantation According To Vastu", icon: <Sparkles className="w-8 h-8" />, desc: "Expert guidance on plant placement and species selection according to Vastu principles for positive energy." },
];

const projects = [
  { image: "/client/GS infra.jpeg", title: "GS infra - PGI Hospital", category: "Garden Development", location: "Lucknow" },
  { image: "/client/guru-kripa-utsav.jpeg", title: "GuruKirpa Utsav Resort", category: "Farmhouse & Resorts", location: "Lalganj" },
  { image: "/client/nandi-farmhuse.jpeg", title: "Farm House", category: "Farmhouse & Resorts", location: "Prayagraj" },
  { image: "/client/ansal-api.jpeg", title: "Ansal API Hitech Township", category: "Consultancy & Services", location: "Lucknow" },
  { image: "/client/abdul-kalam.png", title: "UPRNN Abdul Kalam University", category: "Garden Development", location: "Lucknow" },
  { image: "/client/grand-hotel-resort.jpeg", title: "The Grand Hotel & Resort", category: "Hotels", location: "Lucknow" },
];

const team = [
  {
    name: "Mrs. Seema Sharma",
    role: "Director",
    image: "/images/seema-sharma.jpeg",
    qualification: "P.G. Economics",
    experience: "10+ Years",
    bio: "As the Director of Green Ganga Associates, Mrs. Seema Sharma leads the company with a strong business acumen and a deep passion for creating sustainable green environments.",
  },
  {
    name: "Dr. Ajay Sharma",
    role: "Consultant",
    image: "/images/ajaysharma.jpeg",
    qualification: "Ph.D. Horticulture & Landscaping",
    experience: "25+ Years",
    bio: "With a doctorate in Horticulture & Landscaping, Dr. Ajay Sharma is the driving force behind our innovative landscape designs and consultancy based on new technology and research.",
  },
  {
    name: "Dr. P.P. Singh",
    role: "Consultant",
    image: "/images/pp-singh.png",
    qualification: "PhD. in Soil Science",
    experience: "Farm & Rice Industry Expert",
    bio: "Dr. P.P. Singh is an expert in soil science and rice industry consultancy, bringing specialized agricultural knowledge to large-scale farm and industrial projects.",
  },
  {
    name: "Aditya Sharma",
    role: "Team Manager (Commercial)",
    image: "/images/adityasharma.jpeg",
    qualification: "B.Sc. Agriculture, SHUATS Prayagraj",
    bio: "Aditya manages our commercial landscaping division, bringing agricultural expertise and a keen eye for large-scale project management to hotels, offices, and institutions.",
  },
  {
    name: "Nisha Kumari",
    role: "Team Manager (House)",
    image: "/images/nishakumari.jpeg",
    qualification: "B.Sc. Agriculture, SHUATS",
    bio: "Nisha leads our residential projects team, specializing in home gardens, terrace gardens, and personalized green spaces that bring joy to everyday living.",
  },
  {
    name: "Aditi",
    role: "Field Associate",
    image: "/images/female-avatar.png",
    qualification: "B.Sc. Agriculture, CCSU Meerut",
    bio: "Aditi works on-ground to ensure every installation meets our quality standards, handling planting, soil management, and on-site execution with precision.",
  },
  {
    name: "Aryan Sharma",
    role: "Field Associate",
    image: "/images/male-avatar.png",
    qualification: "B.Sc. Ag. (Horticulture), NDUA Kumarganj Ayodhya",
    bio: "Aryan brings specialized horticulture knowledge to the field, ensuring optimal plant health, correct species selection, and beautiful garden execution.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Lucknow",
    text: "Green Ganga transformed our backyard into a paradise. Their attention to detail and understanding of our vision was exceptional. Every morning feels like waking up in a resort!",
    rating: 5,
  },
  {
    name: "Lalit Gupta ",
    role: "Director of Ansal API Lucknow",
    text: "Our office campus has become the talk of the city. The vertical gardens and open spaces have significantly improved our team's productivity and well-being.",
    rating: 5,
  },
  {
    name: "Col. T.N",
    role: "Farmhouse Owner, (Gurugram)",
    text: "Impeccable work on our 5-acre farmhouse. The design blends perfectly with the natural surroundings. Professional, timely, and genuinely passionate about their craft.",
    rating: 5,
  },
];

const whyChooseUs = [
  { title: "Professional Planning", desc: "Clear schedules, resource allocation, and daily progress tracking.", icon: <ClipboardList className="w-6 h-6" /> },
  { title: "Quality Assurance", desc: "Healthy plants, durable materials, and climate-friendly selections.", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Safe & Compliant", desc: "Strict adherence to site safety standards and risk management.", icon: <Shield className="w-6 h-6" /> },
  { title: "Transparent Communication", desc: "Updates provided in simple, structured formats for easy understanding.", icon: <MessageCircle className="w-6 h-6" /> },
  { title: "Sustainability", desc: "Eco-friendly designs that last and protect the environment.", icon: <Leaf className="w-6 h-6" /> },
  { title: "New Technology & Research", desc: "Best consultancy based on new technology & research with qualified agri experts.", icon: <Rocket className="w-6 h-6" /> },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/client/ds-group.jpeg"
            alt="Best landscaping and gardening services in Lucknow by Green Ganga Associates"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-accent-gold/40 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-fresh-green/30 animate-float delay-200" />
          <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-white/20 animate-float delay-400" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          {/* NO data-aos on hero - critical above-fold content must be visible immediately */}
          <div className="max-w-2xl animate-fade-in-up">

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Your Green Vision, <span className="text-fresh-green">Our Expertise</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              We create landscapes that inspire, nurture, and endure — combining
              nature&apos;s beauty with professional care to deliver gardens that
              truly belong to you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="rounded-full bg-linear-to-r from-fresh-green to-deep-green hover:from-deep-green hover:to-dark-green text-white hover:text-white px-8 h-14 text-base font-semibold shadow-2xl shadow-deep-green/30 transition-all duration-500 hover:shadow-deep-green/50 hover:scale-[1.05]"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-base font-medium backdrop-blur-md transition-all duration-500 border-2 hover:border-white/60"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
              {[
                { num: "25+", label: "Projects" },
                { num: "15+", label: "cities" },
                { num: "10+", label: "Team" },
                { num: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.num}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── TRUST FEATURES ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-aos="fade-up">
            {trustFeatures.map((f) => (
              <div
                key={f.title}
                className="group relative p-8 rounded-3xl bg-soft-beige/50 border border-transparent hover:border-deep-green/10 hover:bg-white hover:shadow-[0_20px_60px_rgba(31,93,59,0.08)] transition-all duration-500 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={`${trustFeatures.indexOf(f) * 60}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-deep-green to-fresh-green text-white flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-deep-green/20">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-green mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARALLAX STATS BANNER ──────────────────────── */}
      <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background - no background-attachment:fixed on mobile (iOS doesn't support it) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/client/GS infra.jpeg"
            alt="Green Ganga Statistics Background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-1" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white" data-aos="fade-up">
            {[
              { icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-fresh-green mb-4 mx-auto" />, num: "25+", label: "Completed Projects" },
              { icon: <Smile className="w-8 h-8 md:w-10 md:h-10 text-fresh-green mb-4 mx-auto" />, num: "100%", label: "Happy Clients" },
              { icon: <History className="w-8 h-8 md:w-10 md:h-10 text-fresh-green mb-4 mx-auto" />, num: "25+", label: "Years Experience" },
              { icon: <MapPin className="w-8 h-8 md:w-10 md:h-10 text-fresh-green mb-4 mx-auto" />, num: "15+", label: "Cities Served" },
            ].map((stat, i) => (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {stat.icon}
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW (WHO WE ARE) ──────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-deep-green/5 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative" data-aos="fade-up">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-deep-green/10">
                <Image
                  src="/project-residential.png"
                  alt="Beautiful residential garden by Green Ganga"
                  width={700}
                  height={500}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl shadow-xl p-5 border border-deep-green/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-deep-green">25+</div>
                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green leading-tight mt-4 mb-6">
                Landscaping &{" "}
                <span className="text-gradient-green">Gardening Experts</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Green Ganga Associates is a professional landscaping and gardening
                firm based in Lucknow, Uttar Pradesh. We specialize in designing,
                developing, and maintaining outdoor spaces that combine natural
                beauty with modern functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our philosophy is simple: a garden is not just decoration, it is a
                living ecosystem that brings peace, joy, and sustainability to
                everyday life. We deliver more than just plants — we deliver
                reliability and long-term value.
              </p>

              {/* Mission & Vision mini cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <Target className="w-5 h-5 text-fresh-green mb-2" />
                  <h4 className="text-sm font-bold text-deep-green mb-1">Our Mission</h4>
                  <p className="text-xs text-muted-foreground">Creating landscapes that inspire, nurture, and endure.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <Eye className="w-5 h-5 text-accent-gold mb-2" />
                  <h4 className="text-sm font-bold text-deep-green mb-1">Our Vision</h4>
                  <p className="text-xs text-muted-foreground">Bringing greenery into every urban and rural environment.</p>
                </div>
              </div>

              <Link href="/about">
                <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold transition-all duration-300 shadow-lg shadow-deep-green/20 hover:shadow-deep-green/30">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-light-green/30 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent-gold/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Services We Provide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-4 mb-5">
              End-to-End Landscaping Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From creative design to long-term maintenance — ensuring every space we work on remains green, functional, and inspiring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="premium-card group relative p-7 rounded-3xl bg-white border border-gray-100 hover:border-deep-green/10 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={`${services.indexOf(service) * 50}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-light-green/50 text-deep-green flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-deep-green group-hover:to-fresh-green group-hover:text-white group-hover:scale-110 group-hover:-rotate-3">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-deep-green mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-linear-to-r from-deep-green to-fresh-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-linear-to-br from-deep-green via-deep-green to-dark-green text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fresh-green/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-sm font-semibold text-accent-gold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
              Why Clients Trust Green Ganga
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              We deliver more than just plants — we deliver reliability, long-term value, and landscapes built on accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-fresh-green/20 hover:shadow-2xl hover:shadow-deep-green/5 transition-all duration-500 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={`${whyChooseUs.indexOf(item) * 60}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-deep-green/5 flex items-center justify-center mb-4 text-accent-gold group-hover:bg-accent-gold/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-green mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GALLERY ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-4 mb-5">
              Projects That Inspire
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the stunning landscapes we&apos;ve created across India for our valued clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="group relative h-full rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-5 sm:p-7 hover:border-fresh-green/30 hover:shadow-[0_25px_50px_rgba(31,93,59,0.08)] transition-all duration-700 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Visual Decorative Backgrounds */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-green/5 rounded-bl-[60px] -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-1000 ease-out" />

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
                <div className="relative z-10 grow">
                  <h3 className="text-xl font-black text-deep-green mb-4 leading-tight group-hover:text-fresh-green transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Info Section */}
                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-deep-green/70">
                      <div className="w-7 h-7 rounded-full bg-fresh-green/10 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 text-fresh-green" />
                      </div>
                      <span className="text-xs font-bold tracking-tight">{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold transition-all duration-300 shadow-lg shadow-deep-green/20">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TEAM ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-4 mb-5">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Qualified agricultural experts with a passion for greening your world.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member) => (
              <div key={member.name} className="group text-center cursor-pointer flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${team.indexOf(member) * 60}`}>
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-5 transition-all duration-500 group-hover:scale-110 shadow-xl shadow-deep-green/5 ring-4 ring-white group-hover:ring-fresh-green/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 112px, 144px"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-deep-green mb-0.5 group-hover:text-fresh-green transition-colors">
                  {member.name}
                </h3>
                <p className="text-fresh-green text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">{member.role}</p>
                {member.experience && (
                  <div className="bg-fresh-green/10 text-fresh-green text-[9px] font-bold px-2 py-0.5 rounded-full mb-2">
                    {member.experience} Experties
                  </div>
                )}
                <div className="flex items-center gap-1.5 justify-center mb-2 leading-tight">
                  <GraduationCap className="w-3 h-3 text-accent-gold shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium text-center">{member.qualification}</span>
                </div>
                <p className="text-muted-foreground text-[10px] sm:text-[11px] leading-tight max-w-[180px] line-clamp-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-deep-green/3 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-4 mb-5">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="premium-card p-8 rounded-3xl bg-white border border-gray-100" data-aos="fade-up" data-aos-delay={`${testimonials.indexOf(t) * 80}`}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-linear-to-br from-deep-green to-fresh-green flex items-center justify-center text-white font-semibold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-deep-green">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────── */}
      <FAQSection />

      {/* ─── CTA BANNER ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-green/5 px-5 py-2 mb-8 border border-deep-green/10">
            <Sparkles className="w-4 h-4 text-fresh-green animate-pulse" />
            <span className="text-deep-green text-xs sm:text-sm font-semibold uppercase tracking-widest">Transform Your Space Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mb-6 leading-tight">
            Let&apos;s Create Your Dream <br className="hidden sm:block" />
            <span className="text-fresh-green">Landscape</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Join 30+ satisfied clients who have turned their vision into a lush reality with Green Ganga Associates.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-deep-green hover:bg-dark-green text-white hover:text-white font-bold px-10 h-14 text-base shadow-xl shadow-deep-green/10 transition-all duration-300 hover:scale-[1.05]"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="https://wa.me/919999177119" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-deep-green/20 text-deep-green hover:text-deep-green hover:bg-deep-green/5 px-10 h-14 text-base font-bold transition-all duration-300 hover:border-deep-green/40 hover:scale-[1.05]"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
