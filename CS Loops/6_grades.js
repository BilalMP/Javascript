/*
Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/

const computeGrade = (arr) => {
    if (
        !Array.isArray(arr) ||
        arr.length !== 5 ||
        !arr.every((mark) => Number.isInteger(mark) && mark >= 0 && mark <= 100)
    ) {
        return "Error: Input must be an array of 5 integers between 0 and 100";
    }
    const sum = arr.reduce((acc, mark) => acc + mark, 0);
    const avg = sum / arr.length;
    if (avg < 60) return "F";
    if (avg < 70) return "D";
    if (avg < 80) return "C";
    if (avg < 90) return "B";
    return "A";
};

console.log(computeGrade([80, 77, 88, 95, 68])); // B (avg = 81.6)
console.log(computeGrade([50, 55, 58, 59, 57])); // F (avg = 55.8)
console.log(computeGrade([60, 65, 68, 67, 64])); // D (avg = 64.8)
console.log(computeGrade([70, 75, 78, 77, 74])); // C (avg = 74.8)
console.log(computeGrade([90, 95, 98, 97, 94])); // A (avg = 94.8)
console.log(computeGrade([60, 60, 60, 60, 60])); // D (avg = 60)
console.log(computeGrade([90, 90, 90, 90, 90])); // A (avg = 90)
console.log(computeGrade([100, 100, 100, 100, 100])); // A (avg = 100)
console.log(computeGrade([80, 77, 88])); // Error: Array length
console.log(computeGrade([80, 77, 88, 95, 101])); // Error: Invalid mark
console.log(computeGrade([80, 77, 88, 95, -1])); // Error: Invalid mark
console.log(computeGrade([80, 77, 88, 95, "68"])); // Error: Non-integer
console.log(computeGrade([80, 77, 88, 95, null])); // Error: Non-integer
