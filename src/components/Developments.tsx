"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const tabs = [
  { id: "crenshaw",   label: "Ch.1 · Crenshaw Corridor" },
  { id: "innovation", label: "Ch.2 · Innovation Belt" },
  { id: "exposition", label: "Ch.3 · Exposition Park" },
  { id: "baldwin",    label: "Ch.4 · Baldwin Hills" },
  { id: "viewpark",   label: "Ch.5 · View Park / Ladera" },
  { id: "inglewood",  label: "Ch.6 · Inglewood" },
  { id: "westadams",  label: "Ch.7 · West Adams" },
  { id: "evermont",   label: "Ch.8 · Evermont" },
  { id: "watts",      label: "Ch.9 · Watts" },
  { id: "compton",    label: "Ch.10 · Compton" },
  { id: "jefferson",  label: "Ch.11 · Jefferson Park" },
];

const chapterMeta: Record<string, { signals: string; force: string; lens: string }> = {
  crenshaw:   { signals: "4 Projects", force: "Culture + Transit",      lens: "Half-Mile Proximity" },
  innovation: { signals: "2 Projects", force: "Innovation + Tech",      lens: "Job Growth Impact" },
  exposition: { signals: "2 Projects", force: "Culture + Capital",      lens: "Museum Area" },
  baldwin:    { signals: "3 Projects", force: "Film + Mixed-Use",       lens: "Surrounding Area Benefit" },
  viewpark:   { signals: "2 Projects", force: "Zoning + Luxury",        lens: "Upzoning Window" },
  inglewood:  { signals: "3 Projects", force: "Events + Hospitality",   lens: "Event Demand" },
  westadams:  { signals: "2 Projects", force: "Transit + Rentals",      lens: "Rent Benchmark" },
  evermont:   { signals: "2 Projects", force: "Equity + Education",     lens: "School Proximity" },
  watts:      { signals: "4 Projects", force: "Redevelopment + Climate","lens": "Early Positioning" },
  compton:    { signals: "2 Projects", force: "Transit + Innovation",   lens: "Transit Growth Area" },
  jefferson:  { signals: "2 Projects", force: "Transit + CDFI",         lens: "Infill Appreciation" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 18 } },
};

interface DevCardProps {
  children: React.ReactNode;
  index?: number;
  openCard?: number | null;
  setOpenCard?: (i: number | null) => void;
}

function DevCard({ children, index = 0, openCard = null, setOpenCard }: DevCardProps) {
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

DevCard.displayName = "DevCard";

interface DevCardsProps {
  children: React.ReactNode;
  openCard: number | null;
  setOpenCard: (i: number | null) => void;
}

function DevCards({ children, openCard, setOpenCard }: DevCardsProps) {
  let cardIndex = 0;
  const enhanced = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (child.type as React.FC).displayName === "DevCard") {
      const idx = cardIndex++;
      return React.cloneElement(child as React.ReactElement<DevCardProps>, { index: idx, openCard, setOpenCard });
    }
    return child;
  });
  return (
    <motion.div className="dev-cards" variants={containerVariants} initial="hidden" animate="visible">
      {enhanced}
    </motion.div>
  );
}

function CorridorBand() {
  return (
    <div className="corridor-band">
      <div className="corridor-band-label">CORRIDOR READING</div>
      <p className="corridor-band-text">
        This isn&apos;t just one project. It&apos;s multiple investments showing up in the same area at the same time — cultural infrastructure, transit, public money, and private capital, all together.
      </p>
    </div>
  );
}

