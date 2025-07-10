/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
export function validateMove(move, board) {
  // Implement this at the end if you have time, otherwise you can help your teammates!

  // First, I need to split the 'move' parameter into an array of strings, then convert each one into a number.
  const [row, column] = move.split(",").map(Number);

  // Then, I need to check if the row and column are valid numbers(1, 2, or 3).
  if (
    isNaN(row) ||
    isNaN(column) ||
    row < 1 ||
    row > 3 ||
    column < 1 ||
    column > 3
  ) {
    // If not, I will output 'Try again...' and return false.
    console.log("Try again...");
    return false;
  }

  /// Then I need to assign the correct indexes to the row and column variables, as numbers and indexes are different by creating two variables.
  const rowIndex = row - 1;
  const columnIndex = column - 1;

  // Finally, I need to check if the space on the board is free.
  if (board[rowIndex][columnIndex] !== "_") {
    // If not, I will output 'Try again...' and return false.
    console.log("Try again...");
    return false;
  }
  // If all conditions are met and the move is valid, I will return true.
  console.log("Valid move!");
  return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  // First, I'm writing the makeMove function using the validateMove function in case of the move being not valid
  if (!validateMove(move, board)) {
    return false;
  }

  // Second, after making sure the move is valid, I'll declare a variable to split the parameter 'move' into a array of strings, then converts each one in a number.
  // Then, I will assign each number to a variable row and column.
  const [row, column] = move.split(",").map(Number);

  // Then I need to assign the correct indexes to the row and column variables, as numbers and indexes are different.
  const rowIndex = row - 1;
  const columnIndex = column - 1;

  //Finally, I need to reflect the player's move on the board illustrated by 'rowIndex' and 'columnIndex' in an empty space by using his value(O or X).
  board[rowIndex][columnIndex] = player;
  return true;
}
