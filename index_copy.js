const {flatten, updateMatrix} = require('./batteries.js');

const chalk = require('chalk');

const prompt = require('prompt-sync')();

const tttBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const printBoard = board => {

  const map = val => {
    if (val === null) {
      return ' ';
    } else if (val === 'x') {
      return 'X';
    } else if (val === 'o') {
      return 'O';
    } else {
      return val;
    }
  }

  console.log(chalk.greenBright`${map(board[0][0])}|${map(board[0][1])}|${map(board[0][2])}`);
  console.log(chalk.green.bold`-+-+-`);
  console.log(chalk.greenBright`${map(board[1][0])}|${map(board[1][1])}|${map(board[1][2])}`);
  console.log(chalk.green.bold`-+-+-`);
  console.log(chalk.greenBright`${map(board[2][0])}|${map(board[2][1])}|${map(board[2][2])}`);

}

const winner = board => { // checks x horizontal
  if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
    return 'x';
  } else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
    return 'x';
  } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
    return 'x';         // checks x vertical
  } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
    return 'x';
  } else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
    return 'x';
  } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
    return 'x';         // checks x diagonal forwards
  } else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
    return 'x';        // checks x diagonal backwards
  } else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
    return 'x';        // checks o horizontal
  } else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
    return 'o';
  } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
    return 'o';
  } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
    return 'o';       // checks o vertical
  } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
    return 'o';
  } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
    return 'o';
  } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
    return 'o';        // checks o diagonal forwards
  } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
    return 'o';
  } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
    return 'o';
  } else {
    return null;
  }
};

const fullBoard = board => !flatten(board).includes(null);

const addToBoard = (num, board, val) => {
  if (num === 1) {
    return updateMatrix(0, 0, val, board);
  } else if (num === 2) {
    return updateMatrix(0, 1, val, board);
  } else if (num === 3) {
    return updateMatrix(0, 2, val, board);
  } else if (num === 4) {
    return updateMatrix(1, 0, val, board);
  } else if (num === 5) {
    return updateMatrix(1, 1, val, board);
  } else if (num === 6) {
    return updateMatrix(1, 2, val, board);
  } else if (num === 7) {
    return updateMatrix(2, 0, val, board);
  } else if (num === 8) {
    return updateMatrix(2, 1, val, board);
  } else if (num === 9) {
    return updateMatrix(2, 2, val, board);
  } else {
    return board;
  }
}

// print board with numbers on the board 1 - 9 
printBoard([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

console.log();

const gameLoop = (board, piece) => {
  // ask for user input (1 - 9)
  const n = Number(prompt(chalk.bold.green`Choose a number where you want your ${piece} to go: `));
  console.log();
  // add 'x' or 'o' to user input spot
  const updatedBoard = addToBoard(n, board, piece);
  printBoard(updatedBoard);
  // check for winner or tie
  // if win or tie print message and return
  if (winner(updatedBoard) === 'x') {
    console.log();
    console.log(chalk.bold.greenBright`X won!`);
    return; 
  } else if (winner(updatedBoard) === 'o') {
    console.log();
    console.log(chalk.bold.greenBright`O won!`);
    return;
  } else if (winner(updatedBoard) === null && fullBoard(updatedBoard) === true) {
    console.log();
    console.log(chalk.bold.greenBright`Tied!`);
    return;
  } else {
    const nextPiece = piece === 'x' ? 'o' : 'x';
    return gameLoop(updatedBoard, nextPiece);
  }
} 
gameLoop(tttBoard, 'x');