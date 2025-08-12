/*
Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/

const amountTocoins = (amount, coins) => {
    let result = []
    for (const coin of coins) {
        while (amount >= coin) {
            result.push(coin)
            amount -= coin
        }
    }
    return result
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
console.log(amountTocoins(100, [25, 10, 5, 2, 1]));
console.log(amountTocoins(110, [25, 10, 5, 2, 1]));
console.log(amountTocoins(105, [25, 10, 5, 2, 1]));
console.log(amountTocoins(102, [25, 10, 5, 2, 1]));
console.log(amountTocoins(101, [25, 10, 5, 2, 1]));