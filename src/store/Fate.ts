import { Fate, Feat } from "./types";
import { getFeatById } from "./feats";

export type FateNamesKey =
  | "No Fate"
  | "Warior"
  | "Seeker"
  | "Rebel"
  | "Creator"
  | "Ruler"
  | "Trickster";

export const FateNames: Record<FateNamesKey, FateNamesKey> = {
  Warior: "Warior",
  Seeker: "Seeker",
  Rebel: "Rebel",
  Creator: "Creator",
  Ruler: "Ruler",
  Trickster: "Trickster",
  "No Fate": "No Fate"
};

const defaultFate: Fate = {
  id: "No Fate",
  name: "No Fate",
  trates: []
};

const wariorFate: Fate = {
  id: "Warior",
  name: "Warior",
  trates: [
    getFeatById("improvedInitiative"),
    getFeatById("wariorIncreaseParameter"),
    getFeatById("wariorAtackSkills"),
    getFeatById("wariorDefenceSkills")
  ] as Feat[]
};

const creatorFate: Fate = {
  id: "Creator",
  name: "Creator",
  trates: []
};

const rebelFate: Fate = {
  id: "Rebel",
  name: "Rebel",
  trates: []
};

const rulerFate: Fate = {
  id: "Ruler",
  name: "Ruler",
  trates: []
};

const seekerFate: Fate = {
  id: "Seeker",
  name: "Seeker",
  trates: []
};

const tricksterFate: Fate = {
  id: "Trickster",
  name: "Trickster",
  trates: []
};

const fates = {
  [FateNames["No Fate"]]: defaultFate,
  [FateNames.Warior]: wariorFate,
  [FateNames.Creator]: creatorFate,
  [FateNames.Rebel]: rebelFate,
  [FateNames.Ruler]: rulerFate,
  [FateNames.Seeker]: seekerFate,
  [FateNames.Trickster]: tricksterFate
};

export function getFateById(id: FateNamesKey) {
  return fates[id];
}
