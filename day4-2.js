const exampleInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const lineRegex = /^Card.*([\d]+): (.*)\|(.*)$/;

const cardsWithWinCount = exampleInput.split("\n").map((line) => {
  const linesplit = line.match(lineRegex);
  const winningNumbers = linesplit[2].split(" ").filter(Boolean);
  const scratchedNumbers = linesplit[3].split(" ").filter(Boolean);
  const matchedNumbers = scratchedNumbers.filter((s) =>
    winningNumbers.includes(s)
  );
  return {
    cardNumber: linesplit[1],
    winCount: matchedNumbers.length,
  };
});

// attach won cards
cardsWithWinCount.forEach((card, i) => {
  card.wonCards = cardsWithWinCount.slice(i + 1, i + 1 + card.winCount);
});

function winningsForCard(card) {
  return (
    1 + card.wonCards.reduce((acc, card) => acc + winningsForCard(card), 0)
  );
}

const totalWinnings = cardsWithWinCount.reduce(
  (acc, card) => acc + winningsForCard(card),
  0
);

console.log(totalWinnings);
