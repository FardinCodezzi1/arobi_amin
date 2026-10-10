import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Globe, ExternalLink, MapPin } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/lib/animations";
import { EMAIL, LINKEDIN, LOCATION, WORLD_MAP_PATH } from "./data";
import { LinkedinIcon } from "@/components/ui/Icons";
import { CardHoverFrame } from "@/components/ui/CardHoverFrame";
import { Button } from "@/components/ui/button";
import { cardBase } from "./common";

// ==========================================
// 8. CONTACT & LOCATION SECTION (No Active Form - Interactive World Map)
// ==========================================
export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <Section
      id="contact"
      eyebrow="Location & Contact"
      title={
        <>
          Let's connect & <em className="text-primary not-italic font-serif">collaborate</em>.
        </>
      }
      subtitle="Currently based in Dhaka, Bangladesh and open for global remote roles and full-time Software QA Engineer opportunities."
      theme="blue"
      rain={{ windDirection: 0.5, intensity: 10, speed: 0.9 }}
    >
      <div className="overflow-hidden rounded-md border border-border/80 bg-card/75 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2">
          {/* Left Column: Direct Contact & Availability Details */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/90 px-3 py-1 text-xs text-accent font-medium mb-4 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-foreground">Arobi Amin</h3>
            <p className="text-sm font-medium text-primary mt-1">
              Software QA Engineer · {LOCATION}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
              Open for full-time Software Quality Assurance roles, automated & manual testing
              initiatives, and enterprise web platform validation. Reach me directly — no form, no
              waiting.
            </p>

            {/* Direct Social / Email List */}
            <ul className="mt-8 space-y-3.5">
              {/* Email Card */}
              <li>
                <div className="group relative overflow-hidden flex items-center justify-between rounded-md border border-border bg-secondary/60 p-3.5 transition-colors hover:border-primary/50">
                  <CardHoverFrame corner="bottom-left" compact />
                  <div className="relative z-10 flex items-center gap-3 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-muted-foreground">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="block truncate text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="relative z-30 pointer-events-auto flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-accent" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </li>

              {/* LinkedIn Card */}
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-between rounded-md border border-border bg-secondary/60 p-3.5 transition-colors hover:border-primary/50"
                >
                  <CardHoverFrame corner="bottom-left" compact />
                  <div className="relative z-10 flex items-center gap-3 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 text-primary">
                      <LinkedinIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-muted-foreground">
                        Professional Network
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        linkedin.com/in/arobi-amin
                      </span>
                    </div>
                  </div>

                  <ExternalLink className="relative z-30 pointer-events-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mr-1" />
                </a>
              </li>

              {/* Location Card */}
              <li>
                <div className="group relative overflow-hidden flex items-center gap-3 rounded-md border border-border bg-secondary/40 p-3.5 transition-colors hover:border-primary/50">
                  <CardHoverFrame corner="bottom-left" compact />
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-card text-accent">
                    <Globe className="h-4 w-4" />
                  </span>
                  <div className="relative z-10">
                    <span className="block text-xs font-medium text-muted-foreground">
                      Base Location & Timezone
                    </span>
                    <span className="block text-sm font-medium text-foreground">
                      Dhaka, Bangladesh · GMT+6
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: World Map Component from Reference Project */}
          <motion.div
            variants={fadeUp}
            className="relative min-h-[320px] border-t border-border/60 bg-background/50 lg:min-h-full lg:border-t-0 lg:border-l"
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <div className="relative w-full" style={{ aspectRatio: "2000 / 857" }}>
                {/* World SVG Map */}
                <img
                  src={WORLD_MAP_PATH}
                  alt="World map showing base location in Dhaka, Bangladesh"
                  className="absolute inset-0 h-full w-full object-fill opacity-80 filter brightness-90 contrast-125"
                  loading="lazy"
                />

                {/*
                  Dhaka Coordinates on Equirectangular projection (2000×857):
                  x = (90.4 + 180)/360 * 100 ≈ 75.1%
                  y = (90 - 23.8)/180 * 100 ≈ 36.8%
                */}
                <div
                  className="absolute z-10 -translate-x-1/2 -translate-y-full"
                  style={{ left: "75.1%", top: "36.8%" }}
                >
                  <div className="mb-1 rounded-sm border border-primary/40 bg-card px-2.5 py-1 text-[10px] whitespace-nowrap text-foreground shadow-md sm:text-xs flex items-center gap-1.5 font-medium">
                    <MapPin className="h-3 w-3 text-primary shrink-0" />
                    <span>Dhaka · I'm here</span>
                  </div>
                  <div className="mx-auto h-6 w-px bg-linear-to-b from-primary to-transparent" />
                  <span className="relative mx-auto flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-glow" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// ==========================================
// STORED CONTACT FORM COMPONENT (Safely preserved in codebase)
// ==========================================
export function StoredContactForm() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`,
    );
    const mailBody = encodeURIComponent(
      `Hello Arobi,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-sm border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={onSubmit} className={`${cardBase} space-y-4`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Your Name *
          </label>
          <input
            required
            placeholder="e.g. Sarah Jenkins"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Your Email *
          </label>
          <input
            type="email"
            required
            placeholder="e.g. sarah@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
        <input
          placeholder="e.g. Software QA Engineer Role Inquiry"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Share details regarding your team, the product, or your QA requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
        />
      </div>
      <Button type="submit" size="lg">
        <span>{sent ? "Opening Mail Client…" : "Send Message"}</span>
      </Button>
    </form>
  );
}

export default Contact;
