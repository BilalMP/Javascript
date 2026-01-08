/*
Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

The program extracts the middle elements from two arrays, each with a length of 3, and creates a new array containing these middle elements.
*/

const middleElement = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return "Input must be an array";
    }
    if(array1.length !== 3 || array2.length !== 3) {
        return "Array length must be 3"
    }
    const middleArray1 = Math.floor(array1.length / 2);
    const middleArray2 = Math.floor(array2.length / 2);
    const newArray = [array1[middleArray1], array2[middleArray2]];
    return newArray;
}

console.log(middleElement([1, 2, 3], [4, 5, 6]));
console.log(middleElement([1, 2 ], [ 5, 6]));
console.log(middleElement([1, 2, 3,4], [4, 5, 6,7]));