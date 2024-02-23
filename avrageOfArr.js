
function avrage(arr) {
  return arr.reduce((acc,cur)=>acc + cur)/arr.length
}

console.log(avrage([1,1,1]));//=>1
