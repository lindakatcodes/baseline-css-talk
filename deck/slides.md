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
What do I want to convey for this slide? 
- welcome, I'm linda, i write software and play games.
- discuss showing a new way of thinking about css; not as something that just sets fonts and colors and that you have to wrestle with, but as something that helps you describe the meaning, behavior, and connection to parts of your code and letting the browser handle implementing that. 

Welcome everyone, and thanks so much for being here. My name is Linda, and today we're going to get a little witchy and learn some CSS magic.

You might know some of the old magic, hacking styles to create the designs you want. Or you might be newer to the craft, scared from horror stories of old or intimdated by all there is to know. Maybe, like me, you want to find a balance of using modern tools to create for us, while still growing and cultivating our own skillset. 

Today I hope to help you do just that. Because in today's modern world...
-->

---
layout: statement
---

# CSS is a system of intent.

<Footer />

<!-- 
What do I want to convey for this slide? 
- the actual statement. ties in to the intro.
- baseline widely available, what that means, and what we're going to build to showcase how they work

...CSS is a system of intent. 

The features we'll cover today aren't a fantasy - they're available in all modern browsers and baseline widely available. My goal is that by the end of our time together, you'll walk away with a new way of looking at some fundamental CSS capabilities that spark joy in building for the web. 

To showcase these, we're going to create a dashboard for a small apothecary shop called Sage & Sundry. Let's go one ingredient at a time.
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.9
---

<!-- 
What do I want to convey for this slide? 
- showoff the project early, lead into the next few pieces

-->

---

## Custom Properties

Declare once, reuse everywhere.

```css
:root {
  /* Declare the variable */
  --spring-primary-color: #FFCAD4;
  /* Then use it in other variables */
  --primary-color: var(--spring-primary-color);
}

/* Or directly within components */
main {
  background: var(--primary-color);
}

/* Can also give the browser more info */
@property --primary-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffcad4;
}
```

<Footer />

<!-- 
What do I want to convey for this slide? 
- you can write variables now!
- easier to maintain, write once reuse everywhere
- can describe the type of variable it is so the browser can use it how you'd expect (like transitions and the types of values it should expect)
- can use as values for functions and other properties, just not media queries


widely avail, 96%

We'll start at the very beginning. A very good place to start - and also with something a number of you might have seen before. These are custom properties. CSS now has a way to let us declare reusable values that we can share across our styles. 

They always start with two dashes and a name. Then when we want to use that value, we call it with the var() function. The beauty of these is in simplification. We have one place now where we can store our colors or fonts or anything we find ourselves reusing or wanting to change easily. We can sprinkle these throughout our site, and with small updates our whole page will change. 

These are a fundamental building block of our intentional CSS foundation. 

With our tokens in place, next we'll focus on our layout and how it can know the amount of space it should take up.
-->

---

## Container Queries & Logical Properties

Design for flow, not dimensions.

```css
aside {
  /* Shortcut - name and then type */
  container: in-season / inline-size;
} 

/* Looks just like a media query, but based on the container! */
@container in-season (inline-size >= 26cqi) {
  .extra-details { 
    display: block;
  }
}

li {
  /* Start or end for a single side, neither for both sides */
  padding-inline-end: var(--space-4);
  padding-block: var(--space-4);
}
```


<Footer />

<!-- 
What do I want to convey for this slide? 
- defining the container defines the context, tells the browser we'll need to query this
- containers can't query themselves, so wrap around what you want to be adjusted
- simplifies your queries, since you can now adjust based on the container's size instead of the viewports. so some styles can get reused on mobile and desktop without having to write a ton of queries; also lets your queries be simpler, since you're only worrying about the space your container takes up and not what size the window is
- containers can't be sized from their contents - making it a container loses it's ability to tell the inner contents to size based off it, so you need to be more explicit for those inner details
- logical properties relate to the flow of the content, not physical dimensions
- block flow is the direction of content blocks. inline flow is how text flows in the content
- provides support for internationalization and real content adjustments

widely avail, size queries 92%
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.9
---

<!-- actually record this and make it a demo; not sure how flipping back and forth between the code and the site will be since it'll cause a reload, unless you want to add a toggle button to change it
show the sidebar toggle and rtl transformation -->

---

## The Has Selector

Style based on conditions and relationships.

