/*
Write a JavaScript function to get the number of occurrences of each letter in a specified string.
*/

const occurence = (str) => {
    const map = {};
    for (const char of str) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }
    return map;
};

console.log(occurence("thequickbrownfoxjumpsoverthelazydog"));
console.log(occurence("university"));
console.log(occurence("country"));
