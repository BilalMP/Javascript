/*
Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.
*/

const performAsyncOperationsSequentially = async (operations) => {
    const results = [];

    for (const operation of operations) {
        try {
            const result = await operation(); // Await each operation
            results.push(result); // Store the result
        } catch (error) {
            console.error("Error during operation:", error);
            results.push(null); // Push null or handle error as needed
        }
    }

    return results; // Return all results
};

const asyncOperation1 = () =>
    new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
const asyncOperation2 = () =>
    new Promise((resolve) => setTimeout(() => resolve("Result 2"), 500));
const asyncOperation3 = () =>
    new Promise((resolve) => setTimeout(() => resolve("Result 3"), 2000));

const operations = [asyncOperation1, asyncOperation2, asyncOperation3];

performAsyncOperationsSequentially(operations)
    .then((results) => {
        console.log("All results:", results);
    })
    .catch((error) => {
        console.error("Error in performing operations:", error);
    });
