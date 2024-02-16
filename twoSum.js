// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.
//------------------------------------------
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//solution//

var twoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const match = target - nums[i];
    if (match in obj) return [obj[match], i];
    obj[nums[i]] = i;
  }
};

console.log(twoSum([5, 2, 6, 4], 9));
