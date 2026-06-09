"use client";
import Reveal from "./Reveal";

const outcomes = [
  { label: "Property\nPositioning",    items: ["Transit proximity", "Cultural proximity", "Development exposure"] },
  { label: "Appreciation",             items: ["Land value growth", "Rent growth", "Demand concentration"] },
  { label: "Development\nOpportunity", items: ["ADUs", "Mixed-use corridors", "Transit-oriented projects"] },
  { label: "Generational\nWealth",     items: ["Property ownership", "Income creation", "Equity growth"] },
];

export default function ConvergenceEngine() {
  return (
    <section id="convergence" className="convergence-section">
      <div className="container">

        {/* ── HEADER ── */}
        <Reveal className="convergence-header">
          <div className="section-tag" style={{ color: "var(--gold-base)" }}>What's Driving This</div>
          <h2 className="section-headline light">Six Things Hit South LA At The Same Time.</h2>
          <div className="convergence-engine-name">This Is Why The Moment Is Different.</div>
          <p className="section-body light convergence-sub">
            Six things landed in South LA at the same time. Transit. Culture. Global money. Redevelopment. New legislation. And a world event pipeline running straight through 2028. None of it was coordinated. All of it showed up together. That&apos;s what makes this different from every other time someone said South LA was about to pop.
          </p>
        </Reveal>

        {/* ── HUB-AND-SPOKE DIAGRAM ── */}
        <Reveal className="convergence-diagram-wrap" delay={0.15}>

          {/* Blueprint connector lines — stronger, directional */}
          <svg
            className="convergence-svg"
            viewBox="0 0 1000 580"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Gradient: dim at node end, bright near hub */}
              <linearGradient id="lg-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lg-tr" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lg-ml" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lg-mr" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lg-bl" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lg-br" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%"   stopColor="#CFAE6D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#CFAE6D" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            <line x1="148" y1="88"  x2="500" y2="290" stroke="url(#lg-tl)" strokeWidth="1.4" />
            <line x1="852" y1="88"  x2="500" y2="290" stroke="url(#lg-tr)" strokeWidth="1.4" />
            <line x1="55"  y1="290" x2="500" y2="290" stroke="url(#lg-ml)" strokeWidth="1.4" />
            <line x1="945" y1="290" x2="500" y2="290" stroke="url(#lg-mr)" strokeWidth="1.4" />
            <line x1="148" y1="492" x2="500" y2="290" stroke="url(#lg-bl)" strokeWidth="1.4" />
            <line x1="852" y1="492" x2="500" y2="290" stroke="url(#lg-br)" strokeWidth="1.4" />
          </svg>

          <div className="convergence-grid">

            {/* TL */}
            <div className="spoke-node spoke-tl convergence-box">
              <div className="spoke-label">TRANSIT INFRASTRUCTURE</div>
              <ul className="spoke-items">
                <li>K Line</li>
                <li>E Line</li>
                <li>TOD Corridors</li>
              </ul>
            </div>

            {/* CENTER HUB */}
            <div className="hub-center">
              <div className="hub-inner">
                <div className="hub-eyebrow">THE</div>
                <div className="hub-title">SOUTH LA<br />CORRIDOR</div>
                <div className="hub-divider" />
                <div className="hub-stats">
                  <div>11 Micro-Markets</div>
                  <div>35+ Developments</div>
                  <div>$5B+ Invested</div>
                </div>
              </div>
            </div>

            {/* TR */}
            <div className="spoke-node spoke-tr convergence-box">
              <div className="spoke-label">CULTURAL INVESTMENT</div>
              <ul className="spoke-items">
                <li>Lucas Museum</li>
                <li>Destination Crenshaw</li>
                <li>Leimert Park</li>
              </ul>
            </div>

            {/* ML */}
            <div className="spoke-node spoke-ml convergence-box">
              <div className="spoke-label">REDEVELOPMENT</div>
              <ul className="spoke-items">
                <li>Jordan Downs</li>
                <li>Evermont District</li>
                <li>West Adams</li>
              </ul>
            </div>

            {/* MR */}
            <div className="spoke-node spoke-mr convergence-box">
              <div className="spoke-label">PRIVATE CAPITAL</div>
              <ul className="spoke-items">
                <li>Institutional Capital</li>
                <li>Mixed-Use Investment</li>
                <li>Business Expansion</li>
              </ul>
            </div>

            {/* BL */}
            <div className="spoke-node spoke-bl convergence-box">
              <div className="spoke-label">GLOBAL EVENTS</div>
              <ul className="spoke-items">
                <li>FIFA 2026</li>
                <li>Super Bowl 2027</li>
                <li>Olympics 2028</li>
              </ul>
            </div>

            {/* BR */}
            <div className="spoke-node spoke-br convergence-box">
              <div className="spoke-label">ADU LEGISLATION</div>
              <ul className="spoke-items">
                <li>AB 1033</li>
                <li>ADU Development</li>
                <li>JADU Strategy</li>
              </ul>
            </div>

          </div>
        </Reveal>

        {/* ── OUTCOME PANEL ── */}
        <Reveal className="convergence-outcomes" delay={0.25}>
          <div className="outcomes-bridge">
            <div className="outcomes-bridge-line" />
            <div className="outcomes-bridge-label">Here&apos;s what that means for you</div>
            <div className="outcomes-bridge-line" />
          </div>
          <div className="outcomes-grid">
            {outcomes.map((o) => (
              <div key={o.label} className="outcome-card">
                <div className="outcome-accent" />
                <div className="outcome-title">
                  {o.label.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < o.label.split("\n").length - 1 && <br />}</span>
                  ))}
                </div>
                <ul className="outcome-items">
                  {o.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
