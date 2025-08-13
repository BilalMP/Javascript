/*
Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/

const longestCountryName = (arr) => {
    return arr.reduce((a, b) => a.length > b.length ? a : b)
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));