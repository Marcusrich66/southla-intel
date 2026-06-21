"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublishersLetter() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Fade on scroll (mobile only)
  useEffect(() => {
    const onScroll = () => {
      if (!isMobile) return;
      setScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setScrolling(false), 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const tabOpacity = isMobile ? (scrolling ? 0.4 : 0.85) : 1;

  return (
    <>
      {/* Vertical Tab */}
      <button
        className={`pl-tab${isMobile ? " pl-tab-mobile" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open Publisher's Letter"
        style={{ opacity: tabOpacity, transition: "opacity 0.5s ease, width 0.22s ease" }}
      >
        {isMobile ? (
          <span className="pl-tab-mobile-text">
            <span>PUB.</span>
            <span>LETTER</span>
          </span>
        ) : (
          <span className="pl-tab-text">Publisher&apos;s Letter</span>
        )}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="pl-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.div
              className="pl-modal"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header bar */}
              <div className="pl-header-bar">
                <span className="pl-header-text">
                  South LA Media &nbsp;—&nbsp; Publisher&apos;s Letter &nbsp;—&nbsp; Issue 001 &nbsp;—&nbsp; May 2026
                </span>
              </div>

              {/* Close button */}
              <button className="pl-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>

              <div className="pl-content">
                {/* Byline with headshot */}
                <div className="pl-byline">
                  <div className="pl-byline-left">
                    <div className="pl-byline-name">Marcus Rich</div>
                    <div className="pl-byline-title">Publisher &amp; Founder, South LA Media</div>
                    <div className="pl-byline-date">May 2026</div>
                  </div>
                  <div className="pl-byline-photo-wrap">
                    <img
                      src="https://marcusrichrealty.com/wp-content/uploads/2026/04/Palmtree-DT-HShot.webp"
                      alt="Marcus Rich"
                      className="pl-headshot"
                    />
                  </div>
                </div>

                <div className="pl-gold-rule" />

                {/* Body */}
                <div className="pl-body">
                  <p className="pl-salutation">To Our Readers, Partners, and Community —</p>
                  <p>My name is Marcus Rich. I was born and raised in South Los Angeles. I went to Foshay. I went to Washington High. I&apos;ve lived off 105th and Normandie. I&apos;ve lived near Vermont and 51st. I grew up on these streets, spent time in these community centers, and built my career in this community. I left for a few years — Ohio, San Diego, Berkeley, Oakland — and I came back every time. South LA isn&apos;t a beat I cover — it&apos;s the ground beneath my feet.</p>
                  <p>South LA Media exists because this moment demands a publication equal to it.</p>
                  <p>What is happening right now in South Los Angeles is the biggest transformation this community has seen in my lifetime. The Lucas Museum of Narrative Art. SoFi Stadium. The Intuit Dome. The Jordan Downs redevelopment. The Stocker Street Creative campus rising in Baldwin Hills. Sankofa Park along the Crenshaw Corridor. The K Line connecting communities from Expo to LAX.</p>
                  <p>But the story is bigger than any single project.</p>
                  <p>This is not one story. It is multiple things hitting the same neighborhood at the same time — and they are all connected — culture, transit, housing, entertainment, institutional investment, and global events all arriving in South Los Angeles within the same historic window.</p>
                  <p>All of it needs context. These projects need analysis. This community deserves intelligence — not headlines, not hype, but clear, grounded insight into what is being built, who is building it, where capital is flowing, and what it means for the people who have always called South LA home.</p>
                  <p>That is what South LA Media delivers.</p>
                  <p>We are a publication built for this community — close to the ground, research-driven, and community-first.</p>
                  <p>Our inaugural publication, the 2026 South LA Growth &amp; Development Brief, documents more than 35 active projects across South Los Angeles. It is not a report about potential. It is a record of what is already underway.</p>
                  <p>Issue by issue, story by story, South LA Media will track development projects, capital flows, zoning changes, transit investments, business activity, and cultural transformation across the South LA Golden Corridor.</p>
                  <p>We track projects by address, not by headline.</p>
                  <p>Our mission is simple: translate complex information into clear, actionable insight for homeowners, investors, entrepreneurs, policymakers, and residents. We believe the people who understand what is happening today will be in the best position to shape what comes next.</p>
                  <p>We&apos;re not watching this from the outside. We&apos;re in it. And we are here to help ensure that as this community changes, the people who stayed, invested, built, and believed in South LA are equipped with the knowledge to benefit from its future.</p>
                  <p className="pl-closing-lines">Stay here. Stay informed. Build.<br />The world is coming to South LA.<br />We are already here to meet it.</p>
                  <p className="pl-welcome">Welcome to South LA Media.</p>
                  <div className="pl-gold-rule pl-rule-center" />
                  <p className="pl-tagline">Planted Deep. Growing Still.</p>
                </div>

                {/* Signature */}
                <div className="pl-signature">
                  <div className="pl-sig-name">Marcus Rich</div>
                  <div className="pl-sig-title">Publisher &amp; Founder, South LA Media</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
