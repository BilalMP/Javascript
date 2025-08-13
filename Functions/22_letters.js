/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

const letters = (str, letter) => {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

console.log(letters('w3resource.com', 'o'));
console.log(letters("university", "o"));