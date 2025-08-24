/*
Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
*/

const httpGet = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Network response was not ok: ${response.statusText}`
                    );
                }
                return response.json(); // Parse the response as JSON
            })
            .then((data) => {
                resolve(data); // Resolve the promise with the response data
            })
            .catch((error) => {
                reject(`Fetch error: ${error.message}`); // Reject the promise with an error message
            });
    });
};

httpGet("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
        console.log(data); // Handle the resolved data
    })
    .catch((error) => {
        console.error(error); // Handle any errors
    });
