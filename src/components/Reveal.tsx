"use client";
import { useRef, useState, useEffect, ReactNode, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 1, y: 28 }}
      animate={mounted && inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 28 }}
      transition={{ type: "spring", stiffness: 55, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}
