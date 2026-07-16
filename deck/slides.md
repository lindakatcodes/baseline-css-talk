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
transition: fade
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
Welcome everyone, and thanks so much for being here. My name is Linda, and I'm a software engineer, team builder, and a video game enthusiast. Today, I invite you to go on a journey with me to a land where CSS is magical. Here we don't have to fight so hard against the cascade, we worth alongside it. We don't throw all the hacks we can think of to override a framework style, we declare it in it's place then apply our own styles and it just works. We don't search through the repository to find all of the files that need a single color or font changes, we declare it once and reuse it everywhere. Because in today's world...
-->

---
layout: statement
---

# In today's modern world, CSS is a system of intent.

<!-- 
...CSS is a system of intent. This world isn't a fantasy - it's live in all modern browsers and broadly available. This is what I want you to come away with today, a new way of looking at CSS fundamentals that rekindle the joy of building things for the web. To showcase these, we're going to build out a dashboard for a small apothecary shop, one ingredient at a time.
-->

---

# Custom Properties

Variables we define and reuse throughout our stylesheets. More consistency, less repetition.

<div class="grid grid-cols-2 gap-4 items-center">

<div>

```css
:root {
    /* Primitive color values */
    --text-color: #2D1B11;
    --spring-primary-color: #FFCAD4;
    --spring-secondary-color: #F093A1;
    --spring-accent-color: #BDA8C7;

    /* Semantic color properties */
    --primary-color: var(--spring-primary-color);
    --secondary-color: var(--spring-secondary-color);
    --accent-color: var(--spring-accent-color);
  }

/* Then in our component/page */
  header {
    background: var(--accent-color);
    border-bottom: 2px solid var(--text-color);
  }
```

</div>

<div>
<img src="./assets/images/03-custom-properties.png" alt="" />
</div>

</div>

<v-click> We have the tokens. Now let's make sure our layout understands where it is. </v-click>

<!-- 
widely avail, 96%
Our first ingredient is custom properties. CSS now has a way to declare it's own variables and let us reuse them across our styles. They always start with two dashes, then whatever name we want. And when we want to use them, we wrap that name in the var() function. And now, if one of our colors changes, we have a single place we need to put the new value and all of the places we're using it will update automatically.

With our tokens in place, next we'll focus on our layout and how it can know the amount of space it should take up.
-->

---

# Container Queries & Logical Properties

The component knows its space. Now let's have the dashboard respond to its own state.

<!-- 
widely avail, size queries 92%
-->

---

# The `:has` Selector

We have tokens, responsive components, and parent logic. Let's talk about keeping all of it organized.

<!-- 
widely avail, 93%
-->

---

# Cascade Layers

```css
/* Set the ordering first to guarantee our intention. */
@layer reset, base, layout, theme;
/* Can import other stylesheets and assign to a layer. */
@import "reset.css" layer(reset);
/* Then we write the actual style rules where they make sense. */
@layer base {
  :root {
    /* ...our tokens from the last slide */
  }
}
@layer layout {
  header {
    display: flex;
    align-items: center;
    /* ... */
  }
}
@layer theme {
  /* ...the header from the last slide */
}
```

<v-click>The shop is built. Now for the things that make it feel alive.</v-click>

<!-- 
widely avail, 94%
Cascade layers give us a lot of our power to better handle how styles affect each other. You've probably heard the word cascade a ton, it is what the C in CSS stands for after all. At a high view, the cascade is the idea of styles starting from a point and then layering one on top of the other to replace each other and build out how our sites look. Browser defaults get applied first, then a browser user's individual settings if they have some, then our authored styles. 

What layers gives us is a way to apply this same organiziational effect to all of the styles in our app. Where before everything was sitting at the same layer of specificity, now we have the power to determine what should be more and less important, without having to resort to the important flag our super long class names and identifiers.

Order is the name of the game here, so you'll often see a single definition at the start of the first CSS file that gets imported into your app. The first time a layer's name is seen determines the order it goes in, and the first one is the easiest to overwrite so that order is important. Then, once the order is declared, we can start assigning values to each layer.

There's two methods - we can import a file and assign it to a layer, like I'm doing with the reset stylesheet here. This is also super helpful if you're using something like Tailwind or a component library that has it's own styles - you can say that their styles go first, so what you want to change to make uniquely yours has an easier time taking the spotlight. 

Or we can use the @layer syntax with the name and nest our styles inside it. Since we already declared the order we want at the top of our file, we can reuse this layer name in multiple files, and they all get added to the same layer. We can also list them in any order and it won't matter, because we've already told the browser what order to apply them in.

Then if you really need something to take the highest value and go above everything, any styles that are not inside a layer get the highest specificity. 

These layers help us to keep our concerns separate, and be able to update and replace values without having to make things harder on ourselves to come up with more and more detailed names. We can just say what we want and what order they should go in, and the browser knows what to do with it. 

So now we have the majority of our shop designed and laid out! Now let's add a little more magic and movement to it. These next two properties are newly available in baseline and really make our app come alive.
-->

---

# View Transitions

State changes feel intentional. But what about elements that need to stay physically connected?

<!-- 
newly avail, 88% single-page
-->

---

# Anchor Positioning

Tethered elements are the browser's job, not yours.

<!-- 
newly avail, 82%
-->

---

<!-- full dashboard view -->

---

# Closing Thoughts

Stop fighting the browser. Collaborate with it.

<!-- 

-->

---
layout: end
---

# Connect with Me

<!-- 
qr code with a link to the slides/site/references, and how to connect w/ me. either need to build something out for this or make the qr code link to my site and have a url for the codebase (probably a link to the codebase from my portfolio too)
-->
