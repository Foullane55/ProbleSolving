const repeatStrNTime = (n,str)=>{
  let result = " "
    for (let i = 0; i < n; i++) {
        result +=  str + " "     
    }
    return result
}

console.log(repeatStrNTime(5,"hello"));
