// return a num to inside of array and revers it 

// first mehtod 

function toa(num) {
  let arr = []
  num = num.toString()
  for (let i = 0; i < num.length; i++) {
    arr.push(num[i])    
  }

  return arr.reverse()
}

console.log(toa(123456));
