"use client";

export default function HeroRenderBar() {
  return (
    <button
      className="hero-render-bar"
      onClick={() => window.dispatchEvent(new CustomEvent("openLightbox"))}
    >
      👁 &nbsp; VIEW THE LUCAS MUSEUM RENDERING &nbsp; →
    </button>
  );
}
