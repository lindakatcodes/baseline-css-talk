# Baseline Magic: The Art of Intent-Driven CSS

## Talk Overview

- **Date:** September 3, 2026
- **Format:** Live, in-person, 25 minutes, slide-supported
- **Slide tool:** Slidev (sli.dev)
- **Demos:** All pre-recorded (first-ever talk — no live coding). May attempt 1-2 live if confident closer to the date (best candidates: `:has()` season toggle, anchor positioning popover — both simple, recoverable browser interactions).
- **Audience:** Mixed conference crowd, wide range of CSS experience levels.
- **Core thesis:** CSS in 2026 is no longer a collection of hacks — it's a cohesive system of intent, logic, and relationships. Six "baseline" features are demonstrated by building a themed dashboard brick-by-brick.

## Tone & Aesthetic

**Cozy, natural, witchy** — herbalism and cottage-core, NOT movie-magic witchy. No cauldrons, wands, or spell-portal energy. Think dried herbs, earthy tones, a small handmade apothecary shop. The whimsy comes from three layers working together:

1. **Data** — ingredient names, preparation types (dried chamomile, elderberry tincture, calendula salve)
2. **Palette** — earthy, muted, shifts by season
3. **Copy** — section labels like "The Pantry," "In Season," "Active Batches"

---

## The Demo: The Apothecary Dashboard

A single-owner herbalist shop management dashboard. The story flows in one direction:
**Season → what's harvestable → what's in the pantry → what's actively being made**

Every section feeds the next — this is what makes the dashboard cohesive rather than a random feature showcase.

### Sections & CSS Bricks

**1. Season Banner (header)**

- Season selector (Spring / Summer / Autumn / Winter)
- Changing season shifts the _entire_ dashboard's palette via a single selector
- **Brick:** `:has()` + Custom Properties (seasonal token overrides)
- Example: `body:has([data-season="autumn"])` pulls in warm amber/rust tokens dashboard-wide, no JS class toggling

**2. In Season (left sidebar widget)**

- Compact list of herbs currently harvestable
- When the widget is moved/resized into the main content area, it expands into a full card with harvest window notes — reacting to its container, not the screen
- **Brick:** Container Queries + Logical Properties (`padding-inline`, `margin-block` — verified in RTL with zero CSS changes)

**3. The Pantry (main content)**

- Ingredient inventory: jars, stock levels, freshness
- Each row has a "used in X batches" badge
- Clicking the badge opens a popover **anchored to that badge**, listing which Active Batches are currently drawing from that ingredient and their days remaining
- Popover renders in the top layer — never clipped by the Pantry table's `overflow: scroll`, no z-index needed
- **Brick:** Anchor Positioning + Popover API
- **Why this matters narratively:** connects Pantry and Active Batches — you see a low-stock ingredient and immediately understand why (via the popover), rather than the sections being disconnected

**4. Active Batches (main content)**

- Preparations in progress (tinctures, salves, teas) with days remaining
- Clicking a batch card navigates to a Batch Detail view — the card **morphs** into the detail page's header instead of a hard cut
- **Brick:** View Transitions (`document.startViewTransition()`, `view-transition-name`)

**5. Foundation (everywhere, invisible but load-bearing)**

- Full design token system (colors, spacing, radii) + 4 seasonal palette overrides
- `@layer` stack: `tokens → base → layout → components → seasonal`
- **Brick:** Custom Properties + Cascade Layers

---

## The Six CSS Bricks (Reference)

| #   | Brick                   | Feature(s)                             | Dashboard Section             |
| --- | ----------------------- | -------------------------------------- | ----------------------------- |
| 1   | The DNA                 | Custom Properties                      | Foundation (tokens)           |
| 2   | The Self-Aware Shape    | Container Queries + Logical Properties | In Season sidebar widget      |
| 3   | The Insightful Parent   | `:has()`                               | Season Banner                 |
| 4   | The Guardrail           | Cascade Layers                         | Foundation (organization)     |
| 5   | The Storytelling Motion | View Transitions                       | Active Batches → Batch Detail |
| 6   | The Tethered Detail     | Anchor Positioning + Popover API       | Pantry ingredient popover     |

