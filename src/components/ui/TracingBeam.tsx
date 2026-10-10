"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const update = () => {
      if (el) setSvgHeight(el.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const OFFSET = 24;
  const h = Math.max(svgHeight - OFFSET, 120);

  // Smooth springs for dynamic beam trace
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.9], [30, Math.max(h - 20, 60)]), {
    stiffness: 400,
    damping: 80,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [30, Math.max(h - 60, 50)]), {
    stiffness: 400,
    damping: 80,
  });

  // Elegant curvilinear path running parallel to timeline nodes
  const path = `M 1 0 V 20 l 14 18 V ${h * 0.75} l -14 18 V ${h}`;

  return (
    <motion.div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Desktop/Tablet dynamic SVG Tracing Beam */}
      <div
        className="pointer-events-none absolute -left-2 top-2 z-20 hidden md:block w-8"
        aria-hidden="true"
      >
        {/* Glowing Head Tracer Node */}
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 bg-background shadow-xs">
          <motion.div
            className="h-2 w-2 rounded-full bg-primary"
            style={{
              boxShadow: "0 0 10px var(--shadow-blue-glow, rgba(56, 189, 248, 0.8))",
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Dynamic Curved SVG Tracer Line */}
        <svg
          viewBox={`0 0 20 ${h}`}
          width="20"
          height={h}
          className="ml-2 block"
          aria-hidden="true"
        >
          {/* Subtle background rail path */}
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            className="text-border/60"
            strokeWidth="1.25"
          />

          {/* Active Tracing Beam with Glowing Gradient */}
          <motion.path
            d={path}
            fill="none"
            stroke="url(#experience-tracing-beam-gradient)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
          />

          <defs>
            <motion.linearGradient
              id="experience-tracing-beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="var(--cyan-glow, #38bdf8)" stopOpacity="0" />
              <stop stopColor="var(--cyan-glow, #38bdf8)" stopOpacity="1" />
              <stop offset="0.5" stopColor="var(--primary, #0ea5e9)" stopOpacity="1" />
              <stop offset="1" stopColor="var(--sapphire, #1e3a8a)" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* Timeline Content */}
      <div ref={contentRef} className="md:pl-8">
        {children}
      </div>
    </motion.div>
  );
}

export default TracingBeam;
