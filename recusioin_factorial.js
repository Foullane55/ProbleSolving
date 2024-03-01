let result = 1
function factorila(n) {
  if (n === 1) {
    return 
  }
  result *= n
  factorila(n-1)
}
factorila(5)

console.log(result);
