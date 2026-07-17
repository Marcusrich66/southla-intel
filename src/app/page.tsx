import Developments from "@/components/Developments";
import CommunityCapital from "@/components/CommunityCapital";
import FourForcesVisual from "@/components/FourForcesVisual";
import BackToTop from "@/components/BackToTop";
import PublishersLetter from "@/components/PublishersLetter";
import FAQ from "@/components/FAQ";
import Lightbox from "@/components/Lightbox";
import MotionNav from "@/components/MotionNav";
import HeroHeadline from "@/components/HeroHeadline";
import HeroStats from "@/components/HeroStats";
import Reveal from "@/components/Reveal";
import MotionLink from "@/components/MotionLink";

export default function Home() {
  return (
    <>
      {/* ISSUE BANNER */}
      <div className="issue-banner">
        <span className="issue-banner-left">
          South LA Media
          <span className="issue-banner-dot" />
          Issue 001
          <span className="issue-banner-dot" />
          2026 Growth &amp; Development Brief
        </span>
        <span className="issue-banner-right">Intelligence Report · May 2026 · MarcusRichRealty.com</span>
      </div>

      {/* NAV — slides down on load */}
      <MotionNav />

      {/* HERO */}
      <section id="hero">
        <div className="hero-sketch-scene">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://marcusrichrealty.com/wp-content/uploads/2026/05/New-GL.-Sketch.-Museum-in.png"
            alt=""
            role="presentation"
            loading="eager"
          />

          {/* Mobile-only editorial annotation — upper-left, in sky space */}
          <div className="hero-img-caption">
            <span className="hero-img-caption-title">The North Anchor</span>
            <span className="hero-img-caption-body">Lucas Museum · Exposition Park</span>
          </div>

          {/* Mobile-only CTA badge — desktop hidden via CSS */}
          <a
            href="https://marcusrichrealty.com/wp-content/uploads/2026/05/New-GL.-Sketch.-Museum-in.png"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-mobile-cta-badge"
            aria-label="View full Lucas Museum rendering"
          >
            View Full Rendering →
          </a>
        </div>
        <div className="hero-sketch-roof" />
        <div className="hero-sketch-overlay" />
        <div className="hero-sketch-glow" />
        <div className="hero-sketch-label">
          <span className="hero-sketch-label-line">The North Anchor.</span>
          <span className="hero-sketch-label-name"><a className="copy-link" href="https://lucasmuseum.org" target="_blank" rel="noopener noreferrer">Lucas Museum of Narrative Art</a> · Exposition Park</span>
        </div>

        <Lightbox />

        <div className="hero-noise" />
        <div className="hero-grid" />

        <div className="hero-copy">
          <span className="hero-brand">A South LA Media Intelligence Report</span>
          <div className="hero-tag">Strategic Intelligence Report · May 2026</div>

          {/* Word-by-word stagger headline */}
          <HeroHeadline />

          <p className="hero-subhead">
            The 2026 South LA Growth &amp; Development Brief — 35+ major developments across 11 micro-markets. From the Golden Corridor to Compton&apos;s transit frontier.
          </p>

          {/* Count-up stats */}
          <HeroStats />

          <div className="hero-actions">
            <MotionLink href="#final-cta" className="btn-primary">Request Property Analysis →</MotionLink>
            <MotionLink href="#developments" className="btn-secondary">Explore All 35+ Projects</MotionLink>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-inner">
          <span className="marquee-item"><a href="https://destinationcrenshaw.la" target="_blank" rel="noopener noreferrer">Destination Crenshaw</a> · </span>
          <span className="marquee-item">$1B <a href="https://www.hacla.org/en/development-services/development/jordan-downs-redevelopment" target="_blank" rel="noopener noreferrer">Jordan Downs</a> · </span>
          <span className="marquee-item"><a href="https://lucasmuseum.org" target="_blank" rel="noopener noreferrer">Lucas Museum of Narrative Art</a> · </span>
          <span className="marquee-item"><a href="https://stockerstreetcreative.com" target="_blank" rel="noopener noreferrer">Stocker Street Creative</a> $225M · </span>
          <span className="marquee-item"><a href="https://www.hntb.com/projects/la-metro-k-line/" target="_blank" rel="noopener noreferrer">Metro K Line</a> Transit Corridor · </span>
          <span className="marquee-item">FIFA 2026 · </span>
          <span className="marquee-item">Super Bowl 2027 · </span>
          <span className="marquee-item">Olympics 2028 · </span>
          <span className="marquee-item">AB 1033 ADU Opportunity · </span>
          <span className="marquee-item">$300M <a href="https://evermontsouthla.com" target="_blank" rel="noopener noreferrer">Evermont District</a> · </span>
          <span className="marquee-item"><a href="https://la.urbanize.city/post/compton-apartments-retail-kbk-enterprises" target="_blank" rel="noopener noreferrer">Compton Innovation Hub</a> · </span>
          <span className="marquee-item"><a href="https://www.solabeehive.com" target="_blank" rel="noopener noreferrer">The Beehive Campus</a> · </span>
          <span className="marquee-item">Baldwin Hills Crenshaw $1B+ · </span>
          <span className="marquee-item">Kali Hotel $300M · </span>
          <span className="marquee-item"><a href="https://seedschoolla.org" target="_blank" rel="noopener noreferrer">SEED LA</a> · </span>
          <span className="marquee-item"><a href="https://destinationcrenshaw.la" target="_blank" rel="noopener noreferrer">Destination Crenshaw</a> · </span>
          <span className="marquee-item">$1B <a href="https://www.hacla.org/en/development-services/development/jordan-downs-redevelopment" target="_blank" rel="noopener noreferrer">Jordan Downs</a> · </span>
          <span className="marquee-item"><a href="https://lucasmuseum.org" target="_blank" rel="noopener noreferrer">Lucas Museum of Narrative Art</a> · </span>
          <span className="marquee-item"><a href="https://stockerstreetcreative.com" target="_blank" rel="noopener noreferrer">Stocker Street Creative</a> $225M · </span>
          <span className="marquee-item"><a href="https://www.hntb.com/projects/la-metro-k-line/" target="_blank" rel="noopener noreferrer">Metro K Line</a> Transit Corridor · </span>
          <span className="marquee-item">FIFA 2026 · </span>
          <span className="marquee-item">Super Bowl 2027 · </span>
          <span className="marquee-item">Olympics 2028 · </span>
          <span className="marquee-item">AB 1033 ADU Opportunity · </span>
          <span className="marquee-item">$300M <a href="https://evermontsouthla.com" target="_blank" rel="noopener noreferrer">Evermont District</a> · </span>
          <span className="marquee-item"><a href="https://la.urbanize.city/post/compton-apartments-retail-kbk-enterprises" target="_blank" rel="noopener noreferrer">Compton Innovation Hub</a> · </span>
          <span className="marquee-item"><a href="https://www.solabeehive.com" target="_blank" rel="noopener noreferrer">The Beehive Campus</a> · </span>
          <span className="marquee-item">Baldwin Hills Crenshaw $1B+ · </span>
          <span className="marquee-item">Kali Hotel $300M · </span>
          <span className="marquee-item"><a href="https://seedschoolla.org" target="_blank" rel="noopener noreferrer">SEED LA</a> · </span>
        </div>
      </div>

      {/* FROM THE PUBLISHER CALLOUT */}
      <div className="ftp-callout">
        <div className="ftp-noise" aria-hidden="true" />
        <div className="ftp-inner">
          <div className="ftp-photo-col">
            <div className="ftp-photo-wrap">
              <img
                src="https://marcusrichrealty.com/wp-content/uploads/2026/04/Palmtree-DT-HShot.webp"
                alt="Marcus Rich"
                className="ftp-photo"
              />
            </div>
          </div>
          <div className="ftp-text-col">
            <div className="ftp-tag">From The Publisher</div>
            <div className="ftp-name">Marcus Rich</div>
            <p className="ftp-body">My name is Marcus Rich. I grew up in South LA — Foshay Middle, Washington High, Challengers Boys &amp; Girls Club — and I&apos;ve been working this corridor as a real estate broker for over 20 years. I served in the Navy, spent time in Oakland, but I always came back. This is my city. What you&apos;re about to read is what&apos;s happening here right now — billions of dollars moving into South LA through culture, development, housing, and entertainment — told straight, from someone on the ground, so you know exactly where you stand and how to move.</p>
            <p className="ftp-closing">To read my full story and why I started South LA Media — open the Publisher&apos;s Letter on the left.</p>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section id="problem">
        <div className="container">
          <Reveal className="problem-section-header">
            <div className="section-tag">The Problem</div>
            <h2 className="section-headline">South LA Is Changing Fast.<br />Here&apos;s What&apos;s Actually Coming.</h2>
            <p className="section-body" style={{ marginBottom: "0", textAlign: "center", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>Transit lines, redevelopment projects, cultural investment, and new zoning are landing across South LA right now — not someday, right now. This brief breaks down exactly where, what&apos;s being built, and how close it is to your property. The window to act on it is open. It won&apos;t stay that way.</p>
          </Reveal>
          <Reveal className="problem-pains" delay={0.2}>
              <ul className="pain-list">
                <li className="pain-item">
                  <div className="pain-icon">📍</div>
                  <div>
                    <div className="pain-title">The Half-Mile Rule</div>
                    <div className="pain-desc">Zillow doesn&apos;t know the difference between a property half a mile from Leimert Park Station and one that&apos;s right on it. That half mile is everything in South LA.</div>
                  </div>
                </li>
                <li className="pain-item">
                  <div className="pain-icon">🕐</div>
                  <div>
                    <div className="pain-title">The Window Is Closing</div>
                    <div className="pain-desc">The Westside Area Plan is live. Compton&apos;s TOD Specific Plan is in environmental review. There&apos;s still time to get in front of it — but not much.</div>
                  </div>
                </li>
                <li className="pain-item">
                  <div className="pain-icon">💡</div>
                  <div>
                    <div className="pain-title">The Opportunity Sitting Behind The House</div>
                    <div className="pain-desc">AB 1033 just changed what a South LA homeowner can legally do with their backyard. This is the one piece of legislation most homeowners haven&apos;t caught up on yet — and it&apos;s worth real money.</div>
                  </div>
                </li>
              </ul>
            </Reveal>
        </div>
      </section>

      {/* SOLUTION — Four Forces Visual */}
      <FourForcesVisual />

      {/* CORRIDOR MAP */}
      <section id="corridor-map">
        <Reveal className="map-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://marcusrichrealty.com/wp-content/uploads/2026/06/Corridor-map.-Final-V-one.png"
            alt="South Los Angeles Growth &amp; Development Corridor Map — final version showing Baldwin Hills, Leimert Park, Vermont District, Watts/Jordan Downs, Compton Innovation Hub, Inglewood, and Metro transit corridors"
            loading="lazy"
          />
          <div className="map-overlay" />
          <div className="map-vignette" />
        </Reveal>
      </section>

      {/* DEVELOPMENTS */}
      <Developments />

      {/* AUTHORITY */}
      <section id="authority">
        <div className="container">
          <Reveal>
            <div className="section-tag" style={{ color: "var(--gold-base)" }}>The Two Anchors</div>
            <p className="two-anchors-subtitle">The flagship developments bookending South LA&apos;s 11-mile corridor — one opening fall 2026, one already drawing global events.</p>
          </Reveal>
          <div className="brief-grid">

            {/* TOP LEFT — North Anchor */}
            <Reveal className="brief-north-anchor">
              <div className="featured-catalyst-card">
                <div className="featured-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://marcusrichrealty.com/wp-content/uploads/2026/05/New-GL.-Sketch.-Museum-in.png"
                    alt="Lucas Museum of Narrative Art rendering"
                    loading="lazy"
                  />
                  <div className="featured-card-img-overlay" />
                  <span className="featured-card-badge">North Anchor</span>
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-eyebrow">North Anchor · Exposition Park</div>
                  <div className="featured-card-title">Lucas Museum<br />of Narrative Art</div>
                  <div className="featured-card-meta-row">
                    <span className="featured-card-value">~$1B</span>
                    <span className="featured-card-divider">·</span>
                    <span className="featured-card-date">Opens Sept 2026</span>
                  </div>
                  <p className="featured-card-impact">
                    A cultural institution connecting Exposition Park, the K Line corridor, USC, and every neighborhood in between — the biggest cultural opening South LA has seen in a generation, and a direct signal for everything between Exposition Park and Inglewood.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* TOP RIGHT — South Anchor */}
            <Reveal className="brief-south-anchor" delay={0.1}>
              <div className="featured-catalyst-card">
                <div className="featured-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://marcusrichrealty.com/wp-content/uploads/2026/06/Sofi-Stadium.jpg"
                    alt="SoFi Stadium and Hollywood Park entertainment district"
                    loading="lazy"
                  />
                  <div className="featured-card-img-overlay" />
                  <span className="featured-card-badge">South Anchor</span>
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-eyebrow">South Anchor · Inglewood</div>
                  <div className="featured-card-title">SoFi Stadium · Intuit Dome<br />· Kali Hotel</div>
                  <div className="featured-card-meta-row">
                    <span className="featured-card-value">$10B+</span>
                    <span className="featured-card-divider">·</span>
                    <span className="featured-card-date">FIFA 2026 · Super Bowl 2027 · Olympics 2028</span>
                  </div>
                  <p className="featured-card-impact">
                    Three world-class venues within walking distance of each other. The entertainment district anchoring the southern end of the corridor — already open and drawing global money and attention straight into South LA.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* BOTTOM LEFT — Quote + Body */}
            <Reveal className="brief-quote-block" delay={0.15}>
              <blockquote className="authority-quote">&ldquo;These aren&apos;t separate projects. Everything is landing at the same time.&rdquo;</blockquote>
              <p className="section-body light">Five years ago these would have been separate stories. The museum opening. A stadium district. A public housing rebuild. A transit line. Instead, they&apos;re all landing in the same eighteen months, in the same eleven-mile stretch. This isn&apos;t five separate things happening. This is everything happening, right now, in our time. Same as you, I&apos;m watching it unfold in real time — and you should be paying attention too.</p>
            </Reveal>

            {/* BOTTOM RIGHT — Supporting Signals */}
            <Reveal className="brief-signals" delay={0.2}>
              <div className="supporting-signals-header">Supporting Signals</div>
              <div className="supporting-signals">
                {[
                  ["CORRIDOR",      "$5B+",      "Total Corridor Investment"],
                  ["REDEVELOPMENT", "$1B",        "Jordan Downs"],
                  ["INNOVATION",    "$225M",      "Stocker Street Creative"],
                  ["MIXED-USE",     "$300M",      "Evermont District"],
                  ["CULTURE",       "$122M",      "Destination Crenshaw"],
                  ["RENTAL MARKET", "$3,395/mo",  "West Adams Rents"],
                  ["CAPITAL",       "$45–50M",    "PCR Business Finance"],
                ].map(([category, value, label]) => (
                  <div key={label} className="signal-item">
                    <span className="section-tag signal-category">{category}</span>
                    <span className="signal-value">{value}</span>
                    <span className="signal-label">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ADU */}
      <section id="adu">
        <div className="container">
          <div className="adu-inner">
            <Reveal>
              <div className="section-tag" style={{ color: "var(--gold-base)" }}>Homeowner Wealth Creation</div>
              <h2 className="section-headline light">AB 1033 Changes<br /><em className="gold-text" style={{ fontStyle: "italic" }}>Everything.</em></h2>
              <p className="section-body light" style={{ marginBottom: "28px" }}>California&apos;s AB 1033, when fully implemented, allows homeowners to sell an Accessory Dwelling Unit as a separate piece of real estate — independent from the primary residence. In a neighborhood where $5B+ in public and private investment is flowing, this is a generational wealth creation window for those who already own here.</p>
              <p className="section-body light" style={{ marginBottom: "40px" }}>Parks at train stops, walkable blocks, and renters who will pay more to be close to the K Line — these are the reasons South LA ADUs make so much sense right now.</p>
              <MotionLink href="#final-cta" className="btn-primary">See What Your Lot Can Support →</MotionLink>
            </Reveal>
            <Reveal className="adu-numbers" delay={0.15}>
              <div className="adu-num-cell"><div className="adu-num">$280+</div><div className="adu-num-label">Per sq ft<br />construction range</div></div>
              <div className="adu-num-cell"><div className="adu-num">60–90</div><div className="adu-num-label">Day permit<br />timeline</div></div>
              <div className="adu-num-cell"><div className="adu-num">AB1033</div><div className="adu-num-label">Sell ADU as<br />separate property</div></div>
              <div className="adu-num-cell"><div className="adu-num">½ mi</div><div className="adu-num-label">Transit value<br />radius rule</div></div>
            </Reveal>
          </div>
        </div>
      </section>

      <CommunityCapital />

      {/* FAQ */}
      <FAQ />

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <Reveal className="steps-header">
            <div className="section-tag">How It Works</div>
            <h2 className="section-headline">Here&apos;s How We Work</h2>
            <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>Every project in this report is a signal. But a signal only matters if you know what to do with it. Here&apos;s exactly how we help you move.</p>
          </Reveal>
          <div className="steps-grid">
            <Reveal className="step-item">
              <div className="step-number">01</div>
              <div className="step-title">Property Context Brief</div>
              <div className="step-desc">We map your specific lot against the 35+ development signals — figuring out which projects are close enough to actually move your property value — and by how much.</div>
            </Reveal>
            <Reveal className="step-item" delay={0.1}>
              <div className="step-number">02</div>
              <div className="step-title">Opportunity Analysis</div>
              <div className="step-desc">Can you build an ADU? What can you rent it for? Can you sell it separately under AB 1033? We run the numbers on your specific lot.</div>
            </Reveal>
            <Reveal className="step-item" delay={0.2}>
              <div className="step-number">03</div>
              <div className="step-title">Strategic Roadmap</div>
              <div className="step-desc">Whether you&apos;re a homeowner, buyer, or investor — we tell you straight: what to do, when to do it, and what you&apos;re leaving on the table if you wait.</div>
              <div style={{ fontSize: ".7rem", color: "rgba(74,90,109,.9)", marginTop: "10px", lineHeight: 1.6, fontWeight: 400 }}>Full brokerage services — including buyer representation, listings, and investment acquisition — are available through Cal Estate Brokers, DRE #01808336.</div>
            </Reveal>
            <Reveal className="step-item" delay={0.3}>
              <div className="step-number">04</div>
              <div className="step-title">Ongoing Intelligence</div>
              <div className="step-desc">South LA keeps moving. So does this report. We&apos;ll keep you ahead of what&apos;s coming — not catching up to what already happened.</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta">
        <div className="cta-bg-lines" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="cta-tag">Your Next Move</div>
          <Reveal>
            <h2 className="cta-headline">
              Let&apos;s Look At Your<br />
              <em style={{ background: "var(--gold-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontStyle: "italic" }}>Specific Property.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="cta-body">Can you build an ADU? What&apos;s your lot actually worth right now? What are you sitting on that you don&apos;t know about yet? We map your specific property against every project in this report and give you a straight answer.</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="cta-actions">
              <MotionLink href="tel:3234818546" className="btn-primary">Call 323.481.8546 →</MotionLink>
              <MotionLink href="mailto:marcus@marcusrichrealty.com" className="btn-secondary">Email Marcus Directly</MotionLink>
              <MotionLink href="https://calendly.com/marcusrich66/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(207,174,109,0.6)", color: "var(--gold-hi)" }}>Schedule a Strategy Session →</MotionLink>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="contact-strip">
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:3234818546" className="contact-value">323.481.8546</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:marcus@marcusrichrealty.com" className="contact-value">marcus@marcusrichrealty.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a href="https://www.marcusrichrealty.com" className="contact-value" target="_blank" rel="noopener noreferrer">marcusrichrealty.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">License</span>
                <span className="contact-value">DRE #01497912</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Schedule</span>
                <a href="https://calendly.com/marcusrich66/30min" target="_blank" rel="noopener noreferrer" className="contact-value">Book a 30-Min Session</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-dre">
          © 2026 South LA Media · Produced by Marcus Rich Realty · DRE #01497912 · Equal Housing Opportunity<br />
          <span style={{ color: "rgba(255,255,255,.35)", fontSize: ".6rem", letterSpacing: ".08em" }}>Marcus Rich Realty · DRE #01497912 · Brokerage services provided through Cal Estate Brokers · DRE #01808336</span><br />
          <span style={{ color: "rgba(207,174,109,.35)", letterSpacing: ".12em" }}>Research &amp; Editorial Direction by South LA Media</span>
        </div>
        <div className="footer-disc">This page is for informational purposes only and does not constitute legal, financial, or investment advice. Timelines, costs, and project details are based on publicly available information as of May 2026 and are subject to change. Always consult qualified professionals before making investment decisions.</div>
      </footer>
      <BackToTop />
      <PublishersLetter />
    </>
  );
}
