// write a function that takes an agrement and return [0,1]
// and each time pushing the sum of the previous two nums

//exemple (7) => [0,1,1,2,3,5,8]

function fib(num , arr = [0,1]) {

  for (let i = 2; i < num; i++) {
    let [num1, num2] = arr.slice(-2)
    let sum = num1 + num2
    arr.push(sum)
  }
  return arr
}
console.log(fib(7));
