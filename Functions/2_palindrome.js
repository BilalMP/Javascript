/*
Write a JavaScript function that checks whether a passed string is a palindrome or not?

Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

const palindrome = (str) => {
    str = str.toLowerCase(); 
    let right = 0; 
    let left = str.length - 1; 
    while (right < left) {
        if (str[right] !== str[left]) {
            return false; 
        }
        right++; 
        left--; 
    }
    return true;
}

console.log(palindrome("madam"));
console.log(palindrome("nurses run"));