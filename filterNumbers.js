const numbers = [1, 5, 10, 15, 20, 25, 30];

// Define a function to filter out numbers greater than a given threshold
function filterNumbers(arr, threshold) {
    return arr.filter(number => number <= threshold);
}

// Define the threshold
const threshold = 15;

// Filter the numbers array
const filteredNumbers = filterNumbers(numbers, threshold);

// Output the filtered numbers
console.log("Numbers less than or equal to", threshold, ":", filteredNumbers);
