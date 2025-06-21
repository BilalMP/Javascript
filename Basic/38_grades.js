/*
Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
*/

const isAPlusGrade = (totalMarks, isFinal = false) => {
    if (
        typeof totalMarks !== "number" ||
        isNaN(totalMarks) ||
        !Number.isInteger(totalMarks)
    ) {
        return "Error : Total Marks must be integer";
    }
    if (typeof isFinal !== "boolean") {
        return "Error : is Final must be boolean";
    }
    if (totalMarks < 0 || totalMarks > 100) {
        return "Error : Invalid total marks";
    }
    if (isFinal) {
        return totalMarks >= 90 && totalMarks <= 100;
    }
    return totalMarks >= 89 && totalMarks <= 100;
};

console.log(isAPlusGrade(78, false)); // false
console.log(isAPlusGrade(89, true)); // false
console.log(isAPlusGrade(89, false)); // true
console.log(isAPlusGrade(99, true)); // true
console.log(isAPlusGrade(90, true)); // true
console.log(isAPlusGrade("78", " ")); // Error: totalMarks must be an integer
console.log(isAPlusGrade(89, "true")); // Error: isFinal must be a boolean
console.log(isAPlusGrade(-1, false)); // Error: totalMarks must be between 0 and 100
console.log(isAPlusGrade(101, false)); // Error: totalMarks must be between 0 and 100
