import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/lib/animations";
import { education } from "./data";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { cardBase } from "./common";

// ==========================================
// 7. EDUCATION SECTION (Blue Theme)
// ==========================================
export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Foundation"
      title={
        <>
          Where it all <em className="text-primary not-italic font-serif">began</em>
        </>
      }
      subtitle="Rigorous engineering curriculum, software testing specialization, and undergraduate capstone research."
      theme="blue"
      rain={{ windDirection: 0.35, intensity: 6, speed: 0.8 }}
    >
      <motion.div variants={fadeUp} className={cardBase}>
        <CardHoverFrame />
        <div className="space-y-8 relative z-10">
          {/* Main Degree Heading */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/60 pb-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs uppercase tracking-wider text-accent font-medium">
                  Undergraduate Degree
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-0.5">
                  {education.degree}
                </h3>
                <p className="text-base text-foreground/90 font-medium mt-1">
                  {education.institution}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{education.location}</span>
                </p>
              </div>
            </div>

            <div className="rounded-md border border-border bg-secondary/60 p-4 text-left md:text-right shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Graduation</p>
              <p className="font-serif text-2xl text-foreground">{education.period}</p>
              {/* <p className="text-sm font-semibold text-accent mt-1">CGPA: {education.cgpa}</p> */}
            </div>
          </div>

          {/* Thesis Showcase */}
          <div>
            <span className="text-xs uppercase tracking-wider text-accent font-medium">
              Capstone Thesis & Research:
            </span>
            <p className="font-serif text-xl text-foreground mt-1">{education.thesis}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Researched real-time telemetry sensor architectures tracking agricultural water pH,
              temperature, and environmental indices with automated wireless broadcasting.
            </p>
          </div>

          {/* Coursework Matrix */}
          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-3">
              Relevant Academic Coursework:
            </span>
            <div className="flex flex-wrap gap-2">
              {education.coursework &&
                education.coursework.length > 0 &&
                education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-sm border border-border bg-secondary/80 px-2.5 py-1 text-xs text-foreground/90 font-medium"
                  >
                    {course}
                  </span>
                ))}
            </div>
          </div>

          {/* Extracurriculars */}
          <div className="pt-2 border-t border-border/60">
            <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-2">
              Extracurricular Leadership & Clubs:
            </span>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
              {education.activities &&
                education.activities.length > 0 &&
                education.activities.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default Education;
