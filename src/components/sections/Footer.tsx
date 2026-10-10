import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// ==========================================
// 9. FOOTER (Harmonized Duo Theme)
// ==========================================
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-background/95 px-6 py-12 text-sm text-muted-foreground backdrop-blur-md relative overflow-hidden">
      {/* Subtle dual ambient glow */}
      <div className="pointer-events-none absolute -bottom-10 left-1/4 h-32 w-80 rounded-full bg-petal/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-32 w-80 rounded-full bg-sapphire/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-serif text-lg text-foreground">
            Arobi <em className="text-primary not-italic font-serif">Amin</em>
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Software QA Engineer · American International University-Bangladesh (AIUB)
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <span>·</span>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <span>·</span>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </a>
          <span>·</span>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <span>·</span>
          <a href="#gallery" className="hover:text-foreground transition-colors">
            Gallery
          </a>
          <span>·</span>
          <a href="#education" className="hover:text-foreground transition-colors">
            Education
          </a>
          <span>·</span>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-6xl border-t border-border/50 pt-6 text-center text-xs text-muted-foreground/80 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} Arobi Amin. Crafted with precision & cinematic motion.
        </span>
        <span className="flex items-center gap-1.5 text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Quality Assurance & Engineering</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
