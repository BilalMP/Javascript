/*
We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.
*/

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const suffixes = ["th", "st", "nd", "rd"];

const colorDisplay = (color, suffixes) => {
    if (
        !Array.isArray(color) ||
        !Array.isArray(suffixes) ||
        suffixes.length < 4
    ) {
        return "Input must be an array";
    }
    if (color.length === 0) {
        return "Array must have at least 4 elements";
    }

    const getOrdinalSuffix = (index) => {
        const position = index + 1;
        return position % 10 === 1 && position % 100 !== 11
            ? suffixes[1]
            : position % 10 === 2 && position % 100 !== 12
            ? suffixes[2]
            : position % 10 === 3 && position % 100 !== 13
            ? suffixes[3]
            : suffixes[0];
    };

    color.forEach((color, index) => {
        const position = index + 1;
        const suffix = getOrdinalSuffix(index);
        console.log(`${position}${suffix} choice is ${color.trim()}.`);
    });
};

colorDisplay(color, suffixes);
