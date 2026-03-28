"use client";

import { useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════
   LEAF SHAPES (SVG paths for variety)
   ═══════════════════════════════════════════════════════ */
const LEAF_SVGS = [
  // Simple oval leaf
  `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 8 2 14c0 3 2 6 5 7.5C8.5 18 10 14 12 10c2 4 3.5 8 5 11.5 3-1.5 5-4.5 5-7.5C22 8 17.5 2 12 2z" fill="FILL_COLOR" opacity="0.85"/>
    <path d="M12 2v20" stroke="STROKE_COLOR" stroke-width="0.7" opacity="0.6"/>
  </svg>`,
  // Maple-ish leaf
  `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10 6 6 8 4 10c2 0 4 1 5 3-2 1-4 2-5 4 2-1 4-1 6 0-1 2-2 4-2 6 2-2 3-3 4-3 1 0 2 1 4 3 0-2-1-4-2-6 2-1 4-1 6 0-1-2-3-3-5-4 1-2 3-3 5-3-2-2-6-4-8-8z" fill="FILL_COLOR" opacity="0.8"/>
    <path d="M12 10v12" stroke="STROKE_COLOR" stroke-width="0.6" opacity="0.5"/>
  </svg>`,
  // Simple petal / small leaf
  `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="10" rx="5" ry="9" transform="rotate(-30 10 10)" fill="FILL_COLOR" opacity="0.75"/>
    <path d="M7 16C8 12 9 8 13 4" stroke="STROKE_COLOR" stroke-width="0.5" opacity="0.5"/>
  </svg>`,
];

const LEAF_COLORS = [
  { fill: "#6FAF45", stroke: "#4a8a2f" },
  { fill: "#8BC34A", stroke: "#5a8c2a" },
  { fill: "#4CAF50", stroke: "#2E7D32" },
  { fill: "#81C784", stroke: "#388E3C" },
  { fill: "#A5D6A7", stroke: "#43A047" },
  { fill: "#C9A227", stroke: "#9E7C1A" },
];

/* ═══════════════════════════════════════════════════════
   BUTTERFLY SVG
   ═══════════════════════════════════════════════════════ */
const BUTTERFLY_COLORS = [
  { wing: "#6FAF45", body: "#1F5D3B", accent: "#A5D6A7" },
  { wing: "#81C784", body: "#2E7D32", accent: "#C8E6C9" },
  { wing: "#C9A227", body: "#8B6914", accent: "#E8D47A" },
];

function createButterflyHTML(color: typeof BUTTERFLY_COLORS[0], size: number): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse cx="14" cy="16" rx="10" ry="7" transform="rotate(-20 14 16)" fill="${color.wing}" opacity="0.75">
        <animate attributeName="rx" values="10;7;10" dur="0.4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="14" cy="16" rx="6" ry="4" transform="rotate(-20 14 16)" fill="${color.accent}" opacity="0.4"/>
      <ellipse cx="26" cy="16" rx="10" ry="7" transform="rotate(20 26 16)" fill="${color.wing}" opacity="0.75">
        <animate attributeName="rx" values="10;7;10" dur="0.4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="26" cy="16" rx="6" ry="4" transform="rotate(20 26 16)" fill="${color.accent}" opacity="0.4"/>
      <ellipse cx="15" cy="24" rx="7" ry="5" transform="rotate(-10 15 24)" fill="${color.wing}" opacity="0.6">
        <animate attributeName="rx" values="7;5;7" dur="0.4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="25" cy="24" rx="7" ry="5" transform="rotate(10 25 24)" fill="${color.wing}" opacity="0.6">
        <animate attributeName="rx" values="7;5;7" dur="0.4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="20" cy="20" rx="1.5" ry="8" fill="${color.body}" opacity="0.9"/>
      <path d="M20 12 Q17 6 14 4" stroke="${color.body}" stroke-width="0.5" fill="none" opacity="0.7"/>
      <path d="M20 12 Q23 6 26 4" stroke="${color.body}" stroke-width="0.5" fill="none" opacity="0.7"/>
      <circle cx="14" cy="4" r="1" fill="${color.body}" opacity="0.7"/>
      <circle cx="26" cy="4" r="1" fill="${color.body}" opacity="0.7"/>
    </g>
  </svg>`;
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT - Performance optimized
   
   Key changes for mobile performance:
   - Completely disabled on mobile/touch devices
   - Reduced leaf spawn frequency (200ms vs 60ms)
   - Reduced butterfly frequency (8-15s vs 3-6s)
   - Fewer leaves per burst (1-2 vs 2-4)
   - Respects prefers-reduced-motion
   - Pauses when tab is hidden
   ═══════════════════════════════════════════════════════ */
export default function NatureEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const leafTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const butterflyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef(true);

  /* ─── Single Cursor Leaf ───────────────────────────── */
  const spawnSingleLeaf = useCallback((baseX: number, baseY: number) => {
    if (!containerRef.current) return;

    const leaf = document.createElement("div");
    const colorIdx = Math.floor(Math.random() * LEAF_COLORS.length);
    const svgIdx = Math.floor(Math.random() * LEAF_SVGS.length);
    const color = LEAF_COLORS[colorIdx];
    const svg = LEAF_SVGS[svgIdx]
      .replace(/FILL_COLOR/g, color.fill)
      .replace(/STROKE_COLOR/g, color.stroke);

    const size = 20 + Math.random() * 16;
    const rotation = Math.random() * 360;
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    const drift = (Math.random() - 0.5) * 60;
    const fallDuration = 1.5 + Math.random() * 1.0;

    leaf.innerHTML = svg;
    leaf.style.cssText = `
      position: fixed;
      left: ${baseX + offsetX}px;
      top: ${baseY + offsetY}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
      z-index: 9999;
      transform: rotate(${rotation}deg) scale(1);
      opacity: 0.85;
      transition: none;
      will-change: transform, opacity;
    `;

    containerRef.current.appendChild(leaf);

    requestAnimationFrame(() => {
      leaf.style.transition = `all ${fallDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      leaf.style.transform = `translate(${drift}px, ${80 + Math.random() * 60}px) rotate(${rotation + 200 + Math.random() * 200}deg) scale(0.2)`;
      leaf.style.opacity = "0";
    });

    setTimeout(() => {
      leaf.remove();
    }, fallDuration * 1000 + 100);
  }, []);

  /* ─── Cursor Leaf Burst ────────────────────────────── */
  const spawnCursorLeaves = useCallback(() => {
    if (!containerRef.current || !isVisibleRef.current) return;

    const { x, y } = mouseRef.current;
    if (x === 0 && y === 0) return;

    // Spawn 1-3 leaves (slightly more for better effect)
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      spawnSingleLeaf(x, y);
    }
  }, [spawnSingleLeaf]);

  /* ─── Floating Butterflies ─────────────────────────── */
  const spawnButterfly = useCallback(() => {
    if (!containerRef.current || !isVisibleRef.current) return;

    const butterfly = document.createElement("div");
    const colorIdx = Math.floor(Math.random() * BUTTERFLY_COLORS.length);
    const color = BUTTERFLY_COLORS[colorIdx];
    const size = 26 + Math.random() * 18;

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 20;
    const endX = startX + (Math.random() - 0.5) * 400;
    const endY = -80;
    const duration = 8 + Math.random() * 7;

    const id = `bf-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const wobbleAmplitude = 30 + Math.random() * 50;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ${id}-path {
        0% {
          transform: translate(${startX}px, ${startY}px) scale(0.5);
          opacity: 0;
        }
        5% {
          opacity: 0.8;
          transform: translate(${startX}px, ${startY - 40}px) scale(1);
        }
        25% {
          transform: translate(${startX + wobbleAmplitude}px, ${startY + (endY - startY) * 0.25}px) scale(1) rotate(10deg);
        }
        50% {
          transform: translate(${startX - wobbleAmplitude * 0.6}px, ${startY + (endY - startY) * 0.5}px) scale(0.95) rotate(-8deg);
        }
        75% {
          transform: translate(${endX + wobbleAmplitude * 0.4}px, ${startY + (endY - startY) * 0.75}px) scale(0.9) rotate(5deg);
        }
        95% {
          opacity: 0.4;
        }
        100% {
          transform: translate(${endX}px, ${endY}px) scale(0.3) rotate(-5deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    butterfly.innerHTML = createButterflyHTML(color, size);
    butterfly.style.cssText = `
      position: fixed;
      left: 0;
      top: 0;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
      z-index: 9998;
      animation: ${id}-path ${duration}s ease-in-out forwards;
      will-change: transform, opacity;
    `;

    containerRef.current.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
      style.remove();
    }, duration * 1000 + 200);
  }, []);

  /* ─── Lifecycle ────────────────────────────────────── */
  useEffect(() => {
    // ⚡ COMPLETELY DISABLE on mobile/touch devices for performance
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isTouchDevice || prefersReducedMotion) {
      // Don't run ANY effects on mobile - saves CPU, battery, and prevents jank
      return;
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Visibility: pause when tab is hidden
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Spawn cursor leaves every 120ms (optimized balance between visual and performance)
    let lastX = 0;
    let lastY = 0;
    const leafInterval = setInterval(() => {
      const { x, y } = mouseRef.current;
      const dist = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
      if (dist > 8) {
        spawnCursorLeaves();
        lastX = x;
        lastY = y;
      }
    }, 120);
    leafTimerRef.current = leafInterval;

    // 🦋 Spawn butterflies: 1 or 2 at a time (optimized)
    const spawnLoop = () => {
      if (!isVisibleRef.current) return;
      
      const count = Math.random() > 0.4 ? 2 : 1; // 60% chance for 2, 40% for 1
      for (let i = 0; i < count; i++) {
        // Stagger if 2
        if (i > 0) {
          setTimeout(() => spawnButterfly(), 1000 + Math.random() * 2000);
        } else {
          spawnButterfly();
        }
      }
      
      const nextDelay = 5000 + Math.random() * 4000; // Next spawn in 5-9s
      butterflyTimerRef.current = setTimeout(spawnLoop, nextDelay);
    };

    // Initial spawn: 2 butterflies after 2s
    setTimeout(() => {
      spawnButterfly();
      setTimeout(() => spawnButterfly(), 1500);
      butterflyTimerRef.current = setTimeout(spawnLoop, 7000);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (leafTimerRef.current) clearInterval(leafTimerRef.current);
      if (butterflyTimerRef.current) clearTimeout(butterflyTimerRef.current);
    };
  }, [spawnCursorLeaves, spawnButterfly]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none hidden sm:block"
      style={{ zIndex: 9997 }}
      aria-hidden="true"
    />
  );
}
