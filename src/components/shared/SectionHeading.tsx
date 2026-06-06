"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  center = false,
  className,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(center ? "text-center" : "text-start", className)}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-2 text-[clamp(26px,3.6vw,34px)] font-bold text-text-heading">
        {title}
      </h2>
    </motion.div>
  );
}
