/*
Write a JavaScript function that returns the longest palindrome in a given string.
*/

const longestPalindrome = (str) => {
    if (str.length < 1) {
        return "";
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (str[i] === str[j] && j - i > end - start) {
                start = i;
                end = j;
            }
        }
    }
    return str.substring(start, end + 1);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("racecar"));