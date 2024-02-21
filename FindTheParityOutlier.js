// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers.
// The array is either entirely comprised of odd integersor
// entirely comprised of even integers except for a single integer N. Write a method that takes
// the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

const findOutlier = (integers) => {
  let odd = []
  let even = []
  for (let i = 0; i < integers.length; i++) {
      integers[i] % 2 ? odd.push(integers[i]) : even.push(integers[i])
      if (odd.length > 1 && even.length > 0) {
        return even[0]
      }else if(even.length > 1 && odd.length > 0){
        return odd[0]
      }
  }
}
