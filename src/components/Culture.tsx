"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 18 } },
};

interface CardProps {
  children: React.ReactNode;
  index?: number;
  openCard?: number | null;
  setOpenCard?: (i: number | null) => void;
}

function CultureCard({ children, index = 0, openCard = null, setOpenCard }: CardProps) {
  const isOpen = openCard === index;
  const childArray = React.Children.toArray(children);
  const headerChildren = childArray.slice(0, 3);
  const bodyChildren = childArray.slice(3);

  function toggle() {
    if (setOpenCard) setOpenCard(isOpen ? null : index);
  }

  return (
    <motion.div className={`dev-card${isOpen ? " dev-card--open" : ""}`} variants={cardVariants}>
      <button className="dev-card-header" onClick={toggle} aria-expanded={isOpen}>
        <div className="dev-card-header-content">{headerChildren}</div>
        <span className={`dev-card-chevron${isOpen ? " dev-card-chevron--open" : ""}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="dev-card-collapse" style={{ maxHeight: isOpen ? "1000px" : "0" }}>
        <div className="dev-card-collapse-inner">{bodyChildren}</div>
      </div>
    </motion.div>
  );
}

CultureCard.displayName = "CultureCard";

interface CardsProps {
  children: React.ReactNode;
  openCard: number | null;
  setOpenCard: (i: number | null) => void;
}

function CultureCards({ children, openCard, setOpenCard }: CardsProps) {
  let cardIndex = 0;
  const enhanced = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (child.type as React.FC).displayName === "CultureCard") {
      const idx = cardIndex++;
      return React.cloneElement(child as React.ReactElement<CardProps>, { index: idx, openCard, setOpenCard });
    }
    return child;
  });
  return (
    <motion.div className="dev-cards" variants={containerVariants} initial="hidden" animate="visible">
      {enhanced}
    </motion.div>
  );
}

export default function Culture() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="culture">
      <div className="container">

        {/* Section header */}
        <div className="culture-header">
          <Reveal>
            <div className="section-tag">South LA Culture</div>
            <h2 className="section-headline">The Culture<br />That&apos;s Already Here.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-body">Six venues, programs, and businesses rooted in South LA&apos;s identity — some for decades — still operating at the center of the corridor being remapped.</p>
          </Reveal>
        </div>

        {/* ── FEATURED: SOUTH LA CAFÉ ─────────────────────────── */}
        <Reveal>
          <div className="culture-feature">
            <div className="culture-feature-main">
              <div className="culture-feature-kicker">Featured · South LA Original</div>
              <h3 className="culture-feature-name">South LA Café</h3>
              <div className="culture-feature-meta">1700 Browning Blvd, South Central &nbsp;·&nbsp; Joe &amp; Celia Ward-Wallace, Founders &nbsp;·&nbsp; Opened December 2019</div>
              <p className="culture-feature-body">Joe Ward-Wallace grew up in South LA. In December 2019, he and his wife Celia opened South LA Café on Browning Boulevard — a Black-owned coffee shop, market, and gathering place in the neighborhood where he was raised. The name was deliberate. So was the location.</p>
              <p className="culture-feature-body">Five years in: two locations, a nonprofit arm (the SLAC Foundation), a weekly Grocery Giveaway program, a hospitality partnership with the LA Philharmonic and Hollywood Bowl, and a 10-year contract operating food and hospitality at the Natural History Museum of Los Angeles through SLAC Hospitality. A café that became a platform.</p>
              <p className="culture-feature-signal">The second location is at Kaiser Baldwin Hills Crenshaw — the hospital that serves this community. The Natural History Museum contract places South LA Café inside one of the most visited cultural institutions in Los Angeles. This is what South LA building for South LA looks like.</p>
            </div>
            <div className="culture-feature-aside">
              <div className="culture-feature-stat">
                <div className="culture-feature-stat-label">Founded</div>
                <div className="culture-feature-stat-value">December 2019</div>
              </div>
              <div className="culture-feature-stat">
                <div className="culture-feature-stat-label">Locations</div>
                <div className="culture-feature-stat-value">Browning Blvd · Kaiser Baldwin Hills Crenshaw</div>
              </div>
              <div className="culture-feature-stat">
                <div className="culture-feature-stat-label">Nonprofit</div>
                <div className="culture-feature-stat-value">SLAC Foundation · Weekly Grocery Giveaway</div>
              </div>
              <div className="culture-feature-stat">
                <div className="culture-feature-stat-label">Hospitality</div>
                <div className="culture-feature-stat-value">10-Year Contract · Natural History Museum</div>
              </div>
              <div className="culture-feature-stat">
                <div className="culture-feature-stat-label">Partners</div>
                <div className="culture-feature-stat-value">LA Philharmonic · Hollywood Bowl</div>
              </div>
              <div className="culture-feature-stat">
                <a href="https://www.southlacafe.com/" target="_blank" rel="noopener noreferrer" className="culture-feature-link">southlacafe.com →</a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── FIVE ACCORDION CARDS ────────────────────────────── */}
        <CultureCards openCard={openCard} setOpenCard={setOpenCard}>

          <CultureCard>
            <div className="dev-card-status s-active">Community-Owned · Four Locations</div>
            <div className="dev-card-title">Hilltop Coffee + Kitchen</div>
            <div className="dev-card-invest">4427 W Slauson Ave, View Park–Windsor Hills (original) · Founded August 2018 · Yonnie Hagos &amp; Ajay Relan</div>
            <div className="dev-card-body">Yonnie Hagos and Ajay Relan opened the original Hilltop on Slauson in August 2018 — in View Park–Windsor Hills, at the western end of the corridor. The brand now runs four locations: Slauson, Inglewood, Eagle Rock, and Downtown LA. Issa Rae came in as investor and partner on the Inglewood flagship; Spencer Paysinger holds a partnership stake as well. Hilltop has become the defining café anchor of the Slauson corridor — the gathering space that set the block.</div>
            <div className="dev-card-signal">When a neighborhood café expands to four locations across the city — including Downtown LA and Eagle Rock — it&apos;s because the original community held. The Slauson corridor is the foundation of that story.</div>
          </CultureCard>

          <CultureCard>
            <div className="dev-card-status s-active">Opened November 2024 · Jazz Supper Club</div>
            <div className="dev-card-title">Somerville</div>
            <div className="dev-card-invest">4437 W Slauson Ave, View Park–Windsor Hills · Hilltop Founders &amp; Issa Rae · Live Music Wed–Sun</div>
            <div className="dev-card-body">Somerville opened in November 2024 in the same Slauson retail complex as the original Hilltop — the first full-service restaurant from the Hilltop founders, with Issa Rae widely reported as co-creator. The name references the historic Somerville Hotel, the first Black-owned hotel in Los Angeles, built in the 1920s. Progressive American supper and nightly live jazz Wednesday through Sunday. Sunday brunch anchors the week.</div>
            <div className="dev-card-signal">Destination dining and live music at this level arriving on Slauson — not in West Adams, not elsewhere in the corridor — draws patrons from across the city and introduces a block to buyers who hadn&apos;t been looking there.</div>
          </CultureCard>

          <CultureCard>
            <div className="dev-card-status s-planned">Rehabilitation Nearing Completion · Leimert Park Village</div>
            <div className="dev-card-title">Vision Theatre</div>
            <div className="dev-card-invest">Leimert Park Village · City of Los Angeles, Dept. of Cultural Affairs · WACO Theater Center · Built 1931–32 · ~$40M Rehabilitation</div>
            <div className="dev-card-body">The Vision Theatre is a historic 1931–32 building in the heart of Leimert Park Village — City-owned, managed by the Department of Cultural Affairs, with WACO Theater Center (co-founded by Tina Knowles) as the programming partner. A rehabilitation in the range of $40 million is nearing completion. Reopening is approaching; a fully realized performance season is on the horizon.</div>
            <div className="dev-card-signal">The Vision Theatre has been Leimert Park&apos;s intended performing arts anchor for decades. A live venue in the village activates evening foot traffic, sustains surrounding businesses, and reinforces the cultural designation that holds the neighborhood together.</div>
          </CultureCard>

          <CultureCard>
            <div className="dev-card-status s-operational">Nonprofit · Est. June 1, 1989 · 35+ Years</div>
            <div className="dev-card-title">The World Stage</div>
            <div className="dev-card-invest">4321 Degnan Blvd, Leimert Park · Co-founded by Billy Higgins &amp; Kamau Daáood · 501(c)(3)</div>
            <div className="dev-card-body">Jazz drummer Billy Higgins and poet Kamau Daáood founded The World Stage on June 1, 1989 — more than three decades before Leimert Park became a protected cultural district. Jazz jams, poetry workshops, and education programs have run on Degnan Blvd ever since. The institution passed 35 years in 2024, and in 2026, organized the first annual Sacred Music and Healing Festival in Leimert Park.</div>
            <div className="dev-card-signal">Leimert Park&apos;s cultural designation — and everything it protects — exists in part because institutions like The World Stage were already here and holding. This block&apos;s permanence as a Black cultural anchor is inseparable from what&apos;s been happening at 4321 Degnan for over 35 years.</div>
          </CultureCard>

          <CultureCard>
            <div className="dev-card-status s-active">Permanent Installations · K Line Corridor</div>
            <div className="dev-card-title">Destination Crenshaw — Public Art Infrastructure</div>
            <div className="dev-card-invest">1.3-Mile Corridor · Getty Foundation, Primary Funder · Gallagher and Associates, Experience Design · 100+ Commissioned Works</div>
            <div className="dev-card-body">Threaded along the 1.3-mile Destination Crenshaw corridor — one installation at each Metro K Line station — is a series of permanent public artworks commissioned from over 100 artists, including Kehinde Wiley and Alison Saar. The Getty Foundation is the primary philanthropic funder. Gallagher and Associates handles exhibit and experience design. Each piece is site-specific to its station and built to last. This is the cultural layer that sits on top of the development investment covered elsewhere in this brief.</div>
            <div className="dev-card-signal">Permanent, funded, professionally designed installations embedded into the transit spine of South LA. Not a mural program. Art as permanent infrastructure — the kind that holds a neighborhood&apos;s identity through a full development cycle.</div>
          </CultureCard>

        </CultureCards>

      </div>
    </section>
  );
}
