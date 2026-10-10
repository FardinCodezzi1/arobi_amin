"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Menu,
  X,
  ArrowUpRight,
  User,
  Sparkles,
  Briefcase,
  Layers,
  Heart,
  Camera,
  GraduationCap,
  ArrowUp,
} from "lucide-react";
import { EMAIL, LINKEDIN } from "@/components/sections/data";
import { LinkedinIcon } from "@/components/ui/Icons";
import { ButtonBorderPuddles } from "@/components/ui/ButtonBorderPuddles";
import { cn } from "@/lib/utils";

const navSections = [
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "skills", label: "Skills", href: "#skills", icon: Sparkles },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "projects", label: "Projects", href: "#projects", icon: Layers },
  { id: "hobbies", label: "Hobbies", href: "#hobbies", icon: Heart },
  { id: "gallery", label: "Gallery", href: "#gallery", icon: Camera },
  { id: "education", label: "Education", href: "#education", icon: GraduationCap },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      const heroHeight = heroEl?.offsetHeight || 650;
      const scrollY = window.scrollY;
      // When scroll moves past 70% of hero height, transition to floating vertical dock
      setIsPastHero(scrollY > heroHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to determine current active section
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0,
    });

    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. TOP CINEMATIC HEADER (Visible while viewing Hero)      */}
      {/* ========================================================= */}
      <AnimatePresence>
        {!isPastHero && (
          <motion.header
            key="top-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-all"
          >
            {/* Ambient petal puddle glow along bottom border */}
            <div
              className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
              aria-hidden="true"
            />

            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
              {/* Brand Logo with Ambient Cherry Blossom Puddle Accent */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-2.5"
              >
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inset-0 rounded-full rounded-br-none rouded-bl-none rounded-tl-none bg-primary/20 blur-xs transition-colors group-hover:bg-primary/35" />
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(244,114,182,0.85)] transition-transform duration-300 group-hover:rotate-12"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2C13.5 4 14.5 6 14.5 8C14.5 9.5 13.5 10.5 12 11C10.5 10.5 9.5 9.5 9.5 8C9.5 6 10.5 4 12 2Z"
                      opacity="0.95"
                    />
                    <path
                      d="M22 12C20 13.5 18 14.5 16 14.5C14.5 14.5 13.5 13.5 13 12C13.5 10.5 14.5 9.5 16 9.5C18 9.5 20 10.5 22 12Z"
                      opacity="0.9"
                    />
                    <path
                      d="M18 20C16.5 19 15 17.5 14.5 16C15 14.5 16 13.5 17.5 13.5C19 13.5 20.5 14.5 21 16C20.5 18 19.5 19.5 18 20Z"
                      opacity="0.85"
                    />
                    <path
                      d="M6 20C4.5 19 3.5 17.5 3 16C3.5 14.5 5 13.5 6.5 13.5C8 13.5 9 14.5 9.5 16C9 17.5 7.5 19 6 20Z"
                      opacity="0.85"
                    />
                    <path
                      d="M2 12C4 10.5 6 9.5 8 9.5C9.5 9.5 10.5 10.5 11 12C10.5 13.5 9.5 14.5 8 14.5C6 14.5 4 13.5 2 12Z"
                      opacity="0.9"
                    />
                    <circle cx="12" cy="12" r="2.2" fill="var(--color-accent, #ec4899)" />
                  </svg>
                </div>

                <span className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                  Arobi <em className="text-primary not-italic font-serif">Amin</em>
                </span>
                <span className="hidden sm:inline-block rounded-sm border border-border bg-secondary/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-accent">
                  SQA
                </span>
              </a>

              {/* Desktop Horizontal Nav Links with Puddle Dewdrop Highlights */}
              <nav className="hidden lg:flex items-center gap-1.5">
                {navSections.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="group relative rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    {/* Subtle puddle dewdrop indicator on hover */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-primary/80 shadow-[0_0_6px_rgba(244,114,182,0.8)] transition-all duration-300 group-hover:w-3/4" />
                  </a>
                ))}
              </nav>

              {/* Top CTA & Social Icons */}
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>

                {/* Hire Me CTA with Outer Border Puddle Bloom */}
                <div className="relative group inline-flex overflow-visible">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="relative overflow-visible inline-flex items-center gap-2 rounded-md rounded-tl-none rounded-br-none bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Hire Me</span>
                  </a>
                  <ButtonBorderPuddles size="sm" />
                </div>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card/80 text-foreground lg:hidden cursor-pointer"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Dropdown Menu Drawer */}
            {mobileOpen && (
              <div className="border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl lg:hidden">
                <nav className="flex flex-col space-y-2">
                  {navSections.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        scrollToSection(link.id);
                      }}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <link.icon className="h-4 w-4 text-primary" />
                        <span>{link.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-xs font-medium text-primary-foreground shadow-glow"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Get in Touch</span>
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </motion.header>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2. FLOATING RIGHT VERTICAL MENU (Activates after Hero)     */}
      {/* Borderless, weightless floating capsules with outer       */}
      {/* border puddle blooms and active section tracking.         */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isPastHero && (
          <motion.aside
            key="floating-right-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            aria-label="Floating section navigation"
            className="fixed right-2.5 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
          >
            {/* Quick Return-To-Top Petal Button */}
            <div className="relative group inline-flex overflow-visible mb-1">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                title="Back to Hero / Top"
                aria-label="Back to Hero"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-background/70 hover:bg-background/95 text-muted-foreground hover:text-primary backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-200 cursor-pointer hover:scale-105"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <ButtonBorderPuddles size="sm" />
            </div>

            {/* Vertical Stack of Floating Section Capsules */}
            {navSections.map((item, index) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  className="relative group inline-flex overflow-visible"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    title={item.label}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full rounded-br-none rouded-bl-none rounded-tl-none py-1.5 px-3 text-xs font-medium cursor-pointer transition-all duration-300",
                      "bg-background/70 hover:bg-background/95 backdrop-blur-md shadow-md shadow-black/15",
                      isActive
                        ? "bg-primary/25 text-primary font-semibold shadow-glow"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {/* Section Icon */}
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 transition-colors",
                        isActive
                          ? "text-primary drop-shadow-[0_0_6px_rgba(244,114,182,0.85)]"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    />

                    {/* Section Label (Responsive: compact on mobile, full text on sm+) */}
                    <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider font-mono">
                      {item.label}
                    </span>

                    {/* Active Cherry Blossom Petal Indicator Beacon */}
                    {isActive && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                    )}
                  </a>

                  {/* Outer Border Puddle Hover Bloom Animation */}
                  <ButtonBorderPuddles size="sm" />
                </motion.div>
              );
            })}

            {/* Quick Floating Email CTA Button */}
            <div className="relative group inline-flex overflow-visible mt-1">
              <a
                href={`mailto:${EMAIL}`}
                title="Hire Me / Send Email"
                aria-label="Email Arobi Amin"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 transition-all duration-200 cursor-pointer hover:scale-105"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
              <ButtonBorderPuddles size="sm" />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
