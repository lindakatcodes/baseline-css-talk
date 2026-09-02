---
theme: dracula
fonts:
  sans: Figtree
  serif: Yeseva One
  mono: Fira Code
background: /cover.jpg
title: "Baseline Magic: The Art of Intent-Driven CSS"
info: Modern CSS has entered a new era where we can express intent directly in
  our styles, treating the latest baseline features as our new fundamentals. In
  this session, we’ll craft a design piece by piece using ingredients like
  container queries, layers, and the :has selector. We’ll see how these pieces
  build on each other to create a cohesive system that is accessible and
  maintainable by design. You’ll leave with a refreshed perspective on the
  platform’s potential and the practical foundation needed to start weaving
  these modern fundamentals into your own projects today.
comark: true
duration: 25min
transition: fade
class: text-center
---

<!-- markdownlint-disable -->

# Baseline Magic: The Art of Intent-Driven CSS

<h2 class="text-3xl">Linda Thompson</h2>

Software engineer

<p class="text-xs">
Photo by <a href="https://unsplash.com/@anitaaustvika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anita Austvika</a> on <a href="https://unsplash.com/photos/a-glass-jar-filled-with-dried-herbs-on-a-checkered-table-cloth-MEZFIgrCQMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

<!--
24

*Breathe*

Quick intro

- widely available: 30 months / 2.5 years
- newly available: all major browsers support it
-->

---
layout: statement
---

# Craft with intention.
# Unlock attention.

<Footer />

<style>
  #app .slidev-layout.statement h1 {
    line-height: 1.5;
    text-wrap: balance;
  }
</style>

<!--
23

- Attention is applying our mind to something, drawing the focus to something. 
- Intention is being able to design for a specific use.
- The more intention and clarity that we can put into the parts that users don't see, the easier it is for us to focus on the actual experience we want for them and to design things that are more inclusive, more magical, and more meaningful.
-->

---
layout: iframe
# url: http://localhost:4321
url: https://sageandsundry.netlify.app/
zoom: 0.8
---

<!--
22

- To showcase these, we're going to create a dashboard for a small apothecary shop called Sage & Sundry. Let's go one ingredient at a time.
- build the site more intentionally and collaborate with the browser to see just how much it can do now
-->
---

## Custom Properties

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 96%</p>

Reuse with intention, maintain with ease

```css
:root {
  --spring-primary-color: #ffcad4;
  --summer-primary-color: #ccd8ab;

  --primary-color: var(--spring-primary-color);
}

main {
  background: var(--primary-color);
}

@property --primary-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffcad4;
}
```

<Footer />

<!--
21

- starts with two dashes, called with var()
- easier to maintain, write once reuse everywhere
- can describe the type of variable so the browser can use it how you'd expect (like transitions and the types of values it should expect)
-->

---

## Cascade Layers

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 95%</p>

Control the cascade, shape the story

```css
@layer reset, base, layout, theme, motion;

@import "reset.css" layer(reset);

@layer layout {
  main {
    display: grid;
    grid-template-columns: var(--season-width) 1fr;
    /* ... */
  }
}

@layer theme {
  main {
    background: var(--primary-color);
    /* ... */
  }
}
```

<Footer />

<!-- 
18

- cascade is layering - base layer first, then user styles, the authored styles, what we write
- order is everything; best practice to declare the order by name first, then write the actual layers later
- can reuse layers across components, the different values get appended to the existing layer
- can import a stylesheet and assign it to a layer; huge help for component libraries and being able to easily overwrite parts of them
- anything not in a layer gets highest priority, it's the top level
-->

---

## Container Queries & Logical Properties

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 94% / 96%</p>

Layout shaped by context and flow

```css
aside {
  container-name: in-season;
  container-type: inline-size;
  /* or the shorthand */
  /* container: in-season / inline-size; */

  padding-inline: var(--space-12);
  padding-block-start: var(--space-12);
} 

.extra-details {
  display: none;
}

@container in-season (inline-size >= 22rem) {
  .extra-details { 
    display: block;
  }
}
```

<Footer />

<!--
15

Logical properties
- inline flow is how text flows in the content
- block flow is the direction of content blocks
- provides support for internationalization and real content adjustments

container size queries
- type is required, name is optional (without names goes up to the stack)
- containers wrap around what you want to be adjusted
- lets us query by container size and content flow instead of window size; featured article example; simplifies amount of styles we need
-->

---
layout: iframe
# url: http://localhost:4321
url: https://sageandsundry.netlify.app/
zoom: 0.8
---

<!-- 
13.5

in season sidebar and text toggle
switch to vscode to change the toggle 
site\src\components\InSeasonAside.astro

DON'T FORGET TO SWITCH IT BACK OFF
-->


---

## The Has Selector

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 94%</p>

Explore connections to inspire style

```css
body {
  transition:
    --primary-color 0.3s ease-in-out,
    --secondary-color 0.3s ease-in-out,
}

body:has(input[value="summer"]:checked) {
  --primary-color: var(--summer-primary-color);
  --secondary-color: var(--summer-secondary-color);
}
```

```html
<div>
  <input type="radio" id="summer" name="season" value="summer" />
  <label for="summer">Summer</label>
</div>
```

<Footer />

