//You are given an array of integers. Write a function in JavaScript
//that returns the maximum difference between any two numbers
//in the array such that the larger element appears after 
//the smaller element. If no such pair of integers exists, return 0.

function findMaxDifference(nums) {
  if (nums.length < 2) return 0;

  let maxDiff = 0;
  let minElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxDiff = Math.max(maxDiff, nums[i] - minElement);
    minElement = Math.min(minElement, nums[i]);
  }

  return maxDiff;
}

console.log(findMaxDifference([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(findMaxDifference([7, 6, 4, 3, 1]));    // Output: 0
