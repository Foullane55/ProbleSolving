// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) return true;
    obj[nums[i]] = 0;
  }
  return false;
};
