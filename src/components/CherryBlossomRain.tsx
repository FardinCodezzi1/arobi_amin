"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export interface CherryBlossomRainProps {
  /** -1 (drifting strongly left) to 1 (drifting strongly right), default 0.3 */
  windDirection?: number;
  /** Wind force multiplier to increase lateral gust momentum, default 1 */
  windForce?: number;
  /** Number of falling petals, default 14 */
  intensity?: number;
  /** Speed multiplier (higher is faster), default 1 */
  speed?: number;
  /** Horizontal sway offsets (in px) applied across the fall sequence */
  gustSequence?: number[];
  /** Petal color palette matching the section theme */
  theme?: "rose" | "blue" | "mixed";
  /** Optional custom container styling */
  className?: string;
  /** Optional interactive layer */
  interactive?: boolean;
}

interface PetalSeed {
  left: number;
  size: number;
  delay: number;
  duration: number;
  spinX: number;
  spinY: number;
  spinZ: number;
  opacity: number;
  petalStyle: 0 | 1 | 2;
  colorType: "rose" | "blue";
}

function seeded(i: number): number {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function CherryBlossomRain({
  windDirection = 0.3,
  windForce = 1,
  intensity = 14,
  speed = 1,
  gustSequence,
  theme = "rose",
  className = "",
  interactive = false,
}: CherryBlossomRainProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const petals = useMemo<PetalSeed[]>(() => {
    const safeIntensity = Math.max(1, Math.min(intensity, 60));
    const safeSpeed = Math.max(speed, 0.2);

    return Array.from({ length: safeIntensity }, (_, i) => {
      const color: "rose" | "blue" =
        theme === "blue" ? "blue" : theme === "rose" ? "rose" : i % 2 === 0 ? "rose" : "blue";

      return {
        left: seeded(i * 7 + 1) * 120 - 10, // -10% to 110%
        size: 9 + seeded(i * 7 + 2) * 14, // 9px to 23px
        delay: seeded(i * 7 + 3) * 8, // staggered up to 8s
        duration: (11 + seeded(i * 7 + 4) * 9) / safeSpeed, // smooth natural fall
        spinX: 180 + seeded(i * 7 + 5) * 360,
        spinY: 90 + seeded(i * 7 + 6) * 270,
        spinZ: 120 + seeded(i * 7 + 7) * 240,
        opacity: 0.35 + seeded(i * 7 + 8) * 0.45,
        petalStyle: (i % 3) as 0 | 1 | 2,
        colorType: color,
      };
    });
  }, [intensity, speed, theme]);

  // Ground puddle resting petals (subtle organic fallen petals at section floor)
  const puddlePetals = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      left: 12 + i * 15 + ((i * 17) % 8),
      size: 11 + (i % 3) * 3,
      rotate: (i * 47) % 180,
      opacity: 0.28 + (i % 3) * 0.12,
      color: theme === "blue" ? "blue" : theme === "rose" ? "rose" : i % 2 === 0 ? "rose" : "blue",
    }));
  }, [theme]);

  if (!mounted || reduce) return null;

  // Dynamic wind gust mechanics: strong diagonal gusts vs mild gentle rainfall
  const isHighGust = Math.abs(windDirection) > 0.4 || windForce > 1.2;
  const drift = windDirection * (isHighGust ? 520 : 160) * Math.max(windForce, 0.4);

  const defaultGusts = isHighGust
    ? [
        0,
        drift * 0.2 + (windDirection > 0 ? 40 : -40),
        drift * 0.5 + (windDirection > 0 ? -20 : 20),
        drift * 0.8 + (windDirection > 0 ? 50 : -50),
        drift,
      ]
    : [0, 20 * windDirection, -15 * windDirection, 25 * windDirection, drift];

  const gusts = gustSequence && gustSequence.length > 0 ? gustSequence : defaultGusts;

  return (
    <div
      aria-hidden="true"
      className={`${interactive ? "" : "pointer-events-none"} absolute inset-0 overflow-hidden ${className}`.trim()}
    >
      {/* Falling Wind-Driven Petals */}
      {petals &&
        petals.length > 0 &&
        petals.map((p, i) => {
          const borderRadius =
            p.petalStyle === 0
              ? "70% 0 70% 60%"
              : p.petalStyle === 1
                ? "60% 40% 70% 30% / 70% 30% 60% 40%"
                : "50% 0 50% 50%";

          const bgClass =
            p.colorType === "blue"
              ? "bg-petal-blue-gradient shadow-blue-glow/20"
              : "bg-petal-gradient shadow-xs";

          return (
            <motion.span
              key={i}
              className={`absolute -top-10 block ${bgClass} select-none`}
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.35,
                borderRadius,
                opacity: p.opacity,
                filter: p.size > 18 ? "blur(0.5px)" : "none",
                willChange: "transform",
              }}
              animate={{
                y: ["0vh", "116vh"],
                x: gusts.map((g, gi) => g + (drift * gi) / Math.max(gusts.length - 1, 1)),
                rotateZ: [0, p.spinZ],
                rotateX: [0, p.spinX],
                rotateY: [0, p.spinY],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

      {/* Settled Petal Puddle Layer (Resting Ground Petals at Section Base) */}
      <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none overflow-hidden">
        {puddlePetals.map((p, i) => (
          <span
            key={`puddle-${i}`}
            className={`absolute bottom-1 block ${
              p.color === "blue"
                ? "bg-petal-blue-gradient shadow-blue-glow/20"
                : "bg-petal-gradient shadow-xs"
            }`}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.3,
              borderRadius: "60% 40% 70% 30% / 70% 30% 60% 40%",
              transform: `rotate(${p.rotate}deg)`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CherryBlossomRain;