---

## Slide-by-Slide Outline (9 slides, ~22 min target)

### Slide 1 — Title (~2 min)

- Establish the apothecary aesthetic visually before saying anything
- Reframe: "hacks" were workarounds for real limitations that no longer exist
- Thesis: CSS in 2026 is a system of intent
- "We're going to build an apothecary shop. One ingredient at a time."

### Slide 2 — Brick 1: Custom Properties (~2.5 min)

- Problem: hardcoded values scattered everywhere
- Show `:root` tokens — live, scoped, not preprocessed like Sass
- Point out the four seasonal palettes waiting to be used later
- Standard: _"A hardcoded value is a bug. Every style references a token."_
- Pivot: "We have the tokens. Now let's make sure our layout understands where it is."

### Slide 3 — Brick 2: Container Queries + Logical Properties (~3.5 min)

- Problem: media queries know the viewport, not the component
- Recording: In Season widget moving from sidebar → main area, expanding
- Pause after the recording before talking
- Brief RTL demo: flip direction, zero CSS changes
- Standard: _"Layout is a property of intent. Design for flow, not screen dimensions."_
- Pivot: "The component knows its space. Now let's let the dashboard respond to its own state."

### Slide 4 — Brick 3: `:has()` (~3 min)

- Problem: parents couldn't see into children without JS
- Recording: Season Banner toggle, full dashboard palette shift
- Pause, let it land
- Standard: _"Logic lives where the styles live."_
- Pivot: "We have tokens, responsive components, and parent logic. Let's talk organization."

### Slide 5 — Brick 4: Cascade Layers (~2 min)

- Problem: specificity wars, `!important` spirals
- Diagram: layer stack (`tokens → base → layout → components → seasonal`)
- Standard: _"Define your priority, not your selectors."_
- Keep fast — this is glue, not a feature demo
- Pivot: "The shop is built. Now for what makes it feel alive."

### Slide 6 — Brick 5: View Transitions (~3 min)

- Note: these are the newly-baseline features (shipped last ~18 months)
- Problem: hard cuts destroy visual context
- Recording: batch card click → morph into Batch Detail header
- Don't talk over the animation
- Standard: _"Motion is a native capability of the platform."_
- Pivot: "State changes feel intentional. What about elements that need to stay physically connected?"

### Slide 7 — Brick 6: Anchor Positioning (~3 min)

- Problem: floating elements + z-index + scroll containers = fragile
- Recording: Pantry badge click → popover renders above scrolling table, no z-index
- Standard: _"Tethered elements are the browser's job, not yours."_

### Slide 8 — The Full Dashboard (~45 sec)

- No talking points — just show the finished dashboard
- One line: "Six ingredients. One apothecary. All native."

### Slide 9 — Close (~1.5 min)

- Six bricks listed as "new fundamentals," each replacing something (a hack, a JS dependency, a library)
- "Pick one. Bring it into your next project."
- Closing line: _"Stop fighting the browser. Collaborate with it."_

---

## 10-Week Timeline (June 25 – September 3, 2026)

### Week 1 (Jun 25–Jul 1): Setup & Scaffold

- **Learning:** Slidev docs/basics — no CSS topics yet
- **Slides:** 9 placeholder slides with titles only
- **Project:** Vite + vanilla HTML/CSS scaffold. HTML skeleton with 5 named sections: Season Banner, In Season, The Pantry, Active Batches, Batch Detail shell
- **Deliverable:** Both projects running locally, sections scaffolded and labelled

### Week 2 (Jul 2–8): Custom Properties + Cascade Layers

