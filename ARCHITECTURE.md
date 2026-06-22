# South LA Media — Corridor Brief Architecture Reference

> **Purpose:** This document describes the complete, final architecture of Issue 001 of the South LA Media Corridor Brief. Paste it into any new Claude Code session to immediately understand the full system and build Issue 002+ without re-explaining anything.

---

## 1. Tech Stack

**Framework:** Next.js 16.2.6 (App Router), React 19, TypeScript 5  
**Styling:** Plain CSS in `src/app/globals.css`. Tailwind is imported (`@import "tailwindcss"`) but **not used for utility classes** — all styling is custom CSS. Do not add Tailwind utilities; write CSS classes.  
**Animation:** Framer Motion 12 (`motion.div`, `AnimatePresence`, spring transitions)  
**Fonts:** Google Fonts — loaded in `src/app/layout.tsx`
- `Cormorant Garamond` — serif, weights 400/600/700, italic variants (headlines, pull quotes, stat numbers)
- `Montserrat` — sans-serif, weights 300–700 (body, labels, nav, badges)

**Hosting:** Vercel — auto-deploys on every push to `main` branch  
**Repo:** `https://github.com/Marcusrich66/southla-intel.git`  
**Dev server:** `npm run dev` (port 3000)

### Directory Structure
```
southla-intel/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Font imports, metadata, html/body wrapper
│   │   ├── page.tsx          # Main page — all sections assembled here
│   │   └── globals.css       # ALL styling (one file, no CSS modules)
│   └── components/
│       ├── MotionNav.tsx          # Fixed nav bar with scroll animation
│       ├── HeroHeadline.tsx       # Animated hero headline
│       ├── HeroStats.tsx          # Animated stat counters in hero
│       ├── Reveal.tsx             # Scroll-triggered fade/slide wrapper
│       ├── MotionLink.tsx         # Animated <a> wrapper
│       ├── FourForcesVisual.tsx   # 4-card + hub diagram (The Four Forces)
│       ├── Developments.tsx       # 11-chapter tabbed accordion section
│       ├── CommunityCapital.tsx   # PCR Business Finance section
│       ├── PublishersLetter.tsx   # Side-panel Publisher's Letter
│       ├── FAQ.tsx                # FAQ accordion component
│       ├── Lightbox.tsx           # Full-screen image lightbox
│       ├── BackToTop.tsx          # Floating back-to-top button
│       └── RenderingButton.tsx    # "View Rendering" button in hero
└── ARCHITECTURE.md           # This file
```

**Key rule:** Every component file begins with `"use client";` — the entire page is client-side rendered (required for Framer Motion and React state).

---

## 2. Brand System

### Colors (CSS custom properties defined in `:root`)

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#112030` | Primary dark background, body text on light |
| `--navy-deep` | `#0a1520` | Deepest navy — hero background |
| `--navy-mid` | `#1a3045` | Mid navy |
| `--navy-medium` | `#10263D` | Secondary dark sections |
| `--navy-blueprint` | `#183553` | Editorial dark sections |
| `--gold-base` | `#cfae6d` | Primary gold — borders, icons, labels |
| `--gold-hi` | `#e6c98a` | Highlight gold — hover states |
| `--gold-lo` | `#9f7a3a` | Dark gold — subtext, invest lines |
| `--gold-gradient` | `linear-gradient(135deg, #9f7a3a 0%, #cfae6d 40%, #e6c98a 50%, #cfae6d 60%, #9f7a3a 100%)` | Buttons, badges, marquee band, text highlights |
| `--white` | `#ffffff` | |
| `--steel` | `#4a5a6d` | Body text on white sections |
| `--steel-light` | `#7a8a9d` | Secondary text |
| `--off-white` | `#f8f5f0` | |
| `--ivory` | `#F4EFE3` | Reserved for future editorial use |
| `--sand` | `#E8DCC5` | Soft dividers on ivory surfaces |

### Typography Scale

