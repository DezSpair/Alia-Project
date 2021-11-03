import { RaceFeat } from "./interfaces";

export const humanRace: RaceFeat[] = [
  {
    name: "восприимчивые гены",
    value: 2,
    deviation: 1
  },
  {
    name: "хорошая приспосабливаемость",
    value: 2,
    deviation: 1
  },
  {
    name: "универсальность",
    value: 2,
    deviation: 0
  }
];

export const humansTotal = humanRace.reduce(
  (acc, cur) => (acc += cur.value),
  0
);

export const humansDeviation = humanRace.reduce(
  (acc, cur) => (acc += cur.deviation),
  0
);
