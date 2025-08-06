/*
Write a JavaScript function to remove a specific element from an array.

Test data:
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/

const removeElement = (arr, target) => {
    return arr.filter(item => item !== target);
}

console.log(removeElement([2, 5, 9, 6], 5));
console.log(removeElement([10,20,30,40,50,60,70], 5));
console.log(removeElement([2, 5, 9, 6], 1));
console.log(removeElement([2, 5, 9, 6], 25));