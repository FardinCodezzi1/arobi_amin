"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonBorderPuddlesProps {
  className?: string;
  size?: "default" | "sm" | "lg";
}

/**
 * Organic cherry blossom petal puddles hover effect for buttons:
 * When hovered, a collection of delicate flower puddles and petals bloom
 * along the button's outer perimeter (top, bottom, and corners).
 * Strictly contains NO bounding rounded-full disk or circular border background.
 */
export function ButtonBorderPuddles({
  className = "",
  size = "default",
}: ButtonBorderPuddlesProps) {
  const isSm = size === "sm";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-2.5 z-20 overflow-visible opacity-0 transition-all duration-300 ease-out group-hover:opacity-100",
        className,
      )}
    >
      {/* 1. TOP-RIGHT CORNER: Fluid puddle droplet with blooming cherry blossom petals */}
      {/* <div
        className={cn(
          "absolute -top-3 -right-3 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-100 scale-75 group-hover:-translate-y-1 group-hover:translate-x-1",
          isSm && "-top-2 -right-2 scale-60 group-hover:scale-80",
        )}
      >
        <svg
          viewBox="0 0 42 26"
          className="w-10 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]"
          fill="none"
        >
          <path
            d="M6 13 C6 7, 15 3, 24 5 C33 7, 39 11, 36 17 C33 22, 22 24, 14 22 C6 20, 6 16, 6 13 Z"
            fill="currentColor"
            fillOpacity="0.55"
          />
          <ellipse
            cx="17"
            cy="10"
            rx="5"
            ry="2"
            fill="#ffffff"
            fillOpacity="0.6"
            transform="rotate(-8 17 10)"
          />
          <circle cx="28" cy="12" r="1.5" fill="#ffffff" fillOpacity="0.7" />
        </svg>

        <div className="absolute -top-2 right-1 transition-transform duration-500 delay-75 ease-out group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-18 group-hover:scale-110">
          <svg
            viewBox="0 0 16 22"
            className="w-4 h-5.5 text-accent filter drop-shadow-[0_0_6px_rgba(236,72,153,0.85)]"
          >
            <path
              d="M8 2 C10.5 5, 14.5 8.5, 14.5 13.5 C14.5 18, 11 21, 8 21 C5 21, 1.5 18, 1.5 13.5 C1.5 8.5, 5.5 5, 8 2 Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M8 3 C7.5 5, 8 6.5, 8 8"
              stroke="#ffffff"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="absolute -top-1 -right-2 transition-transform duration-500 delay-120 ease-out group-hover:-translate-y-3 group-hover:translate-x-3.5 group-hover:-rotate-25">
          <svg
            viewBox="0 0 12 16"
            className="w-3 h-4 text-primary filter drop-shadow-[0_0_4px_rgba(244,114,182,0.8)]"
          >
            <path
              d="M6 1 C8 3.5, 11 6, 11 10 C11 13, 8.5 15, 6 15 C3.5 15, 1 13, 1 10 C1 6, 4 3.5, 6 1 Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
          </svg>
        </div>
      </div> */}

      {/* 2. TOP-LEFT CORNER / EDGE: Morning dewdrop & rising petal */}
      <div
        className={cn(
          "absolute -top-2.5 -left-2.5 flex items-center justify-center transition-transform duration-400 ease-out group-hover:scale-100 scale-75 group-hover:-translate-y-1 group-hover:-translate-x-1",
          isSm && "-top-1.5 -left-1.5 scale-60 group-hover:scale-80",
        )}
      >
        <svg
          viewBox="0 0 32 20"
          className="w-8 h-5 text-primary filter drop-shadow-[0_0_6px_rgba(244,114,182,0.55)]"
          fill="none"
        >
          <path
            d="M5 11 C5 6, 12 3, 20 5 C27 7, 30 12, 27 15 C23 18, 14 18, 8 16 C5 14, 5 12, 5 11 Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
          <ellipse cx="14" cy="8" rx="4" ry="1.8" fill="#ffffff" fillOpacity="0.5" />
        </svg>

        {/* Petal lifting off top-left */}
        <div className="absolute -top-1.5 left-0 transition-transform duration-500 delay-100 ease-out group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:-rotate-30">
          <svg
            viewBox="0 0 14 18"
            className="w-3.5 h-4.5 text-accent filter drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"
          >
            <path
              d="M7 1 C9 3.5, 12 6.5, 12 11 C12 14.5, 9.5 17, 7 17 C4.5 17, 2 14.5, 2 11 C2 6.5, 5 3.5, 7 1 Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* 3. BOTTOM-LEFT CORNER / EDGE: Organic petal puddle pool with resting petals */}
      {/* <div
        className={cn(
          "absolute -bottom-3 -left-3 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-100 scale-75 group-hover:translate-y-1 group-hover:-translate-x-1",
          isSm && "-bottom-2 -left-2 scale-60 group-hover:scale-80",
        )}
      >
        <svg
          viewBox="0 0 48 24"
          className="w-11 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]"
          fill="none"
        >
          <path
            d="M5 12 C5 6, 17 2, 28 4 C39 6, 45 12, 42 17 C39 21, 26 23, 16 21 C7 19, 5 15, 5 12 Z"
            fill="currentColor"
            fillOpacity="0.55"
          />
          <ellipse
            cx="22"
            cy="10"
            rx="6"
            ry="2.2"
            fill="#ffffff"
            fillOpacity="0.55"
            transform="rotate(-5 22 10)"
          />
          <circle cx="10" cy="13" r="1.2" fill="#ffffff" fillOpacity="0.6" />
        </svg>
        <div className="absolute bottom-0 left-2 transition-transform duration-400 delay-150 ease-out group-hover:translate-y-1.5 group-hover:-translate-x-1 group-hover:rotate-15">
          <svg
            viewBox="0 0 16 16"
            className="w-4 h-4 text-accent filter drop-shadow-[0_0_5px_rgba(236,72,153,0.85)]"
          >
            <path
              d="M8 1 C10 3, 14 6, 14 10 C14 13.5, 11 15, 8 15 C5 15, 2 13.5, 2 10 C2 6, 6 3, 8 1 Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
          </svg>
        </div>
      </div> */}

      {/* 4. BOTTOM-RIGHT CORNER / EDGE: Playful drifting petals */}
      <div
        className={cn(
          "absolute -bottom-2.5 -right-2.5 flex items-center justify-center transition-transform duration-500 delay-150 ease-out group-hover:scale-100 scale-75 group-hover:translate-y-1.5 group-hover:translate-x-1.5",
          isSm && "-bottom-1.5 -right-1.5 scale-60 group-hover:scale-80",
        )}
      >
        <div className="transition-transform duration-500 delay-200 ease-out group-hover:translate-y-2 group-hover:translate-x-2 group-hover:rotate-35">
          <svg
            viewBox="0 0 14 20"
            className="w-3.5 h-5 text-primary filter drop-shadow-[0_0_5px_rgba(244,114,182,0.85)]"
          >
            <path
              d="M7 2 C9.5 5, 13 8.5, 13 13 C13 16.5, 10 19, 7 19 C4 19, 1 16.5, 1 13 C1 8.5, 4.5 5, 7 2 Z"
              fill="currentColor"
              fillOpacity="0.88"
            />
          </svg>
        </div>

        {/* Tiny dewdrop pearl */}
        <span className="absolute -bottom-0.5 right-1 h-1.5 w-1.5 rounded-full bg-accent/90 shadow-[0_0_5px_rgba(236,72,153,0.9)]" />
      </div>

      {/* 5. TOP & BOTTOM OUTER BORDER ACCENT: Micro dewdrops along button lines */}
      <span className="absolute top-0 left-1/3 h-1 w-1 rounded-full bg-primary/70 shadow-[0_0_4px_rgba(244,114,182,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
      <span className="absolute bottom-0 right-1/3 h-1 w-1 rounded-full bg-accent/70 shadow-[0_0_4px_rgba(236,72,153,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-180" />
    </div>
  );
}
