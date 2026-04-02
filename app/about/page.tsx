import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Palette,
  Users,
  Zap,
  Rocket,
  Sparkles,
  Award,
  Building2,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Shield,
  TrendingUp,
  Globe,
  GraduationCap,
  MessageCircle,
  ClipboardList,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Expertise",
  description:
    "About Green Ganga Associates — a premier professional landscaping and gardening group serving Lucknow, Noida, and cities across India with 25+ years expertise.",
};

const values = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: "Professional Planning",
    desc: "Clear schedules, resource allocation, and daily progress tracking for every project.",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: "Quality Assurance",
    desc: "Healthy plants, durable materials, and climate-friendly selections for lasting results.",
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Transparent Communication",
    desc: "Updates provided in simple, structured formats for easy understanding at every step.",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Sustainability",
    desc: "Eco-friendly methods that protect the environment and reduce long-term costs.",
  },
];

const team = [
  {
    name: "Mrs. Seema Sharma",
    role: "Director",
    initials: "SS",
    image: "/images/seema-sharma.jpeg",
    qualification: "P.G. Economics",
    experience: "10+ Years",
    bio: "As the Director of Green Ganga Associates, Mrs. Seema Sharma leads the company with a strong business acumen and a deep passion for creating sustainable green environments.",
  },
  {
    name: "Dr. Ajay Sharma",
    role: "Consultant",
    initials: "AS",
    image: "/images/ajaysharma.jpeg",
    qualification: "Ph.D. Horticulture & Landscaping",
    experience: "25+ Years",
    bio: "With a doctorate in Horticulture & Landscaping, Dr. Ajay Sharma is the driving force behind our innovative landscape designs and consultancy based on new technology and research.",
  },
  {
    name: "Dr. P.P. Singh",
    role: "Consultant",
    initials: "PPS",
    image: "/images/pp-singh.png",
    qualification: "PhD. in Soil Science",
    experience: "Farm & Rice Industry Expert",
    bio: "Dr. P.P. Singh is an expert in soil science and rice industry consultancy, bringing specialized agricultural knowledge to large-scale farm and industrial projects.",
  },
  {
    name: "Aditya Sharma",
    role: "Team Manager (Commercial)",
    initials: "AS",
    image: "/images/adityasharma.jpeg",
    qualification: "B.Sc. Agriculture, SHUATS Prayagraj",
    bio: "Aditya manages our commercial landscaping division, bringing agricultural expertise and a keen eye for large-scale project management to hotels, offices, and institutions.",
  },
  {
    name: "Nisha Kumari",
    role: "Team Manager (House)",
    initials: "NK",
    image: "/images/nishakumari.jpeg",
    qualification: "B.Sc. Agriculture, SHUATS",
    bio: "Nisha leads our residential projects team, specializing in home gardens, terrace gardens, and personalized green spaces that bring joy to everyday living.",
  },
  {
    name: "Aditi",
    role: "Field Associate",
    initials: "AD",
    image: "/images/female-avatar.png",
    qualification: "B.Sc. Agriculture, CCSU Meerut",

    bio: "Aditi works on-ground to ensure every installation meets our quality standards, handling planting, soil management, and on-site execution with precision.",
  },
  {
    name: "Aryan Sharma",
    role: "Field Associate",
    initials: "AR",
    image: "/images/male-avatar.png",
    qualification: "B.Sc. Ag. (Horticulture), NDUA Kumarganj Ayodhya",

    bio: "Aryan brings specialized horticulture knowledge to the field, ensuring optimal plant health, correct species selection, and beautiful garden execution.",
  },
];

