"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Scroll-triggered stagger container. Wrap a group of <AnimatedItem>. */
export function AnimatedSection({
  children,
  className,
  variants = staggerContainer,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered child (fade in from below by default). */
export function AnimatedItem({
  children,
  className,
  variants = fadeInUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
