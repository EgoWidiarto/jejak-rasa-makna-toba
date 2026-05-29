"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealSectionProps = {
  children: ReactNode;
  delay?: number;
  as?: "section" | "div";
  id?: string;
  className?: string;
  "aria-label"?: string;
};

export function RevealSection({ children, className, delay = 0, as = "section", ...props }: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const sharedMotionProps = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 as const },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
    className,
  };

  if (as === "div") {
    return (
      <motion.div {...sharedMotionProps} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.section {...sharedMotionProps} {...props}>
      {children}
    </motion.section>
  );
}
