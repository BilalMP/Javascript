/*
Write a JavaScript program to calculate the days left before Christmas.

The JavaScript program calculates the number of days left until Christmas by comparing the current date with December 25th of the current year. If today is after December 25th, it calculates the days until next year's Christmas. The difference in days is then logged to the console.
*/

const christmas = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let year = today.getFullYear();
    let christmas = new Date(year, 11, 25);
    christmas.setHours(0, 0, 0, 0);
    if (today > christmas) {
        year += 1;
        christmas = new Date(year, 11, 25);
        christmas.setHours(0, 0, 0, 0);
    }
    const differenceTime = christmas.getTime() - today.getTime();
    const differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));
    return differenceDays;
};

console.log(christmas());
