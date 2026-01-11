/*
Write a JavaScript program to add two positive integers without carrying.
*/

const addTwoDigit = (num1, num2) => {
    let result = 0;
    let x = 1;
    while (num1 > 0 && num2 > 0) {
        result += x * ((num1 + num2) % 10);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        x = x * 10;
    }
    return result;
};

console.log(addTwoDigit(222, 911));
console.log(addTwoDigit(200, 900));
