"use client";
import Reveal from "./Reveal";

const outcomes = [
  { label: "PROPERTY POSITIONING",    items: ["Transit proximity", "Cultural proximity", "Development exposure"] },
  { label: "APPRECIATION",            items: ["Land value growth", "Rent growth", "Demand concentration"] },
  { label: "DEVELOPMENT OPPORTUNITY", items: ["ADUs", "Mixed-use corridors", "Transit-oriented projects"] },
  { label: "GENERATIONAL WEALTH",     items: ["Property ownership", "Income creation", "Equity growth"] },
];

export default function ConvergenceEngine() {
  return (
    <section id="convergence" className="convergence-section">
      <div className="container">

        {/* ── HEADER ── */}
        <Reveal className="convergence-header">
          <div className="section-tag" style={{ color: "var(--gold-base)" }}>The Convergence Model</div>
          <h2 className="section-headline light">The South LA Convergence Engine</h2>
          <p className="section-body light convergence-sub">
            Six independent forces are converging across the corridor simultaneously. Their intersection
            creates the conditions driving property positioning, development opportunity, appreciation,
            and long-term wealth creation.
          </p>
        </Reveal>

        {/* ── HUB-AND-SPOKE DIAGRAM ── */}
        <Reveal className="convergence-diagram-wrap" delay={0.15}>

          {/* Blueprint connector lines */}
          <svg
            className="convergence-svg"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="168" y1="93"  x2="500" y2="280" className="spoke-line" />
            <line x1="832" y1="93"  x2="500" y2="280" className="spoke-line" />
            <line x1="72"  y1="280" x2="500" y2="280" className="spoke-line" />
            <line x1="928" y1="280" x2="500" y2="280" className="spoke-line" />
            <line x1="168" y1="467" x2="500" y2="280" className="spoke-line" />
            <line x1="832" y1="467" x2="500" y2="280" className="spoke-line" />
          </svg>

          <div className="convergence-grid">

            {/* TL */}
            <div className="spoke-node spoke-tl">
              <div className="spoke-label">TRANSIT INFRASTRUCTURE</div>
              <ul className="spoke-items">
                <li>K Line</li>
                <li>E Line</li>
                <li>A Line</li>
                <li>Transit-Oriented Development</li>
              </ul>
            </div>

            {/* CENTER HUB — spans all 3 rows via grid-area */}
            <div className="hub-center">
              <div className="hub-inner">
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
            <div className="spoke-node spoke-tr">
              <div className="spoke-label">CULTURAL INVESTMENT</div>
              <ul className="spoke-items">
                <li>Lucas Museum</li>
                <li>Destination Crenshaw</li>
                <li>Leimert Park</li>
                <li>Cultural Anchors</li>
              </ul>
            </div>

            {/* ML */}
            <div className="spoke-node spoke-ml">
              <div className="spoke-label">REDEVELOPMENT</div>
              <ul className="spoke-items">
                <li>Jordan Downs</li>
                <li>Evermont District</li>
                <li>Stocker Creative</li>
                <li>West Adams Growth</li>
              </ul>
            </div>

            {/* MR */}
            <div className="spoke-node spoke-mr">
              <div className="spoke-label">PRIVATE CAPITAL</div>
              <ul className="spoke-items">
                <li>Institutional Investment</li>
                <li>Commercial Development</li>
                <li>Housing Investment</li>
                <li>Business Expansion</li>
              </ul>
            </div>

            {/* BL */}
            <div className="spoke-node spoke-bl">
              <div className="spoke-label">GLOBAL EVENTS</div>
              <ul className="spoke-items">
                <li>FIFA 2026</li>
                <li>Super Bowl 2027</li>
                <li>Olympics 2028</li>
                <li>Regional Tourism</li>
              </ul>
            </div>

            {/* BR */}
            <div className="spoke-node spoke-br">
              <div className="spoke-label">ADU LEGISLATION</div>
              <ul className="spoke-items">
                <li>AB 1033</li>
                <li>ADU Development</li>
                <li>JADU Strategy</li>
                <li>Homeowner Opportunity</li>
              </ul>
            </div>

          </div>
        </Reveal>

        {/* ── OUTCOME PANEL ── */}
        <Reveal className="convergence-outcomes" delay={0.25}>
          <div className="outcomes-eyebrow">CORRIDOR OUTCOMES</div>
          <div className="outcomes-grid">
            {outcomes.map((o) => (
              <div key={o.label} className="outcome-card">
                <div className="outcome-title">{o.label}</div>
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
