import { HybridInfo, hybridOption, RaceFeat } from "./interfaces";
import { rollDice } from "../services/diceRoller";
import { dwarfRace } from "./dwarfes";
import { jolfRace } from "./jolfes";

const race1Percentage = 0.75;
const race2Percentage = 1 - race1Percentage;

export const firstStrategy = (
  race1: RaceFeat[],
  race2: RaceFeat[]
): HybridInfo => {
  const resultRace: RaceFeat[] = [];
  race1.forEach((feat) => {
    if (Math.random() <= race1Percentage) resultRace.push({ ...feat });
  });
  race2.forEach((feat) => {
    if (Math.random() <= race2Percentage) resultRace.push({ ...feat });
  });
  const result = {
    // raw: resultRace,
    featsCount: resultRace.length,
    total: resultRace.reduce((acc, cur) => (acc += cur.value), 0),
    deviation: resultRace.reduce((acc, cur) => (acc += cur.deviation), 0)
  };
  // console.log("first strategy:", result);
  return result;
};

export const secondStrategy = (
  race1: RaceFeat[],
  race2: RaceFeat[]
): HybridInfo => {
  const firstRaceFeatsCount = Math.round(race1Percentage * 10);
  const resultRace: RaceFeat[] = [];
  while (resultRace.length < firstRaceFeatsCount) {
    let feat = race1[rollDice(10) - 1];
    if (!resultRace.find((item) => item.name === feat.name))
      resultRace.push({ ...feat });
  }
  while (resultRace.length < 10) {
    let feat = race2[rollDice(10) - 1];
    if (!resultRace.find((item) => item.name === feat.name))
      resultRace.push({ ...feat });
  }
  const result = {
    // raw: resultRace,
    featsCount: resultRace.length,
    total: resultRace.reduce((acc, cur) => (acc += cur.value), 0),
    deviation: resultRace.reduce((acc, cur) => (acc += cur.deviation), 0)
  };
  // console.log("second strategy:", result);
  return result;
};

const firstStrategyData = [];
const secondStrategyData = [];
const times = 10000;

for (let i = 0; i < times; i++) {
  firstStrategyData.push(firstStrategy(dwarfRace, jolfRace));
  secondStrategyData.push(secondStrategy(dwarfRace, jolfRace));
}

export const firstStratagyAverageTotal =
  firstStrategyData.reduce((acc, cur) => (acc += cur.total), 0) / times;
export const firstStratagyAverageDeviation =
  firstStrategyData.reduce((acc, cur) => (acc += cur.deviation), 0) / times;
export const firstStratagyAverageFeatsCount =
  firstStrategyData.reduce((acc, cur) => (acc += cur.featsCount), 0) / times;

export const secondStratagyAverageTotal =
  secondStrategyData.reduce((acc, cur) => (acc += cur.total), 0) / times;
export const secondStratagyAverageDeviation =
  secondStrategyData.reduce((acc, cur) => (acc += cur.deviation), 0) / times;
export const secondStratagyAverageFeatsCount =
  secondStrategyData.reduce((acc, cur) => (acc += cur.featsCount), 0) / times;

export const makeHybrid = (options: hybridOption[]): HybridInfo => {
  const resultRace: RaceFeat[] = [];
  options.forEach((option) =>
    option.race.forEach((feat) => {
      if (Math.random() <= option.percentage) resultRace.push({ ...feat });
    })
  );

  const result = {
    featsCount: resultRace.length,
    total: resultRace.reduce((acc, cur) => (acc += cur.value), 0),
    deviation: resultRace.reduce((acc, cur) => (acc += cur.deviation), 0)
  };
  return result;
};
