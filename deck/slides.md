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
*Breathe*

Quick intro

Baseline widely available: 30 months / 2.5 years
newly available: interoperable / all major browsers support it

24
-->

---
layout: statement
---

# Craft with intention.
# Guide the attention.

<Footer />

<style>
  #app .slidev-layout.statement h1 {
    line-height: 1.5;
    text-wrap: balance;
  }
</style>

<!--
Attention is applying our mind to something, drawing the focus to something. 

Intention is being able to design for a specific use.

The more intention and clarity that we can put into the parts that users don't see, the easier it is for us to focus on the actual experience we want for them and to design things that are more inclusive, more magical, and more meaningful.

22
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.8
---

<!--
To showcase these, we're going to create a dashboard for a small apothecary shop called Sage & Sundry. Let's go one ingredient at a time.

21
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
- easier to maintain, write once reuse everywhere
- can describe the type of variable it is so the browser can use it how you'd expect (like transitions and the types of values it should expect)
- can use as values for functions and other properties, just not media queries
- starts with two dashes, called with var()

19
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
- order is everything; often best practice to declare the order by name first, then write the actual layers later so you don't have to remember the order
- anything not in a layer gets highest priority, it's the top level
- can reuse layers across components, the different values get appended to the existing layer
- can import a stylesheet and assign it to a layer; huge help for component libraries and being able to easily overwrite parts of them
- At a high view, the cascade is the idea of styles starting from a point and then layering one on top of the other to replace each other and build out how our sites look. Browser defaults get applied first, then a browser user's individual settings if they have some, then our authored styles. 

17
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
- logical properties relate to the flow of the content, not physical dimensions
- block flow is the direction of content blocks. inline flow is how text flows in the content
- provides support for internationalization and real content adjustments

- size queries
- containers can't query themselves, so wrap around what you want to be adjusted
- containers can't be sized from their contents - making it a container loses it's ability to tell the inner contents to size based off it, so you need to be more explicit for those inner details
- simplifies your queries, since you can now adjust based on the container's size instead of the viewports. so some styles can get reused on mobile and desktop without having to write a ton of queries; also lets your queries be simpler, since you're only worrying about the space your container takes up and not what size the window is

15
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.8
---

<!-- 
in season sidebar and text toggle
switch to vscode to change the toggle 
site\src\components\InSeasonAside.astro
DON'T FORGET TO SWITCH IT BACK OFF

13.5
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
- a family selector; takes the first selector, and if that element has whatever's in the () it styles the first selector
- can look for any descendant, or use combinators to find direct children or siblings
- can also combine with pseudo classes like not, so you can use negative relations too
- needs a solid base for the relationship though; can't use pseudo elements (like before or after) because they're often only conditionally registered. it needs to have a reliable base to start from

11.5
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.8
---

<!-- 
season color palette swaps

10
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
- popovers give you a way to display an element over the rest of your page content
- at it's simplest, you give an element the popover attribute and an id. the browser will auto-hide it
- then you pick a button/control to activate it, and give that the popovertarget attribute set to the popover's id. by default it works as a toggle, showing and hiding on each click. 
- also by default you get some nice state - you can click outside it to light dismiss it, or press esc to exit. also only one popover is visible at a time, so clicking a button for another will auto-dismiss the previous one.
- it also handles keyboard focus and assistive technology details for you

- the other thing is it creates an implicit anchor reference between our popover content and it's control - this lets us use anchor positioning to decide where we want our popover content to show up
- anchor positioning lets us position an item relative to its invoker, in this case our popover relative to the button that toggles it
- we only need to set the positioning of our popover since it's implicit
- to make an explicit relationship, we give the anchor itself a name, which like custom properties will start with two dashes. 
- then the item we want to tether to our anchor needs to have a fixed or absolute position, and use the position-anchor property that provides the name of the anchor it's tied to
- a good default way to position our element is using position-area, which works like a 3x3 grid where we can tell it where we want it to go. it works with physical or logical properties. you can define two options to put it squarely in that grid area, or you can say just one and the other will act like a span and fill the remaining space. 

8
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.8
---

<!-- 
active batch label
careful NOT to click esc, might close something you don't want to lol

6.5
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
- same-document is what's baseline available, uses js to swap
- cross-document is coming soon, supports multi page and uses css
- document.startViewTransition calls the function that should start the swap - important that the DOM changes  happen in here! if they happen before then the browser swaps new -> new and it doesn't look right
- works by the browser taking snapshots of the old/current page and the new/incoming page, then by default doing a cross fade, turning the old opacity down and the new one up
- can change this effect by using css animations to create your own

4.5
-->


---
layout: iframe
url: http://localhost:4321
zoom: 0.8
---

<!-- 
actively cooking transition swapping

also remind what all we've covered - all these cool things that by default browsers bake in a11y and intention into our designs, needing less code from us to do what we want

3
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
*YOU DID IT LOVE!!!

2
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
put the direct link to the codebase (update the readme with links for the deployed versions of the slides and site)
also direct link to the slides, since people might want that more (update the deployed version of the slides to use the deployed version of the site, so it actually works lol)
then a link or qr code for your linkedin and just let folks connect there
if you get the chance to update your personal site link that too, but otherwise LI is fine

1
-->
