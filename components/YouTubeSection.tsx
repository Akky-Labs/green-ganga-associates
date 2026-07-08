"use client";

import React, { useState } from "react";
import { Youtube, Play, X, Sparkles } from "lucide-react";
import Image from "next/image";

const youtubeVideos = [
  {
    id: "lko-farmhouse",
    title: "Vrindavan Yojna Farmhouse Landscaping Walkthrough",
    desc: "Complete step-by-step garden design, plantation, and automatic pop-up sprinkler irrigation system setup by our expert team in Lucknow.",
    thumbnail: "/client/farmhouse-vrindavan-yojna.jpeg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard placeholder, customizable by client
  },
  {
    id: "ansal-api",
    title: "Commercial Green Belt Development - Ansal API",
    desc: "A drone overview of our massive 4,500-acre township landscaping consulting and environmental maintenance work.",
    thumbnail: "/client/ansal-api.jpeg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "nandi-farm",
    title: "Terrace Garden & Fruit Orchard Setup Tour",
    desc: "Dr. Ajay Sharma explains soil health prep, vastu plant layout guidelines, and organic composting setup on a residential terrace project.",
    thumbnail: "/client/nandi-farmhuse.jpeg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export default function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setActiveVideo(url);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="py-20 lg:py-28 bg-soft-beige/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-fresh-green/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-green/5 px-4 py-1.5 mb-4 border border-deep-green/10">
            <Youtube className="w-4 h-4 text-red-600" />
            <span className="text-deep-green text-xs font-semibold uppercase tracking-widest">Video Logs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-green mt-2 mb-4 leading-tight">
            See Our Work In Action
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
            Take a visual tour of our completed landscaping transformations and listen to expert gardening advice from our qualified horticulturists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-deep-green/5 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video w-full cursor-pointer overflow-hidden bg-black flex items-center justify-center"
                onClick={() => openVideo(video.embedUrl)}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:bg-red-700 group-hover:scale-110 active:scale-95 transition-all duration-300 z-10">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-deep-green mb-2 group-hover:text-fresh-green transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {video.desc}
                  </p>
                </div>
                <button
                  onClick={() => openVideo(video.embedUrl)}
                  className="mt-5 text-xs font-bold text-fresh-green hover:text-deep-green flex items-center gap-1 transition-colors self-start"
                >
                  Watch Video Guide →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO LIGHTBOX MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 z-110 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
