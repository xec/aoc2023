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
const symbolCoordinates = [];


// [[
//   467, // number
//   0, // row index
//   [0, 1, 2] // column indices
// ], ...]
const numbersWithCoordinates = [];

const isSymbolRegex = /[^\d\.]/;
const numberRegex = /(\d+)/g;

const lines = exampleInput.split("\n");

lines.forEach((line, rowIndex) => {
  // find symbols and store their coordinates
  line.split("").forEach((char, x) => {
    if (isSymbolRegex.test(char)) {
      symbolCoordinates.push([rowIndex, x]);
    }
  });

  // find numbers and store their coordinates
  let found;
  while ((found = numberRegex.exec(line))) {
    let num = found[0];
    console.log("num", num);
    let decimals = num.length;
    let columns = [];
    while (decimals--) {
      columns.push(found.index + decimals);
    }
    numbersWithCoordinates.push([num, rowIndex, columns]);
  }
});

// console.log(numbersWithCoordinates);

function isSymbolAt([y, x]) {
  return symbolCoordinates.some(([row, col]) => y === row && x === col);
}

function hasAdjacentSymbol(y, x) {
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
  return adjacentCoordinates.some(isSymbolAt);
}

const partNumbers = numbersWithCoordinates.reduce((acc, [num, row, cols]) => {
  if (cols.some((col) => hasAdjacentSymbol(row, col))) {
    acc.push(Number(num));
  }
  return acc;
}, []);

// console.log(partNumbers);

const sum = partNumbers.reduce((a, b) => a + b);

console.log(sum);
