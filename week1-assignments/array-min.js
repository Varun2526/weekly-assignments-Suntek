/**
 * @file day_1_assignment4.js
 * @description Find the minimum (smallest) element in an array.
 * @concepts Arrays, for loop, comparison-based minimum tracking
 */

// Array of numbers to search through
let a = [64, 6483, 75, 32, 93, 20];

// Assume the first element is the smallest initially
let smallest = a[0];

// Compare each subsequent element with current smallest
for (let i = 1; i < a.length; i++) {
    if (a[i] < smallest) {
        smallest = a[i]; // Update smallest if a smaller value is found
    }
}

// Output: 20
console.log(`smallest element in the array is ${smallest}`);