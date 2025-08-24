/*
Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
*/

const downloadContents = async (urls)=> {
    try {
        // Create an array of fetch promises
        const fetchPromises = urls.map((url) =>
            fetch(url).then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch ${url}: ${response.statusText}`
                    );
                }
                return response.text(); // or response.json() if you expect JSON data
            })
        );

        // Wait for all promises to resolve
        const results = await Promise.all(fetchPromises);
        return results; // Return the array of results
    } catch (error) {
        console.error("Error downloading contents:", error);
        throw error; // Rethrow the error for further handling if needed
    }
}

const urlsToFetch = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
];

downloadContents(urlsToFetch)
    .then((contents) => {
        console.log("Downloaded contents:", contents);
    })
    .catch((error) => {
        console.error("Error:", error);
    });