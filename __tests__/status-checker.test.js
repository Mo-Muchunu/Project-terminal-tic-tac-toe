const { isGameOver } = require("../status-checker");

jest.mock("../board-printer.js", () => ({
  checkIfNoMovesLeft: (board) =>
    board.every((row) => row.every((cell) => cell !== "_")),
}));

describe("isGameOver", () => {
  test("returns true when X wins by row", () => {
    const board = [
      ["X", "X", "X"],
      ["O", "_", "_"],
      ["_", "O", "_"],
    ];
    expect(isGameOver(board)).toBe(true);
  });

  test("returns true when O wins by column", () => {
    const board = [
      ["O", "X", "_"],
      ["O", "_", "X"],
      ["O", "_", "_"],
    ];
    expect(isGameOver(board)).toBe(true);
  });

  test("returns true when X wins diagonally", () => {
    const board = [
      ["X", "O", "_"],
      ["_", "X", "O"],
      ["_", "_", "X"],
    ];
    expect(isGameOver(board)).toBe(true);
  });
  test("returns true when game is a tie", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ];
    expect(isGameOver(board)).toBe(true);
  });

  test("returns false when game is still running", () => {
    const board = [
      ["X", "_", "O"],
      ["_", "X", "_"],
      ["_", "_", "O"],
    ];
    expect(isGameOver(board)).toBe(false);
  });
});
