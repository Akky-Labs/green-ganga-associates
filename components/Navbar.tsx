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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${(scrolled || forceSolid) && !mobileOpen
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
            <div className={`transition-all duration-500 rounded-xl overflow-hidden p-1 ${((scrolled || forceSolid) && !mobileOpen)
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
                  className={`relative px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 ${isActive
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
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${isPortfolioActive
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
                      className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${isItemActive
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
                  className={`relative px-3.5 py-2 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300 ${isActive
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
              href="tel:+919129177119"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 xl:px-4 rounded-full border transition-all ${(scrolled || forceSolid)
                  ? "border-deep-green/30 text-deep-green bg-deep-green/5 hover:bg-deep-green/10"
                  : "border-white/30 text-white bg-white/10 hover:bg-white/20"
                }`}
            >
              <Phone className={`w-4 h-4 ${(scrolled || forceSolid) ? "text-deep-green" : "text-white"}`} />
              <span className={`text-sm font-bold ${(scrolled || forceSolid) ? "text-deep-green" : "text-white"}`}>9129177119</span>
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
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 z-[110] ${mobileOpen
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

      {/* Clean, Light & Smooth Fullscreen Mobile Menu (Reference Style) */}
      <div
        className={`fixed inset-0 z-[120] lg:hidden bg-white dark:bg-[#0c1a12] transition-all duration-300 ease-in-out flex flex-col ${
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {/* Top Bar with Logo & Close 'X' Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10 shrink-0 bg-white dark:bg-[#0c1a12]">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Green Ganga Associates Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/15 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col justify-between">
          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-deep-green dark:text-fresh-green font-semibold border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-fresh-green" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions Section */}
          <div className="pt-6 mt-4 border-t border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Theme Mode
              </span>
              <ThemeToggle />
            </div>

            <a
              href="tel:+919129177119"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-white/15 text-deep-green dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-fresh-green" />
              <span>Call: 9129177119</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-deep-green to-fresh-green hover:from-dark-green hover:to-deep-green text-white font-bold text-base shadow-md transition-transform active:scale-[0.98]">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
