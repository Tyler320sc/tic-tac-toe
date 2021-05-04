const {flatten, update, updateMatrix} = require('./batteries.js');

const chalk = require('chalk');


const tttBoard = [
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['o', 'x', null]
];

const printBoard = board => {

  const map = {
    null: ' ',
    'x': 'X',
    'o': 'O'
  }

  console.log(`${map[board[0][0]]}|${map[board[0][1]]}|${map[board[0][2]]}`);
  console.log(`-+-+-`);
  console.log(`${map[board[1][0]]}|${map[board[1][1]]}|${map[board[1][2]]}`);
  console.log(`-+-+-`);
  console.log(`${map[board[2][0]]}|${map[board[2][1]]}|${map[board[2][2]]}`);
}

printBoard(tttBoard);


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

console.log(winner(tttBoard));


const fullBoard = board => !flatten(board).includes(null);

console.log(fullBoard(tttBoard)); 

// const addToBoard = (piece, board) => ;
// Start here in the am, use functions that Tim gave me.
