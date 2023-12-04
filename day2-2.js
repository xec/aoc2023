const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const games = exampleInput.split("\n");

const possibleGames = [];

const gameRegex = /^Game (\d+):(.*)$/;

const minValues = [];

games.forEach((g) => {
  const matches = g.match(gameRegex);
  // const gameId = Number(matches[1]);
  const rounds = matches[2].split("; ");
  const min = {
    red: 0,
    green: 0,
    blue: 0,
  };
  rounds.forEach((round) => {
    round
      .trim()
      .split(", ")
      .forEach((cubeSet) => {
        const [count, color] = cubeSet.split(" ");

        if (+count > min[color]) min[color] = +count;
      });
  });
  minValues.push(min);
});

const powerOfCubes = minValues.map(
  ({ red, green, blue }) => red * green * blue
);

console.log(powerOfCubes.reduce((a,b) => a + b))