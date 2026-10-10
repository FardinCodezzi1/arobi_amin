# Arobi Amin — Cinematic Portfolio Hero

## What you'll get

A single home page with a cinematic intro that flows into a polished hero section for Arobi Amin, Software QA Engineer.

### 1. Intro: "The Petal Reveal" (about 3 seconds)

- Dark, minimal backdrop with "Hi, I'm Arobi Amin" centered in an elegant serif.
- 12–16 soft gradient petals drift around the text, then swirl, expand and rotate outward.
- The intro fades away, the hero appears, and 6 petals settle into a slow orbit around the profile photo.
- A "Skip" link, and a reduced-motion setting that skips the swirl.

### 2. Hero layout

- **Left:** greeting and name, "Software QA Engineer" with a pulsing badge reading "Quality Assurance & Automation", a short line about 3+ years in manual testing, web app checks and enterprise systems, plus two buttons: "Explore Projects" (scrolls to a short projects placeholder) and "Get in Touch".
- **Right:** portrait in a softly glowing frame with orbiting petals, plus a floating pill: "Based in Dhaka, Bangladesh · Available for opportunities".
- Stacks into one column on phones.

### 3. Visual direction

- Deep ink background, warm blush/rose petals with a muted gold accent. Serif headings (Instrument Serif) and a clean sans for body text (Work Sans).
- Corners use only small and medium rounding, as the brief asks.

## Notes

- Next.js isn't available on this platform. The same result is built on the project's existing React setup with Framer Motion, lucide icons and Tailwind v4, and all motion settings are typed.
- No photo was provided, so I'll generate a placeholder portrait. You can swap in a real photo later.
- "Download Resume" is left out until you provide a resume file.

## Technical details

- Files: `src/routes/index.tsx` (with its own head/SEO), `src/components/hero/{IntroReveal,Hero,Petal,OrbitPetals}.tsx`, design tokens in `src/styles.css`, fonts linked in `__root.tsx`, portrait at `src/assets/arobi-portrait.jpg`.
- `bun add framer-motion`. Intro state handled with `AnimatePresence`, typed `Variants`, spring transitions and `useReducedMotion`.
