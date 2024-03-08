//writ a function taht return the first character of a text to uppercase

const firstToUpCase = (text)=>{
let result = ''
let arr = text.split(' ')

  for (let i = 0; i < arr.length; i++) {

    result = result + arr[i].replace(arr[i][0],arr[i][0].toUpperCase()) +' '
}
return result 
}
console.log(firstToUpCase('now that you know how to'));
