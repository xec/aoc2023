const input = `...#.#.O....#.#.OO.OOO.O..O.......O#OO#.#..#....O...#.....O.O#..O..OO..O.#...#O..#...O...##O...OO...
#O....O#..O.#.#..O#...#O.O....#O.#.#O#........O...O..#.OOO#O#.......OO##O.#.OO.O.#...##.##....O#..O#
.O.......O.O.O.O..O.O.....#....O#..#.#O.#OO...#O.O#.O#..#O...#...O.O.......#.O....O.#..#.O##O#..O...
...O....#.OO..#..OO#..##....#O.......OOOOOO...OO..#...#.O..O....#O..OO.#O...#O#...O..O#..OO....#....
..O...##OOO....#..OO.OO#O##..#.#........O#.#.....#OO...#............#.###..#.#O...#..O.#O#.O#O.....#
...............O.....##..O...O#.O#........#.O.#..#...#..O..O.#...#......#......O.OO.OOO.#.O.....O##.
......#..#..###.OO.#......O..O.O##O..O.....OO.#.OO....O.....OO#O..O....#.....#.#.O#..O..O.OO.O#O.O.#
##O.....O.#.#O...#.#O###....#.O#.#..#..O.#O........O.OO..#..#O#.O#..OO..#.O.##O....#.##O.O.......##.
O#...###...O..#...#......O#.OO.....#...OOO...#.#O.#...##..OO#.......#OO.....#...O...#.#O.........O.O
..O....O....OO..O.O.O........#.O#..O.#..#..OO#.OO..#.O...O..#...O..##..O........O##..........OOO..OO
....##......#.#.O.O#O##.#....#..O#............#..#...#......#O.OO#....O.......O###....O...........OO
.O.OOO..O#....O...O..#.O#.#O.O...#.O..O#...OO#.#....#OO.#........#O.......O...#O......O...O....#...#
.#....#O...##..#.#..........O..#O........OOO.......O.OO.##...#..........#......#.O##.#O#OO#OO..#..O.
......#O...#.#.......O........#O....#O..##....O......O.#.O..#OO............O##O....#O.OO#..O#..O#...
..OO.....O#O..#OOOO#O.##.........O..#OO#......O.OO.....O......OO..O...O..O....O..O#O.......O..O.O#..
....O...OO....##.....OOO...O#O.#.O...O.....#........#.#O#.....O.O.OO.###.#.OO#OO....O.....O..#.#O...
.OO#..O#O#O...#..O.O....O#.O.#........O.O..O....#O#....#.#.O#.#...O.O..O..#..#...OO#O......#O.O..O.#
OO...O.O.#..#....#...#O.O##O#...#............##.O..OOO....O..OO....#OO....O.#....O#.O........OO..#..
..O#.OO#.#O#..O.......O.##.O.#....OO#.#O#.##.O..O#..####....#..#......#...##.O##...O....O..#.#......
#O.O#.....#....O...O.O..O.O.O#O.O#....#..O...#.O.#O...#..#.#O.....#O..##...O.......O.....O..OO#OO##.
..O.#..#...O....#.##.#.O......#.#.##.......#.O..##O#.#O.OOO..O...#O......#..O.....O.OO...O#.O.#OO#.O
.#..OO#.......OO....O.##...O......O.OO#.O......#O..O#..#..O.O..O.#..OO.O.#O..O..#......O...O....O#..
O....#.#O..O#...#..##..##.O.O.O..O.O#...O#..#O.O......#O.......O..O.O...#.#O..OO#.#.....#O#...O..#.O
...O...O.O.O.OO..O....O..O..O##..O.........O#O..O.#...#.O..O.#........#...O........O#.#.O..O.....#..
OO....O#...........#OO......O.....O...#...OO....OO..O.........O.#......##O....#...O##....O.#...#...#
#OO#....#......OO.O....O...#..O...#.OOOO..OOO.O.O...O#.......O....#O#O.O#O......#...#...OO#.O...#..#
....O#.#...O..#.................#.#...O...O...O.O#.##..O.#.#....####..OO....O.......#.OO.O....#...#.
.....O.#.#O..#O...#OO....OO...O#..O...O..#O..O....#.#O..#.......O...O.O.....#.##.#O.OO..#.#....###..
.#O..#...#...#.#.O.#O.#OO..#.#..#O#.#.#O#.O#O#..##..#...#O#.#..#.OO#..#..#..O...O...O..O...#.O....O.
..O.....#....#O#OO#O.....O.....O...OO.O......OO..O....O...#....O....#...OO....O..O...#...###O.....#.
##..##...#OOO...#.OO...#.#.O#.O.........O.O.#.O..O.OO#.O......#.###...#..#O.#....#...#.O..##...#O...
.O.#...O.O....O.......O...#O.....O......OO..OOO##.#...##OO.O......#....O..#..#.##.OO.......#O...#OO.
...#...O#..O.#.OO.#.OO..O.#O.#.O.#...O#....O#.O#......OO.#....#..#..#..#....O.#....##...............
.O.O#....#.#.....O...#.O#O#.......#.#O..OO.O...#....#.....O.#.#.#..#...#...##..O.O...#O..O.#..#O....
.#......O..O#...O.O.##O..#.OOOO.O#O....O#...#O..OO.#.#O......#..O..O.OO#OOO#O#.O.......OO.....O...#O
O##.O..OOO.#..O......#...#O#.O.O#..O.OO..#......O.O.O..O.O.OO..#....O.#O...O#.#..#..O.#...##O.O.....
.#OO#....#.....#..OO.OO...##.O......OOO.#O..O#.O.O.........O#.O.#.#...#..##...#O.O..OO.O#.#..O..O.O.
.O.....#.O#....O#.....#.O..O..O#..#..OOO#O....#OOOOO.#.#.........O#..O.#....#.#....O.#..##..#.......
..O.#OO....#O.#...#O...#.O#..#.O....O.#..O....O#.....O.OO..OO.OO#.#..#..#O.O.#...O....OO...O.#..O..O
.O.OO#...O#.OO....#.O....O.###...#..O.....O....#.O..O.#O.O.....#....#O#O...#..O...O........O...#....
#...#...#..O..#.##.#.....O#..#O.##.O...O...#....O.O.O..O.O........O.O.O.....O..#.......#...O..O.#.#O
#O...#...O.#....#.O.....OOO..O...OO#OO#.......#O.##...#.O#O#....#.....O#..OO.#.#.O.O..O.#OO.O.#..O..
......O.......O.#.O.#.O...........O.O.OO#....#OO........O#.......OO.O..#O...#....O#..O....OO..O##...
.##..O..#O...O.O....#O#..OO#O.#....#O.OO#O....#.....#...#.#OO#.OO.#.O.O.O.OO.#O.O.#.O....#O.O.O..O..
O#..O#O##.O....O..#......O....#..O##O.O#...O...O...OO#..#OO...O##.#....O#.O..O.......#..#......#O..#
O.OO..O..#.O..O#OO#O.....#O..O..#...#.OO.O..O...........O...O...OO##.#..O..#.#.OO.#.#...O.O......O.O
.O.O##.O....#O.O...O#.#..O....#O.....O..O#OO....OO##.#.O..#O.O...O..O.O...#O.OO.........#.##OO#..#..
..OO....O.....#....O.....O...OOO#...#.O.........O.O..OOO.###O.#.......#.#...O.OO.#..O.....#O.....#..
O...##O...O..##..#.#...#.#O#.O...#.#.O..O....##......#...#.O..O...OO.#...OOO#OO...O.O#O..OO.O##O..O.
..#.OO.#.##..O....#...OO.#O.......O.O#...O..#.#O..O.###O#.#.O.O...O.#O.#..#.O..O#O#..O.........#.#..
O.#.O##.......OO#....O#.......O..O.....#.........O.O.....#O.......#O..#.O...#....O.#....#......O.O.#
.OO.O...O.......#O#....#O#...#.........O..O.#.OO#.OO.O#...#O...O..#..O##O.#...O#..O.OO.O...#OO.##.#.
...O.O...OOO.O......#..O...#.##.O..O..#...O.O...#.O.O..OO..OO..#....O.O#..#...O.OO.#.....#...OO#...#
.#............#O.OO..O#.....O..#O.#O.##O....O.O....O..O#..O..O.#..O.#.O.#.O.#..#O.#.OO.O......##...O
#.....O.#..O.O........O#O#OO..OO.....#.#....OO##......O.O.##..##.#.O...O.#.#O......O..##.#.#.#..#O..
##.#.O..O...O..OO...O....O.O..O#...OO....OO#.#...#.#....OO#..........O..O...O...O........#..O##.#.#.
..OO.#..#.OO..#O..#.O...OO.O...O....#..OO....#OO..#........#...O..........#..O...OO.O.......#.#..##.
.#.#...#O.O.#.O..O.OO.OO#..OO#OOO#O....O..O#..OO.O..##..#.#....OOOOO#....OO..O....#..O..............
...O#.OO......O.#.O.#.#O.OOO...#OO..#....#.O.O.O.......#...##...O...OOO..##...O....O...O.#...O.O...O
..O...O..#.O.....#.#..##.......####...##.......O...O#.##....O.#..OO....#.#.O...##O.#O.###.OO#....O.O
.O#..#....OO...O.O.......O#OO..O#.O.O..#......#..O.#..#O......OO.O...O.....O........O#.#O.#.#.##.O#.
..O....O.#...#..##..O...#.O#..OO...O.......#OOO......#O..OO...O...#..O...##O.#...#.#.##...O...#.OO..
O.#..#...O#OO.O#.O..O.....O.O..#.#.##....O.O..O......OO.O.#.....#....#.##...#...O..O........#......#
.OO.OO.........#...#.#O...#..#..#.###O....#...OO#......#O.O..........#O...#.#.#O#..........#.O#...OO
##.#..#O#OO.#.....O......#....O..#.O#..#.OO.........#.......#.#..#..O.O#OO.###.O.#.#O..##....O.O..O#
#...O...O.......O#.O.#..#O#.O...O...O...O.O.#.O....O###..#.O..O.....O..OO#...O.#...#....O.#O..OO.O..
#O...O...O.##..#.#OO.....#O.#..O....#O.O....O.....#.O.....#.O.O....#.......O.#.O..#.O.##....O..O..O#
O..O.....#O..O...O........O..#.#..........##O#..#..O.#.#OOO..#..O...O..O..#.O....O...O...#...#...O..
#...O.......O#..#.O#.O.....#....O#O......O..O.....#.....O...#...O...#O..#.O..#..#....O....##O#.....#
O...O..#O#.OO..##..#.......O.........#......#...#..O.O..#..#O..O..O.OO......O#OO.#..O#....#.O.#.....
.....#.OOO..OOO....O...#O....O.#.O.#.#O..#O.......O#..O.#O.#.#..#......O#O###..#.#.O..OO.O#.##.OO#.#
O...#..O#.##O..#...#.....O...O.O............O#.....#.O....O#....O#.#O#O..O#.OO..........#.O.#OOO.O..
......#..#...O..O....OO#.O...OO..O....O..##O#..O#..O..##.O..#....##OO.....#..O#.O....#O.#....##.O...
.#..O.O..#..........O...O...O.#..O.#......O.O.....OO#..#...O.....O##..O.O..#.OO.#O.O....O...O..#..#.
.OO.#..O......#........#.#.O...#..........O..O.O.......OO..##O.....#...O...#..#O###..O..O.OOOOO.#.O.
.O..#..O..O...O..#O......OOO.O#..O#.#O...O#O.#...O....O..OO.#....#...O#................O.#O..O.#O..#
......O..O...##..O..##.O.####..OO.O.......#.#O..O#..O#O.......#..O.....##........#..O..O.#...O....OO
.....O.O.O.....O..OO..#O..O#.#OO....#O...#O#.#.OO.#..O...O.#.....#.#O#..O#...OO##.........##...##..#
....O..OOOO..O.O...#.....#.#..OOO...#OO.O#..O..O....#O.......#.O..OOO......OO...#.O#............O#.O
......O....#...#.#..O.O#.#...O..O.OO##.O..O#OO##...#.#..O.OO.........#..##O#...O.#..O.#OO.#O#...##O.
O..##.O...O..#.O.O.O..O.........#..O...#..O.O.##O#.O..#.#.....#..#O#..#.OOO#.O..O...OO#.O...O#......
.O.....O......O.......O#..O.OOOO..O..OO.O#.##.OO#O#.O......#...#.........O..O#...#O..#..#.O...O.#OO.
#O.O...#..OO.#...O.O#....#..#...#OOO##.O.OO#.....#.O#.O..O.#O#O.O.O..........O#.O#.#O###O..#..#.#OO#
#O###.O..O..O......#.O#.#....OO..O.O#....#...#...#.##...OO..O.#OO........O....O..O....OO......O..O.#
.O#O..O...#OOO...O.O...#.O#......#......#O.....O.#.#.O.#....O#.#O..#...#..#...OO#.....OOO....OO.....
..O.#.O....OO......O...O..##.O........#.O.#O.#...O...O.#.##OO.#O......O...O..O.O.O.##..O#.##.#.#O...
.#OO#.#.O#O....O.O....OO#....##.....#.##O..O...OO.....#..O.#....O#.......O....OO.OOO.#...#..O.O.#.OO
.O...O....#.O..O.#..#.........O.#O#.#...O..#O.O.O..O##.....OO..O.O..OO..O..#..#.#.O..#O..O.OO##....O
.##...#O.O..OO..O..#.#O.O.OO.#..#.OOOO.....O...O.O.O#...O#.#.O.............O..O...#.#..........OO#.#
.#....##O....##O..#.O.O..#..O##....#.#.OO........O.O#..#........#OO........O...#.OO..#.........#....
.##OO..#O.#.O..OO.#...#O#.....O....O.#....#O..O#O.#.O..##.O.O.....#.#...#.O..OO....O....#.#.#.......
O.O.O.#....#.OO.#...#...O..#.OO..#..O..#...O.OO.O...##...OO.O#O..O.OO.O##.....#..O#..#O....O.O#OO.#.
.#.O....#.#....#..O.O....OO......O......O.#...O...#.O.O..#.#.....O..#O.O.O..OOO#.O#..O...O#..OO.....
#.#O..#....#.....O.#....#......O.O..O.O.OO.O#...O.#.O.O...#....O...#..#...O.#.O..#.O...OO.#.#O###.OO
..#..O..#O##..#.....O...#..O...OO..#.#.O.#.O.O.....O..O#O#..O......#...#O.O.OO..O............#....#.
....O#....O#O###O.O..#.#..O.#.O.#.O....O........#O.OOO......O.OO....O.O.O.....##.O#....##O.#.OO..O.#
..#.O...OO.#O.#..OO.##..#...O#..O#..#O.O..#......O.....##....O...O.O#OO#O.......O##OOO.OO.O...O.#..#
O......#.O.....OO.OO.O...O.#O..O...O.#.#...#...O...#.OO.O.#.#OO.....#.O.#....OOO........##...##.##O.
#O...#....#...##O.#......O#...#O..........##O..#.O.#O#..#...OO.O....O..##..#...#...#..O..O....O..O#.
...OO....O#..O..#....O.#.#.....OO.#..#O..OO.#.#.#.#......O...O..#.#..##.....#...O.##.....O#.#..O#O..`;

