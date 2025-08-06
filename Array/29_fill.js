/*
Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

Test Data :
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/

const num_string_range = (start, end, step = 1) => {
    // Validate step
    if (typeof step !== "number" || step <= 0 || !Number.isFinite(step)) {
        return "Step must be a positive number";
    }

    const result = [];

    // Handle string inputs
    if (typeof start === "string" && start.length === 1 && typeof end === "string" && end.length === 1) {
        const startCode = start.charCodeAt(0);
        const endCode = end.charCodeAt(0);
        if (startCode > endCode) {
            return "Start character must precede or equal end character";
        }
        for (let i = startCode; i <= endCode; i += step) {
            result.push(String.fromCharCode(i));
        }
    }
    // Handle numeric inputs
    else if (typeof start === "number" && typeof end === "number" && Number.isFinite(start) && Number.isFinite(end)) {
        if (start > end) {
            return "Start number must be less than or equal to end number";
        }
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    // Invalid inputs
    else {
        return "Start and end must be either single characters or finite numbers";
    }

    return result;
};

// Test cases
console.log("Input: 'a', 'z', 2");
console.log("Output:", num_string_range('a', 'z', 2)); // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
console.log("\nInput: 2, 20, 2");
console.log("Output:", num_string_range(2, 20, 2)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("\nInput: 'Z', 'A', 1");
console.log("Output:", num_string_range('Z', 'A', 1)); // "Start character must precede or equal end character"
console.log("\nInput: 5, 1, 1");
console.log("Output:", num_string_range(5, 1, 1)); // "Start number must be less than or equal to end number"
console.log("\nInput: 'a', 'z', 0");
console.log("Output:", num_string_range('a', 'z', 0)); // "Step must be a positive number"
console.log("\nInput: 'ab', 'z', 1");
console.log("Output:", num_string_range('ab', 'z', 1)); // "Start and end must be either single characters or finite numbers"
console.log("\nInput: null, 'z', 1");
console.log("Output:", num_string_range(null, 'z', 1)); // "Start and end must be either single characters or finite numbers"
console.log("\nInput: 'a', 'a', 1");
console.log("Output:", num_string_range('a', 'a', 1)); // ["a"]