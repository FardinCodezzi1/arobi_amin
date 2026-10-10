import { motion } from "framer-motion";
import { BookOpen, Cpu, Palette, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, stagger } from "@/lib/animations";
import { hobbies } from "./data";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { cardBase } from "./common";

// ==========================================
// 5. HOBBIES & PERSONAL INTERESTS (Blue Theme)
// ==========================================
const hobbyIconMap: Record<string, typeof BookOpen> = {
  reading: BookOpen,
  "tech-exploration": Cpu,
  "creative-pursuits": Palette,
  volunteering: HeartHandshake,
};

export function Hobbies() {
  return (
    <Section
      id="hobbies"
      eyebrow="Beyond The Screen"
      title={
        <>
          Hobbies & <em className="text-primary not-italic font-serif">Interests</em>
        </>
      }
      subtitle="Personal pursuits, continuous learning, and active university community involvement."
      theme="blue"
      rain={{ windDirection: 0.25, intensity: 9, speed: 0.75 }}
    >
      <motion.div variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies &&
          hobbies.length > 0 &&
          hobbies.map((h) => {
            const Icon = hobbyIconMap[h.id] || BookOpen;
            return (
              <motion.div
                key={h.id}
                variants={fadeUp}
                whileHover={{ y: -4, rotate: -0.5 }}
                className={`${cardBase} flex flex-col justify-between`}
              >
                <CardHoverFrame />
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                    {h.category}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground mt-1">{h.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {h.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </Section>
  );
}

export default Hobbies;
