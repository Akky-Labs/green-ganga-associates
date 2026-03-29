import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  "Design & Development",
  "Maintenance & Care",
  "Water Management",
  "Vertical & Terrace Gardens",
  "Consultancy",
  "Industrial & Govt. Projects",
  "Farmhouse & Commercial",
  "Organic Farming",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Our Clients" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-dark-green to-[#0f2918] text-white relative overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-fresh-green/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 bg-white p-1">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Green Ganga Associates Brand"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <Link href="/" className="flex items-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 shadow-2xl transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
                    <Image
                      src="/logo.png"
                      alt="Green Ganga Associates Logo"
                      width={180}
                      height={60}
                      className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                Professional landscaping and gardening firm based in Lucknow.
                We deliver more than just plants — we deliver reliability and
                long-term value across residential and commercial projects.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">Your Green Vision, Our Expertise</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-fresh-green text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-fresh-green/30 group-hover:bg-fresh-green transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-white/50 hover:text-fresh-green text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-fresh-green/30 group-hover:bg-fresh-green transition-colors duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-fresh-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-fresh-green" />
                  </div>
                  <span className="text-white/50 text-sm leading-relaxed">
                    Adds-Vrindavan yojna,
                    <br />
                    Lucknow, Uttar Pradesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-fresh-green/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-fresh-green" />
                  </div>
                  <a
                    href="tel:+919999177119"
                    className="text-white/50 hover:text-fresh-green text-sm transition-colors duration-300"
                  >
                    9999177119
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-fresh-green/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-fresh-green" />
                  </div>
                  <a
                    href="mailto:greenganga.aso@gmail.com"
                    className="text-white/50 hover:text-fresh-green text-sm transition-colors duration-300"
                  >
                    greenganga.aso@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Green Ganga Associates. All rights
              reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
