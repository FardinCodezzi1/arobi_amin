import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { IntroReveal } from "@/components/hero/IntroReveal";
import { Hero } from "@/components/hero/Hero";
import {
  About,
  Skills,
  Experience,
  Projects,
  Hobbies,
  Gallery,
  Education,
  Contact,
  Footer,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arobi Amin | SQA Engineer" },
      {
        name: "description",
        content:
          "Professional portfolio of Arobi Amin, Software QA Engineer based in Dhaka, Bangladesh. 3+ years in manual & functional testing, test case authoring, cross-browser validation, and enterprise systems.",
      },
      { property: "og:title", content: "Arobi Amin | SQA Engineer" },
      {
        property: "og:description",
        content:
          "3+ years making software trustworthy — manual testing, test case design, cross-browser validation, and enterprise web reliability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const reduce = useReducedMotion();
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    if (reduce) {
      setIntro(false);
      return;
    }
    // Fluid intro reveal sequence
    const timer = setTimeout(() => setIntro(false), 2900);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Intro Reveal Animation (Active Cherry Blossom Rain + Breathing typography) */}
      <AnimatePresence>
        {intro && <IntroReveal key="intro" onSkip={() => setIntro(false)} />}
      </AnimatePresence>

      {/* Cinematic Sticky Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative overflow-hidden">
        <Hero revealed={!intro} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Gallery />
        <Education />
        <Contact />
      </main>

      {/* Complete Footer */}
      <Footer />
    </div>
  );
}

export default Index;