| Class | Font | Size | Weight | Usage |
|---|---|---|---|---|
| `.hero-headline` | Cormorant Garamond | `clamp(2.8rem, 5.5vw, 4.5rem)` | 700 | Hero main headline |
| `.hero-subhead` | Cormorant Garamond | `clamp(1.1rem, 2vw, 1.5rem)` | 400 italic | Hero subheadline |
| `.section-headline` | Cormorant Garamond | `clamp(2rem, 4vw, 3.4rem)` | 700 | Section headers |
| `.section-body` | Montserrat | `1.125rem` | 400 | Body paragraphs, line-height `1.75` |
| `.section-tag` | Montserrat | `0.6rem` | 700 | Eyebrow labels, letter-spacing `0.25em`, uppercase |
| `.stat-number` | Cormorant Garamond | `2.4rem` | 700 | Hero stat numbers |
| `.stat-label` | Montserrat | `0.68rem` | 600 | Stat labels, letter-spacing `0.15em` |
| `.dev-card-title` | Cormorant Garamond | `1.35rem` | 700 | Card titles |
| `.dev-card-body` | Montserrat | `1.125rem` | 400 | Card body text, line-height `1.75` |
| `.dev-card-invest` | Montserrat | `0.76rem` | 600 | Card stats/dollar line, gold-lo color |
| `.dev-card-status` | Montserrat | `0.6rem` | 700 | Status badge, letter-spacing `0.18em` |

### Spacing Standards
- **Container:** `.container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }`
- **Section padding (navy sections):** `#solution { padding: 100px 48px }`, responsive: `72px 24px` ≤900px, `40px 20px` ≤760px
- **Gold gradient text:** Apply with `.gold-text` class or inline: `background: var(--gold-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`
- **Section tag line accent:** `.section-tag::before { content: ''; width: 30px; height: 1px; background: var(--gold-base); }`

### Status Badge Colors (dev cards)
```css
.s-active      { color: #2E9E5B; }   /* green */
.s-construction { color: #E67E22; }  /* orange */
.s-planned     { color: var(--steel); } /* grey */
.s-operational { color: #2980B9; }   /* blue */
```

---

## 3. Page Architecture (Top to Bottom)

