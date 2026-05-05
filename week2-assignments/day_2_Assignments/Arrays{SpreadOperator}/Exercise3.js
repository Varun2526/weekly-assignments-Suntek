/**
 * @file Exercise3.js
 * @description Rest Parameters — create a function that accepts any number
 *              of arguments and returns their sum.
 * @concepts Rest parameters (...args), reduce(), variadic functions
 */

/**
 * Calculates the sum of any number of arguments.
 * The rest parameter (...a) collects all arguments into an array.
 * @param {...number} a - Any number of numeric arguments
 */
function SumOfElements(...a) {
    // reduce() accumulates the sum of all collected arguments
    let sum = a.reduce((acc, ele) => acc + ele, 0);
    console.log("Sum:", sum);
}

// Test: 10 + 20 + 30 + 40 = 100
SumOfElements(10, 20, 30, 40);