export default function Developments() {
  const [active, setActive] = useState("crenshaw");
  const [openCard, setOpenCard] = useState<number | null>(null);
  const meta = chapterMeta[active];

  useEffect(() => {
    setOpenCard(null);
  }, [active]);

  return (
    <section id="developments">
      <div className="container">
        <div className="dev-header">
          <Reveal>
            <div className="section-tag">35+ Development Intelligence</div>
            <h2 className="section-headline">All 11 Chapters.<br />Every Micro-Market.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-body">Each development is an investment signal grounded in the source document. Every project translated into what it means for your property, your lot, and your window to act.</p>
          </Reveal>
        </div>

        {/* Chapter tabs */}
        <div className="dev-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`dev-tab${active === t.id ? " active" : ""}`}
              onPointerDown={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Chapter intro strip */}
        <div className="chapter-intro-strip">
          <span className="chapter-intro-label">CHAPTER INTELLIGENCE</span>
          <p className="chapter-intro-text">Each chapter organizes the corridor by geography, capital movement, and property relevance. Use the tabs to scan the signal clusters — then open the projects that matter most to your property, your timing, and your strategy.</p>
        </div>

        {/* Chapter meta row */}
        <div className="chapter-meta-row">
          <div className="chapter-meta-item">
            <span className="chapter-meta-label">ACTIVE SIGNALS</span>
            <span className="chapter-meta-value">{meta.signals}</span>
          </div>
          <div className="chapter-meta-item">
            <span className="chapter-meta-label">PRIMARY FORCE</span>
            <span className="chapter-meta-value">{meta.force}</span>
          </div>
          <div className="chapter-meta-item">
            <span className="chapter-meta-label">PROPERTY LENS</span>
            <span className="chapter-meta-value">{meta.lens}</span>
          </div>
        </div>

        <div className="dev-panels">
          <div key={active}>

            {active === "crenshaw" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-active">Active · 2025–2026 Phased</div>
                  <div className="dev-card-title">Destination Crenshaw</div>
                  <div className="dev-card-invest">$100–122M · 1.3-Mile Outdoor Museum · K Line Spine</div>
                  <div className="dev-card-body">The largest Black-focused public art program in the United States. Over 100 commissioned works by artists including Kehinde Wiley and Alison Saar. Sankofa Park at Leimert Park Village is the northern anchor with elevated viewing platforms and major sculptural installations.</div>
                  <div className="dev-card-halfmile">&ldquo;Zillow doesn&apos;t know the difference between a property half a mile from Leimert Park Station and one that&apos;s right on it. That half mile is everything in South LA.&rdquo;</div>
                  <div className="dev-card-signal">Properties within half a mile of Destination Crenshaw are positioned for long-term appreciation and short-term rental demand spikes during events.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-active">Active · Fit-Out 2025–2026</div>
                  <div className="dev-card-title">Crenshaw Lofts Tech Center <span className="note-badge">New Addition</span></div>
                  <div className="dev-card-invest">$29M NMTC · 190 Units (22 ELI) · 4607 Crenshaw Blvd</div>
                  <div className="dev-card-body">Seven-story building right on the K Line with a ground-floor Tech & Entertainment Center powered by Live Nation — music, live production, and digital media training for South LA youth. Crenshaw Culinary Arts Café gives young people a path into the food industry. Federal NMTC and congressional earmark funding confirm flagship equity status.</div>
                  <div className="dev-card-signal">Projects like this tend to increase demand for nearby commercial space, housing, and local businesses. The area around Leimert Park Station is becoming more attractive to employers, entrepreneurs, and investors.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-active">Active · 20/20 Vision Initiative</div>
                  <div className="dev-card-title">Leimert Park Village Cultural District</div>
                  <div className="dev-card-invest">Cultural Protection Overlay · Zoning-Protected Cultural Identity</div>
                  <div className="dev-card-body">The 20/20 Vision Initiative has officially branded Leimert Park as a protected hub for Black creatives. Anchor institutions include the World Stage, Degnan gallery row, and Hilltop Coffee + Kitchen (co-owned by Issa Rae) — a FUBU economic network that sets the neighborhood&apos;s cultural floor.</div>
                  <div className="dev-card-signal">Creative-class anchor businesses function as neighborhood quality signals to buyers and investors — and as a permanent barrier to cultural erasure.</div>
                </DevCard>
                <CorridorBand />
                <DevCard>
                  <div className="dev-card-status s-planned">Phased · K Line Station Areas</div>
                  <div className="dev-card-title">Crenshaw Wall Pocket Parks</div>
                  <div className="dev-card-invest">Public Green Infrastructure · K Line At-Grade Stations</div>
                  <div className="dev-card-body">A series of small-scale public plazas and pocket parks activating the at-grade K Line stations along the Crenshaw route. These third spaces increase walkability scores, reduce heat islands, and directly lift adjacent residential land values.</div>
                  <div className="dev-card-signal">Green space at transit stops drives ADU demand — renters pay more to live in walkable, activated neighborhoods.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "innovation" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-operational">Operational · Must-Add</div>
                  <div className="dev-card-title">The Beehive Campus — SoLa Impact</div>
                  <div className="dev-card-invest">104,000 sq ft · 8 Red-Brick Warehouses · 961 E. 61st St, Goodyear Tract</div>
                  <div className="dev-card-body">Adaptive reuse Opportunity Zone business campus converting eight historic warehouse buildings into the flagship Black-led OZ innovation campus in the country. Incubates minority and women-owned businesses, provides tech training, and hosts cultural programming with on-campus bioswale and community gardens.</div>
                  <div className="dev-card-signal">Proves that underused industrial land in South LA can be turned into high-value innovation campuses. Sets a model for blocks off Slauson, Central, and Alameda.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-operational">Operational & Expanding · Flagship</div>
                  <div className="dev-card-title">SoLa Technology & Entrepreneurship Center</div>
                  <div className="dev-card-invest">13,000 sq ft · Powered by Riot Games · Esports Arena + VR + Mac Labs</div>
                  <div className="dev-card-body">The first-of-its-kind tech hub in South LA. Includes an esports arena, Mac labs, podcast studio, materials science lab, and VR suites. Trains South LA youth and adults in tech, gaming, and digital careers. Satellite expansion now planned at the Crenshaw Lofts via the $29M NMTC-financed center.</div>
                  <div className="dev-card-signal">Tech workforce campuses attract young professional renters who prioritize proximity to training — a long-term rent demand driver in surrounding blocks.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "exposition" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-construction">Opening September 22, 2026</div>
                  <div className="dev-card-title">Lucas Museum of Narrative Art</div>
                  <div className="dev-card-invest">~$1 Billion · 300,000+ sq ft / 11 Acres · Founded by George Lucas & Mellody Hobson</div>
                  <div className="dev-card-body">One of the most significant cultural institutions built in Los Angeles in a generation. The collection spans 40,000+ works of narrative art with two theaters, library, restaurant, café, retail, and extensive public park space. Positioned to draw domestic and international visitors, elevating Exposition Park alongside West LA and DTLA museum districts.</div>
                  <div className="dev-card-signal">International tourism traffic drives hospitality, short-term rental, and high-amenity housing demand in Vermont Square, Exposition Park, and University Park.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-active">North + South Anchor Framework</div>
                  <div className="dev-card-title">The &ldquo;Two Anchor&rdquo; Story</div>
                  <div className="dev-card-invest">Lucas Museum (North) + Hollywood Park $5B+ (South)</div>
                  <div className="dev-card-body">Hollywood Park in Inglewood is the southern anchor — $5B+ in sports, entertainment, and hospitality. The Lucas Museum is now the northern anchor — a $1B cultural institution driving international visitation along the Expo Line corridor. The Golden Corridor now has two mega-anchors bookending it. Every neighborhood between them is now sitting between two major anchors.</div>
                  <div className="dev-card-signal">This is a structural change in how South LA is perceived by investors, buyers, and the global press — not a narrative, a documented investment reality.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "baldwin" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-construction">Multi-Phase · Active Construction</div>
                  <div className="dev-card-title"><a className="copy-link" href="https://bhcppartnership.com" target="_blank" rel="noopener noreferrer">Baldwin Hills Crenshaw Plaza</a> Master Plan</div>
                  <div className="dev-card-invest">$1B+ Total · 42 Acres · Developer: Harridge Development Group</div>
                  <div className="dev-card-body">Complete transformation of the historic mall into a mixed-use district with residential, retail, creative office, and community space. Among the most significant commercial redevelopments in South LA&apos;s history, with multiple residential phases underway. Full build-out will reshape 42 acres into a live-work-play district.</div>
                  <div className="dev-card-signal">A $1B master plan is the reason every property near here is worth more. Residential, ADU, and small commercial investments within a half-mile all benefit from what's being built.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">Under Construction · Active</div>
                  <div className="dev-card-title">Harridge Residential — Phase 1 & 2</div>
                  <div className="dev-card-invest">636 + 290 Units · Mixed-Income · K Line Adjacent</div>
                  <div className="dev-card-body">Two residential phases delivering over 900 combined units to the Baldwin Hills/Crenshaw node, adding a meaningful new renter pool to the area and driving demand for supporting retail, dining, and services in the surrounding blocks.</div>
                  <div className="dev-card-signal">900 new units near K Line stations creates secondary rental demand that radiates into adjacent single-family streets — lifting property values and rental rates across the surrounding blocks.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">Under Development · $225M</div>
                  <div className="dev-card-title"><a className="copy-link" href="https://stockerstreetcreative.com" target="_blank" rel="noopener noreferrer">Stocker Street Creative</a> — Film Production Campus</div>
                  <div className="dev-card-invest">$225M · BIPOC Film Production · Film Stages + Creative Office</div>
                  <div className="dev-card-body">A $225M production campus designed to incubate and serve BIPOC creators, shifting the center of gravity of the entertainment industry southward. Film production campuses generate sustained, high-income employment — a powerful long-term demand driver for housing within the commute radius.</div>
                  <div className="dev-card-signal">Where production campuses go, housing demand follows the workers. This is the &ldquo;Burbank effect&rdquo; happening in South LA. Stocker Street is what pulls creative industry money into Baldwin Hills.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "viewpark" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-active">Live · Adopted March 2025</div>
                  <div className="dev-card-title">Westside Area Plan — Opportunity Sites</div>
                  <div className="dev-card-invest">5,548 New Units Unlocked · 4–6 Story Mixed-Use Upzoning</div>
                  <div className="dev-card-body">LA County&apos;s Westside Area Plan has rezoned major commercial sites in Ladera Heights, View Park, and Windsor Hills for 4–6 story mixed-use development. Ladera Center, the Wateridge site, and the Slauson/Fairfax big-box corridor are designated opportunity sites that can now support density previously prohibited. This is not a proposal — it is current law.</div>
                  <div className="dev-card-signal">The gap between what properties cost today and what the new zoning allows hasn't closed yet — prices haven't caught up to what the law now permits.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-planned">Proposed · Luxury Emergence Signal</div>
                  <div className="dev-card-title">The View — Luxury Condo Proposal</div>
                  <div className="dev-card-invest">View Heights / View Park · First Significant Luxury Condo Proposal</div>
                  <div className="dev-card-body">The first significant luxury condominium proposal in the View Heights/View Park area. Signals that developers are now pricing in the higher demand for housing being generated by growth across South LA and the Westside Area Plan upzoning.</div>
                  <div className="dev-card-signal">Luxury condo proposals showing up in View Park and Windsor Hills means developers have already done the math — and they like what they see. Buyers should move before those numbers become the new normal.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "inglewood" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-construction">Phased Delivery Underway</div>
                  <div className="dev-card-title">Hollywood Park Mixed-Use District & Studios</div>
                  <div className="dev-card-invest">$5B+ Network of Projects · 300 Acres · FIFA 2026 / Super Bowl 2027 / Olympics 2028</div>
                  <div className="dev-card-body">300-acre master-planned district surrounding SoFi Stadium delivering retail, residential, office, hotel, and film production infrastructure. Hollywood Park Studios adds film and TV production capacity immediately adjacent to the sports complex, creating a year-round economic engine beyond event days.</div>
                  <div className="dev-card-signal">Every major event at SoFi or Intuit Dome generates sustained short-term rental demand in Inglewood, Hawthorne, and Ladera Heights. Existing homeowners in the surrounding Inglewood neighborhoods are positioned to capture that demand.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">Under Construction · Hospitality Signal</div>
                  <div className="dev-card-title"><a className="copy-link" href="https://www.sofistadium.com/news/detail/kali-hotel-and-rooftop-autograph-collection-tops-out-at-hollywood-park-in-inglewood-california" target="_blank" rel="noopener noreferrer">Kali Hotel</a> — Marriott Autograph Collection</div>
                  <div className="dev-card-invest">$300M · Only Hotel Permitted in Hollywood Park Zone</div>
                  <div className="dev-card-body">The only hotel permitted within the Hollywood Park Specific Plan zone. The Kali Hotel&apos;s $300M investment in the Marriott Autograph Collection brand signals that the global hospitality industry is betting on Inglewood&apos;s long-term permanence as an event and entertainment destination.</div>
                  <div className="dev-card-signal">When institutional hospitality capital bets $300M on a single site, nearby residential real estate is already underpriced relative to where the market is heading.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-operational">Operational · Year-Round Activation</div>
                  <div className="dev-card-title">Intuit Dome Arena — LA Clippers</div>
                  <div className="dev-card-invest">NBA Arena + Entertainment Complex · 41+ Home Games Annually</div>
                  <div className="dev-card-body">The new home of the LA Clippers provides year-round activation for the Hollywood Park district, adding 41+ NBA regular season events annually to the already dense event calendar. The Three-Dome Effect: SoFi + Intuit Dome + Lucas Museum = three gravitational demand anchors pulling investment into one area.</div>
                  <div className="dev-card-signal">Fixed event dates (2026, 2027, 2028) create predictable windows — position before they price everyone else in.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "westadams" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-active">Delivered / Delivering · Institutional</div>
                  <div className="dev-card-title">CIM Group Mixed-Use Portfolio</div>
                  <div className="dev-card-invest">$2,450–$3,395/mo Rents · 5109 & 5201 W. Adams Blvd · Expo Line Transit Corridor</div>
                  <div className="dev-card-body">CIM Group&apos;s sustained West Adams investment has established a new rent baseline for the corridor. Multiple delivered buildings at Expo Line stations proving that institutional-grade rental rates are achievable and sustainable in South LA. The cumulative density is transforming West Adams into a transit-dense, creative-class neighborhood.</div>
                  <div className="dev-card-signal">West Adams has proven that $2,450–$3,395/mo is real and sustainable in South LA. Those numbers are now pulling rents up across South LA — east and south.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">Opening 2026</div>
                  <div className="dev-card-title">Museum of Ice Cream — West Adams</div>
                  <div className="dev-card-invest">5252 W. Adams Blvd · Experiential Cultural Retail · Three-Story Building</div>
                  <div className="dev-card-body">A new Museum of Ice Cream location in West Adams — the type of experiential retail anchor that signals neighborhood emergence to media, tourists, and the broader market. Experiential destinations generate sustained foot traffic that supports surrounding retail, dining, and residential demand.</div>
                  <div className="dev-card-signal">Experiential retail at this scale drives media coverage and tourist visitation — two dynamics that introduce a neighborhood to buyers who previously wouldn&apos;t have considered it.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "evermont" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-active">Move-Ins Underway · 2025</div>
                  <div className="dev-card-title">Evermont District — Luminus & Vista Affordable Housing</div>
                  <div className="dev-card-invest">~$300M Total · ~180 Affordable Units · Bridge Housing + CRCD + Primestor</div>
                  <div className="dev-card-body">Two housing phases delivering approximately 180 deeply affordable units for families and seniors. A $40M NMTC allocation supported the retail and office components. The district includes a Target-anchored retail center, transit plaza, and Metro training & innovation center. Transforms a 4.2-acre LA County site vacant since 1992 into a national model.</div>
                  <div className="dev-card-signal">A new mixed-use development at Vermont & Manchester will boost value for the surrounding single-family streets. The same transit-area value boost we saw in West Adams is now happening here.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-operational">Built and Operating · Must-Track</div>
                  <div className="dev-card-title">SEED LA Public Boarding School</div>
                  <div className="dev-card-invest">Public STEM + College Prep Boarding School · Evermont Anchor</div>
                  <div className="dev-card-body">A rare public boarding school with a STEM focus — one of the most significant educational investments in South LA in a generation. School quality is the single most powerful driver of home values. SEED LA&apos;s presence at Evermont will push prices up across the surrounding neighborhood for years to come.</div>
                  <div className="dev-card-signal">Premium school facilities within a half-mile uplift residential values by 5–15%. SEED LA is the type of anchor that reshapes family buyer demand in an entire zip code.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "watts" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-construction">Under Construction · Must-Add</div>
                  <div className="dev-card-title">Jordan Downs Redevelopment</div>
                  <div className="dev-card-invest">~$1B Total · $700M Deployed by 2025 · 1,500+ Homes + 115K sq ft Retail</div>
                  <div className="dev-card-body">Complete transformation of legacy WWII-era public housing into a mixed-income, mixed-use district. Multiple phases completed including Cypress View (119 units) and Kalmia Rose (76 units). Full build-out: 1,500+ homes, 115,000 sq ft retail, and 9 acres open space through late 2020s. Partners: HACLA + Bridge + Michaels.</div>
                  <div className="dev-card-signal">Watts is at the early-stage appreciation phase — the same position West Adams occupied in 2018–19. Investors who identified West Adams early captured the highest returns. That moment is now in Watts.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">In Progress</div>
                  <div className="dev-card-title">Watts Community Center</div>
                  <div className="dev-card-invest">~90,000 sq ft · Labs, Makerspace, Co-Working, Wellness</div>
                  <div className="dev-card-body">A planned 90,000 sq ft civic focal point for Watts residents featuring learning labs, makerspace, co-working, cultural venues, wellness facilities, and youth programming. Paired with Jordan Downs Central Park&apos;s community pool, sports fields, and courts — the largest addition of green space in Watts in decades.</div>
                  <div className="dev-card-signal">High-quality civic infrastructure is the leading indicator of neighborhood stabilization and appreciation.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-active">Multi-Year Ongoing</div>
                  <div className="dev-card-title">Watts Rising — TCC Climate Portfolio</div>
                  <div className="dev-card-invest">CA Transformative Climate Communities · Solar + Green Infrastructure + Housing</div>
                  <div className="dev-card-body">Multi-project climate and community resilience initiative funded by California&apos;s Transformative Climate Communities program. Covers solar installation, green infrastructure, affordable housing support, and small business development in Watts and adjacent South LA.</div>
                  <div className="dev-card-signal">Public climate equity funding is flowing into infrastructure, not just buildings — a sustained investment signal that moves beyond a single development cycle.</div>
                </DevCard>
                <CorridorBand />
                <DevCard>
                  <div className="dev-card-status s-active">Funded · Green Infrastructure</div>
                  <div className="dev-card-title">Watts Civic Center — Serenity Greenway</div>
                  <div className="dev-card-invest">~$2.7M Safe Clean Water Funding · Green Infrastructure + Mobility</div>
                  <div className="dev-card-body">Green infrastructure and mobility project transforming an alley system near Watts Civic Center into a landscaped pedestrian and stormwater corridor connecting schools, civic center, parks, and the library.</div>
                  <div className="dev-card-signal">Green investments like this increase walkability scores and residential desirability — proven drivers of value in comparable neighborhoods across LA.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "compton" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-construction">Under Construction · Strong Secondary</div>
                  <div className="dev-card-title">Compton Innovation Hub</div>
                  <div className="dev-card-invest">300 Apartments (60 Affordable) · 44,000 sq ft Innovation Space · KBK Enterprises</div>
                  <div className="dev-card-body">7-story mixed-use complex 3 blocks from Metro A-Line Compton Station combining 300 apartments, 44,000 sq ft Compton Innovation Hub for co-working, learning labs, and studios, and ground-floor retail. KBK Enterprises&apos; first West Coast development — a signal that capital from outside Los Angeles is now looking at Compton as a viable destination.</div>
                  <div className="dev-card-signal">The A-Line now runs Compton to Downtown LA to Azusa. A transit-connected innovation hub at Compton Station extends that growth pattern southward and opens a new opportunity for ADU investment near the rail line.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-planned">Environmental Review · Watchlist</div>
                  <div className="dev-card-title">Compton Station TOD Specific Plan</div>
                  <div className="dev-card-invest">Area Specific Plan · Metro A-Line Compton Station Zone</div>
                  <div className="dev-card-body">Compton&apos;s equivalent of the Westside Area Plan — a specific planning tool that will guide the rezoning of the Compton Station area into a mixed-use, walkable district with potential business improvement district and density bonus mechanisms. Currently in environmental review.</div>
                  <div className="dev-card-signal">The time to position in a transit-focused area is before the specific plan is adopted — not after. Compton is at that moment now.</div>
                </DevCard>
              </DevCards>
            )}

            {active === "jefferson" && (
              <DevCards openCard={openCard} setOpenCard={setOpenCard}>
                <DevCard>
                  <div className="dev-card-status s-active">Active · Transit-Adjacent Infill</div>
                  <div className="dev-card-title">2903 W. Jefferson — Mixed-Use Infill</div>
                  <div className="dev-card-invest">Jefferson Park / Expo Line Corridor · Emerging Value Play</div>
                  <div className="dev-card-body">Transit-adjacent infill development along the Jefferson corridor adding density and housing supply proximate to Expo Line stations. Jefferson Park sits at the intersection of the Expo Line and the Crenshaw/Baldwin Hills area.</div>
                  <div className="dev-card-signal">Jefferson Park infill is earlier in the appreciation cycle with significant upside relative to West Adams comparables. The same pressure that repriced West Adams is now moving east.</div>
                </DevCard>
                <DevCard>
                  <div className="dev-card-status s-construction">New Build · CDFI Capital Anchor</div>
                  <div className="dev-card-title">PCR Business Finance — New Crenshaw HQ</div>
                  <div className="dev-card-invest">$45.5M Distributed · ~500 Small Businesses Supported · CDFI Headquarters</div>
                  <div className="dev-card-body">PCR Business Finance, a CDFI that has distributed over $45.5M in grants to approximately 500 small businesses affected by Metro K Line construction, is building a permanent headquarters on Crenshaw. A CDFI headquarters like this keeps small business funding flowing into the neighborhood.</div>
                  <div className="dev-card-signal">Where a CDFI anchors, commercial streets stabilize and small business formation increases. This is infrastructure for the business community, not just real estate.</div>
                </DevCard>
              </DevCards>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
