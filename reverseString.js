function reverseString(str) {
    // Check if the input string is empty
    if (str === "") {
        return "";
    }
    
    // Initialize an empty string to store the reversed string
    let reversed = "";
    
    // Loop through each character of the input string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        // Append each character to the reversed string
        reversed += str[i];
    }
    
    // Return the reversed string
    return reversed;
}

// Test cases
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString(""));       // Output: ""
console.log(reverseString("world")); // Output: "dlrow"
