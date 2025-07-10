const { validateMove, makeMove } = require("../move-maker");

describe("validateMove", () => {
  const sampleBoard = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  test("valid move returns true", () => {
    expect(validateMove("1,1", sampleBoard)).toBe(true);
  });

  test("invalid move format returns false", () => {
    expect(validateMove("0,1", sampleBoard)).toBe(false);
    expect(validateMove("4,1", sampleBoard)).toBe(false);
  });

  test("move on occupied space returns false", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "O", "_"],
      ["_", "_", "_"],
    ];
    expect(validateMove("1,1", board)).toBe(false);
    expect(validateMove("2,2", board)).toBe(false);
  });
});

describe("makeMove", () => {
  test("makeMove updates board if move valid", () => {
    const board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
    const move = "2,3";
    const player = "X";
    const result = makeMove(board, move, player);

    expect(result).toBe(true);
    expect(board[1][2]).toBe("X");
  });

  test("makeMove returns false and board unchanged if invalid move", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "O", "_"],
      ["_", "_", "_"],
    ];
    const move = "1,1";
    const player = "O";
    const result = makeMove(board, move, player);

    expect(result).toBe(false);
    expect(board[0][0]).toBe("X");
  });
});
