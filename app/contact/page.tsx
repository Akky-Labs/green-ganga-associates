"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Leaf,
  MessageCircle,
  ArrowRight,
  GraduationCap,
  Users,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Office Address",
    lines: ["Green Ganga Associates", "Adds-Vrindavan yojna", "Lucknow, Uttar Pradesh"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    lines: ["greenganga.aso@gmail.com"],
    href: "mailto:greenganga.aso@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone / WhatsApp",
    lines: ["9999177119"],
    href: "tel:+919999177119",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "GSTIN",
    lines: ["09DCYPS9697J2ZV"],
  },
];

const businessHours = [
  { day: "Monday - Sunday", time: "9:00 AM - 6:00 PM" },
];

const teamMembers = [
  { name: "Mrs. Seema Sharma", role: "Director", qualification: "P.G. Economics", image: "/images/female-avatar.png" },
  { name: "Dr. Ajay Sharma", role: "Consultant", qualification: "Ph.D. Horticulture & Landscaping", image: "/images/ajaysharma.jpeg" },
  { name: "Aditya Sharma", role: "Team Manager (Commercial)", qualification: "B.Sc. Agriculture, SHUATS Prayagraj", image: "/images/adityasharma.jpeg" },
  { name: "Nisha Kumari", role: "Team Manager (House)", qualification: "B.Sc. Agriculture, SHUATS", image: "/images/nishakumari.jpeg" },
  { name: "Aditi", role: "Field Associate", qualification: "B.Sc. Agriculture, CCSU Meerut", image: "/images/female-avatar.png" },
  { name: "Aryan Sharma", role: "Field Associate", qualification: "B.Sc. Ag. (Horticulture), NDUA Kumarganj", image: "/images/male-avatar.png" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the WhatsApp message
    const message = `*I am comming from your website Green Ganga*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject || "N/A"}%0A` +
      `*Service:* ${formData.service || "General Inquiry"}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/919999177119?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
          src="/client/farmhouse-vrindavan-yojna.jpeg"
          alt="Contact Green Ganga"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />  <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-medium">Contact Us</span>
            </div>
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let's Create Something <span className="text-accent-gold">Beautiful</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-white/70 text-lg leading-relaxed max-w-lg">
              We would love to hear from you and discuss how Green Ganga Associates
              can bring your landscaping vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-light-green/20 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form (3 cols) */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Send us a Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mt-4 mb-2">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether it&apos;s a home garden, a commercial project, or a large-scale development, our team is ready to provide expert guidance and reliable service.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-light-green border border-fresh-green/20 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-deep-green shrink-0" />
                  <span className="text-deep-green text-sm font-medium">
                    Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-gray-200 bg-soft-beige/50 focus:border-deep-green focus:ring-deep-green/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 rounded-xl border-gray-200 bg-soft-beige/50 focus:border-deep-green focus:ring-deep-green/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 99991 77119"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 rounded-xl border-gray-200 bg-soft-beige/50 focus:border-deep-green focus:ring-deep-green/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground/80 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="e.g. Garden Design Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="h-12 rounded-xl border-gray-200 bg-soft-beige/50 focus:border-deep-green focus:ring-deep-green/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground/80 font-medium">Service Interested In</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-12 rounded-xl border border-gray-200 bg-soft-beige/50 px-3 text-sm focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all duration-300 outline-none appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="design-development">Design & Development</option>
                    <option value="maintenance-care">Maintenance & Care</option>
                    <option value="water-management">Water Management</option>
                    <option value="vertical-terrace">Vertical & Terrace Gardens</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="industrial-govt">Industrial & Government Projects</option>
                    <option value="farmhouse-commercial">Farmhouses & Commercial Spaces</option>
                    <option value="organic-farming">Organic Farming & Fruit Gardens</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80 font-medium">Your Message *</Label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project, space, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 bg-soft-beige/50 p-3 text-sm focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all duration-300 outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-linear-to-r from-deep-green to-fresh-green hover:from-dark-green hover:to-deep-green text-white px-10 h-13 font-semibold shadow-lg shadow-deep-green/20 transition-all duration-300 hover:shadow-deep-green/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-left">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-6 rounded-2xl bg-soft-beige/50 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-deep-green to-fresh-green text-white flex items-center justify-center shrink-0 shadow-lg shadow-deep-green/20">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-deep-green mb-2">
                        {info.title}
                      </h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-muted-foreground text-sm">
                          {info.href ? (
                            <a href={info.href} className="hover:text-deep-green transition-colors duration-300">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}


              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-soft-beige/50 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-gold" />
                  </div>
                  <h3 className="text-base font-bold text-deep-green">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{h.day}</span>
                      <span className={`text-sm font-medium ${h.time === "Closed" ? "text-red-500" : "text-deep-green"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── MAP ─────────────────────────────────────────── */}
      <section className="relative">
        <div className="h-[400px] lg:h-[500px] w-full bg-warm-beige relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d80.78127920938357!3d26.879417517767527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1679901234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Ganga Associates Location - Lucknow"
          />
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100">
            <h3 className="text-lg font-bold text-deep-green mb-2">
              Green Ganga Associates
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Lucknow, Uttar Pradesh, India
            </p>
            <a
              href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="rounded-full bg-deep-green hover:bg-dark-green text-white shadow-lg shadow-deep-green/20 transition-all duration-300">
                Get Directions
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
