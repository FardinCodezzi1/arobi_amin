import { motion } from "framer-motion";
import { Petal } from "./Petal";

interface OrbitPetalsProps {
  count?: number;
  radius: number;
}

export function OrbitPetals({ count = 6, radius }: OrbitPetalsProps) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.cos(a) * radius * 3,
              y: Math.sin(a) * radius * 3,
            }}
            animate={{ opacity: 1, scale: 1, x: Math.cos(a) * radius, y: Math.sin(a) * radius }}
            transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.3 + i * 0.08 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ rotate: (a * 180) / Math.PI }}
            >
              <Petal size={18 + (i % 3) * 8} />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
