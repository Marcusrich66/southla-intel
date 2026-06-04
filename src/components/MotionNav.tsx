"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#developments", label: "All Developments" },
  { href: "#authority", label: "The Brief" },
  { href: "#adu", label: "ADU Strategy" },
  { href: "#community-capital", label: "PCR Business Finance" },
  { href: "#faq", label: "FAQ" },
];

export default function MotionNav() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -6, opacity: 1 }}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -6, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
      >
        <div className="nav-logo">Marcus Rich<span> Realty</span></div>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="tel:3234818546" className="nav-cta">323.481.8546</a>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="nav-mobile-link"
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
