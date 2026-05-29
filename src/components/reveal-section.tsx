"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealSectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  delay?: number;
  as?: "section" | "div";
};

export function RevealSection({ children, className, delay = 0, as = "section", ...props }: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = as === "div" ? motion.div : motion.section;

  return (
    <MotionTag
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}>
      {children}
    </MotionTag>
  );
}
