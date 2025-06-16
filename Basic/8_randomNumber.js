/*
Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 
*/

const randomNumber = (userNumber) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === userNumber) {
        return "Good Work"
    } else {
        return "Not matched"
    }
};

console.log(randomNumber(5));
console.log(randomNumber(10));
console.log(randomNumber(1));
