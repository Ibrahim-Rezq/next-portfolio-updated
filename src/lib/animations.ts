import type { Variants } from "framer-motion";

/** Fade in from below — section headings, hero elements, project cards. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the inline-start — timeline cards. */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger children — grids, skill pills, hero stack. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/** A faster stagger for dense rows of small items (tags, pills). */
export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

/** Standard scroll-trigger viewport config — play once, a touch early. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
