"use client";
import Reveal from "./Reveal";

export default function FourForcesVisual() {
  return (
    <section className="four-forces-section" id="solution" aria-labelledby="four-forces-title">
      <div className="four-forces-wrap">

        {/* Copy block */}
        <Reveal className="ff-copy-block">
          <div className="ff-kicker">The Solution</div>
          <h2 className="ff-title" id="four-forces-title">
            Four Things Moving<br />
            South LA.<br />
            One Report That Maps<br />
            All Of It.
          </h2>
          <div className="ff-rule" />
          <p className="ff-copy">
            This brief maps 35+ projects across 11 South LA neighborhoods.
            Not as news — as a guide. Every development in here is broken down
            by what it actually means for your property, your timing, and your next move.
          </p>
        </Reveal>

        {/* Grid + hub */}
        <Reveal className="ff-grid-wrap" delay={0.12}>
          <div className="corridor-hub" aria-hidden="true">
            <div className="hub-text">South LA<br />Corridor</div>
          </div>

          <div className="ff-grid">

            {/* 01 Cultural Reclamation */}
            <article className="force-card">
              <div className="card-top">
                <div className="card-num">01</div>
                <div className="card-title">Cultural Reclamation</div>
              </div>
              <div className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 260 100" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 78 H236" />
                  <path d="M38 78 V52 H72 V78" />
                  <path d="M72 78 V42 H118 V78" />
                  <path d="M118 78 V48 H168 V78" />
                  <path d="M168 78 V58 H205 V78" />
                  <path d="M35 51 C78 20, 132 19, 193 40 C169 26, 119 20, 72 33 C55 38, 42 44, 35 51Z" />
                  <path d="M86 78 V55 M101 78 V55 M140 78 V57 M156 78 V57" />
                  <path d="M204 78 V29" />
                  <path d="M204 32 C194 18, 181 19, 174 31" />
                  <path d="M204 32 C211 18, 224 19, 231 31" />
                  <path d="M204 33 C192 32, 185 40, 181 50" />
                  <path d="M204 33 C216 32, 224 40, 228 50" />
                </svg>
              </div>
              <p className="metric-label">Destination Crenshaw</p>
              <p className="metric">$100–122M</p>
              <p className="card-body">
                Leimert Park Village&apos;s 20/20 Vision and the creative economy
                rewriting Black cultural identity into permanent infrastructure along the K Line spine.
              </p>
              <div className="impact">
                <span className="impact-label">Key Impact</span>
                <span className="impact-items">Cultural Identity <span className="dot">•</span> Tourism <span className="dot">•</span> Jobs</span>
              </div>
            </article>

            {/* 02 Innovation & Tech */}
            <article className="force-card">
              <div className="card-top">
                <div className="card-num">02</div>
                <div className="card-title">Innovation &amp; Tech</div>
              </div>
              <div className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 260 100" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M25 80 H238" />
                  <path d="M50 80 V52 L94 36 L138 52 V80" />
                  <path d="M138 80 V28 L206 54 V80" />
                  <path d="M65 56 H82 M65 67 H82 M100 56 H118 M100 67 H118" />
                  <path d="M154 48 H168 M154 60 H168 M154 72 H168 M180 58 H194 M180 70 H194" />
                  <path d="M210 80 V63" />
                  <circle cx="210" cy="57" r="10" />
                  <path d="M223 80 V68" />
                  <circle cx="223" cy="62" r="7" />
                  <path d="M211 38 C218 29, 229 30, 234 39 C239 47, 233 57, 223 59 C213 61, 203 56, 202 47 C201 43, 205 39, 211 38Z" />
                </svg>
              </div>
              <p className="metric-label">Beehive + SoLa Tech</p>
              <p className="metric">104,000 sq ft</p>
              <p className="card-body">
                The Beehive Campus, Crenshaw Lofts&apos; tech center powered by Live Nation,
                the SoLa Tech Center, and Compton&apos;s Innovation Hub.
              </p>
              <div className="impact">
                <span className="impact-label">Key Impact</span>
                <span className="impact-items">Jobs <span className="dot">•</span> Innovation <span className="dot">•</span> Future Economy</span>
              </div>
            </article>

            {/* 03 Equity Redevelopment */}
            <article className="force-card">
              <div className="card-top">
                <div className="card-num">03</div>
                <div className="card-title">Equity Redevelopment</div>
              </div>
              <div className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 260 100" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 80 H236" />
                  <path d="M50 80 V42 L86 28 L122 42 V80" />
                  <path d="M122 80 V33 L164 22 L206 33 V80" />
                  <path d="M65 51 H74 M88 51 H97 M65 63 H74 M88 63 H97" />
                  <path d="M139 42 H149 M164 42 H174 M188 42 H198" />
                  <path d="M139 56 H149 M164 56 H174 M188 56 H198" />
                  <path d="M139 70 H149 M164 70 H174 M188 70 H198" />
                  <path d="M40 80 V67" />
                  <circle cx="40" cy="61" r="9" />
                  <path d="M220 80 V67" />
                  <circle cx="220" cy="61" r="9" />
                </svg>
              </div>
              <p className="metric-label">Jordan Downs + Evermont</p>
              <p className="metric">$1.3B</p>
              <p className="card-body">
                America&apos;s largest public housing transformation and Evermont&apos;s
                mixed-use district converting a 1992 riot lot into a national model.
              </p>
              <div className="impact">
                <span className="impact-label">Key Impact</span>
                <span className="impact-items">Housing <span className="dot">•</span> Equity <span className="dot">•</span> Generational Wealth</span>
              </div>
            </article>

            {/* 04 Transit & Climate */}
            <article className="force-card">
              <div className="card-top">
                <div className="card-num">04</div>
                <div className="card-title">Transit &amp; Climate</div>
              </div>
              <div className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 260 100" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M26 80 H235" />
                  <path d="M72 80 V32" />
                  <path d="M72 35 C62 22, 50 23, 43 35" />
                  <path d="M72 35 C82 22, 94 23, 101 35" />
                  <path d="M102 80 L115 46 L215 22 L235 38 V80 Z" />
                  <path d="M120 48 H145 V67 H112" />
                  <path d="M154 41 H179 V67 H151" />
                  <path d="M188 34 H214 L227 44 V67 H186 Z" />
                  <circle cx="127" cy="80" r="5" />
                  <circle cx="209" cy="80" r="5" />
                  <path d="M226 50 H234" />
                  <path d="M219 30 C226 31 231 35 235 41" />
                </svg>
              </div>
              <p className="metric-label">The K Line Spine</p>
              <div className="transit-line" aria-label="Transit station diagram">
                <svg viewBox="0 0 420 82">
                  <line x1="24" y1="28" x2="396" y2="28" stroke="#CFAE6D" strokeWidth="3" />
                  <circle cx="40" cy="28" r="7" fill="#E6C98A" stroke="#9F7A3A" strokeWidth="1" />
                  <circle cx="112" cy="28" r="7" fill="#E6C98A" stroke="#9F7A3A" strokeWidth="1" />
                  <circle cx="184" cy="28" r="7" fill="#E6C98A" stroke="#9F7A3A" strokeWidth="1" />
                  <circle cx="256" cy="28" r="7" fill="#E6C98A" stroke="#9F7A3A" strokeWidth="1" />
                  <circle cx="328" cy="28" r="7" fill="#E6C98A" stroke="#9F7A3A" strokeWidth="1" />
                  <circle cx="388" cy="28" r="7" fill="#4A5A6D" stroke="#CFAE6D" strokeWidth="1" />
                  <text x="40" y="57" textAnchor="middle" className="station-label">Crenshaw/</text>
                  <text x="40" y="71" textAnchor="middle" className="station-label">Expo</text>
                  <text x="112" y="57" textAnchor="middle" className="station-label">Leimert</text>
                  <text x="112" y="71" textAnchor="middle" className="station-label">Park</text>
                  <text x="184" y="57" textAnchor="middle" className="station-label">Hyde</text>
                  <text x="184" y="71" textAnchor="middle" className="station-label">Park</text>
                  <text x="256" y="62" textAnchor="middle" className="station-label">Inglewood</text>
                  <text x="328" y="57" textAnchor="middle" className="station-label">Expo/</text>
                  <text x="328" y="71" textAnchor="middle" className="station-label">Vermont</text>
                  <text x="388" y="62" textAnchor="middle" className="station-label station-muted">Compton</text>
                </svg>
              </div>
              <p className="card-body">
                The Metro K Line, Expo Line, and A Line create a transit spine
                anchoring property values across South LA.
              </p>
              <div className="impact">
                <span className="impact-label">Key Impact</span>
                <span className="impact-items">Mobility <span className="dot">•</span> Access <span className="dot">•</span> Long-Term Value</span>
              </div>
            </article>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
