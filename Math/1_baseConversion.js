/*
Write a JavaScript function to convert a number from one base to another.
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"

*/

const baseConversion = (number,intialBase,finalBase) => {
    if (intialBase < 2 || finalBase < 2 || intialBase > 36 || finalBase > 36) {
        return 'Both bases must be between 2 and 36';
    }
    return parseInt(number, intialBase).toString(finalBase);
}

console.log(baseConversion('E164', 16, 8));
console.log(baseConversion(1000, 2, 8));