import type { Character } from "./Character";
import { FateNamesKey } from "./Fate";

export type Nature = {
  name: string;
  base: boolean;
  domain:
    | "Рассудительность"
    | "Импульсивность"
    | "Самоотверженность"
    | "Эгоизм"
    | "other";
};

export type PoolType = {
  id: string;
  name: string;
  base: number;
  current: number;
  bonus: number;
};

export type characteristicKey =
  | "strength"
  | "charisma"
  | "vitality"
  | "intelligence"
  | "dextrity";

export type Characteristic = PoolType & {
  name: characteristicKey;
};

export type LifeForce = PoolType & {
  name: "lifeForce";
};

export type Initiative = PoolType & {
  name: "initiative";
};

export type Education = PoolType & {
  name: "education";
};

export type MaxAugmentations = PoolType & {
  name: "maxAugmentations";
};

export type MaxMutations = PoolType & {
  name: "maxMutations";
};

export type MaxSpecializations = PoolType & {
  name: "maxSpezializations";
};

export type Feat = {
  id: string;
  name: string;
  description: string;
  source: "core" | "race" | "fate" | "other";
  onAdd?: (character: Character) => void;
  onRemove?: (character: Character) => void;
};

export type Fate = {
  id: string;
  name: FateNamesKey;
  trates: Feat[];
};

export type Skill = PoolType & {
  specializations: {
    name: string;
    text: string;
  };
};
