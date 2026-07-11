import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const seasons = ["spring", "summer", "autumn", "winter"] as const;
const harvestWindows = ["peak", "soon", "fading"] as const;
const batchForms = [
  "Tea",
  "Tincture",
  "Infused Oil",
  "Salve",
  "Syrup",
  "Honey Infusion",
] as const;

const herbs = defineCollection({
  loader: file("src/content/herbs.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    botanicalName: z.string(),
    season: z.enum(seasons),
    description: z.string(),
    pantryName: z.string(),
    stockLevel: z.number(),
    freshnessDays: z.number(),
    harvestWindow: z.enum(harvestWindows),
  }),
});

const staples = defineCollection({
  loader: file("src/content/staples.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    stockLevel: z.number(),
    freshnessDays: z.number(),
  }),
});

const batches = defineCollection({
  loader: file("src/content/batches.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    form: z.enum(batchForms),
    season: z.enum(seasons),
    ingredientIds: z.array(z.string()),
    daysToMake: z.number(),
    daysRemaining: z.number(),
  }),
});

export const collections = { herbs, staples, batches };
