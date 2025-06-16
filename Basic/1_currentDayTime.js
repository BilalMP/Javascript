/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

let date = new Date();
let day = date.toLocaleDateString('en-US', { weekday: 'long' });
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let session = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12;

console.log("Today is : " + day);
console.log("Current time is : " + hour + " " + session + " : " + minute + " : " + second);