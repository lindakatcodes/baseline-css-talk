---
theme: dracula
fonts:
  sans: Figtree
  serif: Yeseva One
  mono: Fira Code
background: /cover.jpg
title: "Baseline Magic: The Art of Intent-Driven CSS"
info: Modern CSS has entered a new era where we can express intent directly in our styles, treating the latest baseline features as our new fundamentals. In this session, we’ll craft a design piece by piece using ingredients like container queries, layers, and the :has selector. We’ll see how these pieces build on each other to create a cohesive system that is accessible and maintainable by design. You’ll leave with a refreshed perspective on the platform’s potential and the practical foundation needed to start weaving these modern fundamentals into your own projects today.
comark: true
duration: 25min
transition: slide-left
class: text-center
---

<!-- markdownlint-disable -->

# Baseline Magic: The Art of Intent-Driven CSS

### Linda Thompson

Software engineer

<p class="text-xs">
Photo by <a href="https://unsplash.com/@anitaaustvika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anita Austvika</a> on <a href="https://unsplash.com/photos/a-glass-jar-filled-with-dried-herbs-on-a-checkered-table-cloth-MEZFIgrCQMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

<!--
Welcome everyone, and thanks so much for being here. I'm Linda, and today I want to invite you into the world of baseline CSS magic. Let's dive in.
-->

---
layout: two-cols-header
---

# CSS in 2026 is a system of intent.

::left::

## The problem? 

CSS is often:
- messy and disorganized
- a collection of hacks
- an afterthought

::right::

## The solution? 

Writing CSS that is:
- organized
- uses the browser engines
- intentional

<style>
  h1 {
    text-align: center;
    margin-block-end: 3rem;
    margin-block-start: 6rem;
  }
</style>

<!-- 
Here's what I hope you'll take away from this talk - that CSS in 2026 is a system of intention. When most people talk about working with CSS, a lot of what you might think of is how messy it can be, that it's a collection of hacks and random values and pixel pushing. It's disorganized or even worse, an afterthought. 

But no more!

With the new tools we have in our code spellbook, we can transform what used to be random and messy into a system that is intentionally architected, telling the browser what we want it to do and letting it handle the heavy lifting for us. We can craft systems that are easier to maintain and read, systems that make our sites more accessible and usable to a wider range of people without having to pull in anything but the basics.

To showcase this, we're going to build out an apothecary shop's inventory dashboard, one ingredient at a time.
-->

---
layout: two-cols
---

# Custom Properties

Variables we can define and reuse throughout our stylesheets.

Declare it once. Updates propagate everywhere it's used.

No hunting, no drift.

We have the tokens. Now let's make sure our layout understands where it is.

::right::

```css
:root {
    /* Primitive color values */
    --text-color: #2D1B11;
    --spring-primary-color: #FFCAD4;
    --spring-secondary-color: #F093A1;
    --spring-accent-color: #BDA8C7;
    --summer-primary-color: #CCD8AB;
    --summer-secondary-color: #9AB257;
    --summer-accent-color: #F37C96;

    /* Semantic color properties */
    --primary-color: var(--spring-primary-color);
    --secondary-color: var(--spring-secondary-color);
    --accent-color: var(--spring-accent-color);
  }

  header {
    background: var(--accent-color);
    border-bottom: 2px solid var(--text-color);
  }
```

<!-- 
CSS has variables now! These can be a real game changer. Before, making a change to a site's colors or spacing could be repetitive and a real pain. Now, you change the value once, and the rest of your code automatically gets the new value. Changes are live instantly.

Custom properties are also great for sizing and spacing values. One update location, instant gratification. That's pretty magical. And it helps us build with intention, keeping our site more consistent and logical by defining our sizing in one location and reusing it everywhere we need it. One-off tweaks are a lot more obvious now, making it easier to spot and fix and helping you stay more consistent.

Now we have our tokens - let's make sure our page layouts understand where they are.
-->

---

# Container Queries & Logical Properties

The component knows its space. Now let's have the dashboard respond to its own state.

---

# The `:has` Selector

We have tokens, responsive components, and parent logic. Let's talk about keeping all of it organized.

---

# Cascade Layers

The shop is built. Now for the things that make it feel alive.

---

# View Transitions

State changes feel intentional. But what about elements that need to stay physically connected?

---

# Anchor Positioning

Tethered elements are the browser's job, not yours.

---

<!-- full dashboard view -->

---

# Closing Thoughts

Stop fighting the browser. Collaborate with it.

---
layout: end
---

# Connect with Me
