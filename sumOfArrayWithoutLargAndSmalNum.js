// clacul the sum of numbers with out the smal value and large value


let arr = [2, 5, 8, 1, 3];

function num(arr) {
  return arr
    .sort((a, b) => a - b)
    .filter((x) => x !== arr[0] && x !== arr[arr.length - 1])//we can use slice((1,-1))
    .reduce((acu, cur) => acu + cur);
}

console.log(num([2, 5, 8, 1, 3]));
