/**
 * @file day_1_assignment2.js
 * @description Find the maximum among three numbers using nested conditionals.
 * @concepts Constants, logical AND (&&), if-else if-else chain
 */

// Define three numbers to compare
const a = 73;
const b = 68;
const c = 79;

// Check if 'a' is greater than both 'b' and 'c'
if (a > b && a > c)
    console.log(`a is greater ${a} `);
// If 'a' is not the largest, check if 'b' is greater than 'c'
else if (b > c)
    console.log(`b is greater ${b}`);
// If neither 'a' nor 'b' is the largest, 'c' must be
else
    console.log(` c is greater ${c}`);