import type { Character } from "./Character";
import { Feat } from "./types";

export const feats: Feat[] = [
  {
    id: "improvedInitiative",
    name: "Улучшенная инициатива",
    text: "Улучшенная инициатива",
    onAdd: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus + 1);
    },
    onRemove: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus - 1);
    },
    type: "fate"
  },
  {
    id: "wariorIncreaseParameter",
    name: "Повышение характеристики",
    text: "Повышение проворности, силы или здоровья",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    type: "fate"
  },
  {
    id: "wariorAtackSkills",
    name: "Дополнительные умения",
    text: "Два атакующих умения на выбор",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    type: "fate"
  },
  {
    id: "wariorDefenceSkills",
    name: "Дополнительное умение",
    text: "Защитное умение на выбор",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    type: "fate"
  }
];

export const getFeatById = (id: string) => {
  return feats.find((feat) => feat.id === id);
};
