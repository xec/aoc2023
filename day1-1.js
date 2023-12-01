const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

let sum = 0;

input.split("\n").forEach((line) => {
  const numbers = line.split('').filter(char => /\d/.test(char))

  sum += +(numbers[0] + numbers.at(-1))
});

console.log(sum);
