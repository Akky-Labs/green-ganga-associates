"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "/images/before.jpeg", // Raw site setup placeholder
  afterImage = "/images/after.jpeg",  // Finished landscaping showcase
  beforeLabel = "Before (Raw Site)",
  afterLabel = "After (Green Ganga Landscaping)",
  title = "Transforming Spaces Into Paradises",
  subtitle = "Drag the slider to see our real-world transformation from bare ground to a lush green landscape."
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.offsetWidth);

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 lg:py-28 bg-linear-to-br from-deep-green via-deep-green to-dark-green text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-fresh-green/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-4 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-accent-gold animate-pulse" />
            <span className="text-accent-gold text-xs font-semibold uppercase tracking-widest">Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-white/70 text-sm lg:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Slider Window */}
        <div
          ref={containerRef}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-4 border-white shadow-deep-green/10"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* AFTER IMAGE (Background - Full Width) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={afterImage}
              alt={afterLabel}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Label After */}
            <span className="absolute bottom-4 right-4 bg-deep-green/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md z-20">
              {afterLabel}
            </span>
          </div>

          {/* BEFORE IMAGE (Overlay - Variable Width) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Inner div has fixed width of container to prevent image squishing */}
            <div 
              className="absolute inset-y-0 left-0 h-full"
              style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
            >
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            {/* Label Before */}
            <span className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md z-20 whitespace-nowrap">
              {beforeLabel}
            </span>
          </div>

          {/* DRAGGABLE BAR LINE */}
          <div
            className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Circle Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-fresh-green text-deep-green hover:scale-110 active:scale-95 transition-transform duration-200">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
