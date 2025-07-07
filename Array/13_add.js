/*
Write a JavaScript program to add items to a blank array and display them.
Sample Screen :
*/

const addDisplay = () => {
    let num1 = 10,
        num2 = 20,
        num3 = 30;
    const arr = [];
    arr.push(num1, num2, num3);
    return arr;
};

console.log(addDisplay());