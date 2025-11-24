/*
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. Convert vowels to uppercase.

This JavaScript program replaces each character in a string with the next character in the alphabet, and converts vowels to uppercase. It iterates through the string, modifies each character accordingly, and then constructs the new modified string.
*/

function replaceCharacter(str) {
    const array = str.split("");
    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case ' ':
                break;
            case 'z':
                array[index] = 'a';
                break;
            case 'Z':
                array[index] = 'A';
                break;
            default:
                array[index] = String.fromCharCode(array[index].charCodeAt(0) + 1);
                break;
        }
        switch (array[index]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                array[index] = array[index].toUpperCase();
                break;
        }
    }
    return array.join("");
}

console.log(replaceCharacter("Python"));
console.log(replaceCharacter("PYTHON"));
console.log(replaceCharacter("JAVA"));
console.log(replaceCharacter("java"));