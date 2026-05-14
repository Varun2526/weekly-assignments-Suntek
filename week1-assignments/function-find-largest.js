/**
 * @file day_1_assignment5.js
 * @description Function that accepts three numbers and returns the largest.
 * @concepts Function declaration, parameters, return values, >= operator
 */

/**
 * Finds and returns the biggest number among three values.
 * Uses >= to handle cases where two or more values are equal.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 * @returns {number} The largest of the three numbers
 */
function findBiggest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}

// Test: Expected output is 73
console.log(findBiggest(10, 73, 52));