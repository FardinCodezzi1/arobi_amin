import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { CherryBlossomRain, type CherryBlossomRainProps } from "@/components/CherryBlossomRain";
import { fadeUp, stagger } from "@/lib/animations";

export interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  rain?: CherryBlossomRainProps;
  theme?: "rose" | "blue";
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  rain,
  theme = "rose",
  className = "",
  children,
}: SectionProps) {
  const themeClass = theme === "blue" ? "theme-blue" : "theme-rose";
  const ambientGlowClass =
    theme === "blue" ? "bg-sapphire/10 shadow-blue-glow/20" : "bg-petal/10 shadow-glow/20";

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t border-border/70 overflow-hidden bg-background text-foreground transition-colors duration-500 ${themeClass} ${className}`.trim()}
    >
      {/* Reusable Section Cherry Blossom Rain with matched theme and wind */}
      <CherryBlossomRain intensity={8} speed={0.8} theme={theme} {...rain} />

      {/* Subtle ambient light gradient at top */}
      <div
        className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-[650px] rounded-full blur-3xl transition-colors duration-500 ${ambientGlowClass}`}
      />

      {/* Dress-matched Petal Puddle Pool at bottom of section */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-56 w-[800px] max-w-full rounded-full bg-puddle-glow blur-2xl transition-all duration-700 opacity-90"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl md:text-6xl leading-[1.05]">
            {title}
          </h2>
          {subtitle && (
            <div className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </div>
          )}
        </motion.div>

        <div className="mt-14">{children}</div>
      </motion.div>
    </section>
  );
}

export default Section;
