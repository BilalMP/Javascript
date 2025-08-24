/*
Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
*/

const executeAtInterval=(func, interval) => {
    // Check if the provided func is a function
    if (typeof func !== "function") {
        throw new Error("The first argument must be a function.");
    }

    // Use setInterval to execute the function at the specified interval
    const intervalId = setInterval(() => {
        func(); // Call the provided function
    }, interval);

    // Return a function to stop the interval
    return () => clearInterval(intervalId);
}

// Example usage
const logMessage = () => {
    console.log("This message is logged every 2 seconds.");
};

// Start executing the logMessage function every 2000 milliseconds (2 seconds)
const stopLogging = executeAtInterval(logMessage, 2000);

// Stop logging after 10 seconds
setTimeout(() => {
    stopLogging(); // Stop the interval
    console.log("Stopped logging messages.");
}, 10000);