// write a function thta taks an array of nums and chek if the array[num0...] is can be sprt of not
// if it's retur the result of it if not return the pow of it




function root(arr) {
  let ar =[]
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      ar.push(Math.sqrt(arr[i]))
    }else{
      ar.push(Math.pow(arr[i],2))
    }
    
  }
return ar
  
}

console.log(root([16,3,5,7,4]));

function root2(arr) {

return arr.map((num => Number.isInteger(Math.sqrt(num))? Math.sqrt(num):Math.pow(num,2)))
  
}

console.log(root2([16,3,5,7,4]));

