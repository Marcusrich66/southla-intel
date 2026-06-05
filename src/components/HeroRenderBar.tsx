"use client";

export default function HeroRenderBar() {
  return (
    <button
      className="hero-render-bar"
      onClick={() => window.dispatchEvent(new CustomEvent("openLightbox"))}
    >
      👁 &nbsp; TAP TO VIEW FULL RENDERING &nbsp; →
    </button>
  );
}
