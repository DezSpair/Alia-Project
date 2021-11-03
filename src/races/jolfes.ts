import { RaceFeat } from "./interfaces";

export const jolfRace: RaceFeat[] = [
  {
    name: "чувство скрытого",
    value: 2,
    deviation: 1
  },
  {
    name: "консерватизм",
    value: 0,
    deviation: 2
  },
  {
    name: "разговор с растением",
    value: 1,
    deviation: 1
  },
  {
    name: "животное компаньон",
    value: 0,
    deviation: 2
  },
  {
    name: "долгоживущие",
    value: 0,
    deviation: 1
  },
  {
    name: "меньше спят",
    value: 2,
    deviation: 2
  },
  {
    name: "быстрые",
    value: 2,
    deviation: 2
  },
  {
    name: "не живучие",
    value: -2,
    deviation: 2
  },
  {
    name: "звериные глаза",
    value: 0,
    deviation: 0
  },
  {
    name: "уши",
    value: 0,
    deviation: 0
  }
];

export const jolfesTotal = jolfRace.reduce((acc, cur) => (acc += cur.value), 0);

export const jolfesDeviation = jolfRace.reduce(
  (acc, cur) => (acc += cur.deviation),
  0
);
