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
  // Round leaf
  `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2C5 2 2 6 2 10c0 5 4 8 8 8s8-3 8-8c0-4-3-8-8-8z" fill="FILL_COLOR" opacity="0.7"/>
    <path d="M10 2c0 5-2 10 0 16" stroke="STROKE_COLOR" stroke-width="0.5" opacity="0.4"/>
    <path d="M5 8c3 1 6 2 10 0" stroke="STROKE_COLOR" stroke-width="0.3" opacity="0.3"/>
  </svg>`,
];

const LEAF_COLORS = [
  { fill: "#6FAF45", stroke: "#4a8a2f" },
  { fill: "#8BC34A", stroke: "#5a8c2a" },
  { fill: "#4CAF50", stroke: "#2E7D32" },
  { fill: "#81C784", stroke: "#388E3C" },
  { fill: "#A5D6A7", stroke: "#43A047" },
  { fill: "#C9A227", stroke: "#9E7C1A" },  // golden autumn leaf
  { fill: "#66BB6A", stroke: "#2E7D32" },
  { fill: "#AED581", stroke: "#689F38" },  // light lime leaf
];

/* ═══════════════════════════════════════════════════════
   BUTTERFLY SVG
   ═══════════════════════════════════════════════════════ */
const BUTTERFLY_COLORS = [
  { wing: "#6FAF45", body: "#1F5D3B", accent: "#A5D6A7" },
  { wing: "#81C784", body: "#2E7D32", accent: "#C8E6C9" },
  { wing: "#C9A227", body: "#8B6914", accent: "#E8D47A" },
  { wing: "#4CAF50", body: "#1B5E20", accent: "#66BB6A" },
  { wing: "#AED581", body: "#33691E", accent: "#DCEDC8" },
  { wing: "#FFB300", body: "#E65100", accent: "#FFE082" },
];

