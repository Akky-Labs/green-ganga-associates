"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/cities/lucknow", label: "Lucknow Local" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Our Clients" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const desktopNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/cities/lucknow", label: "Lucknow Local" },
];

const desktopNavLinksAfter = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isPortfolioActive = ["/case-studies", "/projects", "/gallery"].includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const forceSolid = pathname.startsWith("/blog/") && pathname !== "/blog";

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
          (scrolled || forceSolid) && !mobileOpen
            ? "bg-white/95 dark:bg-card/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(31,93,59,0.08)] py-3 border-b border-transparent dark:border-white/5"
            : mobileOpen
            ? "bg-transparent py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8">
          {/* Logo Section - Hidden when Mobile Menu is Open */}
          <Link 
            href="/" 
            className={`flex items-center group transition-all duration-300 ${mobileOpen ? "opacity-0 pointer-events-none -translate-x-4" : "opacity-100"}`}
          >
            <div className={`transition-all duration-500 rounded-xl overflow-hidden p-1 ${
              ((scrolled || forceSolid) && !mobileOpen)
                ? "bg-transparent scale-95" 
                : "bg-white/95 shadow-xl shadow-black/10 scale-100"
            }`}>
              <Image 
                src="/logo.png" 
                alt="Green Ganga Associates Logo" 
                width={180} 
                height={60} 
                className="h-10 lg:h-12 w-auto object-contain transition-all duration-500"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Regular Links (First Half) */}
            {desktopNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? ((scrolled || forceSolid)
                        ? "text-deep-green bg-light-green"
                        : "text-white bg-white/20")
                      : ((scrolled || forceSolid)
                      ? "text-foreground/70 hover:text-deep-green hover:bg-light-green/50"
                      : "text-white/80 hover:text-white hover:bg-white/10")
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Portfolio Dropdown (Case Studies, Clients, Gallery) */}
            <div className="relative group py-2">
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isPortfolioActive
                    ? ((scrolled || forceSolid)
                      ? "text-deep-green bg-light-green"
                      : "text-white bg-white/20")
                    : ((scrolled || forceSolid)
                    ? "text-foreground/70 hover:text-deep-green hover:bg-light-green/50"
                    : "text-white/80 hover:text-white hover:bg-white/10")
                }`}
              >
                <span>Portfolio</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </button>

              {/* Hover Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 rounded-2xl bg-white dark:bg-card border border-gray-100 dark:border-white/10 p-2 shadow-2xl opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 z-50">
                {[
                  { href: "/case-studies", label: "Case Studies" },
                  { href: "/projects", label: "Our Clients" },
                  { href: "/gallery", label: "Photo Gallery" }
                ].map((item) => {
                  const isItemActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                        isItemActive
                          ? "bg-light-green/45 text-deep-green dark:bg-white/10 dark:text-white"
                          : "text-deep-green/80 hover:text-deep-green hover:bg-light-green/20 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Regular Links (Second Half) */}
            {desktopNavLinksAfter.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? ((scrolled || forceSolid)
                        ? "text-deep-green bg-light-green"
                        : "text-white bg-white/20")
                      : ((scrolled || forceSolid)
                      ? "text-foreground/70 hover:text-deep-green hover:bg-light-green/50"
                      : "text-white/80 hover:text-white hover:bg-white/10")
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />
            <a 
              href="tel:+919999177119" 
              className={`flex items-center gap-1.5 px-2.5 py-1.5 xl:px-4 rounded-full border transition-all ${
                (scrolled || forceSolid)
                  ? "border-deep-green/30 text-deep-green bg-deep-green/5 hover:bg-deep-green/10"
                  : "border-white/30 text-white bg-white/10 hover:bg-white/20"
              }`}
            >
               <Phone className={`w-4 h-4 ${(scrolled || forceSolid) ? "text-deep-green" : "text-white"}`} />
               <span className={`text-sm font-bold ${(scrolled || forceSolid) ? "text-deep-green" : "text-white"}`}>9999177119</span>
            </a>
            <Link href="/contact">
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-deep-green to-fresh-green hover:from-dark-green hover:to-deep-green text-white shadow-lg shadow-deep-green/20 transition-all duration-300 hover:shadow-deep-green/30 whitespace-nowrap"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 z-[110] ${
              mobileOpen 
                ? "bg-white/10 rotate-90" 
                : (scrolled || forceSolid) ? "bg-light-green shadow-sm" : "bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <>
                <span className={`block w-5 h-[2px] rounded-full transition-all ${(scrolled || forceSolid) ? "bg-deep-green" : "bg-white"}`} />
                <span className={`block w-5 h-[2px] rounded-full transition-all ${(scrolled || forceSolid) ? "bg-deep-green" : "bg-white"}`} />
                <span className={`block w-5 h-[2px] rounded-full transition-all ${(scrolled || forceSolid) ? "bg-deep-green" : "bg-white"}`} />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-green/60 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Slide-in Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-[70%] sm:w-[50%] max-w-[260px] bg-gradient-to-b from-deep-green to-dark-green shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Spacer for fixed header height */}
          <div className="h-20" />

          <div 
            className="flex flex-col flex-1 px-5 pb-8 overflow-y-auto"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Inline CSS to hide scrollbar for webkit */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between px-5 py-3.5 text-lg font-bold rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "text-white bg-white/15"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(201,162,39,0.5)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

             <div className="mt-8 pt-8 border-t border-white/10 space-y-3 px-1">
              <div className="flex items-center justify-between p-1 pb-2">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Appearance</span>
                <ThemeToggle />
              </div>
              <a 
                href="tel:+919999177119" 
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all font-bold text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-fresh-green" />
                <span>9999177119</span>
              </a>
              
              <Link href="/contact" className="block" onClick={() => setMobileOpen(false)}>
                <Button className="w-full rounded-2xl bg-accent-gold hover:bg-accent-gold/90 text-deep-green font-bold h-12 text-sm shadow-lg shadow-accent-gold/10">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
