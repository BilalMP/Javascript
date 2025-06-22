/*
Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
*/

const signOfProduct = (a, b, c) => {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        return "Error: Inputs must be integers";
    }
    let p = a * b * c;
    if (p === 0) {
        return "The sign is 0";
    }
    return p > 0 ? "The sign is +" : "The sign is -";
};

console.log(signOfProduct(3, -7, 2)); // The sign is -
console.log(signOfProduct(2, 3, 4)); // The sign is +
console.log(signOfProduct(-2, -3, -4)); // The sign is -
console.log(signOfProduct(0, 5, 10)); // The product is zero (no sign)
console.log(signOfProduct(3.5, -7, 2)); // Error: Inputs must be integers
console.log(signOfProduct("3", -7, 2)); // Error: Inputs must be integers
console.log(signOfProduct(null, -7, 2)); // Error: Inputs must be integers
