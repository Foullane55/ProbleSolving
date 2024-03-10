// write a function that take an array and counts the num of array without the negativ nums


//first Method

function pNumSum(inpN) {
  let result = 0;
  for (let i = 0; i < inpN.length; i++) {
    if (inpN[i] > 0) {
      result = result + inpN[i];
    }
  }

  return result;
}

console.log(pNumSum([2, -9, 2, -3, 8]));


//second Method

function pNumSum2(inpn) {
  return inpn.filter((x) => x > 0).reduce((acc, cur) => acc + cur);
}

console.log(pNumSum2([5, -9, 2, -3, 5]));
