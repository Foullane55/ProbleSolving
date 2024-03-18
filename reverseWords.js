//Problem: Reverse Words in a String
//Given a string, reverse the order of words.

function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed array of words into a single string
    let reversedString = reversedWords.join(' ');

    // Return the reversed string
    return reversedString;
}

// Example usage:
let inputString = "Hello World";
let reversed = reverseWords(inputString);
console.log(reversed); // Output: "World Hello"