const trustReasons = [
  { num: "25+", label: "Projects Completed" },
  { num: "15+", label: "Cities Served" },
  { num: "6+", label: "Team Members" },
  { num: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image src="/client/farmhouse-vrindavan-yojna.jpeg" alt="Green Ganga landscaping project" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-medium">About Our Company</span>
            </div>
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Landscaping & <br />
              <span className="text-accent-gold">Gardening Experts</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-white/70 text-lg leading-relaxed max-w-lg">
              Professional landscaping and gardening firm based in Lucknow,
              specializing in designing, developing, and maintaining outdoor spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMPANY INTRO ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-light-green/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green leading-tight mt-4 mb-6">
                Green Ganga{" "}
                <span className="text-gradient-green">Associates</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Green Ganga Associates is a professional landscaping and gardening
                firm based in Lucknow, Uttar Pradesh. We specialize in designing,
                developing, and maintaining outdoor spaces that combine natural
                beauty with modern functionality.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Founded with a vision to bring greenery into urban and rural environments",
                  "Experienced in handling both residential and commercial projects",
                  "Known for transparent operations, fair labor management, and reliable delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh-green mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-deep-green/20 pl-4">
                Our philosophy is simple: a garden is not just decoration, it is a
                living ecosystem that brings peace, joy, and sustainability to
                everyday life.
              </p>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-deep-green/10">
                <Image src="/project-residential.png" alt="Green Ganga project" width={700} height={500} className="object-cover w-full h-[450px]" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-deep-green text-white rounded-2xl p-6 shadow-xl" data-aos="zoom-in" data-aos-delay="200">
                <Leaf className="w-8 h-8 text-fresh-green mb-1" />
                <span className="text-white/70 text-sm block">Your Green Vision</span>
                <span className="text-white text-sm font-semibold">Our Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-10 rounded-3xl bg-white border border-gray-100 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-deep-green to-fresh-green text-white flex items-center justify-center mb-5 shadow-lg shadow-deep-green/20">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-4">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed italic text-lg">
                &ldquo;We create landscapes that inspire, nurture, and endure — combining
                nature&apos;s beauty with professional care to deliver gardens that
                truly belong to you.&rdquo;
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white border border-gray-100 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-accent-gold to-[#E8D47A] text-dark-green flex items-center justify-center mb-5 shadow-lg shadow-accent-gold/20">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-4">Why Clients Trust Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                Best consultancy based on new technology &amp; research with qualified
                agricultural expert team. We deliver more than just plants — we
                deliver reliability and long-term value.
              </p>
            </div>
          </div>

          {/* Consultancy & Experience Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="section-decorator-center">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Our Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-green mt-4 mb-5">
                Consultancy & Industry Expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                With decades of collective experience, we have provided technical consultancy to some of India&apos;s leading infrastructure and corporate groups.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* consultancy & experience section mapped */}
              {[
                { title: "Paras merchant pvt ltd sister con. of DS group", duration: "6 Years", location: "Noida" },
                { title: "Jaypee Group (JIIT)", duration: "7 Years", location: "Noida" },
                { title: "Ansal API", duration: "5 Years", site: "4,500 Acre Hitech Township" },
                { title: "Orris Infrastructure", duration: "1 Year", location: "Gurugram" },
                { title: "Jindal Steel & Power", duration: "1 Year", location: "Raigarh (C.G)" },
              ].map((exp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-fresh-green/10 hover:border-fresh-green/30 transition-all group shadow-sm hover:shadow-md" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <div className="flex justify-between items-start mb-4">
                    <Building2 className="w-8 h-8 text-fresh-green" />
                    <span className="text-xs font-bold text-accent-gold bg-accent-gold/5 px-2 py-1 rounded-md">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg font-bold text-deep-green mb-1">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground">{exp.location || exp.site}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <div className="section-decorator-center">
              <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Why Choose Green Ganga</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-green mt-4 mb-5">
              Creativity Meets Accountability
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Clients trust us because we deliver more than just plants — we deliver reliability and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="premium-card p-8 rounded-3xl bg-white border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-light-green/50 text-deep-green flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-green mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-linear-to-br from-deep-green to-dark-green text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fresh-green/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustReasons.map((r) => (
              <div key={r.label} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl sm:text-5xl font-bold text-accent-gold mb-2">{r.num}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-soft-beige relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
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
            {team.map((member, i) => (
              <div key={member.name} className="group text-center cursor-pointer flex flex-col items-center" data-aos="fade-up" data-aos-delay={i * 50}>
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
                <div className="flex items-center gap-1.5 justify-center mb-2">
                  <GraduationCap className="w-3 h-3 text-accent-gold shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">{member.qualification}</span>
                </div>
                <p className="text-muted-foreground text-[10px] sm:text-[11px] leading-tight max-w-[180px]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-green mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something beautiful together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold shadow-lg shadow-deep-green/20 transition-all duration-300">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="rounded-full border-deep-green/20 text-deep-green hover:bg-deep-green hover:text-white px-8 h-12 font-semibold transition-all duration-300">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
