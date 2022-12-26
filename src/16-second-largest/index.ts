/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to
 * find the second largest number.
 */

function secondLargest(array: number[]) {
    let rankedResults = array.sort((a, b) => b - a);
    return rankedResults[1]
}


export { secondLargest };