```css
body {
  /* We declared our property type, so transitions just work */
  transition:
    --primary-color 0.3s ease-in-out,
    --secondary-color 0.3s ease-in-out,
}

/* The body changes based on the selected radio input */
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
What do I want to convey for this slide? 
- a family selector; takes the first selector, and if that element has whatever's in the () it styles the first selector
- can look for any descendant, or use combinators to find direct children or siblings
- can also combine with out pseudo classes like not, so you can use negative relations too
- needs a solid base for the relationship though; can't use pseudo elements (like before or after) because they're often only conditionally registered. it needs to have a reliable base to start from

widely avail, 93%
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.9
---

<!-- toggle the seasons, make sure to give each change a second or two in order to breathe and really let it sink in -->

---

## Cascade Layers

Order is everything. We control that now.

```css
/* Set the ordering first to guarantee our intention. */
@layer reset, base, layout, theme;
/* Can import other stylesheets and assign to a layer. */
@import "reset.css" layer(reset);
/* Or describe the layers in the file itself. */
@layer base {
  :root {
    /* ...our custom properties, fonts, etc. */
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
  /* ...colors, borders, style-related values */
}
```

<Footer />

<!-- 
What do I want to convey for this slide? 
- we get to control how all the styles we bring in layer and cascade now
- order is everything; often best practice to declare the order by name first, then write the actual layers later so you don't have to remember the order
- anything not in a layer gets highest priority, it's the top level
- can reuse layers across components, the different values get appended to the existing layer
- means we need important and long class names even less now; doesn't solve scoping benefits and important has some extra caveats to look up, but this does solve most of the biggest reasons we reached for those
- can import a stylesheet and assign it to a layer; huge help for component libraries and being able to easily overwrite parts of them

widely avail, 94%
Cascade layers give us a lot of our power to better handle how styles affect each other. You've probably heard the word cascade a ton, it is what the C in CSS stands for after all. At a high view, the cascade is the idea of styles starting from a point and then layering one on top of the other to replace each other and build out how our sites look. Browser defaults get applied first, then a browser user's individual settings if they have some, then our authored styles. 

What layers gives us is a way to apply this same organiziational effect to all of the styles in our app. Where before everything was sitting at the same layer of specificity, now we have the power to determine what should be more and less important, without having to resort to the important flag or super long class names and identifiers.

Order is the name of the game here, so you'll often see a single definition at the start of the first CSS file that gets imported into your app. The first time a layer's name is seen determines the order it goes in, and the first one is the easiest to overwrite so that order is important. Then, once the order is declared, we can start assigning values to each layer.

There's two methods - we can import a file and assign it to a layer, like I'm doing with the reset stylesheet here. This is also super helpful if you're using something like Tailwind or a component library that has it's own styles - you can say that their styles go first, so what you want to change to make uniquely yours has an easier time taking the spotlight. 

Or we can use the @layer syntax with the name and nest our styles inside it. Since we already declared the order we want at the top of our file, we can reuse this layer name in multiple files, and they all get added to the same layer. We can also list them in any order and it won't matter, because we've already told the browser what order to apply them in.

Then if you really need something to take the highest value and go above everything, any styles that are not inside a layer get the highest specificity. 

These layers help us to keep our concerns separate, and be able to update and replace values without having to make things harder on ourselves to come up with more and more detailed names. We can just say what we want and what order they should go in, and the browser knows what to do with it. 

So now we have the majority of our shop designed and laid out! Now let's add a little more magic and movement to it. These next two properties are newly available in baseline and really make our app come alive.
-->

---
layout: two-cols-header
---

## View Transitions

Somehow this conveys intent too.

::left::

```js
function back(id: string) {
  withTransition(() => {
    const detail = document.getElementById(`batch-detail-${id}`);
    detail.hidden = true;
    batchList.hidden = false;
    document.documentElement.dataset.view = "dashboard";
  });
}

function withTransition(swap: () => void) {
  if (!document.startViewTransition) return swap();
  document.startViewTransition(swap);
}

batchesSection.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const backBtn = target.closest("[data-back]");
  if (backBtn) back(backBtn.dataset.back || "0");
});
```

::right::

```css
::view-transition-group(batch-panel) {
  animation: none;
  overflow: clip;
}

.batches {
  view-transition-name: batch-panel;
}

html[data-view="dashboard"] {
  &::view-transition-new(batch-panel) {
    animation: 350ms ease-out both slide-from-left;
  }
  &::view-transition-old(batch-panel) {
    animation: 350ms ease-in both slide-to-right;
  }
}
```

<Footer />

<style>
.two-cols-header {
  column-gap: 10px;
  /* grid-template-columns: 50% 50%; */
}

</style>

<!-- 
What do I want to convey for this slide? 
- same-document is what's baseline available, uses js to swap
- cross-document is coming soon, supports multi page and uses css
- document.startViewTransition calls the function that should start the swap
- works by the browser taking snapshots of the old/current page and the new/incoming page, then by default doing a cross fade, turning the old opacity down and the new one up
- can change this effect by using css animations to create your own
- 

newly avail, 88% single-page
-->

---
layout: iframe
url: http://localhost:4321#batches
zoom: 0.9
---

<!--  -->


---

## Popovers & Anchor Positioning

Tether elements to each other, and let their relationship guide their positioning.

```html
<button class="batch-pill" popovertarget=`batch-details-${data.season}-${index}`>
  {ingredient.batchCount} Batches
