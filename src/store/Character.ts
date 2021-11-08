import { makeAutoObservable } from "mobx";
import { roll } from "../services/diceRoller";
import { FateNamesKey, getFateById } from "./Fate";
import {
  Nature,
  Characteristic,
  LifeForce,
  Initiative,
  Education,
  Feat,
  Fate,
  Skill,
  characteristicKey,
  MaxAugmentations,
  MaxMutations,
  MaxSpecializations,
  CharacterFeature
} from "./types";

function createDefaultPool(key: string) {
  return {
    id: key,
    name: key,
    base: 0,
    current: 0,
    bonus: 0
  };
}

function createDefaultParams(key: characteristicKey): Characteristic {
  return createDefaultPool(key) as Characteristic;
}
const defaulCharacteristics = [
  createDefaultParams("strength"),
  createDefaultParams("dextrity"),
  createDefaultParams("vitality"),
  createDefaultParams("intelligence"),
  createDefaultParams("charisma")
];

const defaultInitiative = {
  ...(createDefaultPool("initiative") as Initiative),
  base: 4,
  current: 4
};

const defaultEducation = {
  ...(createDefaultPool("education") as Education),
  base: 4,
  current: 4
};

const defaultMaxAugmentations = {
  ...(createDefaultPool("maxAugmentations") as MaxAugmentations),
  base: 1,
  current: 0
};

const defaultMaxMutation = {
  ...(createDefaultPool("maxMutations") as MaxMutations),
  base: 1,
  current: 0
};

const defaultMaxSpecializations = {
  ...(createDefaultPool("maxSpecializations") as MaxSpecializations),
  base: 1,
  current: 0
};

const defaultLifeForce = {
  ...(createDefaultPool("lifeForce") as LifeForce),
  base: 0,
  current: 0
};

const defaultFate: Fate = {
  id: "No Fate",
  name: "No Fate",
  trates: []
};

export class Character {
  public userName: string = "";
  public characterName: string = "";
  public age: number = 0;
  public gender: "male" | "female" | undefined = undefined;
  private _natures: Nature[] = [];
  private _characteristics: Characteristic[] = defaulCharacteristics;
  private _lifeForce: LifeForce = defaultLifeForce;
  private _initiative: Initiative = defaultInitiative;
  private _education: Education = defaultEducation;
  private _maxAugmentations: MaxAugmentations = defaultMaxAugmentations;
  private _maxMutations: MaxMutations = defaultMaxMutation;
  private _maxSpezializations: MaxSpecializations = defaultMaxSpecializations;
  private _feats: Feat[] = [];
  private _fate: Fate = defaultFate;
  private _skills: Skill[] = [];
  private _talents: string[] = [];
  private _characterFeature: CharacterFeature[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public get natures(): Nature[] {
    return this._natures;
  }

  public setNatures(value: Nature[]) {
    this._natures = value;
  }

  public get baseNature(): Nature | undefined {
    return this._natures.find((nature) => nature.base);
  }

  public setBaseNature(nature: Nature | undefined) {
    if (!this.baseNature && nature) {
      this._natures.push(nature);
    }
    this._natures.forEach((item) => {
      item.base = item.name === nature?.name;
    });
  }

  public get subNatures(): Nature[] {
    return this._natures.filter((nature) => !nature.base);
  }

  public get vitality() {
    return this._characteristics.find(
      (char) => char.name === "vitality"
    ) as Characteristic;
  }

  public get strength() {
    return this._characteristics.find(
      (char) => char.name === "strength"
    ) as Characteristic;
  }

  public get dextrity() {
    return this._characteristics.find(
      (char) => char.name === "dextrity"
    ) as Characteristic;
  }

  public get charisma() {
    return this._characteristics.find(
      (char) => char.name === "charisma"
    ) as Characteristic;
  }

  public get intelligence() {
    return this._characteristics.find(
      (char) => char.name === "intelligence"
    ) as Characteristic;
  }

  public get lifeForce() {
    return this.calculateBaseLifeForce();
  }

  public get initiative() {
    return this._initiative;
  }

  public get fate() {
    return this._fate.name;
  }

  public get feats() {
    return this._feats;
  }

  public setBaseCharacteristics(params: Record<string, number>) {
    this._characteristics.forEach((characteristic) => {
      if (params[characteristic.name] !== undefined) {
        characteristic.base = params[characteristic.name];
      }
    });
  }

  public setBonusInitiative(value: number) {
    this._initiative.bonus = value;
  }

  public setFate(fate: FateNamesKey) {
    this._feats.forEach((feat) => {
      if (feat.type === "fate") this.removeFeat(feat);
    });
    this._fate = getFateById(fate);
    this._fate.trates.forEach((feat) => this.addFeat(feat));
  }

  public addFeat(feat: Feat) {
    this._feats = [...this._feats, feat];
    feat.onAdd(this);
  }

  public removeFeat(feat: Feat) {
    this._feats = this._feats.filter((item) => item.id !== feat.id);
    feat.onRemove(this);
  }

  private calculateBaseLifeForce() {
    if (this.vitality.base <= 4) return roll(`${this.vitality.base}d4`);
    if (this.vitality.base === 5) return roll("4d4 d6");
    if (this.vitality.base === 6) return roll("4d4 2d6");
    if (this.vitality.base === 7) return roll("4d4 2d6 d8");
    if (this.vitality.base === 8) return roll("4d4 2d6 2d8");
    if (this.vitality.base === 9) return roll("4d4 2d6 2d8 d10");
    if (this.vitality.base === 10) return roll("4d4 2d6 2d8 2d10");
    if (this.vitality.base === 11) return roll("4d4 2d6 2d8 2d10 d12");
    if (this.vitality.base >= 12) return roll("4d4 2d6 2d8 2d10 2d12");
  }
}
