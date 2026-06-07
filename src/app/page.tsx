import Developments from "@/components/Developments";
import CommunityCapital from "@/components/CommunityCapital";
import BackToTop from "@/components/BackToTop";
import PublishersLetter from "@/components/PublishersLetter";
import FAQ from "@/components/FAQ";
import Lightbox from "@/components/Lightbox";
import MotionNav from "@/components/MotionNav";
import HeroHeadline from "@/components/HeroHeadline";
import HeroStats from "@/components/HeroStats";
import RenderingButton from "@/components/RenderingButton";
import HeroRenderBar from "@/components/HeroRenderBar";
import Reveal from "@/components/Reveal";
import MotionLink from "@/components/MotionLink";
import ConvergenceEngine from "@/components/ConvergenceEngine";

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
        </div>
        <div className="hero-sketch-roof" />
        <div className="hero-sketch-overlay" />
        <div className="hero-sketch-glow" />
        <div className="hero-sketch-label">
          <span className="hero-sketch-label-line">The North Anchor.</span>
          <span className="hero-sketch-label-name">Lucas Museum of Narrative Art · Exposition Park</span>
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

          {/* Mobile-only rendering button — in flow between stats and CTAs */}
          <RenderingButton />

          <div className="hero-actions">
            <MotionLink href="#final-cta" className="btn-primary">Request Property Analysis →</MotionLink>
            <MotionLink href="#developments" className="btn-secondary">Explore All 35+ Projects</MotionLink>
          </div>

          <HeroRenderBar />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-inner">
          <span className="marquee-item">Destination Crenshaw · </span>
          <span className="marquee-item">$1B Jordan Downs · </span>
          <span className="marquee-item">Lucas Museum of Narrative Art · </span>
          <span className="marquee-item">Stocker Street Creative $225M · </span>
          <span className="marquee-item">Metro K Line TOD · </span>
          <span className="marquee-item">FIFA 2026 · </span>
          <span className="marquee-item">Super Bowl 2027 · </span>
          <span className="marquee-item">Olympics 2028 · </span>
          <span className="marquee-item">AB 1033 ADU Opportunity · </span>
          <span className="marquee-item">$300M Evermont District · </span>
          <span className="marquee-item">Compton Innovation Hub · </span>
          <span className="marquee-item">The Beehive Campus · </span>
          <span className="marquee-item">Baldwin Hills Crenshaw $1B+ · </span>
          <span className="marquee-item">Kali Hotel $300M · </span>
          <span className="marquee-item">SEED LA · </span>
          <span className="marquee-item">Destination Crenshaw · </span>
          <span className="marquee-item">$1B Jordan Downs · </span>
          <span className="marquee-item">Lucas Museum of Narrative Art · </span>
          <span className="marquee-item">Stocker Street Creative $225M · </span>
          <span className="marquee-item">Metro K Line TOD · </span>
          <span className="marquee-item">FIFA 2026 · </span>
          <span className="marquee-item">Super Bowl 2027 · </span>
          <span className="marquee-item">Olympics 2028 · </span>
          <span className="marquee-item">AB 1033 ADU Opportunity · </span>
          <span className="marquee-item">$300M Evermont District · </span>
          <span className="marquee-item">Compton Innovation Hub · </span>
          <span className="marquee-item">The Beehive Campus · </span>
          <span className="marquee-item">Baldwin Hills Crenshaw $1B+ · </span>
          <span className="marquee-item">Kali Hotel $300M · </span>
          <span className="marquee-item">SEED LA · </span>
        </div>
      </div>

      {/* PROBLEM */}
      <section id="problem">
        <div className="container">
          <div className="problem-grid">
            <Reveal className="problem-visual">
              <div className="problem-card pc1">
                <div className="pc-label">The Knowledge Gap</div>
                <div className="pc-stat">Most owners</div>
                <div className="pc-text">own property in South LA and have no idea what&apos;s being built a few blocks away — or what it means for their home&apos;s value.</div>
              </div>
              <div className="problem-card pc2">
                <div className="pc-label">The Window</div>
                <div className="pc-stat">Now</div>
                <div className="pc-text">The gap between what this land is worth today and what it&apos;ll be worth after zoning catches up — that gap is still there. Not for long.</div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="section-tag">The Problem</div>
              <h2 className="section-headline">The Corridor Is Moving.<br />Most People Are Watching.</h2>
              <p className="section-body" style={{ marginBottom: "36px" }}>Four things hit South LA at the same time — and most people missed it. The people who knew what was coming — not just felt it — are the ones building real wealth here. That window is still open. Barely.</p>
              <ul className="pain-list">
                <li className="pain-item">
                  <div className="pain-icon">📍</div>
                  <div>
                    <div className="pain-title">No Hyper-Local Intelligence</div>
                    <div className="pain-desc">National platforms don&apos;t distinguish Leimert Park Station from a block a half-mile away. The half-mile rule is everything here.</div>
                  </div>
                </li>
                <li className="pain-item">
                  <div className="pain-icon">🕐</div>
                  <div>
                    <div className="pain-title">Timing Risk Is Real</div>
                    <div className="pain-desc">The Westside Area Plan is live. Compton&apos;s TOD Specific Plan is in environmental review. The positioning window is narrow.</div>
                  </div>
                </li>
                <li className="pain-item">
                  <div className="pain-icon">💡</div>
                  <div>
                    <div className="pain-title">No ADU Intelligence Layer</div>
                    <div className="pain-desc">AB 1033 creates a historic wealth tool for South LA homeowners. Most don&apos;t yet understand what their specific lot can support.</div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className="container">
          <div className="features-intro">
            <Reveal>
              <div className="section-tag" style={{ color: "var(--gold-base)" }}>The Solution</div>
              <h2 className="section-headline light">Four Forces.<br />One Corridor.<br />Your Intelligence.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-body light">This brief maps 35+ developments across 11 micro-markets — not as news, but as investment intelligence. Every project is translated into what it means for your property, your timing, and your strategy.</p>
            </Reveal>
          </div>
          <Reveal className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-title">Cultural Reclamation</div>
              <div className="feature-desc">Destination Crenshaw ($100–122M), Leimert Park Village&apos;s 20/20 Vision, and the Issa Rae economy rewriting Black cultural identity into permanent infrastructure along the K Line spine.</div>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-title">Innovation & Tech</div>
              <div className="feature-desc">The Beehive Campus (104,000 sq ft), Crenshaw Lofts&apos; $29M tech center powered by Live Nation, the SoLa Tech Center powered by Riot Games, and Compton&apos;s 44,000 sq ft Innovation Hub.</div>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-title">Equity Redevelopment</div>
              <div className="feature-desc">Jordan Downs&apos; $1B transformation — America&apos;s largest public housing redevelopment — and Evermont&apos;s $300M Vermont-Manchester district converting a 1992 riot lot into a national model.</div>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <div className="feature-title">Transit & Climate</div>
              <div className="feature-desc">The Metro K Line, Expo Line, and A Line create a TOD backbone anchoring property values corridor-wide. Every major project in this brief is explicitly tied to transit proximity.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONVERGENCE ENGINE */}
      <ConvergenceEngine />

      {/* CORRIDOR MAP */}
      <section id="corridor-map">
        <Reveal className="map-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://marcusrichrealty.com/wp-content/uploads/2026/05/GL-new-image.-2.png"
            alt="South LA Growth & Development Corridor Map"
            loading="lazy"
          />
          <div className="map-overlay" />
          <div className="map-vignette" />
        </Reveal>
      </section>

      {/* HOMEOWNER CALLOUT */}
      <section id="homeowner">
        <div className="container">
          <Reveal className="homeowner-intro">
            <div className="section-tag" style={{ color: "var(--gold-base)" }}>Why This Matters for Homeowners</div>
            <h2 className="section-headline light">Your Property.<br />Your Position.</h2>
            <p className="section-body light">For South LA homeowners, this is not just a development story. It is a property-positioning story. Transit, cultural infrastructure, zoning changes, and AB 1033 are creating new ways to think about land, ADUs, rental income, and generational wealth.</p>
          </Reveal>
          <Reveal className="homeowner-grid" delay={0.15}>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">🏗️</span>
              <div className="homeowner-cell-title">ADU Opportunity</div>
              <div className="homeowner-cell-body">Construction costs at $280–$400/sq ft and 60–90 day permit timelines make ADU development accessible for most existing South LA owners. AB 1033 now opens the option to sell that unit as a standalone asset — a wealth-building tool that didn&apos;t exist before.</div>
            </div>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">🚇</span>
              <div className="homeowner-cell-title">Transit-Oriented Appreciation</div>
              <div className="homeowner-cell-body">The K Line, Expo Line, and A Line are not future promises — they are operational infrastructure. Properties within the half-mile transit radius are experiencing the strongest development pressure and the most durable long-term appreciation in the corridor.</div>
            </div>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">📈</span>
              <div className="homeowner-cell-title">Rental Demand Growth</div>
              <div className="homeowner-cell-body">West Adams has established a new rental ceiling of $2,450–$3,395/mo for transit-adjacent units. That benchmark is moving east and south. Homeowners in Jefferson Park, Leimert Park, and Watts are positioned ahead of the repricing wave.</div>
            </div>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">🏛️</span>
              <div className="homeowner-cell-title">Land Value Positioning</div>
              <div className="homeowner-cell-body">The Westside Area Plan has rezoned key commercial corridors for 4–6 story mixed-use development. Owners adjacent to designated opportunity sites are sitting on land that the market has not yet fully repriced. The window to act before full absorption is now.</div>
            </div>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">🌱</span>
              <div className="homeowner-cell-title">Generational Wealth</div>
              <div className="homeowner-cell-body">South LA homeownership has historically been undervalued relative to comparable Westside neighborhoods. $5B+ in converging investment is correcting that gap. For families with intergenerational property, this is the moment to understand what that asset is now worth.</div>
            </div>
            <div className="homeowner-cell">
              <span className="homeowner-cell-icon">⚖️</span>
              <div className="homeowner-cell-title">AB 1033 Implications</div>
              <div className="homeowner-cell-body">California&apos;s AB 1033 allows homeowners to sell an ADU as a legally separate piece of real estate. In a corridor where land values are rising and cultural infrastructure is being permanently anchored, this legislation transforms a backyard into a second deed — and a second generational asset.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEVELOPMENTS */}
      <Developments />

      {/* AUTHORITY */}
      <section id="authority">
        <div className="container">
          <Reveal>
            <div className="section-tag" style={{ color: "var(--gold-base)" }}>The Brief</div>
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
                  <div className="featured-card-eyebrow">Featured Catalyst · Exposition Park</div>
                  <div className="featured-card-title">Lucas Museum<br />of Narrative Art</div>
                  <div className="featured-card-meta-row">
                    <span className="featured-card-value">~$1B</span>
                    <span className="featured-card-divider">·</span>
                    <span className="featured-card-date">Opens Sept 2026</span>
                  </div>
                  <p className="featured-card-impact">
                    A cultural and investment anchor connecting Exposition Park, the K Line corridor, USC, and South LA property positioning — the single most consequential opening in the corridor&apos;s modern history.
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
              <div className="authority-source">2026 South LA Growth &amp; Development Brief · Marcus Rich Realty</div>
              <p className="section-body light">This updated edition expands to a 35+ project analysis covering South LA&apos;s innovation campuses, Exposition Park&apos;s global cultural anchor, the Watts transformation, and Compton&apos;s transit frontier. Four structural forces — transit, global events, cultural investment, and equity capital — arrived simultaneously. That convergence is the story.</p>
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

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <Reveal className="steps-header">
            <div className="section-tag">How It Works</div>
            <h2 className="section-headline">From Intelligence to Action</h2>
            <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>Every project in this report tells you something. But knowing isn&apos;t enough — you have to move. Here&apos;s how we do it.</p>
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
            </Reveal>
            <Reveal className="step-item" delay={0.3}>
              <div className="step-number">04</div>
              <div className="step-title">Ongoing Intelligence</div>
              <div className="step-desc">South LA keeps moving. So does this report. We&apos;ll keep you ahead of what&apos;s coming — not catching up to what already happened.</div>
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
              <p className="section-body light" style={{ marginBottom: "28px" }}>California&apos;s AB 1033, when fully implemented, allows homeowners to sell an Accessory Dwelling Unit as a separate piece of real estate — independent from the primary residence. In a corridor where $5B+ in public and private investment is flowing, this is a generational wealth creation window for those who already own here.</p>
              <p className="section-body light" style={{ marginBottom: "40px" }}>Parks at train stops, walkable blocks, and renters who will pay a premium to be close to the K Line — these are the structural conditions that make South LA ADUs uniquely positioned right now.</p>
              <MotionLink href="#final-cta" className="btn-primary">See What Your Lot Can Support →</MotionLink>
            </Reveal>
            <Reveal className="adu-numbers" delay={0.15}>
              <div className="adu-num-cell"><div className="adu-num">$280–$400</div><div className="adu-num-label">Per sq ft<br />construction range</div></div>
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

      {/* FINAL CTA */}
      <section id="final-cta">
        <div className="cta-bg-lines" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="cta-tag">Your Next Move</div>
          <Reveal>
            <h2 className="cta-headline">
              Get a Property-Specific<br />
              <em style={{ background: "var(--gold-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontStyle: "italic" }}>Corridor Analysis.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="cta-body">See what your specific property can support in the context of this corridor intelligence. Can you build an ADU? What&apos;s your lot worth in 3 years? What are you sitting on that you don&apos;t know about yet? We map it all against every project in this report.</p>
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
          <span style={{ color: "rgba(207,174,109,.35)", letterSpacing: ".12em" }}>Research &amp; Editorial Direction by South LA Media</span>
        </div>
        <div className="footer-disc">This page is for informational purposes only and does not constitute legal, financial, or investment advice. Timelines, costs, and project details are based on publicly available information as of May 2026 and are subject to change. Always consult qualified professionals before making investment decisions.</div>
      </footer>
      <BackToTop />
      <PublishersLetter />
    </>
  );
}
