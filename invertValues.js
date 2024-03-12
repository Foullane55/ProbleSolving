const invertValues = (arr) =>{
  let result = []
   for (const value of arr) {
    result.push(value * -1)
   }
   return result
}
console.log(invertValues([1,2,-3,5]));
