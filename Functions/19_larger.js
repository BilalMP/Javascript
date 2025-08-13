/*
Write a JavaScript function that returns array elements larger than a number.
*/

const larger = (arr, num) => {
    return arr.filter((element) => element > num);
}

console.log(larger([1, 2, 3, 4, 5], 3));