/*
Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

Test Data :
([2, NaN, 8, 16, 32]) -> [1]
([2, 4, NaN, 16, 32, NaN]) -> [2,5]
([2, 4, 16, 32]) ->[]
Expected Output:
Original array: 2,NaN,8,16,32
Find all indexes of NaN of the said array: 1
Original array: 2,4,NaN,16,32,NaN
Find all indexes of NaN of the said array: 2,5
Original array: 2,4,16,32
Find all indexes of NaN of the said array:
*/

const indexNan = (arr) => {
    const indexes = [];
    for (let index = 0; index < arr.length; index++) {
        if (isNaN(arr[index])) {
            indexes.push(index);
        }
    }
    return indexes;
};

console.log(indexNan([2, NaN, 8, 16, 32]));
console.log(indexNan([2, 4, NaN, 16, 32, NaN]));
console.log(indexNan([2, 4, 16, 32]));
