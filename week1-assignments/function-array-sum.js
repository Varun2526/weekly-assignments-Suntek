/**
 * @file day_1_assignment6.js
 * @description Function that accepts an array and returns the sum of all elements.
 * @concepts Functions, arrays, for loop, accumulator pattern
 */

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr - Array of numbers to sum
 * @returns {number} The total sum of all array elements
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// Test: 10 + 62 + 74 + 72 + 53 = 271
console.log(sumArray([10, 62, 74, 72, 53]));