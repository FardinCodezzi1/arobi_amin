import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Pause,
  Play,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";
import { Section } from "./Section";
import { fadeUp, stagger, scaleUp } from "@/lib/animations";
import { photos, type Photo } from "./data";
import { Image } from "@/components/ui/OptimizedImage";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { useLockBodyScroll } from "./common";

// ==========================================
// 6. "JOURNEY IN TECH" PHOTO GALLERY (Rose Theme - Real Assets #4, #5, #8, #2, #6)
// ==========================================
export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [isPlaying, setIsPlaying] = useState(true);

  // Lock background scroll when lightbox is open
  useLockBodyScroll(!!selectedPhoto);

  const activePhoto = photos[activeSlideIndex] || photos[0];

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  // Lightbox cyclic navigation
  const nextLightboxPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const curIdx = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIdx = (curIdx + 1) % photos.length;
    setSelectedPhoto(photos[nextIdx]);
    setActiveSlideIndex(nextIdx);
  }, [selectedPhoto]);

  const prevLightboxPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const curIdx = photos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIdx = (curIdx - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIdx]);
    setActiveSlideIndex(prevIdx);
  }, [selectedPhoto]);

  // Autoplay slider timer
  useEffect(() => {
    if (viewMode !== "slider" || !isPlaying || selectedPhoto) return;
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [viewMode, isPlaying, selectedPhoto]);

  // Keyboard navigation for both slider and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto) {
        if (e.key === "Escape") setSelectedPhoto(null);
        if (e.key === "ArrowRight") nextLightboxPhoto();
        if (e.key === "ArrowLeft") prevLightboxPhoto();
      } else if (viewMode === "slider") {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, viewMode, nextLightboxPhoto, prevLightboxPhoto, nextSlide, prevSlide]);

  return (
    <Section
      id="gallery"
      eyebrow="Milestones & Moments"
      title={
        <>
          Journey in <em className="text-primary not-italic font-serif">Tech</em>
        </>
      }
      subtitle="Complete 9-photo chronicle capturing university milestones at AIUB, IoT lab research, and professional SQA engineering at Codezzi."
      theme="rose"
      rain={{ windDirection: -0.45, intensity: 8, speed: 0.85 }}
    >
      {/* Top Controls: View Mode Switcher & Counter */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("slider")}
            className={`relative flex items-center gap-2 rounded-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
              viewMode === "slider"
                ? "border-primary/60 text-primary-foreground font-semibold"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {viewMode === "slider" && (
              <motion.span
                layoutId="activeGalleryModeBadge"
                className="absolute inset-0 rounded-sm bg-primary shadow-xs"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <SlidersHorizontal className="h-3.5 w-3.5 relative z-10" />
            <span className="relative z-10">Cinematic Slider</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`relative flex items-center gap-2 rounded-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
              viewMode === "grid"
                ? "border-primary/60 text-primary-foreground font-semibold"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {viewMode === "grid" && (
              <motion.span
                layoutId="activeGalleryModeBadge"
                className="absolute inset-0 rounded-sm bg-primary shadow-xs"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <LayoutGrid className="h-3.5 w-3.5 relative z-10" />
            <span className="relative z-10">3×3 Grid (All 9 Photos)</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
          <span>9 Verified Moments</span>
          {viewMode === "slider" && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 rounded-sm border border-border px-2 py-0.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>{isPlaying ? "Autoplay On" : "Paused"}</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: CINEMATIC SLIDER */}
      {viewMode === "slider" && (
        <div className="space-y-6">
          {/* Main Active Slide Display */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-md border border-border bg-card shadow-lg">
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full cursor-pointer group"
                  onClick={() => setSelectedPhoto(activePhoto)}
                >
                  <CardHoverFrame corner="top-right" />
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.caption}
                    width={activePhoto.w}
                    height={activePhoto.h}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  {/* Gradient Scrim for readable text */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/25 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                  {/* Top Floating Badge Bar */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-sm bg-background/85 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-accent backdrop-blur-xs border border-border/60">
                        {activePhoto.milestone}
                      </span>
                      <span className="rounded-sm bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 text-xs font-mono">
                        {String(activeSlideIndex + 1).padStart(2, "0")} / 09
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-sm bg-background/80 px-2.5 py-1 text-xs text-foreground backdrop-blur-xs border border-border/60 group-hover:border-primary/60 transition-colors">
                      <ZoomIn className="h-3.5 w-3.5 text-primary" />
                      <span className="hidden sm:inline">Click to Expand</span>
                    </div>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-foreground">
                    <span className="block text-xs uppercase tracking-wider text-primary mb-1 font-medium">
                      {activePhoto.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug">
                      {activePhoto.caption}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Left / Right Navigation Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background hover:scale-110 hover:border-primary border border-border/80 cursor-pointer shadow-md"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background hover:scale-110 hover:border-primary border border-border/80 cursor-pointer shadow-md"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Interactive 9-Photo Filmstrip Bar */}
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
              <span>Photo Selector ({photos.length} Total):</span>
              <span className="text-[11px] text-accent">
                Click thumbnail to slide · Click slide to expand
              </span>
            </p>
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
              {photos.map((photo, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`group relative aspect-square overflow-hidden rounded-sm border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-primary shadow-glow scale-105 opacity-100 z-10"
                        : "border-border/60 opacity-60 hover:opacity-100 hover:border-primary/50"
                    }`}
                    title={photo.caption}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover object-center"
                    />
                    <span
                      className={`absolute bottom-0.5 right-0.5 rounded-[2px] px-1 text-[9px] font-mono leading-tight ${
                        isActive
                          ? "bg-primary text-primary-foreground font-bold"
                          : "bg-background/80 text-foreground"
                      }`}
                    >
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: GAPLESS 3×3 GRID (ALL 9 PHOTOS WITH UNIFORM HEIGHT) */}
      {viewMode === "grid" && (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photos &&
            photos.length > 0 &&
            photos.map((photo) => (
              <motion.figure
                key={photo.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden rounded-md border border-border bg-card cursor-pointer aspect-4/5 shadow-xs"
              >
                <CardHoverFrame corner="bottom-right" />
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={photo.w}
                  height={photo.h}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Scrim for Contrast & Legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/30 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                {/* Top Badge & Zoom Indicator */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="rounded-sm bg-background/85 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent backdrop-blur-xs border border-border/60">
                    {photo.milestone}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 shadow-sm">
                    <ZoomIn className="h-3.5 w-3.5 text-primary" />
                  </div>
                </div>

                {/* Caption & Category */}
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-foreground">
                  <span className="block text-[11px] uppercase tracking-wider text-primary mb-0.5 font-medium">
                    {photo.category}
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-foreground leading-snug line-clamp-2">
                    {photo.caption}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
        </motion.div>
      )}

      {/* FULL-SCREEN LIGHTBOX MODAL WITH PREV/NEXT CYCLING */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-3 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[94vh] max-w-5xl w-full overflow-hidden rounded-md border border-border bg-card p-4 sm:p-6 shadow-2xl flex flex-col justify-between"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-sm bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 text-xs font-mono">
                    {photos.findIndex((p) => p.id === selectedPhoto.id) + 1} / {photos.length}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-accent font-medium hidden sm:inline">
                    {selectedPhoto.milestone}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
                    Use ← → arrow keys to browse
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors cursor-pointer border border-border"
                    aria-label="Close image preview"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport with Previous & Next Arrows */}
              <div className="relative flex-1 min-h-[300px] max-h-[68vh] overflow-hidden rounded-sm flex items-center justify-center bg-background/60 my-2">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  width={selectedPhoto.w}
                  height={selectedPhoto.h}
                  priority={true}
                  className="h-full w-full object-contain max-h-[68vh]"
                />

                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevLightboxPhoto();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background hover:scale-110 hover:border-primary border border-border/80 cursor-pointer shadow-md"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextLightboxPhoto();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background hover:scale-110 hover:border-primary border border-border/80 cursor-pointer shadow-md"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              {/* Footer Details */}
              <div className="border-t border-border/60 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-medium">
                    {selectedPhoto.category}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground mt-0.5">
                    {selectedPhoto.caption}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={prevLightboxPhoto}
                    className="flex items-center gap-1 rounded-sm border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground hover:border-primary/50 cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Prev</span>
                  </button>
                  <button
                    onClick={nextLightboxPhoto}
                    className="flex items-center gap-1 rounded-sm border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground hover:border-primary/50 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default Gallery;
