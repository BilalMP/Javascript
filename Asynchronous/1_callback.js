/*
Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/

const invokeAfterDelay = (callback) => {
    if (typeof callback === 'function') {
        setTimeout(() => {
            callback();
        },2000)
    } else {
        console.log('Please provide a valid callback function.');
    }
}

invokeAfterDelay(() => {
    console.log('Callback function invoked after 2 seconds.');
});