/*
Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

This JavaScript program scans a given string to determine if the characters 'a' and 'b' are separated by exactly three characters. It iterates through the string, checking the positions of 'a' and 'b' to ensure they meet the specified separation condition.
*/
function abCharacter(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(abCharacter("Chainsbreak"));
console.log(abCharacter("pane borrowed"));
console.log(abCharacter("abCheck"));
console.log(abCharacter("python"));

