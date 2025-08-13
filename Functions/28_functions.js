/*
Write a JavaScript program to pass a 'JavaScript function' as a parameter.
*/

// Function that takes another function as a parameter
const processArray=(arr, callback) =>{
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const double=(value)=> {
    return value * 2;
}

const square=(value)=> {
    return value * value;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = processArray(numbers, double);
console.log('Doubled Numbers:', doubledNumbers); // Output: [2, 4, 6, 8, 10]

const squaredNumbers = processArray(numbers, square);
console.log('Squared Numbers:', squaredNumbers); // Output: [1, 4, 9, 16, 25]