import { motion, type Variants } from "framer-motion";

export interface WavyTextProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "char" | "word";
}

const container: Variants = {
  hidden: {},
  show: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    rotate: 6,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 15,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(3px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
};

export function WavyText({ text, className = "", delay = 0, mode = "char" }: WavyTextProps) {
  if (!text) return null;

  if (mode === "word") {
    const words = text.split(" ");
    return (
      <motion.span
        className={`inline-block ${className}`.trim()}
        variants={container}
        custom={delay}
        initial="hidden"
        animate="show"
        aria-label={text}
      >
        {words &&
          words.length > 0 &&
          words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={wordVariants}
              aria-hidden="true"
              className="inline-block mr-[0.28em] whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
      </motion.span>
    );
  }

  const chars = Array.from(text);
  return (
    <motion.span
      className={`inline-block ${className}`.trim()}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="show"
      aria-label={text}
    >
      {chars &&
        chars.length > 0 &&
        chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={charVariants}
            aria-hidden="true"
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
    </motion.span>
  );
}

export default WavyText;
