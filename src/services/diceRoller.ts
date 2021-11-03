export function rollDice(dice: number) {
  return Math.floor(Math.random() * dice) + 1;
}

function rollSimplePattern(pattern: string) {
  const [times, dice] = pattern.split("d").map((item: string) => +item || 1);
  let result = 0;
  for (let i = 0; i < times; i++) {
    result += rollDice(dice);
  }
  return result;
}

export function roll(pattern: string) {
  const rolls = pattern.split(" ");
  return rolls.reduce((acc, cur) => (acc += rollSimplePattern(cur)), 0);
}
