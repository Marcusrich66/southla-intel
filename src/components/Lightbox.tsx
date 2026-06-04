"use client";
import { useState, useEffect } from "react";

export default function Lightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Listen for mobile trigger
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLightbox", handler);
    return () => window.removeEventListener("openLightbox", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className="hero-view-btn"
        onClick={() => setOpen(true)}
        aria-label="View full architectural rendering"
      >
        <span className="btn-pulse" aria-hidden="true" />
        View Full Rendering
      </button>

      <div
        className={`lb-overlay${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Lucas Museum architectural rendering"
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      >
        <div className="lb-inner">
          <button className="lb-close" onClick={() => setOpen(false)}>✕ &nbsp;Close</button>
          <img
            className="lb-img"
            src="https://marcusrichrealty.com/wp-content/uploads/2026/05/New-GL.-Sketch.-Museum-in.png"
            alt="Lucas Museum of Narrative Art — architectural rendering"
          />
          <div className="lb-caption">
            <div>
              <div className="lb-caption-text">The North Anchor · Exposition Park · Opening September 22, 2026</div>
              <div className="lb-caption-sub">Lucas Museum of Narrative Art — Founded by George Lucas &amp; Mellody Hobson · ~$1 Billion · 300,000+ sq ft</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
