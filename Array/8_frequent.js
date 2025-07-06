/*
Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

const mostFrequent = (arr) => {
    const frequencyMap = new Map();
    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    console.log(frequencyMap); 
    let maxFrequency = 0;
    let mostFrequentItem = null;
    for (const [item, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentItem = item;
        }
    }
    return `${mostFrequentItem} ( ${maxFrequency} times )`;
};

console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // "a ( 5 times )"