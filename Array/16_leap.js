/*
Write a JavaScript program to find the leap years in a given range of years.
*/

const leapYear = (start, end) => {
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return ("Start and end year must be positive integers.");
    }
    if (end < start) {
        return ("End year must be greater than start year.");
    }
    const leapYears = [];
    for (let year = start; year <= end; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYears.push(year);
        }
    }
    return leapYears;
};


console.log(leapYear(2000, 2020));