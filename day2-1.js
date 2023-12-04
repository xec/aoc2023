const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const max = {
  red: 12,
  green: 13,
  blue: 14,
};
const games = exampleInput.split("\n");

const possibleGames = [];

const gameRegex = /^Game (\d+):(.*)$/;

games.forEach((g) => {
  const matches = g.match(gameRegex);
  const gameId = Number(matches[1]);
  const rounds = matches[2].split("; ");
  const validGame = rounds.every((round) => {
    const cubeSets = round.trim().split(", ");
    // console.log("cubesets", cubeSets);
    return cubeSets.every((cubeSet) => {
      const [count, color] = cubeSet.split(" ");
      // console.log("count", count, "color", color);
      return +count <= max[color];
    });
  });
  if (validGame) possibleGames.push(gameId);
});

console.log(possibleGames.reduce((a, b) => a + b));
