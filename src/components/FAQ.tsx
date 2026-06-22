"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is Stocker Street Creative and why does it matter?",
    a: "Stocker Street Creative is a $225M BIPOC-focused film production campus in Baldwin Hills — built to incubate Black and minority creators and shift the entertainment industry's center of gravity southward. Production campuses generate sustained high-income employment, which drives housing demand within the commute radius. This is the \"Burbank effect\" now happening in South LA. For homeowners and investors in the Baldwin Hills/Crenshaw area, it means sustained demand for housing that doesn't go away.",
  },
  {
    q: "If I buy now — or already own and build an ADU — what does this property look like in 10 years?",
    a: "Sankofa Park, the Crenshaw Mall redevelopment, Stocker Street Creative — once these finish building out, this neighborhood doesn't look the same. We're already seeing the kind of appreciation that points toward 50% or more over the next decade, and AB 1033 means current homeowners and anyone building an ADU now are positioned to capture that early, not after it's priced in. For a lot of families in this community, that's not just equity — that's generational wealth that didn't exist here a decade ago.",
  },
  {
    q: "Why does the \"half-mile rule\" matter for South LA properties?",
    a: "Every major development in this Brief is explicitly tied to transit proximity. Properties within a half-mile of K Line, Expo Line, and A Line stations experience the strongest development pressure and the greatest long-term appreciation potential. The half-mile threshold is where walkability scores shift, ADU demand spikes, and big investors begin to take notice. It's the difference between riding the corridor and watching it from a distance. SEED LA's research also confirms that premium school facilities within a half-mile uplift residential values by 5–15% — a second half-mile dynamic at play in Evermont.",
  },
  {
    q: "Is Compton actually investable right now, or is this premature?",
    a: "Compton is at the early-stage appreciation phase — the same position West Adams occupied in 2018–2019. The Compton Innovation Hub (300 apartments, 44,000 sq ft of innovation space, first West Coast project for KBK Enterprises) is the kind of signal that marks the transition from watchlist to active opportunity. The Compton Station TOD Specific Plan is still in environmental review — meaning the window before the zoning officially changes is still open. That window won't stay open indefinitely. The A-Line now connects Compton to Downtown LA and Azusa, making transit access a structural reality, not a future promise.",
  },
  {
    q: "What is AB 1033 and why does it matter specifically in South LA?",
    a: "AB 1033 is California legislation enabling homeowners to sell an ADU as a separate piece of real estate — entirely independent from the primary residence. For South LA homeowners in a corridor with $5B+ in active development, this means a lot you already own can generate rental income today or be sold as its own deed tomorrow. With construction costs at ~$280/sq ft and 60–90 day permit timelines, the math is accessible for most existing owners.",
  },
  {
    q: "What do the FIFA/Super Bowl/Olympics events mean for property owners?",
    a: "FIFA 2026, Super Bowl 2027, and the 2028 Olympics are fixed dates — not projections. They are concentrating global capital in Inglewood and creating predictable demand surges for hospitality, short-term rentals, and investor visibility. The Kali Hotel ($300M, Marriott Autograph Collection — the only hotel permitted in Hollywood Park zone), Hollywood Park Studios, and the Intuit Dome are part of a network built for international audiences. Properties in the area around Hollywood Park are not just benefiting from local growth — they're in the path of global event infrastructure. The time to get in front of this is before these events — not during.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-header">
          <Reveal>
            <div className="section-tag">FAQ</div>
            <h2 className="section-headline">The Questions<br />That Matter Most</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-body">These are the questions I get asked most. Here are the straight answers.</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{faq.q}</span>
                  <motion.span
                    className="faq-toggle"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 280, damping: 30 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-answer-inner">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
