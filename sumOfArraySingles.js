// In this Kata, you will be given an array of numbers in which two numbers occur
// once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once,
//  and their sum is 15. Every other number occurs twice.

function repeats(arr){
  const obj = {}
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
    result += arr[i]
    if (arr[i+1] in obj) {
      result -= (2*arr[i+1])
    }
  }
  return result
};

console.log(repeats([4,5,7,5,4,8])); // => 15

