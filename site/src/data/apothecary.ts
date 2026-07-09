// Seed data for The Apothecary dashboard demo.
// Grounded in real temperate-climate herbalism (Northern Hemisphere harvest windows)
// so the "In Season" logic and Pantry/Batch relationships stay believable.
//
// Stock levels, freshness windows, and batch timings below were generated once
// with a seeded PRNG (see scripts referenced in project notes) rather than
// Math.random() at runtime — the demo is pre-recorded, so the numbers need to
// stay identical across every rebuild.

export type Season = "spring" | "summer" | "autumn" | "winter";

export type BatchForm =
  | "Tea"
  | "Tincture"
  | "Infused Oil"
  | "Salve"
  | "Syrup"
  | "Honey Infusion";

export interface Herb {
  id: string;
  name: string;
  botanicalName: string;
  /** Drives the In Season widget — only herbs whose season matches the current
   *  Season Banner selection should render there. */
  season: Season;
  /** Shown when the In Season widget expands into the main content area. */
  description: string;
  /** The dried (or, for evergreens, fresh-cut) form this herb takes once it reaches the Pantry. */
  pantryForm: string;
  /** Jars currently in stock. */
  stockLevel: number;
  /** Days remaining before this jar's potency window closes. */
  freshnessDays: number;
}

export interface Staple {
  id: string;
  name: string;
  /** How this staple is stored in the Pantry. Staples never appear in the In Season widget. */
  pantryForm: string;
  stockLevel: number;
  freshnessDays: number;
}

export interface Batch {
  id: string;
  name: string;
  form: BatchForm;
  season: Season;
  /** 1-3 Herb/Staple ids this batch draws from the Pantry — most batches blend more than one herb. */
  ingredientIds: string[];
  /** Total days this preparation takes from start to finished batch. */
  daysToMake: number;
  /** Days remaining on the current in-progress batch (always <= daysToMake). */
  daysRemaining: number;
}

