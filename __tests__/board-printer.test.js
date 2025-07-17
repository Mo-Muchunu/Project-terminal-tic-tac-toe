import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["X", "O", "X"],
    ["X", "O", "O"],
    ["O", "X", "X"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});
