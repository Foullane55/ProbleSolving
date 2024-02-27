
// writ a function that takes two argments first on doubled each time and the second is the lenght of arr
// exemple (4,5) => [4,8,12,16,20]
//exemple (1,4) => [1,2,3,4]


let arr = []
function count(x,size) {
  let result = x
  for (let i = 0; i < size; i++) {
    arr.push(result)
    result +=x
  }
  return arr
}

console.log(count(7,10)); 