<!-- 
11.5

- a family selector; takes the first selector, and if that element has whatever's in the () it styles the first selector
- can look for any descendant, or use combinators to find direct children or siblings
- can also combine with pseudo classes like not, so you can use negative relations too
- needs a solid base for the relationship though; can't use pseudo elements (like before or after) because they're often only conditionally registered. it needs to have a reliable base to start from
-->

---
layout: iframe
# url: http://localhost:4321
url: https://sageandsundry.netlify.app/
zoom: 0.8
---

<!-- 
10.5

season color palette swaps
-->

---

## Popovers & Anchor Positioning

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 90% / 84%</p>

Tell the story where it belongs

```html
<button class="batch-pill" popovertarget=`batch-details-${data.season}-${index}`>
  {ingredient.batchCount} Batches
</button>
<div
  id=`batch-details-${data.season}-${index}`
  class="bp-popover"
  popover
>
<p class="popover-title">
  Batches using {ingredient.displayName}:
</p>
  <!-- ... -->
</div>
```

```css
.bp-popover {
  position-area: inline-start;
  margin-inline-end: 0.5rem;
}
```

<Footer />

<!-- 
7.5

Popover
- great for things like tooltips, toasts, etc
- display an element over the rest of your page content
- at it's simplest, you give an element the popover attribute and an id
- then pick a button/control to activate it, and give that the popovertarget attribute set to the popover's id.
- by default you get some nice state 
  - click outside to light dismiss 
  - press esc to exit. 
  - only one popover is visible at a time
  - works as a toggle, showing and hiding on each click 
  - handles keyboard focus

Anchor positioning
- the other thing it creates is an implicit anchor reference between our popover content and it's control
- anchor positioning lets us position an item relative to its invoker
- we only need to set the positioning of our popover since it's implicit
- position-area, a 3x3 grid where we can tell it where we want it to go. define two options to put it squarely in that grid area, or you can say just one and the other will act like a span and fill the remaining space. 
- to make an explicit relationship, we give the anchor itself a name, which like custom properties will start with two dashes. 
- then the item we want to tether to our anchor needs to have a fixed or absolute position, and use the position-anchor property that provides the name of the anchor it's tied to
-->

---
layout: iframe
# url: http://localhost:4321
url: https://sageandsundry.netlify.app/
zoom: 0.8
---

<!-- 
6.5

active batch label

careful NOT to click esc, might close something you don't want to lol
-->

---

## View Transitions

<p class="text-sm italic fixed top-[2rem] right-[3.5rem]">Baseline: 90%</p>

Smooth changes, grounded context

<div class="grid grid-cols-2 grid-rows-1 gap-6">

```js
function open(id: string) {
  if (!document.startViewTransition) {
    openCard(id);
    return;
  }
  document.startViewTransition(() => {
    openCard(id);
  });
}

batchesSection.addEventListener("click", (event) => {
  const target = event.target;
  const card = target.closest("[data-batch]");
  if (card) open(card.dataset.batch);
});
```

```css
#batches {
  view-transition-name: batch-panel;
}

::view-transition-group(batch-panel) {
  animation: none;
  overflow: clip;
}

html[data-view="detail"] {
  &::view-transition-new(batch-panel) {
    animation: 375ms ease-in both slide-from-right;
  }
  &::view-transition-old(batch-panel) {
    animation: 375ms ease-out both slide-to-left;
  }
}
```

</div>
<Footer />

<style>
.slidev-layout pre {
  block-size: 100%;
}
</style>

<!--  
3.5

- same-document is what's baseline available, uses js to swap
- cross-document is coming soon, supports multi page and uses css
- works by the browser taking snapshots of the old/current page and the new/incoming page 
- by default doing a cross fade, turning the old opacity down and the new one up
- document.startViewTransition calls the function that should start the swap - important that the DOM changes  happen in here! if they happen before then the browser swaps new -> new and it doesn't look right
- view transition name to tell the browser what part will change
- creates a psuedo-element tree, so you can access the old and new views
-->


---
layout: iframe
# url: http://localhost:4321
url: https://sageandsundry.netlify.app/
zoom: 0.8
---

<!-- 
2

actively cooking transition swapping

also remind what all we've covered - all these cool things that by default browsers bake in a11y and intention into our designs, needing less code from us to do what we want
-->

---
layout: statement
---

# Craft with intention.
# Unlock attention.

<Footer />

<style>
  #app .slidev-layout.statement h1 {
    line-height: 1.5;
    text-wrap: balance;
  }
</style>

<!-- 
1

- intention matters
- working with browser, not against it
- css can do more than you might think
-->

---
layout: end
---

# Connect with Me

Slides, Demo, and where to find me online:

<figure class="w-75 m-auto mb-1">
  <img src="./qr-code.png" alt="qr code that goes to lindakat.com/magic" />
  <figcaption><a href="https://lindakat.com/magic">https://lindakat.com/magic</a></figcaption>
</figure>

Thanks for taking this <span class="magic">magical</span> journey with me!

<style>


  .magic {
    font-style: italic;
    color: #8BE9FD;
  }

  .magic::before,
  .magic::after {
    content: "✨";
  }
</style>

<!-- 
0

*YOU DID IT LOVE!!!
-->
