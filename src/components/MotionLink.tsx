"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface Props {
  href: string;
  className?: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export default function MotionLink({ href, className, style, target, rel, children }: Props) {
  return (
    <motion.a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
