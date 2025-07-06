/*
Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

const swapCase = (str) => {
    return str
        .split("")
        .map((char) =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
};

console.log(swapCase("The Quick Brown Fox")); // "tHE qUICK bROWN fOX"
console.log(swapCase("")); // ""
console.log(swapCase("aB12!cD")); // "Ab12!Cd"
console.log(swapCase("HELLO world")); // "hello WORLD"
