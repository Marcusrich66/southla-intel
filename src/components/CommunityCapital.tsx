"use client";
import Reveal from "./Reveal";

const stats = [
  { value: "$500M+", label: "Total Capital Delivered" },
  { value: "20,000+", label: "Entrepreneurs Served" },
  { value: "45,000+", label: "Jobs Created or Retained" },
  { value: "94%", label: "Black, Latinx & Asian Borrowers" },
  { value: "$37M+", label: "Metro Business Interruption Grants" },
];

const services = [
  "Microloans up to $50,000 for startups and small businesses",
  "Small business loans from $50,000 to $650,000 for growth",
  "Free one-on-one SBDC business advising and workshops",
  "Metro Business Interruption Fund grants for businesses impacted by rail construction",
  "California Small Business Loan Guarantee Program",
];

export default function CommunityCapital() {
  return (
    <section id="community-capital" className="cc-section">
      <div className="container">

        {/* Header */}
        <Reveal>
          <div className="section-tag cc-tag">Community Capital</div>
          <h2 className="section-headline cc-headline">The Capital Resource Every South LA Entrepreneur Needs To Know About</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="cc-subhead">Who&apos;s funding South LA&apos;s next generation of entrepreneurs</p>
        </Reveal>

        {/* PCR intro */}
        <Reveal delay={0.18}>
          <div className="cc-org-header">
            <div className="cc-org-name">Pacific Coast Regional (PCR) Business Finance</div>
            <div className="cc-org-tagline">South LA&apos;s CDFI Front Door — Founded 1977</div>
          </div>
        </Reveal>

        {/* Stat Cards */}
        <div className="cc-stats-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div className="cc-stat-card">
                <div className="cc-stat-value">{s.value}</div>
                <div className="cc-stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="pcr-divider">
          <span className="divider-line"></span>
          <span className="divider-diamond">◆</span>
          <span className="divider-line"></span>
        </div>

        {/* Two-column body: left = What They Do + Who They Serve stacked; right = photo callout */}
        <div className="cc-body-grid">

          {/* Left column: What They Do, then Who They Serve below */}
          <div className="cc-left-col">
            <Reveal>
              <div className="cc-body-block">
                <div className="cc-body-title">What They Do</div>
                <ul className="cc-service-list">
                  {services.map((s, i) => (
                    <li key={i} className="cc-service-item">
                      <span className="cc-bullet">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="cc-body-block">
                <div className="cc-body-title">Who They Serve</div>
                <p className="cc-serve-text">
                  Black and Brown entrepreneurs, women-owned businesses, startups, and community-rooted ventures along the Crenshaw, Inglewood, Hyde Park, and South LA corridors.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column: photo + callout */}
          <Reveal delay={0.1}>
            <div className="cc-callout">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://marcusrichrealty.com/wp-content/uploads/2026/06/PCR-Business-Finance.-V-1.png"
                alt="PCR Business Finance new headquarters at 3800 Slauson Ave, Los Angeles"
                className="cc-callout-img"
                loading="lazy"
              />
              <div className="cc-callout-heading">Two Minutes From My Front Door</div>
              <p>
                PCR opened the doors to their new headquarters on Slauson Avenue in early June 2026 — strategically positioned to serve the Crenshaw District, Hyde Park, and Inglewood with a business center and community gathering space. I live close enough to walk there. I&apos;ve watched this building come to life in real time. That&apos;s how close this capital resource is to the community it serves.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contact */}
        <Reveal delay={0.1}>
          <div className="cc-contact-block">
            <div className="cc-contact-grid">
              <div className="cc-contact-item">
                <div className="cc-contact-label">New Headquarters</div>
                <div className="cc-contact-value">3800 Slauson Ave, Los Angeles, CA</div>
                <div className="cc-contact-note">Crenshaw District HQ</div>
              </div>
              <div className="cc-contact-item">
                <div className="cc-contact-label">Phone</div>
                <div className="cc-contact-value">
                  <a href="tel:2137392999" className="cc-contact-link">(213) 739-2999</a> main
                </div>
                <div className="cc-contact-value">
                  <a href="tel:8663019989" className="cc-contact-link">(866) 301-9989</a> toll free
                </div>
              </div>
              <div className="cc-contact-item">
                <div className="cc-contact-label">Appointments</div>
                <div className="cc-contact-value">
                  <a href="tel:2136404710" className="cc-contact-link">(213) 640-4710</a> or <a href="tel:2136404159" className="cc-contact-link">(213) 640-4159</a>
                </div>
                <div className="cc-contact-note">Contact: Leah Evans</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="cc-cta-block">
            <a href="https://pcrcorp.org" target="_blank" rel="noopener noreferrer" className="cc-cta-btn">
              Visit PCR Business Finance →
            </a>
            <p className="cc-cta-sub">Located in the heart of the South LA corridor — your first call before any bank.</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