function createButterflyHTML(color: typeof BUTTERFLY_COLORS[0], size: number): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g class="butterfly-wings">
      <!-- Left wing -->
      <ellipse cx="14" cy="16" rx="10" ry="7" transform="rotate(-20 14 16)" fill="${color.wing}" opacity="0.75">
        <animate attributeName="rx" values="10;7;10" dur="0.35s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="14" cy="16" rx="6" ry="4" transform="rotate(-20 14 16)" fill="${color.accent}" opacity="0.4"/>
      <!-- Right wing -->
      <ellipse cx="26" cy="16" rx="10" ry="7" transform="rotate(20 26 16)" fill="${color.wing}" opacity="0.75">
        <animate attributeName="rx" values="10;7;10" dur="0.35s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="26" cy="16" rx="6" ry="4" transform="rotate(20 26 16)" fill="${color.accent}" opacity="0.4"/>
      <!-- Lower wings -->
      <ellipse cx="15" cy="24" rx="7" ry="5" transform="rotate(-10 15 24)" fill="${color.wing}" opacity="0.6">
        <animate attributeName="rx" values="7;5;7" dur="0.35s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="25" cy="24" rx="7" ry="5" transform="rotate(10 25 24)" fill="${color.wing}" opacity="0.6">
        <animate attributeName="rx" values="7;5;7" dur="0.35s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Body -->
      <ellipse cx="20" cy="20" rx="1.5" ry="8" fill="${color.body}" opacity="0.9"/>
      <!-- Antennae -->
      <path d="M20 12 Q17 6 14 4" stroke="${color.body}" stroke-width="0.5" fill="none" opacity="0.7"/>
      <path d="M20 12 Q23 6 26 4" stroke="${color.body}" stroke-width="0.5" fill="none" opacity="0.7"/>
      <circle cx="14" cy="4" r="1" fill="${color.body}" opacity="0.7"/>
      <circle cx="26" cy="4" r="1" fill="${color.body}" opacity="0.7"/>
    </g>
  </svg>`;
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function NatureEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const leafTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const butterflyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef(true);
  const isTouchDevice = useRef(false);

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

    const size = 22 + Math.random() * 18; // 22–40px (bigger!)
    const rotation = Math.random() * 360;
    const offsetX = (Math.random() - 0.5) * 30; // spawn spread around cursor
    const offsetY = (Math.random() - 0.5) * 30;
    const drift = (Math.random() - 0.5) * 80;
    const fallDuration = 1.2 + Math.random() * 1.0; // faster fall

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
      opacity: 0.95;
      transition: none;
      will-change: transform, opacity;
    `;

    containerRef.current.appendChild(leaf);

    // Animate falling with gentle sway
    requestAnimationFrame(() => {
      leaf.style.transition = `all ${fallDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      leaf.style.transform = `translate(${drift}px, ${100 + Math.random() * 80}px) rotate(${rotation + 200 + Math.random() * 200}deg) scale(0.2)`;
      leaf.style.opacity = "0";
    });

    setTimeout(() => {
      leaf.remove();
    }, fallDuration * 1000 + 100);
  }, []);

  /* ─── Cursor Leaf Burst (spawns multiple) ──────────── */
  const spawnCursorLeaves = useCallback(() => {
    if (!containerRef.current || !isVisibleRef.current) return;
    if (isTouchDevice.current) return;

    const { x, y } = mouseRef.current;
    if (x === 0 && y === 0) return;

    // Spawn 2-4 leaves at once for a rich trail
    const count = 2 + Math.floor(Math.random() * 3);
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
    const size = 28 + Math.random() * 22; // 28–50px (slightly bigger)

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 20;
    const endX = startX + (Math.random() - 0.5) * 500;
    const endY = -80;
    const duration = 7 + Math.random() * 8; // 7–15s

    // Create unique animation keyframes for each butterfly
    const id = `bf-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const wobbleAmplitude = 40 + Math.random() * 60;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ${id}-path {
        0% {
          transform: translate(${startX}px, ${startY}px) scale(0.5);
          opacity: 0;
        }
        5% {
          opacity: 0.85;
          transform: translate(${startX}px, ${startY - 40}px) scale(1);
        }
        20% {
          transform: translate(${startX + wobbleAmplitude}px, ${startY + (endY - startY) * 0.2}px) scale(1) rotate(12deg);
        }
        40% {
          transform: translate(${startX - wobbleAmplitude * 0.7}px, ${startY + (endY - startY) * 0.4}px) scale(1) rotate(-10deg);
        }
        60% {
          transform: translate(${endX + wobbleAmplitude * 0.5}px, ${startY + (endY - startY) * 0.6}px) scale(0.95) rotate(8deg);
        }
        80% {
          transform: translate(${endX - wobbleAmplitude * 0.3}px, ${startY + (endY - startY) * 0.8}px) scale(0.9) rotate(-5deg);
        }
        95% {
          opacity: 0.5;
        }
        100% {
          transform: translate(${endX}px, ${endY}px) scale(0.3) rotate(-8deg);
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
      filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));
    `;

    containerRef.current.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
      style.remove();
    }, duration * 1000 + 200);
  }, []);

  /* ─── Lifecycle ────────────────────────────────────── */
  useEffect(() => {
    // Detect touch device
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Visibility
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Spawn cursor leaves every ~60ms when mouse moves (much more frequent!)
    let lastX = 0;
    let lastY = 0;
    const leafInterval = setInterval(() => {
      const { x, y } = mouseRef.current;
      const dist = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
      if (dist > 5) { // lower threshold = triggers more often
        spawnCursorLeaves();
        lastX = x;
        lastY = y;
      }
    }, 60); // much faster interval
    leafTimerRef.current = leafInterval;

    // Spawn butterflies more frequently (every 3-6s)
    const spawnLoop = () => {
      spawnButterfly();
      const next = 3000 + Math.random() * 3000;
      butterflyTimerRef.current = setTimeout(spawnLoop, next);
    };

    // Spawn 2 butterflies immediately on load with slight delay
    setTimeout(() => spawnButterfly(), 1000);
    setTimeout(() => spawnButterfly(), 2500);
    butterflyTimerRef.current = setTimeout(spawnLoop, 4000);

    // Reduce effects based on "prefers-reduced-motion"
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      clearInterval(leafInterval);
      if (butterflyTimerRef.current) clearTimeout(butterflyTimerRef.current);
    }

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
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9997 }}
      aria-hidden="true"
    />
  );
}
