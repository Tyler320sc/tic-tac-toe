// Numbers

const isEven = n => n % 2 === 0;

const isOdd = n => !isEven(n);

const divisibleBy = (x, y) => x % y === 0;

const eqArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((_, y) => {
  if (Array.isArray(arr1[y]) && Array.isArray(arr2[y])) {
    return eqArrays(arr1[y], arr2[y]);
  } else { 
    return arr1[y] === arr2[y]; 
  }
});

// Arrays

const append = (y, arr) => [...arr, y];

const head = arr => arr[0];

const tail = arr => arr.slice(1);

const last = arr => arr[arr.length - 1];

const init = arr => arr.slice(0, arr.length - 1);

const isEmpty = arr => arr.length < 1;

const take = (n, arr) => arr.slice(0, n);

const drop = (num, arr) => arr.slice(num);

const flatten = arr => arr.reduce((acc, x) => [...acc, ...x], []);

// const intersperse = (sep, arr) => arr.reduce((acc, x)=> [...acc, x, sep], []).slice(0, -1);

const intersperse = (sep, arr) => arr.reduce((acc, x) => [...acc, sep, x], []).slice(1);

// Number Arrays

const sum = arr => arr.reduce((acc, x) => acc + x, 0);

const product = arr => arr.reduce((acc, x) => acc * x, 1);

const maximum = arr => arr.reduce((acc, x) => acc > x ? acc : x, arr[0])

const minimum = arr => arr.reduce((acc, x) => acc < x ? acc : x, arr[0]);

// Tim gave me this func. Builds arr the size of the num passed into it. And returns all el as undefined.
const buildArray = size => [...Array(size)];
// Return: an array of numbers counting up from start to end
const range = (start, end) => buildArray(end - start + 1).map((_, index) => index + start);

// Objects

const eqObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const setProp = (str, val, obj) => ({...obj, [str]: val});

const removeProp = (str, obj) => ({...obj, [str]: undefined});

// Returns a new array with the value at index i replaced by v
const update = (i, v, list) => [...take(i, list), v, ...drop(i+1, list)];

// Returns a new matrix (2D array) with the value at index (x, y) replaced by v
const updateMatrix = (x, y, v, mat) => [...take(x, mat), update(y, v, mat[x]), ...drop(x+1, mat)]

module.exports = {
  isEven,
  isOdd,
  divisibleBy,
  append,
  eqArrays,
  head,
  tail,
  last,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperse,
  sum,
  product,
  maximum,
  minimum,
  range,
  eqObjects,
  setProp,
  removeProp,
  buildArray,
  update,
  updateMatrix
};