function removeExclamationMarks(text) {
  let result = ""
  for (const leter of text) {
     leter !== "!"?result+=leter:null
  }
  return result
}

console.log(removeExclamationMarks("hello! world!"));