export const herbs: Herb[] = [
  // ---- Spring ----
  {
    id: "nettle",
    name: "Nettle",
    botanicalName: "Urtica dioica",
    season: "spring",
    description:
      "One of the first plants up in spring. Young leaves are prized in folk herbalism as a mineral-rich tonic — traditionally reached for when energy feels low after winter.",
    pantryForm: "Dried Leaf",
    stockLevel: 18,
    freshnessDays: 255,
  },
  {
    id: "dandelion",
    name: "Dandelion",
    botanicalName: "Taraxacum officinale",
    season: "spring",
    description:
      "Every part is used. The root is roasted for a coffee-like tonic, while the leaf is bitter and traditionally taken to support digestion after a heavy winter diet.",
    pantryForm: "Dried Root",
    stockLevel: 17,
    freshnessDays: 517,
  },
  {
    id: "chickweed",
    name: "Chickweed",
    botanicalName: "Stellaria media",
    season: "spring",
    description:
      "A cooling, low-growing plant that carpets the garden in early spring. Its high moisture content makes it a favorite for soothing, cooling skin preparations.",
    pantryForm: "Dried Herb",
    stockLevel: 18,
    freshnessDays: 137,
  },
  {
    id: "violet",
    name: "Sweet Violet",
    botanicalName: "Viola odorata",
    season: "spring",
    description:
      "Shade-loving and fleeting — the flowers only last a few weeks. Both leaf and blossom are gentle enough for daily use and lend a soft, floral note.",
    pantryForm: "Dried Flower",
    stockLevel: 8,
    freshnessDays: 166,
  },
  {
    id: "lemon-balm",
    name: "Lemon Balm",
    botanicalName: "Melissa officinalis",
    season: "spring",
    description:
      "A member of the mint family that comes up fast and fragrant in spring. Bruise a leaf and the citrus scent is unmistakable — long used to take the edge off a stressful day.",
    pantryForm: "Dried Leaf",
    stockLevel: 16,
    freshnessDays: 180,
  },

  // ---- Summer ----
  {
    id: "lavender",
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    season: "summer",
    description:
      "Harvested just as the buds open, before the oils peak and start to fade in the heat. The scent alone is often enough to slow a room down.",
    pantryForm: "Dried Bud",
    stockLevel: 22,
    freshnessDays: 128,
  },
  {
    id: "chamomile",
    name: "Chamomile",
    botanicalName: "Matricaria chamomilla",
    season: "summer",
    description:
      "Small daisy-like flowers picked at the height of summer. A gentle, apple-scented herb reached for at the end of the day, or to settle a fussy stomach.",
    pantryForm: "Dried Flower",
    stockLevel: 20,
    freshnessDays: 122,
  },
  {
    id: "elderflower",
    name: "Elderflower",
    botanicalName: "Sambucus nigra",
    season: "summer",
    description:
      "The creamy flower clusters bloom for a short window in early summer, well before the berries form in autumn. Traditionally taken at the first sign of a summer cold.",
    pantryForm: "Dried Flower",
    stockLevel: 3,
    freshnessDays: 216,
  },
  {
    id: "calendula",
    name: "Calendula",
    botanicalName: "Calendula officinalis",
    season: "summer",
    description:
      "Bright orange petals that keep blooming right through the hottest weeks. A shop staple for skin-soothing salves — reliable, cheerful, and easy to dry well.",
    pantryForm: "Dried Petal",
    stockLevel: 22,
    freshnessDays: 145,
  },
  {
    id: "yarrow",
    name: "Yarrow",
    botanicalName: "Achillea millefolium",
    season: "summer",
    description:
      "A feathery-leaved plant found at the edge of meadows in midsummer. Long carried by herbalists for minor cuts and scrapes, hence the old nickname 'woundwort.'",
    pantryForm: "Dried Flowering Top",
    stockLevel: 17,
    freshnessDays: 205,
  },
  {
    id: "peppermint",
    name: "Peppermint",
    botanicalName: "Mentha piperita",
    season: "summer",
    description:
      "Grows aggressively once summer heat sets in — most herbalists cut it back several times a season just to keep it contained. Cooling and reliably good for the stomach.",
    pantryForm: "Dried Leaf",
    stockLevel: 4,
    freshnessDays: 207,
  },

  // ---- Autumn ----
  {
    id: "elderberry",
    name: "Elderberry",
    botanicalName: "Sambucus nigra",
    season: "autumn",
    description:
      "The same plant as summer's elderflower, now heavy with dark purple berries. Always cooked before use — one of the most requested immune-support ingredients in the shop.",
    pantryForm: "Dried Berry",
    stockLevel: 20,
    freshnessDays: 309,
  },
  {
    id: "rosehip",
    name: "Rosehip",
    botanicalName: "Rosa canina",
    season: "autumn",
    description:
      "The fruit left behind after the roses fade, sweetest once picked after the season's first light frost. A tart, vitamin-rich staple for the darker months ahead.",
    pantryForm: "Dried Hip",
    stockLevel: 4,
    freshnessDays: 225,
  },
  {
    id: "echinacea",
    name: "Echinacea",
    botanicalName: "Echinacea purpurea",
    season: "autumn",
    description:
      "The root is dug once the flowers have died back and the plant's energy has moved underground for winter — considered the most potent part of the plant.",
    pantryForm: "Dried Root",
    stockLevel: 18,
    freshnessDays: 540,
  },
  {
    id: "hawthorn",
    name: "Hawthorn",
    botanicalName: "Crataegus monogyna",
    season: "autumn",
    description:
      "Deep red berries that ripen on hedgerows in early autumn. A gentle, long-used herb for supporting the heart, both literally and in the old folk sense.",
    pantryForm: "Dried Berry",
    stockLevel: 14,
    freshnessDays: 280,
  },
  {
    id: "sage",
    name: "Garden Sage",
    botanicalName: "Salvia officinalis",
    season: "autumn",
    description:
      "Cut back hard before the first frost, both to preserve the harvest and to keep the plant healthy through winter. A classic remedy for sore, scratchy throats.",
    pantryForm: "Dried Leaf",
    stockLevel: 10,
    freshnessDays: 178,
  },

  // ---- Winter ----
  {
    id: "ginger",
    name: "Ginger",
    botanicalName: "Zingiber officinale",
    season: "winter",
    description:
      "Doesn't grow locally, so the shop relies on cured, stored root through winter. Warming and a first reach for anyone walking in cold and a little queasy.",
    pantryForm: "Dried Root",
    stockLevel: 14,
    freshnessDays: 399,
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    botanicalName: "Cinnamomum verum",
    season: "winter",
    description:
      "Cured bark, stored in coils in the back pantry. Used sparingly — a little goes a long way toward warming both a tea blend and a cold room.",
    pantryForm: "Dried Bark",
    stockLevel: 11,
    freshnessDays: 321,
  },
  {
    id: "licorice-root",
    name: "Licorice Root",
    botanicalName: "Glycyrrhiza glabra",
    season: "winter",
    description:
      "Naturally sweet dried root, kept on hand through the cold months. Often blended into throat and cough teas to round out sharper, more bitter herbs.",
    pantryForm: "Dried Root",
    stockLevel: 17,
    freshnessDays: 476,
  },
  {
    id: "pine",
    name: "Pine",
    botanicalName: "Pinus strobus",
    season: "winter",
    description:
      "Evergreen, so it's one of the only fresh greens to gather in the dead of winter. The needles carry a bright, resinous scent and a good dose of vitamin C.",
    pantryForm: "Fresh Needle",
    stockLevel: 18,
    freshnessDays: 27,
  },
  {
    id: "clove",
    name: "Clove",
    botanicalName: "Syzygium aromaticum",
    season: "winter",
    description:
      "Dried flower buds, stored whole in glass to keep their oil from fading. A small, potent ingredient — used a few buds at a time, never by the handful.",
    pantryForm: "Dried Bud",
    stockLevel: 12,
    freshnessDays: 272,
  },
];

