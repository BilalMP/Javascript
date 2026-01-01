/*
Write a JavaScript program to count the number of vowels in a given string.

This JavaScript program counts the number of vowels (a, e, i, o, u) in a given string. It iterates through the string, checks each character to see if it is a vowel, and keeps a running total of the vowels encountered.
*/

function countVowels(str) {
    let vowel = 0;
    for (let index = 0; index < str.length; index++) {
        switch (str[index]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                vowel += 1;
                break;
        }
    }
    return vowel;
}

console.log(countVowels("Python"));
console.log(countVowels("java"));
console.log(countVowels("javaScript"));
console.log(countVowels("PYTHON"));