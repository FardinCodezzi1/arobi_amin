import { motion } from "framer-motion";
import { Section } from "./Section";
import { fadeUp, stagger } from "@/lib/animations";
import { LOCATION } from "./data";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { cardBase } from "./common";

// ==========================================
// 1. ABOUT ME SECTION (Blue Theme)
// ==========================================
export function About() {
  const highlights = [
    {
      title: "AIUB Computer Science Foundation",
      desc: "Comprehensive academic engineering background with analytical rigor in algorithms, database architectures, and software engineering principles.",
      badge: "B.Sc. CSE",
    },
    {
      title: "Detail & Edge-Case Obsession",
      desc: "Specialized in catching complex boundary conditions, asynchronous UI race conditions, and cross-browser variances before production releases.",
      badge: "Quality First",
    },
    {
      title: "Enterprise Application Validation",
      desc: "Proven hands-on QA execution across live chat systems (SkyChat), statutory VAT engines (SkyVat), and high-volume student portal architectures.",
      badge: "Domain Expertise",
    },
    {
      title: "Collaborative Team Integration",
      desc: "Fast regression cycles, actionable defect reports with clear reproduction steps, and close partnership with developers and product managers.",
      badge: "Execution",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="Professional Background"
      title={
        <>
          Quality, <em className="text-primary not-italic font-serif">quietly</em> obsessed.
        </>
      }
      subtitle="Bridging Computer Science theory and rigorous quality validation to deliver dependable software."
      theme="blue"
      rain={{ windDirection: 0.45, intensity: 9, speed: 0.95 }}
    >
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        {/* Narrative Columns */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-6 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I am a Software QA Engineer based in{" "}
            <span className="text-foreground font-medium">{LOCATION}</span>, holding a Bachelor of
            Science in Computer Science and Engineering from{" "}
            <span className="text-foreground font-medium">
              American International University-Bangladesh (AIUB)
            </span>
            .
          </p>
          <p>
            My mission in software engineering is uncompromising: making applications dependable,
            intuitive, and resilient under pressure. Where most see a feature that "works," I look
            for the edge case that breaks it — the numeric overflow in a VAT calculation, the broken
            flexbox wrap on mobile Safari, or the unexpected state desynchronization during peak
            traffic.
          </p>
          <p>
            Over the past <span className="text-foreground font-medium">3+ years</span>, I have
            validated everything from real-time customer support tools to state-mandated tax
            compliance software and university portal databases, ensuring client teams ship with
            complete confidence.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {[
              "Manual & Functional Testing",
              "Test Case Authoring",
              "Defect Lifecycle Management",
              "Cross-Browser Parity",
              "UI/UX Accessibility",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlight Feature Grid */}
        <motion.div variants={stagger} className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
          {highlights &&
            highlights.length > 0 &&
            highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className={`${cardBase} flex flex-col justify-between`}
              >
                <CardHoverFrame />
                <div>
                  <span className="inline-block rounded-sm bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary uppercase tracking-wider mb-3">
                    {h.badge}
                  </span>
                  <h3 className="font-serif text-xl text-foreground leading-snug">{h.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
