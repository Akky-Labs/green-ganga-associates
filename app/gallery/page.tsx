"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "WhatsApp Image 2026-03-27 at 11.49.39 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.40 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.40 AM (2).jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.40 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.41 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.41 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.42 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.42 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.49.43 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.50.21 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.50.22 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.52.08 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.53.14 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.45 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.45 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.46 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.47 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.48 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.48 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.49 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.50 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.51 AM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.51 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.52 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.53 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.54 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 11.57.56 AM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.16.53 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.18.00 PM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 12.18.00 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.18.35 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.29.44 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.34.48 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.34.49 PM (1).jpeg",
  "WhatsApp Image 2026-03-27 at 12.34.49 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.34.50 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.34.51 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.35.26 PM.jpeg",
  "WhatsApp Image 2026-03-27 at 12.43.35 PM.jpeg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-soft-beige">
      {/* ─── HEADER ─── */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Green Ganga Gallery"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-beige via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6" data-aos="fade-up">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Project <span className="text-fresh-green">Gallery</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Witness our commitment to excellence through these captures of our working sites and completed transformations.
          </p>
        </div>
      </div>

      {/* ─── GALLERY GRID ─── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="premium-card group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-fresh-green/20 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 50}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/gallery/${encodeURIComponent(img)}`}
                alt={`Green Ganga Work ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Site Visit {index + 1}</span>
                  <div className="w-10 h-10 rounded-full bg-fresh-green flex items-center justify-center text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-green/5 px-5 py-2 mb-8 border border-deep-green/10">
            <Sparkles className="w-4 h-4 text-fresh-green animate-pulse" />
            <span className="text-deep-green text-xs font-semibold uppercase tracking-widest">Interested in similar work?</span>
          </div>
          <h2 className="text-3xl font-bold text-deep-green mb-8">Ready to transform your green space?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-deep-green hover:bg-dark-green text-white font-bold px-10 h-14 shadow-xl shadow-deep-green/10 transition-all duration-300 hover:scale-[1.05]">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center transition-all duration-300"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <button
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 overflow-hidden"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 md:left-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 border border-white/10 z-[110]"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
          </button>

          <button
            className="absolute right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 border border-white/10 z-[110]"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-[90vw] h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${encodeURIComponent(galleryImages[selectedImage])}`}
              alt="Gallery Image Full"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />

            {/* Counter */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
