"use client";

export default function RenderingButton() {
  return (
    <button
      className="hero-view-btn-mobile"
      onClick={() => window.dispatchEvent(new CustomEvent("openLightbox"))}
      aria-label="View full architectural rendering"
    >
      <span className="btn-pulse" aria-hidden="true" />
      View Full Rendering
    </button>
  );
}
