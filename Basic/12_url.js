/*
Write a JavaScript program to get the website URL (loading page).

The JavaScript program utilizes the document.URL property to retrieve the current website's URL. It then displays this URL in an alert dialog box, allowing users to see the URL of the page they are currently viewing. This property provides the URL of the document where the script is running.
*/

function url() {
    return document.url;
}

console.log(url())