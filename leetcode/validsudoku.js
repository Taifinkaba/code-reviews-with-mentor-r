/*
36. Valid Sudoku (Medium)

Problem:
Determine if a 9 x 9 Sudoku board is valid.

Rules:
1. Each row must contain digits 1-9 without repetition.
2. Each column must contain digits 1-9 without repetition.
3. Each 3x3 box must contain digits 1-9 without repetition.
4. Ignore empty cells (".").

Time Complexity: O(1) (since board is always 9x9)
Space Complexity: O(1)
*/

function isValidSudoku(board) {
  // Check all rows
  for (let i = 0; i < 9; i++) {
    if (!checkRow(board, i)) return false;
  }

  // Check all columns
  for (let i = 0; i < 9; i++) {
    if (!checkColumn(board, i)) return false;
  }

  // Check all 3x3 boxes
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      if (!checkBox(board, row, col)) return false;
    }
  }

  return true;
}

// check row
function checkRow(board, row) {
  let seen = new Set();

  for (let col = 0; col < 9; col++) {
    let value = board[row][col];
    if (value === ".") continue;

    if (seen.has(value)) return false;
    seen.add(value);
  }

  return true;
}

// check column
function checkColumn(board, col) {
  let seen = new Set();

  for (let row = 0; row < 9; row++) {
    let value = board[row][col];
    if (value === ".") continue;

    if (seen.has(value)) return false;
    seen.add(value);
  }

  return true;
}

// check 3x3 box
function checkBox(board, startRow, startCol) {
  let seen = new Set();

  for (let row = startRow; row < startRow + 3; row++) {
    for (let col = startCol; col < startCol + 3; col++) {
      let value = board[row][col];
      if (value === ".") continue;

      if (seen.has(value)) return false;
      seen.add(value);
    }
  }

  return true;
}

module.exports = { isValidSudoku };