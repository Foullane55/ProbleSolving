function maxOccurringChar(str) {
    if (str.length === 0) return null; // Handle empty string case

    const charMap = {};
    let maxChar = str[0];
    let maxCount = 1;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charMap[char] = (charMap[char] || 0) + 1;
        if (charMap[char] > maxCount || (charMap[char] === maxCount && char < maxChar)) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }

    return maxChar;
}

console.log(maxOccurringChar("hello"));   // Should return 'l'
console.log(maxOccurringChar("banana"));  // Should return 'a'
console.log(maxOccurringChar("apple"));   // Should return 'p'
