/*
Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

const joinElement = (arr, seperator = ",") => {
    if (arr.length === 0) return "";
    return arr.join(seperator);
};

const myColor = ["Red", "Green", "White", "Black"];

console.log(joinElement(myColor)); // "Red,Green,White,Black"
console.log(joinElement(myColor, ",")); // "Red,Green,White,Black"
console.log(joinElement(myColor, "+"));
