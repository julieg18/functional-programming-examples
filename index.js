/* Functional Programming is all about writing pure functions */

// pure functions do not depend on external state.
// PURE
function favoriteFood(food) {
  return `My favorite food is ${food}`;
}
// NOT PURE
let favoriteFood = 'pizza';
function myFavoriteFood() {
  return `My favorite food is ${food}`;
}

// pure functions do not mutate
// PURE
function addToFavoriteFoodsArr(arr, newFood) {
  let newArr = [...arr, newFood];
  return newArr;
}
// NOT PURE
function addFavoriteFoods(arr, newFood) {
  arr.push(newFood);
  return arr;
}

// pure functions, given an input, it will always return the same value
// PURE
function addTwo(num) {
  return num + 2;
}
// NOT PURE
function addNum(num) {
  let randomNum = Math.floor(Math.random() * 10);
  return num + randomNum;
}

/* there are multiple programming techniques often used in functional programming */

// higher order functions are functions that take other functions as parameters
// a couple examples are array methods like filter, map, or reduce
// HIGHER ORDER FUNCTION
function addThree(num) {
  return num + 3;
}
[1, 2, 3, 4, 5].map(addThree);
// NOT A HIGHER ORDER FUNCTION
function addThreeToArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 3;
  }
  return arr;
}

// currying is the technique of instead of having a function with multiple
// arguments, you have a function that returns functions, each with a single argument
// CURRYING
function addNums(num1) {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
}
// NOT CURRYING
function addNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// a recursive function is a function that calls itself until it hits a base case
// RECURSIVE
function countdown(num) {
  if (num === 0) {
    return 'BEEP BEEP BEEP';
  } else {
    console.log(num);
    countdown(num - 1);
  }
}
// NOT RECURSIVE
function countdownToZero(num) {
  for (let i = num; i > 0; i--) {
    console.log(num);
  }
  return 'BEEP BEEP BEEP';
}

// a functor represents a set of things (in some structure) that can be mapped
// over to obtain a set of new things under that same structure
let array = [1, 2, 3, 4, 5]; // functor

// monads implement flatMap, which in term is useful to maintain knowledge of
// the context in which a function is being executed.
const copy = (x) => [x, x];
const arr = [1, 2, 3, 4];
arr.flatMap(duplicate);