const example = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

const rows = input.split("\n").map((row) => row.split(""));

const rowCount = rows.length;
const colCount = rows[0].length;

const iterations = 1000;

// let prevCycleString = rows.map((x) => x.join("")).join("\n");

// console.log("rows", rows);

function goNorth(y, x) {
  let val = rows[y][x];
  let i = y;
  while (++i < rows.length) {
    val = rows[i][x];
    if (val === "#") return false;
    if (val === "O") {
      rows[y][x] = "O";
      rows[i][x] = ".";
      return true;
    }
  }
  return false;
}

function goSouth(y, x) {
  let val = rows[y][x];
  let i = y;
  while (--i >= 0) {
    val = rows[i][x];
    if (val === "#") return false;
    if (val === "O") {
      rows[y][x] = "O";
      rows[i][x] = ".";
      return true;
    }
  }
  return false;
}

function goWest(y, x) {
  let val = rows[y][x];
  let i = x;
  while (++i < rows[y].length) {
    val = rows[y][i];
    if (val === "#") return false;
    if (val === "O") {
      rows[y][x] = "O";
      rows[y][i] = ".";
      return true;
    }
  }
  return false;
}

function goEast(y, x) {
  let val = rows[y][x];
  let i = x;
  while (--i >= 0) {
    val = rows[y][i];
    if (val === "#") return false;
    if (val === "O") {
      rows[y][x] = "O";
      rows[y][i] = ".";
      return true;
    }
  }
  return false;
}

