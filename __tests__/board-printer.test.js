const { checkIfNoMovesLeft} = require("../board-printer");

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft should return false if there are still moves left", () => {
  const board = [
    ['X', '_', 'O'],
    ['_', 'O', 'X'],
    ['X', 'O', '_']
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

