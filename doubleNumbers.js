const numbers = [1, 2, 3, 4, 5];

// Define a function to double each number in the array
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

// Define a function to square each number in the array
function squareNumbers(arr) {
  return arr.map(num => num ** 2);
}

// Define a function to calculate the sum of all numbers in the array
function sumNumbers(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Test the functions
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubleNumbers(numbers));
console.log("Squared numbers:", squareNumbers(numbers));
console.log("Sum of numbers:", sumNumbers(numbers));
