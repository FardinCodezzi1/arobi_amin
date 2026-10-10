import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/lib/animations";
import { jobs } from "./data";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { cardBase } from "./common";

// ==========================================
// 3. EXPERIENCE / CAREER TIMELINE (Blue Theme)
// ==========================================
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career History"
      title={
        <>
          Experience & <em className="text-primary not-italic font-serif">Timeline</em>
        </>
      }
      subtitle="Hands-on software quality engineering across industry deployments and academic operations."
      theme="blue"
      rain={{ windDirection: -0.75, windForce: 1.8, intensity: 14, speed: 1.15 }}
    >
      <TracingBeam>
        <div className="relative border-l border-border/80 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {jobs &&
            jobs.length > 0 &&
            jobs.map((job) => (
              <motion.div key={job.id} variants={fadeUp} className="relative">
                {/* Timeline Indicator Node */}
                <span className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-card shadow-xs text-primary">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>

                <div className={cardBase}>
                  <CardHoverFrame />
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-widest text-accent">
                        {job.badge}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-0.5">
                        {job.role}
                        <span className="text-primary not-italic font-serif"> @ {job.org}</span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/80 rounded-sm px-2.5 py-1">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      <span>{job.period}</span>
                      <span>·</span>
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>{job.place}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-foreground/90 font-medium mb-4 leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Key Bullet Achievements */}
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {job.points &&
                      job.points.length > 0 &&
                      job.points.map((pt, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                  </ul>

                  {/* Verified Systems / Client Portals */}
                  {job.verifiedApps && job.verifiedApps.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-border/60">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                        Core Systems & Applications Validated:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.verifiedApps.map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center gap-1.5 rounded-sm border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary font-medium"
                          >
                            <CheckCircle2 className="h-3 w-3 shrink-0" />
                            <span>{app}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Competency Tags */}
                  {job.tags && job.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border border-border/70 bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </TracingBeam>
    </Section>
  );
}

export default Experience;
