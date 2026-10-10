"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardHoverFrameProps {
  /** Corner where the borders meet and the flower puddle appears */
  corner?: "bottom-right" | "top-right" | "bottom-left" | "top-left";
  /** Compact sizing for smaller cards (e.g. contact buttons, narrow items) */
  compact?: boolean;
  className?: string;
}

/**
 * Cinematic hover animation for cards:
 * 1. All four hidden borders grow along the perimeter to meet each other, forming a glowing frame.
 * 2. At the corner where the borders meet, an ambient flower puddle with resting cherry blossom petals blooms into view.
 */
export function CardHoverFrame({
  corner = "bottom-right",
  compact = false,
  className = "",
}: CardHoverFrameProps) {
  const isBottomRight = corner === "bottom-right";
  const isTopRight = corner === "top-right";
  const isBottomLeft = corner === "bottom-left";
  const isTopLeft = corner === "top-left";

  // Synchronize border start points and delays with target corner
  const topBorderOrigin = isBottomRight || isTopRight ? "origin-left" : "origin-right";
  const topBorderDelay = isTopRight || isTopLeft ? "delay-150" : "delay-0";

  const leftBorderOrigin = isBottomRight || isBottomLeft ? "origin-top" : "origin-bottom";
  const leftBorderDelay = isBottomLeft || isTopLeft ? "delay-150" : "delay-0";

  const bottomBorderOrigin = isBottomRight || isTopRight ? "origin-left" : "origin-right";
  const bottomBorderDelay = isBottomRight || isBottomLeft ? "delay-150" : "delay-0";

  const rightBorderOrigin = isBottomRight || isBottomLeft ? "origin-top" : "origin-bottom";
  const rightBorderDelay = isBottomRight || isTopRight ? "delay-150" : "delay-0";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-md",
        className,
      )}
    >
      {/* 1. TOP BORDER (Spans full width from left: 0 to right: 0) */}
      <span
        className={cn(
          "pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary/30 via-primary to-accent scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100",
          topBorderOrigin,
          topBorderDelay,
        )}
      />

      {/* 2. LEFT BORDER (Spans full height from top: 0 to bottom: 0) */}
      <span
        className={cn(
          "pointer-events-none absolute top-0 bottom-0 left-0 w-[2px] bg-linear-to-b from-primary/30 via-primary to-accent scale-y-0 transition-transform duration-400 ease-out group-hover:scale-y-100",
          leftBorderOrigin,
          leftBorderDelay,
        )}
      />

      {/* 3. RIGHT BORDER (Spans full height from top: 0 to bottom: 0) */}
      <span
        className={cn(
          "pointer-events-none absolute top-0 bottom-0 right-0 w-[2px] bg-linear-to-b from-primary via-accent to-primary scale-y-0 transition-transform duration-400 ease-out group-hover:scale-y-100",
          rightBorderOrigin,
          rightBorderDelay,
        )}
      />

      {/* 4. BOTTOM BORDER (Spans full width from left: 0 to right: 0) */}
      <span
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-accent to-primary scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100",
          bottomBorderOrigin,
          bottomBorderDelay,
        )}
      />

      {/* FLOWER PUDDLE CORNER BLOOM (Appears where borders meet) */}
      <div
        className={cn(
          "pointer-events-none absolute z-30 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 delay-250 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0",
          isBottomRight && "-bottom-1 -right-1 rotate-45",
          isTopRight && "-top-1 -right-1 -rotate-45",
          isBottomLeft && "-bottom-1 -left-1 -rotate-45",
          isTopLeft && "-top-1 -left-1 rotate-45",
        )}
      >
        {compact ? (
          /* Compact Puddle for smaller cards */
          <div className="relative flex items-center justify-center w-8 h-8">
            <span className="absolute inset-0 rounded-full bg-radial from-primary/40 via-primary/10 to-transparent blur-xs" />
            <span className="absolute inset-1 rounded-full border border-primary/30 opacity-60" />
            <div className="relative w-4 h-4">
              <span className="absolute top-0.5 left-0 block w-2 h-2.5 rounded-[70%_0_70%_60%] bg-petal-gradient shadow-xs -rotate-25 opacity-90" />
              <span className="absolute top-0 right-0.5 block w-2 h-2 rounded-[60%_40%_70%_30%] bg-petal-gradient shadow-xs rotate-40 opacity-85" />
              <span className="absolute top-1.5 left-1.5 block h-1 w-1 rounded-full bg-accent shadow-glow" />
            </div>
          </div>
        ) : (
          /* Standard Puddle for full cards */
          <div className="relative flex items-center justify-center w-12 h-12">
            <span className="absolute inset-0 rounded-full bg-radial from-primary/45 via-primary/15 to-transparent blur-xs transition-opacity" />
            <span className="absolute inset-1.5 rounded-full border border-primary/40 opacity-70 shadow-xs" />
            <div className="relative w-6 h-6">
              <span className="absolute top-1 left-0.5 block w-3 h-3.5 rounded-[70%_0_70%_60%] bg-petal-gradient shadow-xs -rotate-25 opacity-95 transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute top-0 right-1 block w-2.5 h-3 rounded-[60%_40%_70%_30%] bg-petal-gradient shadow-xs rotate-40 opacity-90 transition-transform duration-500 group-hover:rotate-45" />
              <span className="absolute bottom-0.5 right-1 block w-2 h-2.5 rounded-[50%_0_50%_50%] bg-petal-gradient shadow-xs rotate-105 opacity-85" />
              <span className="absolute top-2 left-2 block h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardHoverFrame;
