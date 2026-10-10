import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Mail,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
} from "lucide-react";
import portrait from "@/assets/Arobi.png";
import { OrbitPetals } from "./OrbitPetals";
import { CherryBlossomRain } from "@/components/CherryBlossomRain";
import { Image } from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";
import { ButtonBorderPuddles } from "@/components/ui/ButtonBorderPuddles";

export interface HeroProps {
  revealed: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 17,
    },
  },
};

export function Hero({ revealed }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-border/50"
    >
      {/* Active subtle background cherry-blossom rain across the Hero view */}
      <CherryBlossomRain
        windDirection={0.32}
        intensity={14}
        speed={0.85}
        gustSequence={[0, 40, -15, 50, 0]}
        className="z-0"
      />

      {/* Ambient background bloom glows */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-petal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left Column: Hero Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Portfolio
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Software QA Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-4 font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl"
          >
            Arobi <em className="text-primary not-italic font-serif">Amin</em>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-lg sm:text-xl font-medium text-foreground">
              Software QA Engineer
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/80 px-2.5 py-1 text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Quality Assurance & Validation
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            3+ years making software trustworthy — from meticulous manual & functional testing to
            cross-browser validation and enterprise system reliability. I discover the edge-case
            defects before your users ever see them.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-3 gap-4 border-y border-border/60 py-4 max-w-lg"
          >
            <div>
              <p className="font-serif text-2xl text-foreground sm:text-3xl">3+ Yrs</p>
              <p className="text-xs text-muted-foreground">QA Experience</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground sm:text-3xl">100%</p>
              <p className="text-xs text-muted-foreground">Test Case Rigor</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground sm:text-3xl">4+ Apps</p>
              <p className="text-xs text-muted-foreground">Core Systems Validated</p>
            </div>
          </motion.div>

          {/* Action CTAs: Focused & Sleek Dual Buttons with Outer Border Puddle Blooms */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-5">
            <div className="relative group inline-flex overflow-visible">
              <Button asChild variant="default" size="lg" className="relative overflow-visible">
                <a
                  href="/Arobi_Amin_CV.pdf"
                  download="Arobi_Amin_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
              <ButtonBorderPuddles />
            </div>

            <div className="relative group inline-flex overflow-visible">
              <Button asChild variant="secondary" size="lg" className="relative overflow-visible">
                <a href="#projects">
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <ButtonBorderPuddles />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Stylized High-End Profile Container */}
        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.2 }}
        >
          {/* Ambient Rose/Petal Background Glow */}
          <div className="absolute inset-4 rounded-full bg-petal/20 blur-3xl" />
          <div className="absolute -inset-2 rounded-blob bg-linear-to-tr from-primary/20 via-accent/15 to-transparent blur-2xl" />

          {/* Orbiting cherry blossom petals */}
          {revealed && <OrbitPetals radius={190} count={7} />}

          {/* Floating artistic frame container */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center w-[78%] h-[88%]"
          >
            {/* Multi-layered gradient border ring */}
            <div className="relative w-full h-full p-0.75 rounded-artistic bg-linear-to-tr from-primary/60 via-petal/30 to-accent/50 shadow-rose-ambient">
              {/* Inner stylized image container */}
              <div className="relative h-full w-full overflow-hidden rounded-artistic bg-card border border-border/80">
                <Image
                  src={portrait}
                  alt="Arobi Amin, Software QA Engineer"
                  width={768}
                  height={960}
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={true}
                  className="h-full w-full object-cover object-center filter contrast-[1.02] brightness-[1.02]"
                />

                {/* Subtle soft gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Floating Badge 1: Location & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={revealed ? { opacity: 1, y: [0, -5, 0] } : {}}
              transition={{
                delay: 0.9,
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2 rounded-md border border-border bg-card/90 px-3 py-2 text-xs backdrop-blur-md shadow-md"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="font-medium text-foreground">Dhaka, Bangladesh</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-accent font-medium">Open to roles</span>
            </motion.div>

            {/* Floating Badge 2: QA Focus */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={revealed ? { opacity: 1, y: [0, 5, 0] } : {}}
              transition={{
                delay: 1.1,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-3 -right-4 z-20 flex items-center gap-2 rounded-md border border-border bg-card/90 px-3 py-2 text-xs backdrop-blur-md shadow-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              <span className="text-foreground font-medium">3+ Yrs Quality Assurance</span>
            </motion.div>

            {/* Floating Badge 3: Rigor pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={revealed ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="absolute bottom-12 -right-6 z-20 hidden sm:flex items-center gap-1.5 rounded-md border border-border bg-card/85 px-2.5 py-1.5 text-[11px] backdrop-blur-md text-muted-foreground"
            >
              <CheckCircle2 className="h-3 w-3 text-primary" />
              <span>Zero-Defect Mindset</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
