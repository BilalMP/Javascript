/*
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

1. If the year is evenly divisible by four, then go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by a hundred, then go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by four hundred, then go to step 4. Otherwise, you can go to step 5.
4. The year is a leap year (if it has 366 days).
5. The year is not a leap year (if it has 365 days).
*/

const leapyear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

console.log(leapyear(2016)); // Expected output: true
console.log(leapyear(2000)); // Expected output: true
console.log(leapyear(1700)); // Expected output: false
console.log(leapyear(1800)); // Expected output: false
console.log(leapyear(100)); // Expected output: false

console.log("**************************************");

const leapyear2 = (year) => {
    if (!Number.isInteger(year) || year < 0) {
        throw new Error("Year must be a positive integer.");
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(leapyear2(2016)); // Expected output: true
console.log(leapyear2(2000)); // Expected output: true
console.log(leapyear2(1700)); // Expected output: false
console.log(leapyear2(1800)); // Expected output: false
console.log(leapyear2(100)); // Expected output: false
