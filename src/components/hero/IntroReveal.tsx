import { motion, type Variants } from "framer-motion";
import { Petal } from "./Petal";
import { WavyText } from "./WavyText";
import { CherryBlossomRain } from "@/components/CherryBlossomRain";

export interface IntroRevealProps {
  onSkip: () => void;
}

const COUNT = 22;
// Wide, breathable ellipse radii
const RX = 460;
const RY = 270;

const petalVariants: Variants = {
  initial: { opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 },
  pool: (i: number) => {
    const a = (i / COUNT) * Math.PI * 2;
    // Layered variation for breathability
    const rVariation = i % 2 === 0 ? 1 : 0.88;
    return {
      opacity: 0.85,
      scale: 1,
      x: Math.cos(a) * RX * rVariation,
      y: Math.sin(a) * RY * rVariation,
      rotate: (a * 180) / Math.PI + (i % 3) * 15,
      transition: {
        delay: 0.15 + i * 0.035,
        type: "spring",
        stiffness: 55,
        damping: 14,
      },
    };
  },
  exit: (i: number) => {
    const a = (i / COUNT) * Math.PI * 2 + 1.2;
    return {
      opacity: 0,
      scale: 2.8,
      x: Math.cos(a) * 1400,
      y: Math.sin(a) * 900,
      rotate: (a * 180) / Math.PI + 360,
      transition: { duration: 1.2, ease: [0.7, 0, 0.2, 1] },
    };
  },
};

const textContainerVariants: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  pool: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    filter: "blur(12px)",
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

const subtitleVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  pool: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.1, duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
};

export function IntroReveal({ onSkip }: IntroRevealProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background/95 backdrop-blur-md"
      initial="initial"
      animate="pool"
      exit="exit"
      variants={{
        exit: { opacity: 0, transition: { delay: 0.5, duration: 0.7 } },
      }}
    >
      {/* Active atmospheric cherry-blossom shower during intro */}
      <CherryBlossomRain
        intensity={24}
        speed={1.6}
        windDirection={0.4}
        gustSequence={[0, 60, -25, 90, 0]}
      />

      {/* Ambient soft glow backdrop behind the intro circle */}
      <div className="absolute h-96 w-96 rounded-full bg-petal/15 blur-3xl pointer-events-none" />

      {/* Wide, breathable orbital petal ring */}
      <div className="absolute scale-[0.42] sm:scale-[0.68] md:scale-[0.92] lg:scale-100 pointer-events-none">
        {Array.from({ length: COUNT }, (_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={petalVariants}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <Petal size={20 + (i % 5) * 8} />
          </motion.div>
        ))}
      </div>

      {/* Central typography with wavy animations and breathing room */}
      <motion.div
        variants={textContainerVariants}
        className="relative z-10 flex flex-col items-center px-6 text-center max-w-3xl"
      >
        <span className="text-xs uppercase tracking-[0.35em] text-accent mb-4">
          Quality Assurance Portfolio
        </span>

        <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-7xl md:text-8xl">
          <WavyText text="Hi, I'm " delay={0.25} />
          <em className="text-primary not-italic font-serif">
            <WavyText text="Arobi Amin" delay={0.6} />
          </em>
        </h1>

        <motion.p
          variants={subtitleVariants}
          className="mt-6 text-sm sm:text-base tracking-wide text-muted-foreground flex items-center gap-3 justify-center"
        >
          <span>Software QA Engineer</span>
          <span className="text-accent/60">·</span>
          <span>AIUB Graduate</span>
          <span className="text-accent/60">·</span>
          <span className="text-primary">Dhaka, Bangladesh</span>
        </motion.p>
      </motion.div>

      {/* Skip Button */}
      <button
        onClick={onSkip}
        className="absolute bottom-8 right-8 rounded-md border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-foreground cursor-pointer"
      >
        Skip Intro
      </button>
    </motion.div>
  );
}

export default IntroReveal;
