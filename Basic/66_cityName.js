/*
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/


function cityName(str) {
    if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
        return str;
    }
    return "";
}

console.log(cityName("Los Angeles"));
console.log(cityName("New York"));
console.log(cityName("San Francisco"));
console.log(cityName("London")); 