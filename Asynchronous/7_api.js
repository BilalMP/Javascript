/*
Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
*/

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json(); // Parse JSON data
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt < retries) {
                console.log(`Retrying in ${delay} ms...`);
                await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
            } else {
                throw new Error(`All attempts failed: ${error.message}`);
            }
        }
    }
};

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchWithRetry(apiUrl, 5, 2000)
    .then((data) => {
        console.log("Fetched data:", data);
    })
    .catch((error) => {
        console.error("Error in fetching data:", error);
    });