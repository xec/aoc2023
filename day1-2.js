const exampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const problemInput = "6twodndmhcgxlgbqbqndbbthnngblfgtzh5fouroneightrjp";

let sum = 0;

const numRegex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g;

const numMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function str2digit(str) {
  return /\d/.test(str) ? str : numMap[str];
}

input.split("\n").forEach((line) => {
  let numbers = [],
    found;

  // https://stackoverflow.com/questions/14863026/javascript-regex-find-all-possible-matches-even-in-already-captured-matches/14863268#14863268
  while ((found = numRegex.exec(line))) {
    numbers.push(found[0]);
    numRegex.lastIndex -= found[0].length - 1;
  }

  const firstNum = str2digit(numbers[0]);

  const lastNum = str2digit(numbers.at(-1));
  // console.log(line, numbers, firstNum, lastNum)

  sum += +(firstNum + lastNum);
  // console.log("sum", sum)
});

console.log(sum);
