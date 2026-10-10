import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Section } from "./Section";
import { scaleUp } from "@/lib/animations";
import { projects, type ProjectItem, type ProjectFilterType } from "./data";
import { ImagesBadge } from "@/components/ui/ImagesBadge";
import { cardBase, useLockBodyScroll } from "./common";

// ==========================================
// 4. PROJECTS & RESEARCH SHOWCASE (Rose Theme with ImagesBadge)
// ==========================================
export function Projects() {
  const [filter, setFilter] = useState<ProjectFilterType>("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Lock background scroll when modal is open
  useLockBodyScroll(!!activeModalProject);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalProject(null);
    };
    if (activeModalProject) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeModalProject]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  const tabItems: { id: ProjectFilterType; label: string }[] = [
    { id: "all", label: "All Systems" },
    { id: "applications", label: "Commercial Applications" },
    { id: "websites", label: "Institutional Portals" },
    { id: "academic", label: "Academic & Research" },
  ];

  return (
    <Section
      id="projects"
      eyebrow="Systems & Applications"
      title={
        <>
          Tested Systems & <em className="text-primary not-italic font-serif">Projects</em>
        </>
      }
      subtitle="Interactive showcases of applications tested under production conditions — featuring SkyChat, SkyVat, PBGS, PCND, and AIUB SQA suites."
      theme="rose"
      rain={{ windDirection: -0.35, intensity: 8, speed: 0.85 }}
    >
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {tabItems.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`relative rounded-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
                isActive
                  ? "border-primary/60 text-primary-foreground font-semibold"
                  : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeProjectFilterBadge"
                  className="absolute inset-0 rounded-sm bg-primary shadow-xs"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Modern Interactive Project Grid with instant reliable re-rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects &&
            filteredProjects.length > 0 &&
            filteredProjects.map((proj) => {
              const isHovered = hoveredProjectId === proj.id;
              return (
                <motion.article
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredProjectId(proj.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`${cardBase} flex flex-col justify-between bg-linear-to-b from-card via-card to-secondary/50 group cursor-pointer relative overflow-visible`}
                  onClick={() => setActiveModalProject(proj)}
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-accent border border-border/80 rounded-sm px-2 py-0.5">
                        {proj.kind}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="text-[11px] font-medium hidden sm:inline">Details</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Header with ImagesBadge (Interactive Fanning Previews on Hover) */}
                    <div className="mb-3 pt-2">
                      <ImagesBadge
                        text={proj.title}
                        images={proj.previewImages}
                        hovered={isHovered}
                        className="w-full"
                      />
                    </div>

                    <p className="text-xs text-accent font-medium mb-2">{proj.subtitle}</p>

                    <p className="text-xs font-mono tracking-wide text-primary uppercase mb-3">
                      {proj.role}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {proj.summary}
                    </p>

                    {/* Quick QA Highlight Points */}
                    {proj.qaHighlights && proj.qaHighlights.length > 0 && (
                      <div className="border-t border-border/60 pt-3 space-y-1.5">
                        <p className="text-[11px] font-medium text-foreground uppercase tracking-wider">
                          Key Validation Points:
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                          {proj.qaHighlights.slice(0, 2).map((pt, idx) => (
                            <li key={idx} className="line-clamp-1">
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer Tags */}
                  <div className="mt-5 pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                    {proj.techTags &&
                      proj.techTags.length > 0 &&
                      proj.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-border/70 bg-secondary/80 px-2 py-0.5 text-[10px] text-foreground/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </motion.article>
              );
            })}
        </motion.div>
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          >
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-3xl overflow-y-auto rounded-md border border-border bg-card p-6 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-foreground hover:bg-secondary/80 cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">
                  {activeModalProject.scope}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-foreground mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-primary font-medium mt-1">
                  {activeModalProject.subtitle}
                </p>
                <p className="text-xs font-mono text-muted-foreground uppercase mt-0.5">
                  Role: {activeModalProject.role}
                </p>
              </div>

              {/* Preview Images Carousel/Stack */}
              {activeModalProject.previewImages && activeModalProject.previewImages.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Application Screenshots & Interface Previews:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {activeModalProject.previewImages.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-md border border-border bg-secondary/50 aspect-video relative"
                      >
                        <img
                          src={img}
                          alt={`${activeModalProject.title} screenshot ${i + 1}`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Summary */}
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  System Overview & QA Responsibility
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Detailed Validation Points */}
              {activeModalProject.qaHighlights && activeModalProject.qaHighlights.length > 0 && (
                <div className="border-t border-border/60 pt-4">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Exhaustive Validation & Testing Coverage:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {activeModalProject.qaHighlights.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Tags */}
              <div className="border-t border-border/60 pt-4 flex flex-wrap gap-2">
                {activeModalProject.techTags &&
                  activeModalProject.techTags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border bg-secondary px-2.5 py-1 text-xs text-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default Projects;
