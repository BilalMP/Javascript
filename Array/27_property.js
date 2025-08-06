/*
Write a JavaScript function to retrieve the value of a given property from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/

const property = (arr) => {
    return arr.filter(item=>!!item);
};

console.log(property([NaN, 0, 15, false, -22, "", undefined, 47, null]));
