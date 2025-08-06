/*
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/

const removeFalsyValues = (arr) => {
    return arr.filter((item) => !!item);
};

console.log(
    removeFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
); // [15, -22, 47]
console.log(removeFalsyValues([])); // []
console.log(removeFalsyValues([1.5, "hello", true, 0, false, null])); // [1.5, "hello", true]
console.log(removeFalsyValues([NaN, NaN, 0, 0, false, false])); // []