- **Learning:** web.dev CSS Learn (Custom Properties, Una Kravets); Kevin Powell YouTube deep-dives; Lea Verou talks on custom properties. Cascade Layers: Miriam Suzanne (oddbird.net, co-authored the spec), Stephanie Eckles intro article, web.dev/articles/cascade-layers
- **Slides:** Draft Slides 1, 2, 5
- **Project:** `@layer` stack defined; full token set incl. all 4 seasonal palettes; dashboard gets visual identity
- **Deliverable:** Layer structure + all seasonal tokens in place, dashboard on-theme; 3 slides drafted

### Week 3 (Jul 9–15): Container Queries + Logical Properties

- **Learning:** Ahmad Shadeed (ishadeed.com); web.dev/articles/container-queries (Una Kravets); Miriam Suzanne on spec intent. Logical Properties: web.dev/learn/css/logical-properties; Ahmad Shadeed article; Jen Simmons talks on flow layout/writing modes
- **Slides:** Draft Slide 3 (needs recording first)
- **Project:** In Season widget built (sidebar compact / main-area expanded); logical properties throughout; RTL tested; both demos recorded
- **Deliverable:** Widget adapts to container, RTL verified, recordings saved; Slide 3 drafted

### Week 4 (Jul 16–22): `:has()`

- **Learning:** Jen Simmons (YouTube, webkit.org); Adam Argyle's web.dev/articles/has-selector; Jhey Tompkins creative demos
- **Slides:** Draft Slide 4 (needs recording first)
- **Project:** Season Banner built; `:has()` drives palette shift for at least 3 seasons; recorded
- **Deliverable:** Season selector fully wired, recording saved; Slide 4 drafted

### Week 5 (Jul 23–29): Anchor Positioning + Popover API

- **Learning:** web.dev/blog/anchor-positioning-api (Una Kravets/Chrome team); Jhey Tompkins CodePen demos; web.dev/articles/popover-api
- **Slides:** Draft Slide 7 (needs recording first)
- **Project:** "Used in X batches" badge + anchored popover built on Pantry rows; recording shows popover rendering above scroll container, no z-index
- **Deliverable:** Working popover in top layer, recorded; Slide 7 drafted

### Week 6 (Jul 30–Aug 5): View Transitions

- **Learning:** Jake Archibald (jakearchibald.com, Chrome Developers blog — primary API author); Bramus Van Damme (bram.us); web.dev/docs/web-platform/view-transitions
- **Slides:** Draft Slide 6 (needs recording first)
- **Project:** Batch Detail view built; `view-transition-name` wired for morph both directions; full round-trip recorded
- **Deliverable:** Morph working both directions, recorded; Slide 6 drafted

### Week 7 (Aug 6–12): Integration + Polish

- **Learning:** None
- **Slides:** Speaker notes for all 9 slides; draft Slides 8 and 9; consistency pass on 1–7
- **Project:** All sections wired into one cohesive dashboard; visual polish pass; first full timed run-through (~22 min target)
- **Deliverable:** Complete demo + deck with speaker notes; first timed run done

### Week 8 (Aug 13–19): Practice Round 1

- **Project only:** 3+ full run-throughs; record and review one — check recording load smoothness and pacing around the two biggest "aha" moments (`:has()` season shift, anchor popover)
- **Deliverable:** Written list of rough spots, speaker notes updated

### Week 9 (Aug 20–26): Practice Round 2

- **Project only:** At least one run in front of a real person — ask if the theme landed and where they got lost. Trim the opening, tighten the close. Full tech check on presentation hardware.
- **Deliverable:** Peer-reviewed run incorporated, tech confirmed

### Week 10 (Aug 27–Sep 2): Final Prep

- **Slides:** Export PDF backup of full deck
- **Project:** 2–3 light run-throughs only (avoid over-rehearsing); confirm all recordings load; identify 1–2 live-demo candidates if feeling bold (season toggle, popover); one final easy run the day before, then stop
- **Deliverable:** Talk ready, tech tested, PDF backup exported

### September 3: Talk Day
