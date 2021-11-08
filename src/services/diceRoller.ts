export function rollDice(dice: number): number {
  return Math.floor(Math.random() * dice) + 1;
}

function rollSimplePattern(pattern: string): number {
  const [times, dice] = pattern.split("d").map((item: string) => +item || 1);
  let result = 0;
  for (let i = 0; i < times; i++) {
    result += rollDice(dice);
  }
  return result;
}

function rollAsArraySimplePattern(pattern: string): number[] {
  const [times, dice] = pattern.split("d").map((item: string) => +item || 1);
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(dice);
  }
  return result;
}

export function roll(pattern: string): number {
  const rolls = pattern.split(" ");
  return rolls.reduce((acc, cur) => (acc += rollSimplePattern(cur)), 0);
}

export function rollAsArray(pattern: string): number[] {
  const rolls = pattern.split(" ");
  return rolls.map((dice) => rollAsArraySimplePattern(dice)).flat();
}
