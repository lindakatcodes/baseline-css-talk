import { type CollectionEntry } from "astro:content";

export type Season = "spring" | "summer" | "autumn" | "winter";
export type Herb = CollectionEntry<"herbs">["data"];
export type Staple = CollectionEntry<"staples">["data"];
export type Batch = CollectionEntry<"batches">["data"];

export type SeasonalIngredient = {
  id: string;
  displayName: string;
  seasons: string[];
  stockLevel: number;
  freshnessDays: number;
  batchCount: number;
  batchNames: string[];
};

export type SeasonalDataItem = {
  season: Season;
  currentHerbs: Herb[];
  currentBatches: Batch[];
  currentIngredients: SeasonalIngredient[];
};
