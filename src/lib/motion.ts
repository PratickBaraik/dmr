/**
 * 🔷 GLOBAL MOTION SYSTEM
 * Centralized animation tokens for consistency + type safety
 */

import type { Variants } from "framer-motion";

/**
 * 🎯 Standard cinematic easing (tuple → fixes TS issue)
 */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * 🎯 Slightly sharper easing (for micro interactions)
 */
export const easeSharp: [number, number, number, number] = [0.4, 0, 0.2, 1];

/**
 * 🔷 STAGGER CONTAINER (Enhanced)
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08, // smoother entry
    },
  },
};

/**
 * 🔷 FADE UP (Primary micro animation)
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * 🔷 FADE DOWN (Reverse motion)
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * 🔷 FADE IN (Opacity only → useful for overlays/backgrounds)
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/**
 * 🔷 SCALE IN (Cards, modals, emphasis elements)
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

/**
 * 🔷 BLUR IN (Premium cinematic entry)
 */
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/**
 * 🔷 FLOATING (Subtle ambient motion)
 */
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeSharp,
    },
  },
};
