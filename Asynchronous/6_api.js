/*
Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
*/

const fetchDataFromAPIs = async (urls) => {
    try {
        // Create an array of fetch promises
        const fetchPromises = urls.map((url) =>
            fetch(url).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse JSON data
            })
        );

        // Wait for all fetch promises to resolve
        const results = await Promise.all(fetchPromises);
        return results; // Return combined results
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
};

// Example usage
const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
];

fetchDataFromAPIs(apiUrls)
    .then((data) => {
        console.log("Fetched data:", data);
    })
    .catch((error) => {
        console.error("Error in fetching data:", error);
    });
