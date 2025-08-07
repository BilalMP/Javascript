/*
Write a JavaScript function to get random items from an array.
*/

const randomItem = (arr) => {
    const ran = Math.random() * arr.length;
    return arr[Math.floor(ran)];
}

console.log(randomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));