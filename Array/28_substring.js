/*
Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
*/

const longestSubstring = (arr) => {
    if (arr.length === 0) {
        return "";
    }
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }
    return prefix;
};

console.log(longestSubstring(["go", "google"]));
console.log(longestSubstring(["SQLInjection", "SQLTutorial"]));
console.log(longestSubstring(["abcd", "1234"]));