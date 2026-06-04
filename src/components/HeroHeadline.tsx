"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { words: ["South", "LA", "Is", "Not"], em: false },
  { words: ["Emerging."], em: true },
  { words: ["It", "Has", "Already", "Arrived."], em: false },
];

const allWords = lines.flatMap((line) =>
  line.words.map((word) => ({ word, em: line.em }))
);

const wordVariant = {
  hidden: { opacity: 1, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 65, damping: 16, delay: 0.2 + i * 0.07 },
  }),
};

export default function HeroHeadline() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  let wordIndex = 0;

  return (
    <h1 className="hero-headline" style={{ opacity: 1, animation: "none" }}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.words.map((word) => {
            const idx = wordIndex++;
            return line.em ? (
              <motion.em
                key={idx}
                custom={idx}
                variants={wordVariant}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                style={{ display: "inline-block", fontStyle: "italic", paddingBottom: "0.1em", marginBottom: "-0.1em" }}
              >
                {word}
              </motion.em>
            ) : (
              <motion.span
                key={idx}
                custom={idx}
                variants={wordVariant}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                style={{ display: "inline-block", marginRight: "0.26em" }}
              >
                {word}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
