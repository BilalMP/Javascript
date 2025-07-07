/*
Write a JavaScript program to shuffle an array.
*/

const shuffleArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    let counter = arr.length;
    let temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};

console.log("Original: [1, 2, 3, 4, 5]");
console.log("Shuffled:", shuffleArray([1, 2, 3, 4, 5]));

console.log("Original: []");
console.log("Shuffled:", shuffleArray([]));

console.log("Original: [1]");
console.log("Shuffled:", shuffleArray([1]));

console.log("Original: ['a', 'b', 'c']");
console.log("Shuffled:", shuffleArray(["a", "b", "c"]));

console.log("Invalid input:", shuffleArray("not an array"));
