/*
Write a JavaScript function to convert a binary number to a decimal number.
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
*/

const binaryDecimal = (str) => {
    if (!/^[01]+$/.test(str)) {
        throw new Error(
            "Invalid binary number. Please provide a binary string."
        );
    }
    return parseInt(str, 2);
};

console.log(binaryDecimal("110011"));
console.log(binaryDecimal("100"));
