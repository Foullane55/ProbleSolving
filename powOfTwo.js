// write a function taht taks a num as an argement and return if the num is pow of two or not

function powOf2(num) {
  for (let i = 0; i < num; i++) {
    if (2**i === num) {
      return true
    }
  }
  return false
}

console.log(powOf2(8));
