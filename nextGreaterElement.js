//Problem: Given an array of integers, find the next greater element for each element in the array.
//The next greater element for an element x is the first greater element on its right side.
//If there is no greater element on the right side, then output -1.

function nextGreaterElement(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }

    return result;
}

// Example usage:
const nums = [4, 2, 5, 9, 10, 3];
const result = nextGreaterElement(nums);
console.log("Next Greater Elements:", result)
