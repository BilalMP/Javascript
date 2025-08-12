/*
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
const lowestGreatest = (arr) => {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]]
}

console.log(lowestGreatest([1, 2, 3, 4, 5]))
console.log(lowestGreatest([100, 80, 60, 40, 50]));