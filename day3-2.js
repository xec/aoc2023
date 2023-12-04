const exampleInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

// [[y, x], [y, x]]
const starCoordinates = [];

// [[
//   467, // number
//   0, // row index
//   [0, 1, 2] // column indices
// ], ...]
const numbersWithCoordinates = [];

const numberRegex = /(\d+)/g;

const lines = input.split("\n");

lines.forEach((line, rowIndex) => {
  // find stars and store their coordinates
  line.split("").forEach((char, x) => {
    if (char === "*") {
      starCoordinates.push([rowIndex, x]);
    }
  });

  // find numbers and store their coordinates
  let found;
  while ((found = numberRegex.exec(line))) {
    let num = found[0];
    let decimals = num.length;
    let columns = [];
    while (decimals--) {
      columns.push(found.index + decimals);
    }
    numbersWithCoordinates.push([num, rowIndex, columns]);
  }
});

const gearRatios = [];

starCoordinates.forEach(([y, x]) => {
  // find adjacent numbers
  const adjacentCoordinates = [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x - 1],
    [y, x + 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
  ];
  const adjacentNumbers = numbersWithCoordinates.filter(([, row, columns]) =>
    columns.some((col) =>
      adjacentCoordinates.some(([ay, ax]) => ay === row && ax === col)
    )
  );
  if (adjacentNumbers.length !== 2) return;

  gearRatios.push(+adjacentNumbers[0][0] * +adjacentNumbers[1][0]);
});

console.log(gearRatios.reduce((a, b) => a + b));