// run cycles until properly shook
let i = iterations;
while (i--) {
  // while (true) {
  // prevCycleString = JSON.stringify(rows);
  // prevCycleString = rows.map((x) => x.join("")).join("\n")

  // go north
  rows.forEach((line, y) => {
    line.forEach((val, x) => {
      if (val === ".") goNorth(y, x);
    });
  });
  // console.log("\nafter north\n", rows.map((x) => x.join("")).join("\n"));

  // go west
  // need to loop from right to left
  let xi = 0;
  while (xi < colCount) {
    rows.forEach((line, y) => {
      const val = line[xi];
      if (val === ".") goWest(y, xi);
    });
    xi++;
  }
  // console.log("\nafter west\n", rows.map((x) => x.join("")).join("\n"));

  // go south
  rows.findLast((line, y) => {
    line.forEach((val, x) => {
      if (val === ".") goSouth(y, x);
    });
  });
  // console.log("\nafter south\n", rows.map((x) => x.join("")).join("\n"));

  // go east
  // need to loop from left to right
  xi = colCount;
  while (--xi >= 0) {
    rows.forEach((line, y) => {
      const val = line[xi];
      if (val === ".") goEast(y, xi);
    });
  }
  // console.log("\nafter east\n", rows.map((x) => x.join("")).join("\n"));

  // console.log("\ncycles left: " + i);

  // const cycleString = rows.map((x) => x.join("")).join("\n");

  // console.log(prevCycleString);
  // console.log(prevCycleString === cycleString);
  // console.log(cycleString);

  // if (prevCycleString === cycleString) {
  //   console.log("same, breaking");
  //   break;
  // }

  // prevCycleString = cycleString;

  // break;

  const numberedRows = rows
    .slice()
    .reverse()
    .map((x, i) => [x, i + 1]);

  // console.log("numberedRows", numberedRows);

  const sum = numberedRows.reduce((acc, [items, multiplier]) => {
    const matches = items.join("").match(/O/g);
    if (!matches) return acc;
    const rowSum = matches.length * multiplier;
    // console.log(acc, items, multiplier, rowSum);
    return acc + rowSum;
  }, 0);

  // 90580 too high
  console.log(iterations - i, "sum", sum);
}

// const numberedRows = rows
//   .slice()
//   .reverse()
//   .map((x, i) => [x, i + 1]);

// // console.log("numberedRows", numberedRows);

// const sum = numberedRows.reduce((acc, [items, multiplier]) => {
//   const matches = items.join("").match(/O/g);
//   if (!matches) return acc;
//   const rowSum = matches.length * multiplier;
//   // console.log(acc, items, multiplier, rowSum);
//   return acc + rowSum;
// }, 0);

// // // 90580 too high
// console.log("sum", sum);
