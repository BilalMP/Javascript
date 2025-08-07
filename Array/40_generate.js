/*
Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
*/

const generateArray = (start, end) => {
    const result = [];
    for (let i = 0; i < end; i++) {
        result.push(start++);
    }
    return result;
};

console.log(generateArray(1, 4));
console.log(generateArray(-6, 4));