// Common staples that don't have a season of their own but are needed to turn
// a dried herb into a finished tea, oil, salve, or tincture. These show up in
// the Pantry alongside herbs, but never in the In Season widget.
export const staples: Staple[] = [
  {
    id: "carrier-oil",
    name: "Sweet Almond Oil",
    pantryForm: "Bottled Oil",
    stockLevel: 39,
    freshnessDays: 336,
  },
  {
    id: "beeswax",
    name: "Beeswax",
    pantryForm: "Block",
    stockLevel: 16,
    freshnessDays: 1075,
  },
  {
    id: "brandy",
    name: "Brandy",
    pantryForm: "Bottled",
    stockLevel: 4,
    freshnessDays: 1306,
  },
  {
    id: "raw-honey",
    name: "Raw Honey",
    pantryForm: "Jarred",
    stockLevel: 28,
    freshnessDays: 1060,
  },
];

// Active/possible batches. Most blend 2-3 herbs (or a herb plus a staple) so
// the Pantry's "used in X batches" badge has more than one batch to point to.
export const batches: Batch[] = [
  // ---- Spring ----
  {
    id: "spring-tonic-tea",
    name: "Spring Tonic Tea",
    form: "Tea",
    season: "spring",
    ingredientIds: ["nettle", "dandelion", "lemon-balm"],
    daysToMake: 3,
    daysRemaining: 2,
  },
  {
    id: "dandelion-bitters",
    name: "Dandelion Bitters",
    form: "Tincture",
    season: "spring",
    ingredientIds: ["dandelion", "brandy"],
    daysToMake: 35,
    daysRemaining: 21,
  },
  {
    id: "chickweed-salve",
    name: "Chickweed Salve",
    form: "Salve",
    season: "spring",
    ingredientIds: ["chickweed", "carrier-oil", "beeswax"],
    daysToMake: 24,
    daysRemaining: 20,
  },
  {
    id: "violet-flower-honey",
    name: "Violet Flower Honey",
    form: "Honey Infusion",
    season: "spring",
    ingredientIds: ["violet", "raw-honey"],
    daysToMake: 7,
    daysRemaining: 4,
  },
  {
    id: "lemon-balm-calm-tea",
    name: "Lemon Balm Calm Tea",
    form: "Tea",
    season: "spring",
    ingredientIds: ["lemon-balm", "violet"],
    daysToMake: 3,
    daysRemaining: 1,
  },

  // ---- Summer ----
  {
    id: "lavender-chamomile-sleep-tea",
    name: "Lavender Chamomile Sleep Tea",
    form: "Tea",
    season: "summer",
    ingredientIds: ["lavender", "chamomile"],
    daysToMake: 3,
    daysRemaining: 1,
  },
  {
    id: "elderflower-cordial",
    name: "Elderflower Cordial",
    form: "Syrup",
    season: "summer",
    ingredientIds: ["elderflower", "raw-honey"],
    daysToMake: 3,
    daysRemaining: 3,
  },
  {
    id: "calendula-salve",
    name: "Calendula Salve",
    form: "Salve",
    season: "summer",
    ingredientIds: ["calendula", "carrier-oil", "beeswax"],
    daysToMake: 21,
    daysRemaining: 5,
  },
  {
    id: "yarrow-tincture",
    name: "Yarrow Tincture",
    form: "Tincture",
    season: "summer",
    ingredientIds: ["yarrow", "brandy"],
    daysToMake: 31,
    daysRemaining: 11,
  },
  {
    id: "peppermint-digestive-tea",
    name: "Peppermint Digestive Tea",
    form: "Tea",
    season: "summer",
    ingredientIds: ["peppermint", "chamomile"],
    daysToMake: 3,
    daysRemaining: 3,
  },
  {
    id: "lavender-infused-oil",
    name: "Lavender Infused Oil",
    form: "Infused Oil",
    season: "summer",
    ingredientIds: ["lavender", "carrier-oil"],
    daysToMake: 19,
    daysRemaining: 3,
  },

  // ---- Autumn ----
  {
    id: "elderberry-immune-syrup",
    name: "Elderberry Immune Syrup",
    form: "Syrup",
    season: "autumn",
    ingredientIds: ["elderberry", "rosehip", "raw-honey"],
    daysToMake: 3,
    daysRemaining: 2,
  },
  {
    id: "echinacea-root-tincture",
    name: "Echinacea Root Tincture",
    form: "Tincture",
    season: "autumn",
    ingredientIds: ["echinacea", "brandy"],
    daysToMake: 23,
    daysRemaining: 8,
  },
  {
    id: "hawthorn-heart-tea",
    name: "Hawthorn Heart Tea",
    form: "Tea",
    season: "autumn",
    ingredientIds: ["hawthorn", "rosehip"],
    daysToMake: 2,
    daysRemaining: 1,
  },
  {
    id: "sage-throat-tincture",
    name: "Sage Throat Tincture",
    form: "Tincture",
    season: "autumn",
    ingredientIds: ["sage", "brandy"],
    daysToMake: 26,
    daysRemaining: 2,
  },
  {
    id: "rosehip-vitamin-oil",
    name: "Rosehip Vitamin Oil",
    form: "Infused Oil",
    season: "autumn",
    ingredientIds: ["rosehip", "carrier-oil"],
    daysToMake: 12,
    daysRemaining: 7,
  },

  // ---- Winter ----
  {
    id: "ginger-cinnamon-warming-tea",
    name: "Ginger Cinnamon Warming Tea",
    form: "Tea",
    season: "winter",
    ingredientIds: ["ginger", "cinnamon", "clove"],
    daysToMake: 3,
    daysRemaining: 1,
  },
  {
    id: "licorice-cough-tea",
    name: "Licorice Cough Tea",
    form: "Tea",
    season: "winter",
    ingredientIds: ["licorice-root", "ginger"],
    daysToMake: 3,
    daysRemaining: 2,
  },
  {
    id: "pine-resin-salve",
    name: "Pine Resin Salve",
    form: "Salve",
    season: "winter",
    ingredientIds: ["pine", "carrier-oil", "beeswax"],
    daysToMake: 22,
    daysRemaining: 1,
  },
  {
    id: "clove-toothache-oil",
    name: "Clove Toothache Oil",
    form: "Infused Oil",
    season: "winter",
    ingredientIds: ["clove", "carrier-oil"],
    daysToMake: 15,
    daysRemaining: 5,
  },
  {
    id: "cinnamon-tincture",
    name: "Cinnamon Tincture",
    form: "Tincture",
    season: "winter",
    ingredientIds: ["cinnamon", "brandy"],
    daysToMake: 28,
    daysRemaining: 22,
  },
];

export default { herbs, staples, batches };
