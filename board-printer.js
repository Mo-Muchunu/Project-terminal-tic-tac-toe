function printBoard(board) {                                 // Take 1 parameter 'board' as a 2D array(array of arrays) representing a Tic-Tac-Toe board
    const rowSeparator = '━'.repeat(11);                     // String of repeating characters to separate the rows 

    board.forEach((row, index) => {                          // forEach to loop over each row in the board
        const formattedRow = row                             // New string for the current row to print to the terminal        
            .map(cell => ` ${cell === '_' ? ' ' : cell} `)   // Loop through each cell to check if empty, replace '_' with a space ' ' for clearer output. If cell has 'X' or 'O', wrap with spaces for formatting
            .join('|');                                      // After mapping, join cells with vertical bar '|' to look like grid

        console.log(formattedRow);                           // Print the formatted row to terminal

        if (index < board.length - 1) {                          // Check if not on the last row- no separator needed after last row
            console.log(rowSeparator);                       // Print row separator to visually divide them
        }
    });
}

/*
const board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];

printBoard(board);
*/

// Function to check if the board has any empty spaces left
function checkIfNoMovesLeft(board) {                         // Take the 'board' as a parameter
    return board.every(row => !row.includes('_'));           // Use .every() to check each row = true only if all rows are filled | includes()= true if row has empty cell | !row = fully filled
}

module.exports = {
    checkIfNoMovesLeft,
    printBoard
};



