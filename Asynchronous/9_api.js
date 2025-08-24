/*
Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
*/

const fetchDataWithTimeout = async (url, timeoutDuration) => {
    // Create an instance of AbortController
    const controller = new AbortController();
    const { signal } = controller;

    // Set a timeout to abort the fetch request
    const timeout = setTimeout(() => {
        controller.abort(); // Abort the request if it takes too long
    }, timeoutDuration);

    try {
        const response = await fetch(url, { signal });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON data
        return data; // Return the fetched data
    } catch (error) {
        if (error.name === "AbortError") {
            console.error("Fetch request timed out and was aborted.");
        } else {
            console.error("Fetch error:", error);
        }
    } finally {
        clearTimeout(timeout); // Clear the timeout
    }
};

// Example usage
const apiUrl = "https://api.example.com/data";
const timeoutDuration = 5000; // 5 seconds

fetchDataWithTimeout(apiUrl, timeoutDuration).then((data) => {
    if (data) {
        console.log("Fetched data:", data);
    }
});
