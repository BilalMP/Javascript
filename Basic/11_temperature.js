/**
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

JavaScript: Fahrenheit and Centigrade Temperatures:

Fahrenheit and centigrade are two temperature scales in use today. The Fahrenheit scale was developed by the German physicist Daniel Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32 degrees and boils at 212 degrees.

The centigrade scale, which is also called the Celsius scale, was developed by Swedish astronomer Andres Celsius. In the centigrade scale, water freezes at 0 degrees and boils at 100 degrees. The centigrade to Fahrenheit conversion formula is:

C = (5/9) * (F - 32)
 */

function tempCelcius(celcius) {
    let temp = (celcius * 9 / 5) + 32
    return temp;
}

function tempFahrenheit(fahrenheit) {
    let temp = (fahrenheit - 32) * 5 / 9
    return temp;
}

console.log(tempCelcius(60));
console.log(tempFahrenheit(45));