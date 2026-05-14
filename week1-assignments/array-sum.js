/**
 * @file day_1_assignment3.js
 * @description Calculate the sum of all elements in an array using a for loop.
 * @concepts Arrays, for loop, accumulator pattern
 */

// Array of marks to sum
let a = [90, 78, 65, 98];

// Initialize sum accumulator to zero
let sum = 0;

// Iterate through each element and add it to the running total
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
}

// Output: 331
console.log(sum);