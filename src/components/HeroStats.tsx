"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  prefix?: string;
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
}

const stats: Stat[] = [
  { prefix: "$", value: 5, suffix: "B+", label: "Total Corridor Investment" },
  { value: 35, suffix: "+", label: "Major Developments" },
  { value: 11, label: "South LA Micro-Markets" },
  { display: "Sept '26", label: "Lucas Museum Opens" },
  { prefix: "$", value: 1, suffix: "B", label: "Jordan Downs Redevelopment" },
];

function CountUp({ target, prefix = "", suffix = "", inView }: { target: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    setCount(0);
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <>{prefix}{count}{suffix}</>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 1, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 18 } },
};

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <motion.div
      ref={ref}
      className="hero-stats"
      style={{ opacity: 1, animation: "none" }}
      variants={containerVariants}
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
    >
      {stats.map((stat, i) => (
        <motion.div key={i} className="stat-item" variants={itemVariants}>
          <div className="stat-number">
            {stat.display ? (
              stat.display
            ) : (
              <CountUp target={stat.value!} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
            )}
          </div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
