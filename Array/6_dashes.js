/*
Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
*/

const insertDash = (num) => {
    const numStr = num.toString();
    let result = numStr[0];
    for (let i = 0; i < numStr.length - 1; i++) {
        if (
            parseInt(numStr[i]) % 2 === 0 &&
            parseInt(numStr[i + 1]) % 2 === 0
        ) {
            result += "-";
        }
        result += numStr[i + 1];
    }
    return result;
};

console.log(insertDash("025468"));
