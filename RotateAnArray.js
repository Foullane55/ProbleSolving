//Problem: Rotate an Array

//Write a JavaScript function that rotates an array by a given number of steps.
//The function should take two arguments: the array to rotate and the number of steps to rotate it by.
//If the number of steps is positive, rotate the array to the right.
// If the number of steps is negative, rotate the array to the left.

function rotateArray(array, steps) {
    const n = array.length;
    const rotatedArray = [];
    
    // Calculate the effective rotation steps
    const effectiveSteps = steps % n;
    
    // Handle negative steps
    const rotationIndex = effectiveSteps < 0 ? n + effectiveSteps : effectiveSteps;

    // Rotate the array
    for (let i = 0; i < n; i++) {
        rotatedArray[(i + rotationIndex) % n] = array[i];
    }

    return rotatedArray;
}

// Test cases
const array = [1, 2, 3, 4, 5];
console.log(rotateArray(array, 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateArray(array, -1)); // Output: [2, 3, 4, 5, 1]
