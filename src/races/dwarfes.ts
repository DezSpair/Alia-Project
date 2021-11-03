import { RaceFeat } from "./interfaces";

export const dwarfRace: RaceFeat[] = [
  {
    name: "ориентация в пространстве",
    value: 1,
    deviation: 1
  },
  {
    name: "антимагичнось",
    value: 0,
    deviation: 2
  },
  {
    name: "разговор с камнем",
    value: 1,
    deviation: 1
  },
  {
    name: "толстая кожа",
    value: 2,
    deviation: 2
  },
  {
    name: "долгоживущие",
    value: 0,
    deviation: 1
  },
  {
    name: "сумеречное зрение",
    value: 1,
    deviation: 1
  },
  {
    name: "живучие",
    value: 2,
    deviation: 2
  },
  {
    name: "неустойчивы ментально",
    value: -1,
    deviation: 1
  },
  {
    name: "коренастые",
    value: 0,
    deviation: 0
  },
  {
    name: "волосатые",
    value: 0,
    deviation: 0
  }
];

export const dwarfesTotal = dwarfRace.reduce(
  (acc, cur) => (acc += cur.value),
  0
);

export const dwarfesDeviation = dwarfRace.reduce(
  (acc, cur) => (acc += cur.deviation),
  0
);
