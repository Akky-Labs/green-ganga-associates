"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Clients" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(31,93,59,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className={`transition-all duration-500 rounded-xl overflow-hidden p-1.5 ${
              scrolled 
                ? "bg-transparent scale-95" 
                : "bg-white/95 shadow-xl shadow-black/10 scale-100"
            }`}>
              <Image 
                src="/logo.png" 
                alt="Green Ganga Associates Logo" 
                width={180} 
                height={60} 
                className="h-10 lg:h-12 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? scrolled
                      ? "text-deep-green bg-light-green"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-foreground/70 hover:text-deep-green hover:bg-light-green/50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919999177119" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 text-white bg-white/10 hover:bg-white/20 transition-all">
             <Phone className={`w-4 h-4 ${scrolled ? "text-deep-green" : "text-white"}`} />
             <span className={`text-sm font-bold ${scrolled ? "text-deep-green" : "text-white"}`}>9999177119</span>
          </a>
          <Link href="/contact">
            <Button
              size="sm"
              className="rounded-full bg-gradient-to-r from-deep-green to-fresh-green hover:from-dark-green hover:to-deep-green text-white shadow-lg shadow-deep-green/20 transition-all duration-300 hover:shadow-deep-green/30"
            >
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger - only visible when menu is CLOSED */}
        {!mobileOpen && (
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-colors duration-300 ${
              scrolled ? "bg-light-green" : "bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <span className={`block w-5 h-[2px] rounded-full ${scrolled ? "bg-deep-green" : "bg-white"}`} />
            <span className={`block w-5 h-[2px] rounded-full ${scrolled ? "bg-deep-green" : "bg-white"}`} />
            <span className={`block w-5 h-[2px] rounded-full ${scrolled ? "bg-deep-green" : "bg-white"}`} />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Slide-in Panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-gradient-to-b from-deep-green to-dark-green shadow-2xl animate-slide-in-right">
            {/* Close Button inside panel */}
            <div className="flex justify-end p-5 pt-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex flex-col h-[calc(100%-5rem)] px-6 pb-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3.5 text-base font-medium rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "text-white bg-white/15"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-3">
                <a href="tel:+919999177119" className="flex items-center justify-center gap-2 p-3 rounded-2xl border border-white/20 text-white bg-white/10 hover:bg-white/20 transition-all">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold text-sm">9999177119</span>
                </a>
                <Link href="/contact" className="block" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full rounded-2xl bg-accent-gold hover:bg-accent-gold/90 text-dark-green font-semibold h-12">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
