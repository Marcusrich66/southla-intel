"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      {
        threshold: isMobile ? 0.04 : 0.1,
        rootMargin: isMobile ? "0px 0px -40px 0px" : "0px",
      }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    // Force-show all after 2.5s as a fallback
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