| # | Section / ID | Description |
|---|---|---|
| 1 | **Issue Banner** `.issue-banner` | Fixed gold-gradient strip at very top. Shows publication name, issue number, date. Update issue number and date for each new issue. |
| 2 | **Nav** `<MotionNav />` | Fixed navy nav below banner. Logo left, links center, gold CTA right. Hamburger menu on mobile. Slides down on page load via Framer Motion. |
| 3 | **Hero** `#hero` | Full-viewport dark section. Background architectural sketch image. Animated headline + subhead + 3 hero stats + 2 CTAs. "View Rendering" lightbox button. Mobile has its own in-flow version of that button. |
| 4 | **From The Publisher Callout** `.ftp-callout` | Warm off-white (#F0EDE8) strip. Side-by-side: 242×242px photo left, text right. Gold vertical edge lines (desktop only). Publisher name, short bio paragraph, pointer to full letter. |
| 5 | **The Problem** `#problem` | White section. Section tag + headline + centered intro paragraph + 3 bullet pain points (icon, title, description each). |
| 6 | **The Four Forces** `#solution` `<FourForcesVisual />` | Navy background. 4-card grid showing the forces shaping South LA (Transit, Culture, Housing/Zoning, Capital/Events). SVG icons. Hub circle in center. Scroll-reveal animations. |
| 7 | **Corridor Map** `#corridor-map` | Full-width map image in navy frame (`padding: 48px` desktop, `24px` mobile). Image has overlay + vignette. |
| 8 | **Developments** `<Developments />` | "All 11 Chapters. Every Micro-Market." 11-tab chapter system with accordion project cards. See Section 4 for full component docs. |
| 9 | **Homeowner Callout** `#homeowner` | Navy background. 3-card grid: ADU Opportunity, Rental Demand Growth, AB 1033 Implications. Closing italic paragraph. |
| 10 | **The Two Anchors** `#authority` | Navy background. 2×2 grid: North Anchor card (Lucas Museum), South Anchor card (SoFi/Intuit/Kali), editorial quote block, supporting signals data table. |
| 11 | **AB 1033 / ADU** `#adu` | Navy section. Left: headline + body copy + CTA button. Right: 4 number callouts ($280–$400/sqft, 60–90 days, AB1033, ½ mi). |
| 12 | **Community Capital** `<CommunityCapital />` | White section. PCR Business Finance. Stats grid → gold divider → 2-col body (What They Do + Who They Serve left; photo + callout right) → contact grid → CTA button. |
| 13 | **FAQ** `<FAQ />` | White section. "The Questions That Matter Most." 5-question accordion (same +/- toggle pattern as `<Developments />` chapter cards). See Section 4. |
| 14 | **How It Works** `#how-it-works` | White section. 4-step process grid (01–04). |
| 15 | **Final CTA** `#final-cta` | Navy section. Headline + body + 3 CTA buttons (call, email, schedule) + contact strip with phone/email/website/license/schedule. |
| 16 | **Footer** `<footer>` | Dark navy. Copyright, DRE number, Equal Housing. |
| — | **Publisher's Letter** `<PublishersLetter />` | Fixed left-side slide-in panel (not a page section). Tab label visible at all times. Opens on click. Full letter text inside. |
| — | **Back to Top** `<BackToTop />` | Floating button appears on scroll. Fixed bottom-right. |
| — | **Lightbox** `<Lightbox />` | Full-screen image overlay triggered by "View Rendering" button in hero. |

---

## 4. Reusable Components

### `<Reveal>` — Scroll Animation Wrapper
Wraps any content in a Framer Motion `motion.div` that fades + slides up when scrolled into view.

```tsx
<Reveal delay={0.15} className="optional-class">
  {/* any content */}
</Reveal>
```

- `delay`: optional float in seconds (stagger child elements)
- `className`: passed through to the wrapper div
- Used on almost every section's content blocks

---

### `<Developments />` — Chapter Accordion System

The most complex component. Fully self-contained.

**State:**
- `active` (string): which chapter tab is selected (default: `"crenshaw"`)
- `openCard` (number | null): which card index is open within the current chapter (default: `null` = all collapsed)
- `useEffect(() => setOpenCard(null), [active])` — resets all cards to collapsed on every tab switch

**Chapter tabs:** 11 chapters (Ch.1 Crenshaw Corridor → Ch.11 Jefferson Park), each with an `id` and `label`. Tab buttons use `onPointerDown` (not `onClick`) for faster mobile response.

**`<DevCards>` sub-component:**
- Accepts `openCard`, `setOpenCard` props
- Uses `React.Children.map` to inject `index`, `openCard`, `setOpenCard` into each `<DevCard>` child automatically (skips `<CorridorBand>` elements)
- Wraps all cards in a `motion.div` with `containerVariants` for stagger animation

**`<DevCard>` sub-component — Accordion behavior:**
- `children` are split: first 3 = header (status badge, title, invest/stats line); remaining = body (description + "What This Means")
- Header rendered as `<button className="dev-card-header">` — full-width clickable area
- `aria-expanded={isOpen}` on the button
- Chevron icon: 28×28px gold circle, rotates 180° when open (class `dev-card-chevron--open`)
- Body wrapped in `.dev-card-collapse` with inline `maxHeight` style: `"1000px"` when open, `"0"` when closed
- CSS transition: `max-height .3s cubic-bezier(0.4, 0, 0.2, 1)` on `.dev-card-collapse`
- Only ONE card can be open at a time per chapter tab — opening a new one closes the previous

**Card structure (every card follows this exact child order):**
```tsx
<DevCard>
  <div className="dev-card-status s-active">Badge text</div>   {/* child 0 — header */}
  <div className="dev-card-title">Title</div>                   {/* child 1 — header */}
  <div className="dev-card-invest">Stats line</div>             {/* child 2 — header */}
  <div className="dev-card-body">Description paragraph.</div>   {/* child 3 — body (hidden when collapsed) */}
  <div className="dev-card-signal">What This Means text.</div>  {/* child 4 — body (hidden when collapsed) */}
</DevCard>
```

**`<CorridorBand>`** — Full-width editorial callout bar that can appear between cards in a chapter. Navy background, gold left border, centered italic text. Not an accordion card — always fully visible.

**Chapter meta row** — Shows "ACTIVE SIGNALS / PRIMARY FORCE / PROPERTY LENS" for the current tab. Data lives in `chapterMeta` record in `Developments.tsx`. Update this when adding new chapters.

---

### `<FAQ />` — FAQ Accordion

Similar accordion pattern but simpler — no chapter tabs.

**State:** `openIndex` (number | null) — which FAQ item is open  
**Toggle:** clicking a question sets `openIndex` to that item's index, or `null` if already open  
**Icon:** Framer Motion `motion.span` that animates from `rotate(0)` to `rotate(45deg)` — turns `+` into `×`  
**Content lives in:** the `faqs` array at the top of `FAQ.tsx` — each item is `{ q: string, a: string }`  

**Current 5 questions (in order):**
1. What is Stocker Street Creative and why does it matter?
2. If I buy now — or already own and build an ADU — what does this property look like in 10 years?
3. Why does the "half-mile rule" matter for South LA properties?
4. Is Compton actually investable right now, or is this premature?
5. What is AB 1033 and why does it matter specifically in South LA?
6. What do the FIFA/Super Bowl/Olympics events mean for property owners?

To add/replace a FAQ question, edit the `faqs` array only — no structural changes needed.

---

### Marquee Ticker — `.marquee-band`

Gold-gradient scrolling band between hero and FTP callout.

```css
.marquee-band { --marquee-play: running; }
.marquee-inner { animation: marquee 30s linear infinite; animation-play-state: var(--marquee-play); }
@media (hover: hover) and (pointer: fine) {
  .marquee-band:hover { --marquee-play: paused; }
}
```

**Hover-pause is desktop-only** — uses `(hover: hover) and (pointer: fine)` media query so touchscreens never trigger the pause. The CSS custom property `--marquee-play` is the mechanism; the child animation reads the parent's variable.

Content is duplicated (items appear twice) in the JSX to create a seamless loop. To update ticker items, edit the two matching sets of `.marquee-item` spans in `page.tsx`.

---

### Hero Stat Counter — `<HeroStats />`

Animated counting stat items in the hero. Each stat animates from 0 to its target value on mount.

**Data lives in `HeroStats.tsx`** — array of `{ prefix, value, suffix, label }`:
```ts
{ prefix: "$", value: 5, suffix: "B+", label: "Total Corridor Investment" }
{ prefix: "",  value: 35, suffix: "+", label: "Active Projects" }
{ prefix: "",  value: 11, suffix: "",  label: "South LA Chapters" }
{ prefix: "",  value: 1,  suffix: "",  label: "Broker. Born Here." }
```

Update values here for Issue 002 data.

---

### `<Reveal />` — Scroll Animation Wrapper
See above. Used universally. Fine to add `delay` prop for staggered children in a grid.

---

### `<MotionLink />` — Animated Anchor
Wraps `<a>` with Framer Motion tap/hover. Use wherever a CTA button links somewhere. Same props as `<a>`.

---

## 5. Content Patterns

### FAQ Answer Format
Single paragraph, ~3–5 sentences. No bullet points, no line breaks, no headers inside the answer. Direct and specific — cite dollar amounts, addresses, and dates when possible. End with a clear implication for the reader (what they should do or understand).

**Example:**
> "Compton is at the early-stage appreciation phase — the same position West Adams occupied in 2018–2019. The Compton Innovation Hub (300 apartments, 44,000 sq ft of innovation space, first West Coast project for KBK Enterprises) is the kind of signal that marks the transition from watchlist to active opportunity..."

---

### "What This Means" Card Format (`.dev-card-signal`)
Every project card ends with a "What This Means" section (auto-labeled via CSS `::before` content). One paragraph, 1–3 sentences. Written from the perspective of a homeowner or property investor in that neighborhood. Grounded and specific — connects the project to a real property outcome.

**Template:** `[Who is affected] + [what specifically changes for them] + [why now, or what happens if they wait].`

**Example:**
> "Luxury condo proposals showing up in View Park and Windsor Hills means developers have already done the math — and they like what they see. Buyers should move before those numbers become the new normal."

---

### Voice and Tone Rules

**The voice is "Empowerment Authority"** — a South LA native broker who knows the terrain, respects the reader's intelligence, and leads with facts, not hype.

**Rules:**
- **Lead with facts and timelines** — never with reader ignorance ("most people don't know…", "what they're not telling you…")
- **No investment-bank jargon** — specifically banned: "arbitrage," "catalyst," "thesis," "benchmark," "institutional capital," "pipeline" (in a capital sense), "monetize," "repositioned," "deploy," "trajectory," "pricing in," "corridor" as a filler word
- **Use plain language equivalents:** "developers have done the math" not "institutional capital is pricing in the trajectory"; "turned into" not "repositioned"; "pays more" not "uplift"
- **No "convergence"** — do not use this word in any context
- **No "most people don't know" framing** — do not position readers as uninformed
- **Corridor:** use sparingly — only as a geographic proper noun (Crenshaw Corridor, Golden Corridor) or transit label (K Line Transit Corridor). Do not use as a filler synonym for "neighborhood" or "area"
- **Anchor:** acceptable as a label (North Anchor, South Anchor) but avoid stacking it with other jargon (not "cultural and investment anchor" or "CDFI anchor creates a pipeline")
- **Tone test:** Would a South LA homeowner hearing this from their trusted broker nod along, or would they feel like they're being pitched by a fund manager? Write for the nod.

---

## 6. Responsive Behavior Notes

### Identical on mobile and desktop:
- **Chapter accordion** in Developments — collapse/expand behavior is identical across all device sizes. The only responsive change is the card grid shifts to 1 column (`grid-template-columns: 1fr`) on mobile.
- **FAQ accordion** — identical behavior across all sizes.

### Desktop-only behaviors (explicitly blocked on touch):
- **Marquee hover-pause** — `@media (hover: hover) and (pointer: fine)` wraps the pause rule. Touchscreens scroll continuously with no pause on touch.
- **Card lift on hover** (`translateY(-2px)`) — also inside the same media query on `.dev-card:not(.dev-card--open):hover`.
- **Chevron hover glow** — inside same media query.

### Mobile-only elements:
- `.hero-view-btn-mobile` — in-flow rendering button between stats and CTAs (desktop version is absolutely positioned over the image)
- `.hero-img-caption` — editorial annotation overlaying the hero image (hidden desktop)
- FTP gold edge lines (`.ftp-callout::before` / `::after`) — display: none on mobile
- Nav hamburger menu (`.nav-hamburger`) — hidden desktop, visible mobile
- FTP layout collapses to column (stacked photo over text) on mobile

### Mobile breakpoints in use:
- `≤900px` — medium tablets
- `≤760px` — standard mobile
- `≤600px` — narrow mobile
- `≤480px` — very narrow

---

## 7. How to Start Issue 002

### Step 1 — Duplicate the repo or create a new branch
```bash
git checkout -b issue-002
```
Or clone fresh and start from the Issue 001 state.

### Step 2 — Update issue-level metadata (5 places)

| File | Location | What to update |
|---|---|---|
| `src/app/layout.tsx` | `metadata.title` / `metadata.description` | Update year, issue number |
| `src/app/page.tsx` | `.issue-banner-left` span | Change "Issue 001" → "Issue 002", update date |
| `src/app/page.tsx` | `.issue-banner-right` span | Update month/year |
| `src/app/page.tsx` | `#hero` section | Update hero headline, subhead, hero image src |
| `src/components/HeroStats.tsx` | `stats` array | Update stat values for new issue data |

### Step 3 — Replace chapter content in `Developments.tsx`
Each chapter is a conditional block: `{active === "crenshaw" && (<DevCards>...</DevCards>)}`. For a new issue:
- Keep the same 11-chapter tab structure (or add/remove tabs by editing both the `tabs` array and `chapterMeta` record)
- Replace `<DevCard>` content inside each chapter block
- Keep the **exact child order** in every card: status badge → title → invest line → body → signal
- Update `chapterMeta` record with new signal counts, forces, and lens labels

### Step 4 — Replace FAQ content in `FAQ.tsx`
Edit the `faqs` array only — `{ q: string, a: string }[]`. No structural changes. Target 5–6 questions per issue.

### Step 5 — Update the Two Anchors section in `page.tsx`
Swap out the featured card images, titles, dollar amounts, and dates for Issue 002's headline projects.

### Step 6 — Update the Supporting Signals table in `page.tsx`
The hardcoded array in `.brief-signals` — update category labels, dollar values, and project names.

### Step 7 — Update the Marquee ticker in `page.tsx`
Both duplicate sets of `.marquee-item` spans need to match. Update the 6–8 ticker items to reflect Issue 002's top signals.

### Step 8 — Update CommunityCapital section if the featured organization changes
`src/components/CommunityCapital.tsx` — replace org name, stats, services, photo, contact details.

### Step 9 — Update the Publisher's Letter
`src/components/PublishersLetter.tsx` — update the body paragraphs, especially the intro (first two paragraphs) and the section referencing current projects. The closing/mission paragraphs can stay fixed across issues.

### Structural elements that stay fixed every issue:
- Full CSS system (`globals.css`) — only add rules, do not remove
- `<Reveal>`, `<MotionLink>`, `<MotionNav>`, `<BackToTop>`, `<Lightbox>` — do not touch
- Page section order — maintain the same 16-section sequence
- `<FourForcesVisual>` — update force names/descriptions only if the narrative shifts
- Brand colors, fonts, spacing — do not change

---

*Issue 001 finalized June 2026. Architecture documented for Issue 002+ continuity.*
