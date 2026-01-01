/*
Write a JavaScript application that transforms a numerical value into hours and minutes.

This JavaScript application converts a given numerical value representing minutes into hours and minutes. It calculates the hours by dividing the total minutes by 60 and the remaining minutes using the modulus operator, then formats and displays the result.
*/

function hoursMinutes(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + " hours and " + minutes + " minutes";
}

console.log(hoursMinutes(71));
console.log(hoursMinutes(450));
console.log(hoursMinutes(1441));
console.log(hoursMinutes(40));