"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ImagesBadgeProps {
  text: string;
  images: string[];
  className?: string;
  hovered?: boolean;
  folderSize?: { width: number; height: number };
  teaserImageSize?: { width: number; height: number };
  hoverImageSize?: { width: number; height: number };
  hoverTranslateY?: number;
  hoverSpread?: number;
  hoverRotation?: number;
}

export function ImagesBadge({
  text,
  images,
  className,
  hovered,
  folderSize = { width: 34, height: 26 },
  teaserImageSize = { width: 22, height: 16 },
  hoverImageSize = { width: 68, height: 46 },
  hoverTranslateY = -48,
  hoverSpread = 24,
  hoverRotation = 16,
}: ImagesBadgeProps) {
  const [localHover, setLocalHover] = React.useState(false);
  const isHovered = hovered ?? localHover;
  const displayImages = images ? images.slice(0, 3) : [];
  const tabWidth = folderSize.width * 0.38;
  const tabHeight = folderSize.height * 0.25;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 perspective-[1000px] transform-3d",
        className,
      )}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}
    >
      <motion.div
        className="relative shrink-0"
        style={{
          width: folderSize.width,
          height: folderSize.height,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Folder tab & back */}
        <div className="absolute inset-0 rounded-[4px] bg-linear-to-b from-primary/80 to-primary/60 shadow-sm border border-primary/40">
          <div
            className="absolute left-0.5 rounded-t-[2px] bg-linear-to-b from-primary/90 to-primary/70"
            style={{
              top: -tabHeight * 0.7,
              width: tabWidth,
              height: tabHeight,
            }}
          />
        </div>

        {/* Fanned-out mini preview images */}
        {displayImages.map((image, index) => {
          const totalImages = displayImages.length;
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;
          const teaseY = -3 - (totalImages - 1 - index) * 1;
          const teaseRotation =
            totalImages === 1 ? 0 : totalImages === 2 ? (index - 0.5) * 3 : (index - 1) * 3;

          return (
            <motion.div
              key={image}
              className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-card shadow-md ring-1 ring-border"
              animate={{
                x: `calc(-50% + ${isHovered ? hoverX : 0}px)`,
                y: isHovered ? hoverY : teaseY,
                rotate: isHovered ? baseRotation : teaseRotation,
                width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                height: isHovered ? hoverImageSize.height : teaserImageSize.height,
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 22,
              }}
              style={{ zIndex: index + 1 }}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          );
        })}

        {/* Folder front flap */}
        <div className="absolute inset-0 rounded-[4px] border border-border/80 bg-linear-to-b from-secondary/90 to-secondary/70 shadow-xs z-10 pointer-events-none" />
      </motion.div>

      <span className="font-serif text-xl sm:text-2xl text-foreground font-medium leading-tight">
        {text}
      </span>
    </div>
  );
}

export default ImagesBadge;
