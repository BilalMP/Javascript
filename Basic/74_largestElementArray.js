/*
Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

The program compares the first and last elements of an array and sets all other elements to the larger of these two values. It then displays the updated array with all elements either equal to the first or last element, whichever is larger
*/

function largestElement(array) {
    if (!Array.isArray(array)) {
        return "Input must be an array";
    }
    if (array.length < 1) {
        return "Array length must be larger than or equal to 1";
    }
    const largest = Math.max(array[0], array[array.length - 1]);
    for (let index = 0; index < array.length; index++) {
        array[index] = largest;
    }
    return array;
}

console.log(largestElement([1, 2, 3, 4, 5]));
