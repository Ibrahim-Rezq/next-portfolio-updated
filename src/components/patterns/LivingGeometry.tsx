"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* Girih-style motifs in a 200×200 box, centered at (100,100). */
const OCTAGRAM_OUTER =
  "M100 10 L163.6 163.6 L10 100 L163.6 36.4 L100 190 L36.4 36.4 L190 100 L36.4 163.6 Z";
const DIAMOND = "M100 8 L192 100 L100 192 L8 100 Z";
const OCTAGRAM_INNER =
  "M100 46 L138.2 138.2 L46 100 L138.2 61.8 L100 154 L61.8 61.8 L154 100 L61.8 138.2 Z";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const draw = (delay: number): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.6, ease: EASE, delay },
      opacity: { duration: 0.4, delay },
    },
  },
});

/**
 * The "spark": an eight-pointed-star girih motif that self-draws on mount and
 * subtly follows the cursor. Falls back to a static figure under reduced motion.
 */
export function LivingGeometry({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20 });
  const sy = useSpring(py, { stiffness: 120, damping: 20 });
  const tx = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const ty = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  const common = {
    fill: "none",
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden
      className={cn("pointer-events-auto select-none", className)}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full overflow-visible"
        style={{ x: reduce ? 0 : tx, y: reduce ? 0 : ty, opacity: 0.55 }}
        initial={reduce ? false : "hidden"}
        animate="visible"
      >
        <motion.path
          d={OCTAGRAM_OUTER}
          stroke="var(--gold-500)"
          strokeWidth={1.4}
          variants={reduce ? undefined : draw(0)}
          {...common}
        />
        <motion.path
          d={DIAMOND}
          stroke="var(--teal-500)"
          strokeWidth={1.2}
          variants={reduce ? undefined : draw(0.25)}
          {...common}
        />
        <motion.path
          d={OCTAGRAM_INNER}
          stroke="var(--gold-300)"
          strokeWidth={1.2}
          variants={reduce ? undefined : draw(0.5)}
          {...common}
        />
        <motion.circle
          cx={100}
          cy={100}
          r={6}
          fill="var(--gold-500)"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: EASE }}
          style={{ transformOrigin: "100px 100px" }}
        />
      </motion.svg>
    </div>
  );
}
