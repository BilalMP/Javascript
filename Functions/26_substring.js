/*
Write a JavaScript function to find the longest substring in a given string without repeating characters.
*/

const longestSubstring = (str) => {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();
    for (let end = 0; end < str.length; end++) {
        const char = str.charAt(end);
        if (charMap.has(char)) {
            start = Math.max(start, charMap.get(char) + 1);
        }
        charMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));