</button>
<div
  id=`batch-details-${data.season}-${index}`
  class="batch-detail"
  popover
>
  {ingredient.batchNames.map((name) => (
    <p>❧ {name}</p>
  ))}
</div>
```

```css
.batch-detail {
  position-area: inline-start;
  margin-inline-end: 0.5rem;
  padding: var(--space-4);
}
```

<Footer />

<!-- 
What do I want to convey for this slide? 
- popovers give you a way to display an element over the rest of your page content
- at it's simplest, you give an element the popover attribute and an id. the browser will auto-hide it
- then you pick a button/control to activate it, and give that the popovertarget attribute set to the popover's id. by default it works as a toggle, showing and hiding on each click. 
- you can set it to only show or only hide though
- also by default you get some nice state - you can click outside it to light dismiss it, or press esc to exit. also only one popover is visible at a tie, so clicking a button for another will auto-dismiss the previous one.
- it also handles keyboard focus and assistive technology details for you
- the other thing is it creates an implicit anchor reference between our popover content and it's control - this lets us use anchor positioning to decide where we want our popover content to show up
- by default popovers show up in the middle of the screen. but we can adjust this because it gives us anchor positioning since we've created that relatinoship between the two
- anchor positioning lets us position an item relative to its invoker, in this case our popover relative to the button that toggles it
- in this case, we only need to set the positioning of our popover. if this were an explicit anchor grouping, where we wanted to tie two elements together that aren't already related, we'd specifiy an anchor-name and position-anchor value to show the relationship. 
- to make an explicit relationship, we give the anchor itself a name, which like custom properties will start with two dashes. 
- then the item we want to teather to our anchor needs to have a fixed or absolute position, and use the position-anchor property that provides the name of the anchor it's tied to. then we can again position it
- a good default way to position or element is using position-area, which works like a 3x3 grid where we can tell it where we want it to go. it works with physical or logical properties. you can define two options to put it squarely in that grid area, or you can say just one and the other will act like a span and fill the remaining space. 
- there's also a function you can use to get more granular with your positioning

newly avail, 82%
-->

---
layout: iframe
url: http://localhost:4321
zoom: 0.9
---

<!-- 
What do I want to convey for this slide? 
- show the site again and do some wrapping up, refresh on all the things we learned and how they build on each other to help us build intentionally, and all the great benefits we get of using these new fundamental skills, like baked in accessibility and performance and the ability to separate concerns between what the site looks like and the things it can do. we still need and want javascript often - but we don't need it to do all the heavy lifting. css can hold it's own now.
-->

---
layout: statement
---

# Stop fighting the browser. Collaborate with it.

<Footer />

<!-- 
What do I want to convey for this slide? 


-->

---
layout: end
---

# Connect with Me

<!-- 
qr code with a link to the slides/site/references, and how to connect w/ me. either need to build something out for this or make the qr code link to my site and have a url for the codebase (probably a link to the codebase from my portfolio too)
-->

<!-- 
CSS is the art of crafting and guiding attention and intention. The attention aspect is what most people think of: creating our different font sizes, using accent colors on call-to-action buttons, and how we lay out the page to guide people through the order that we think makes sense for them. It pulls your attention, guides it, and shapes it.

What I want to focus on today is more of the intention side. A lot of new features have become baseline, widely available, which means that they have been in all modern browsers for the past 18 months or a year and a half or so. Chances are good that most of your users will be able to support it.

These newer features give us more ability to be intentional with what we do and to collaborate with our browsers. They let CSS say what we intend, say what we want to have it do, and how we want our HTML and our content to look, be, and act. It just does it for us. There is less need to rely on JavaScript to do a lot of these things that we've always had to rely on it for.

My hope today is that I can introduce you to some of these things, show you a little bit of how they work, and start to spark some ideas for you on how you can design more intentionally. 

Attention is applying our mind to something, drawing the focus to something. It's what we mean when we're paying attention to something. It is where we look, what catches our eye, what our brain starts to focus on.

Intention is being able to design for a specific use. It's like the meaning that we put behind things, and it leads into the attention that we want to draw the things. These two working together is what makes CSS so magical.

A lot of the beauty and magic of these properties is also how much it helps us to get out of our own ways and make it easier for us to maintain and create the thing we are trying to do. Our users of our products never really know or care what the codebase looks like or how the code is written that gets them to their final product.

The more intention and clarity that we can put into the parts that they don't see, the easier it is for us to focus on the actual experience we want for them and design things that are more inclusive, more magical, and more meaningful. They go hand in hand. A lot of these help us to need fewer changes and need less complexity so that we can then spend more time focusing on the actual end result. 
 -->