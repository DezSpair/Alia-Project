import type { Character } from "./Character";
import { Feat } from "./types";

export const fateFeats: Feat[] = [
  {
    id: "improvedInitiative",
    name: "Улучшенная инициатива",
    description: "Улучшенная инициатива",
    onAdd: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus + 1);
    },
    onRemove: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus - 1);
    },
    source: "fate"
  },
  {
    id: "wariorIncreaseParameter",
    name: "Повышение характеристики",
    description: "Повышение проворности, силы или здоровья",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    source: "fate"
  },
  {
    id: "wariorAtackSkills",
    name: "Дополнительные умения",
    description: "Два атакующих умения на выбор",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    source: "fate"
  },
  {
    id: "wariorDefenceSkills",
    name: "Дополнительное умение",
    description: "Защитное умение на выбор",
    onAdd: (character: Character) => {
      console.log("select things, add things");
    },
    onRemove: (character: Character) => {
      console.log("remove things");
    },
    source: "fate"
  }
];

export const coreFeats: Feat[] = [
  {
    id: "Мучитель",
    name: "Мучитель",
    source: "core",
    description:
      "может извлекать в два раза больше ЖС из живых существ на каждый затрачиваемый ПВ, либо успех на кости."
  },
  {
    id: "Несгибаемость",
    name: "Несгибаемость",
    source: "core",
    description:
      "при похищении ЖС  теряется только их половина с округлением вниз. Персонажа с этой особенностью нельзя убить при помощи похищения ЖС. В случае, если при похищении он должен расстаться с последними ЖС, то похищения не происходит."
  },
  {
    id: "magicBattarey",
    name: "Магическая батарейка",
    source: "core",
    description:
      "некоторые линийцы рождаются с даром запасать в себе жизненную энергию. Они учатся запасать в себе излишки ПВ, поглощенные при помощи вытягивания ЖС или переданные им магическим путем (при этом для магов они становятся столь же притягательны, как  лампочка для мотыльков). Накопленной энергией они могут перезаряжать магические камни, а также излишки ПВ могут быть использованы для уменьшения иссушения, либо для лечения себя (пропорционально кости иссушения)."
  },
  {
    id: "Устойчивость генных мутаций",
    name: "Устойчивость генных мутаций",
    source: "core",
    description:
      "гены персонажа устойчивы к мутациям, то требует на 1 ПВ больше для совершения генных преобразований, а также снижает вероятность появления негативных мутаций на 25%."
  },
  {
    id: "improvedInitiativeCore",
    name: "Улучшенная инициатива",
    source: "core",
    description: "персонаж поднимает на 2 ПВ свою инициативу.",
    onAdd: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus + 1);
    },
    onRemove: (character: Character) => {
      character.setBonusInitiative(character.initiative.bonus - 1);
    }
  },
  {
    id: "Неутомимый",
    name: "Неутомимый",
    source: "core",
    description:
      "персонаж при подсчете штрафа на действия игнорирует один ранг негативных эффектов, требующих отдыха."
  },
  {
    id: "psyonicTalent",
    name: "Талант псионика",
    source: "core",
    description: "открывает персонажу доступ к магическим умениям."
  },
  {
    id: "somnomnicTalent",
    name: "Талант сомноника",
    source: "core",
    description: "открывает персонажу доступ к умениям сомноника."
  },
  {
    id: "necronicTalent",
    name: "Талант некроника",
    source: "core",
    description: "открывает персонажу доступ к умениям некроники."
  },
  {
    id: "magicTalent",
    name: "Талант мага",
    source: "core",
    description: "открывает персонажу доступ к магическим умениям."
  },
  {
    id: "idealGenes",
    name: "Идеальные гены",
    source: "core",
    description:
      "персонаж не получает недостатков, связанных со снижением характеристик, при создании персонажа."
  }
];

export const feats = [...coreFeats, ...fateFeats];

export const getFeatById = (id: string) => {
  return feats.find((feat) => feat.id === id);
};
