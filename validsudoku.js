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

// Test 1: true board
let board1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log("Test 1 (Valid):", isValidSudoku(board1));


// Test 2: false board(duplicate in 3x3 box, top left 8 is repeated in box)
let board2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Test 2 (Invalid box):", isValidSudoku(board2));


// Test 3: false board (duplicate in row, 5 is repeated in first row)
let board3 = [
  ["5","3","5",".","7",".",".",".","."], 
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Test 3 (Invalid row):", isValidSudoku(board3)); 


// Test 4: false board (duplicate in column, 6 is repeated in first column)
let board4 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  ["6","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Test 4 (Invalid column):", isValidSudoku(board4));


// Test 5: true board (only one number)
let board5 = [
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".","1",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
];

console.log("Test 5 (Sparse valid):", isValidSudoku(board5));