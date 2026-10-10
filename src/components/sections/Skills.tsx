import { motion } from "framer-motion";
import { ShieldCheck, Layers, Database, Code2 } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, stagger } from "@/lib/animations";
import { skills } from "./data";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { cardBase } from "./common";

// ==========================================
// 2. SKILLS & EXPERTISE GRID (Rose Theme)
// ==========================================
const skillIconMap: Record<string, typeof ShieldCheck> = {
  "qa-testing": ShieldCheck,
  "domain-exp": Layers,
  "data-systems": Database,
  "programming-tools": Code2,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Core Competencies"
      title={
        <>
          Skills & <em className="text-primary not-italic font-serif">Expertise</em>
        </>
      }
      subtitle="A balanced matrix of quality assurance methodologies, industry domains, and technical tooling."
      theme="rose"
      rain={{ windDirection: -0.3, intensity: 7, speed: 0.8 }}
    >
      <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2">
        {skills &&
          skills.length > 0 &&
          skills.map((cat) => {
            const Icon = skillIconMap[cat.id] || ShieldCheck;
            return (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`${cardBase} flex flex-col justify-between`}
              >
                <CardHoverFrame />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-serif text-2xl text-foreground">{cat.title}</h3>
                    </div>
                    {cat.highlight && (
                      <span className="rounded-sm border border-border/80 bg-secondary/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent font-medium">
                        {cat.highlight}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {cat.items &&
                      cat.items.length > 0 &&
                      cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-sm border border-border/80 bg-secondary/80 px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </Section>
  );
}

export default Skills;
