/* Functional Programming is all about writing pure functions */

/* pure functions do not depend on external state. */
// PURE
function pureFavoriteFoodFunction(food) {
  return `My favorite food is ${food}`;
}
console.log(pureFavoriteFoodFunction('pizza')); // My favorite food is pizza
// NOT PURE
let food = 'pizza';
function unpureFavoriteFoodFunction() {
  return `My favorite food is ${food}`;
}
console.log(unpureFavoriteFoodFunction('pizza')); // My favorite food is pizza

/* pure functions do not mutate */
// PURE
function pureAddToFavoriteFoods(arr, newFood) {
  let newArr = [...arr, newFood];
  return newArr;
}
let favoriteFoods = ['pizza', 'burger', 'grapes'];
let updatedFavoriteFoods = pureAddToFavoriteFoods(favoriteFoods, 'crackers');
console.log(favoriteFoods); // ['pizza', 'burger', 'grapes']
console.log(updatedFavoriteFoods); // ['pizza', 'burger', 'grapes', 'crackers']
// NOT PURE
function unpureAddToFavoriteFoods(arr, newFood) {
  arr.push(newFood);
  return arr;
}
let faveFoods = ['pizza', 'burger', 'grapes'];
let updatedFaveFoods = unpureAddToFavoriteFoods(faveFoods, 'crackers');
console.log(faveFoods); // ['pizza', 'burger', 'grapes', 'crackers']
console.log(updatedFaveFoods); // ['pizza', 'burger', 'grapes', 'crackers']

/* pure functions, given an input, it will always return the same value */
// PURE
function addTwo(num) {
  return num + 2;
}
console.log(addTwo(5)); // 7
console.log(addTwo(5)); // 7
// NOT PURE
function addNum(num) {
  let randomNum = Math.floor(Math.random() * 5);
  return num + randomNum;
}
console.log(addNum(5)); // 8
console.log(addNum(5)); // 5

/* there are multiple programming techniques often used in functional programming */

/* Higher order functions are functions that take other functions as parameters. A couple examples are array methods like filter, map, or reduce. */
// HIGHER ORDER FUNCTION
function higherOrderAddThree(num) {
  return num + 3;
}
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map(higherOrderAddThree);
console.log(newNumbers); // [4, 5, 6, 7, 8]
// NOT A HIGHER ORDER FUNCTION
function notHigherOrderAddThree(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 3;
  }
  return arr;
}
let otherNumbers = [1, 2, 3, 4, 5];
let otherNewNumbers = notHigherOrderAddThree(otherNumbers);
console.log(otherNewNumbers); // [4, 5, 6, 7, 8]

/* currying is the technique of instead of having a function with multiple arguments, you have a function that returns functions, each with a single argument */
// CURRYING
function curryingAddNums(num1) {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
}
let sum = curryingAddNums(1)(2)(3);
console.log(sum); // 6
// NOT CURRYING
function notCurryingAddNums(num1, num2, num3) {
  return num1 + num2 + num3;
}
let otherSum = notCurryingAddNums(1, 2, 3);
console.log(otherSum); // 6

/* a recursive function is a function that calls itself until it hits a base case */
// RECURSIVE
function recursiveCountdown(num) {
  if (num === 0) {
    console.log('BEEP BEEP BEEP');
  } else {
    console.log(num);
    recursiveCountdown(num - 1);
  }
}
recursiveCountdown(10);
// NOT RECURSIVE
function notRecursiveCountdown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('BEEP BEEP BEEP');
}
notRecursiveCountdown(10);

/* a functor represents a set of things (in some structure) that can be mapped over to obtain a set of new things under that same structure */
let array = [1, 2, 3, 4, 5]; // functor

// monads implement flatMap, which in term is useful to maintain knowledge of
// the context in which a function is being executed.
const duplicate = (x) => [x, x];
let arr = [1, 2, 3, 4];
let newArr = arr.flatMap(duplicate);
console.log(newArr); // [1, 1, 2, 2, 3, 3, 4, 4]
