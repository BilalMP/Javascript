/*
Write a JavaScript program that converts a callback-based function to a Promise-based function.
*/

function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        callback(null, data);
    }, 1000);
}

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        fetchData((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

fetchDataPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
